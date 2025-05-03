import prisma from '../prisma/index.js';
import bcrypt from 'bcryptjs';

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        age: age ? parseInt(age) : null,
        childrenAges: childrenAges || "",
        genderChildren: genderChildren || "",
        location: location || "",
        numberChildren: numberChildren ? parseInt(numberChildren) : null,
      },
    });


    res.status(201).json({ message: "Usuario registrado correctamente", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
