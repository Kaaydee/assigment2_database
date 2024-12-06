// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const sql = require("mssql/msnodesqlv8");

// // Cấu hình kết nối SQL Server
// const sqlConfig = {
//   connectionString: "Driver={ODBC Driver 17 for SQL Server};Server=localhost;Database=E9;Trusted_Connection=yes;"
// };

// // Hàm kết nối đến cơ sở dữ liệu
// const connectDB = async () => {
//   try {
//     return await sql.connect(sqlConfig);  // Kết nối đến SQL Server
//   } catch (err) {
//     console.error("Database connection error:", err);
//     throw err;  // Nếu có lỗi, log và ném ra lỗi
//   }
// };

// // Hàm lấy dữ liệu sản phẩm từ cơ sở dữ liệu
// const getProduct = async () => {
//   const pool = await connectDB(); // Kết nối cơ sở dữ liệu
//   const result = await pool.request().query(`
//     SELECT *
//     FROM San_Pham
//   `);
//   return result.recordset;  // Trả về dữ liệu từ bảng San_Pham
// };

// // Khởi tạo ứng dụng Express
// const app = express();
// const port = process.env.PORT || 5001;

// // Cấu hình middlewares
// app.use(bodyParser.json());
// app.use(cors());

// // Định nghĩa route API GET /product để lấy danh sách sản phẩm
// app.get("/product", async (req, res) => {
//   try {
//     const products = await getProduct();  // Lấy dữ liệu sản phẩm từ cơ sở dữ liệu
//     res.json(products);  // Trả về kết quả dưới dạng JSON
//   } catch (error) {
//     console.error("Error fetching products:", error); 
//     res.status(500).json({ message: "Internal Server Error" });  // Trả lỗi nếu có
//   }
// });

// // Khởi động server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRouter = require("./routes/productRouter");
const danhgiasaoRouter = require("./routes/danhgiasaoRouter")
// Khởi tạo ứng dụng Express
const app = express();
const port = process.env.PORT || 5001;

// Cấu hình middlewares
app.use(bodyParser.json());
app.use(cors());

// Sử dụng các router
app.use("/database", productRouter);
app.use("/database",danhgiasaoRouter );
// Khởi động server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
