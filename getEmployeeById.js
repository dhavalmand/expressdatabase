const { QueryTypes } = require("sequelize");
const sequelize = require("../utils/Database");

const getEmployeeById = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await sequelize.query(
      `SELECT * FROM employees WHERE id = ${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json({
      message: "User fetched successfully",
      data: result,
    });
  } catch (error) {
    console.log("Error Detected", error);
  }
};

module.exports = getEmployeeById;
