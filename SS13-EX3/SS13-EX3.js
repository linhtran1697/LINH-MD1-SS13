// Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành đảo ngược các phần tử trong mảng

let input = prompt("Nhập vào dãy số bất kỳ, cách nhau bằng dấu phẩy:");
let array = input.split(",").map(Number); // Chuyển đổi chuỗi thành mảng số
let reversedArray = array.reverse(); // Đảo ngược mảng
console.log("Dãy số sau khi đảo ngược:", reversedArray);
