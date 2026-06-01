// Thực hiện tạo mảng và 
// sử dụng các phương thức thêm phần tử vào mảng các phần tử ngẫu nhiên 
// làm sao cho mảng đủ 10 phần tử, sau đó hiển thị mảng ra màn hình.
let arr = [];
while (arr.length < 10) {
    let randomNum = Math.floor(Math.random() * 100); // Tạo số ngẫu nhiên từ 0 đến 99
    arr.push(randomNum); // Thêm số ngẫu nhiên vào mảng
}
console.log(arr); // Hiển thị mảng ra