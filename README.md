# assigment2_database
## Cách chạy chương trình
Phải cài đặt trước và kết nối được mysql, nodejs, npm
tạo 1 database trong mysql, bỏ các username, password,.. trong file .env
npm i
## Cấu trúc folder
Tuân theo cấu trúc Config - Models - Routers - Controllers,  


### Routes
Định nghĩa các endpoints cho chương trình và map các endpoints với các controllers.

### Controllers
Xử lý Request được gửi tới, bao gồm nhưng không giới hạn việc validate Request và gọi các service liên quan. Đây là một chương trình monolith nên gọi service nào cũng được.

### Models
Định nghĩa kiểu dữ liệu, và được dùng để tương tác với databases.

### Server.js
Như hàm main
chạy lệnh node server.js or npm start để khởi động server

## Phần API 3.3 (1 điểm) 1 Giao diện minh họa cho ít nhất 1 thủ tục khác trong câu 2.3 hoặc hàm
trong câu 2.4. (có thể dùng chung giao diện phần b nếu cùng bảng dữ liệu)

### Thủ tục liệt kê số sao của cùng 1 loại sản phẩm của các shop khác nhau
* Nhập vào tên sản phẩm 

### API 
> `http://localhost:5001/database/EvaluateProduct?productname ={tên sản phẩm}
`

* para *{tên sản phẩm}*: người dùng truyền vào, nên sử dụng tiếng anh để đặt tên Sản phẩm
### Ví dụ

> ` 
http://localhost:5001/database/EvaluateProduct?productname=Flip%20Flops
`

* Kết quả trả về
> [
  {
    "Mã Shop": 1,
    "Tên của hàng": "Shop A",
    "Mã sản phẩm": 123,
    "Tên sản phẩm": "Flip Flops",
    "Trung bình số sao đánh giá": "4.50",
    "Số lượt đánh giá": 10
  }
]

* Nếu nhập tên mà không có trong Sàn thương mại

> ` 
http://localhost:5001/database/EvaluateProduct?productname=ABC
`

* Kết quả trả về
> `{
  "message": "Không tìm thấy sản phẩm"
}
`
* Nếu nhập tên mà sản phẩm chưa được đánh giá thì hiển thị
> `http://localhost:5001/database/EvaluateProduct?productname=gi%C3%A0y%20th?%20thao`

*Do có dấu nên bị lỗi font*