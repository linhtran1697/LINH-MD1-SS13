// Bài toán yêu cầu khai báo mảng số nguyên 10 đến 20 phần tử ngẫu nhiên, thực hiện:
// Tính tổng các số lẻ và hiển thị ra màn hình bằng alert()
// Tính tổng các số chẵn và hiển thị ra màn hình alert()
let arr = [];
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

let sumOdd = 0;
let sumEven = 0;

for (let num of arr) {
    if (num % 2 === 0) {
        sumEven += num; // Cộng số chẵn vào tổng chẵn
    } else {
        sumOdd += num; // Cộng số lẻ vào tổng lẻ
    }
}
alert("Tổng các số lẻ: " + sumOdd);
alert("Tổng các số chẵn: " + sumEven);