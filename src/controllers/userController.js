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
        age: age ? parseInt(age) : 0,
        childrenAges: childrenAges || "",
        genderChildren: genderChildren || "",
        location: location || "",
        numberChildren: numberChildren ? parseInt(numberChildren) : 0,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

