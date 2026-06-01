//Hãy thực hiện cho người dùng nhập vào dãy số bất kỳ. 
// Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array. 
// Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng và 
// thực hiện in ra màn hình bằng alert()

let input = prompt("Nhập vào dãy số bất kỳ, cách nhau bằng dấu phẩy:");
let numbers = input.split(",").map(Number);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

alert("Phần tử có giá trị lớn nhất trong mảng là: " + max);