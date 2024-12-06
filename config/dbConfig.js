const sql = require("mssql/msnodesqlv8");

const sqlConfig = {
  connectionString: "Driver={ODBC Driver 17 for SQL Server};Server=localhost;Database=DTB1;Trusted_Connection=yes;"
};

const connectDB = async () => {
  try {
    return await sql.connect(sqlConfig);  
  } catch (err) {
    console.error("Database connection error:", err);
    throw err;  
  }
};

module.exports = connectDB;
