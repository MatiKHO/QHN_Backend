import prisma from "../prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, age, childrenAges, numberChildren, genderChildren, location } = req.body;
    const numericAge = parseInt(age, 10);

    if (!numericAge || isNaN(numericAge) || numericAge <= 0) {
      return res.status(400).json({ message: "Edad inválida" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: "CUSTOMER",
        age: numericAge,
        childrenAges: childrenAges ?? null,
        numberChildren: numberChildren ?? null,
        genderChildren: genderChildren ?? null,
        isAdmin: false,
        isDisabled: false,
        location: location ?? null,
      },
    });

    res
      .status(201)
      .json({ message: "Usuario registrado exitosamente", user: newUser });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ message: "Error en el registro del usuario" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error en el inicio de sesión" });
  }
};

export const userProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, fullName: true, email: true },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Perfil del usuario encontrado", user });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el perfil del usuario" });
  }
};
