//Tạo mảng có sẵn với các phần tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẵn thì alert(“Chúc bạn may mắn lần sau”)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = parseInt(prompt("Nhập vào một số bất kỳ bạn thích:"));
if (arr.includes(num)) {
    alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau");
}