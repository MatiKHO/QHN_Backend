import prisma from '../prisma/index.js';

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

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password,
        age: parseInt(age),
        childrenAges,
        genderChildren,
        location,
        numberChildren: parseInt(numberChildren),
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
