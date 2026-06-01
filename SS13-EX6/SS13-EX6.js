// Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử, 
// thực hiện nhập vào một số nguyên để kiểm tra (k), thực hiện đếm số lần xuất hiện của k trong mảng. 
// Hiển thị ra màn hình

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let k = parseInt(prompt("Nhập vào một số nguyên để kiểm tra:"));
let count = 0;

for (let num of arr) {
    if (num === k) {
        count++;
    }
}
alert("Số lần xuất hiện của " + k + " trong mảng là: " + count);S