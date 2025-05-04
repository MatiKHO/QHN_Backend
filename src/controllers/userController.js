import prisma from '../prisma/index.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      age,
      childrenAges,
      genderChildren,
      location,
      numberChildren,
    } = req.body;

    // Validación mínima obligatoria
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "Nombre, email y contraseña son obligatorios." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Construcción dinámica del objeto data
    const data = {
      fullName,
      email,
      password: hashedPassword,
    };

    // Solo añadir si existe y es válido
    if (!isNaN(parseInt(age))) data.age = parseInt(age);
    if (childrenAges) data.childrenAges = childrenAges;
    if (genderChildren) data.genderChildren = genderChildren;
    if (location) data.location = location;
    if (!isNaN(parseInt(numberChildren))) data.numberChildren = parseInt(numberChildren);

    const newUser = await prisma.user.create({ data });

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
