const { QueryTypes } = require("sequelize");
const sequelize = require("../utils/Database");

const bcrypt = require("bcrypt");

const registerEmployee = async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    email,
    password,
    gender,
    hobbies,
    department_id,
  } = req.body;

  // Check if all required fields are present
  if (!id || !firstName || !lastName || !email || !password || !department_id) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Check if email is already registered
  const existingEmployee = await sequelize.query(
    `SELECT email FROM employees WHERE email = '${email}'`,
    { type: QueryTypes.SELECT }
  );

  if (existingEmployee.length > 0) {
    return res.status(400).json({ error: "Email already exists" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sequelize.query(
      `INSERT INTO employees (
        id,
        firstName,
        lastName,
        email,
        password,
        gender,
        hobbies,
        department_id
      ) VALUES (
        ${id}, 
        '${firstName}',
        '${lastName}',
        '${email}',
        '${hashedPassword}',
        '${gender}',
        '${hobbies}',
        ${department_id}
      )`,
      {
        type: QueryTypes.INSERT,
      }
    );

    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registerEmployee;
