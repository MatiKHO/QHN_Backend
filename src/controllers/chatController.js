import axios from "axios";

export const generateChat = async (req, res) => {
    try {
        const { prompt } = req.body;

        if(!prompt) {
            return res.status(404).json({ message: "No se encontró ningún mensaje"}); 
        }

        const response = await axios.post("https://fastapi-openai-2.onrender.com/generate", {
            prompt: prompt
        });

        const { response: aiResponse, session_id } = response.data;

        return res.status(200).json({ response: aiResponse, session_id: session_id});

    } catch (error) {
        console.error("Error en la generación del chat:", error.message);
        res.status(500).json({ message: "Error en la generación del chat", error: error.message});
    }
}