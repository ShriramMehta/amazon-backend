import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Shriram Mehta",
    email: "shriram@gmail.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
  {
    name: "Pushkar Jain",
    email: "pushkar@gmail.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
  },
];
