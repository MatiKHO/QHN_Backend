import axios from "axios";
import prisma from "../prisma/index.js";

// Función para extraer edad y ciudad
function extractContext(prompt) {
  const edadMatch = prompt.match(/(\d{1,2})\s*(años|año)/i);
  const cityMatch = prompt.match(/\b(madrid|barcelona)\b/i);

  const childAge = edadMatch ? parseInt(edadMatch[1]) : null;
  const city = cityMatch ? cityMatch[1].toLowerCase() : null;

  return { childAge, city };
}

exports.generateChat = async (req, res) => {
  const { prompt } = req.body;
  const userId = req.user.id; // Asegúrate de tener autenticación

  const { childAge, city } = extractContext(prompt);

  if (!childAge || !city) {
    return res.status(400).json({
      error: "Debes indicar la edad del niño y la ciudad (Madrid o Barcelona)."
    });
  }

  try {
    // Crear sesión
    const session = await prisma.chatSession.create({
      data: {
        userId,
        city,
        childAge
      }
    });

    // Guardar mensaje del usuario
    await prisma.chatMessage.create({
      data: {
        sessionId: session.id,
        sender: "user",
        content: prompt
      }
    });

    // Enviar al endpoint FastAPI
    const aiResponse = await axios.post("https://fastapi-openai-2.onrender.com/generate", {
      prompt,
      session_id: session.id
    });

    const aiText = aiResponse.data.response;

    // Guardar respuesta del modelo
    await prisma.chatMessage.create({
      data: {
        sessionId: session.id,
        sender: "openai",
        content: aiText
      }
    });

    res.status(200).json({ response: aiText, sessionId: session.id });
  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({ error: "Error al procesar el mensaje" });
  }
};
