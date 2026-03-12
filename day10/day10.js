// 이항 산술 연산자
// let sum = 10 + 20;
// console.log(sum);   // 30
// let sub = 20 - 10;
// console.log(sub)    // 10
// let multi = 10 * 20;
// console.log(multi)  // 200
// let remain = 10 % 3;
// console.log(remain) // 1
// let expon = 2 ** 3; 
// console.log(expon)  // 8

// 단항산술연산자
let increment = 10;
increment++;
console.log(increment);
let decrement = 10;
decrement--;
console.log(decrement);

// let inc = 10++;      // 값 자체에 단항산술연산은 불가
// console.log(inc)     // let inc = 10 + 1;

// 단항산술연산자 : 전치연산 / 후치연산
var num = 10;
let subNum = ++num;     // 앞에 사용했으므로 전치 연산 방식
console.log(subNum);    // 11

var num = 10;
let subNum2 = num++;    // 뒤에 사용했으므로 후치 연산 방식
console.log(subNum2);   // 10

// 단항 부정 연산자
var num = -10;
num = -num;
console.log(num)        // -10

// 연산자 우선순위
var i = 3 + 4 * 5;      // +,-보다 *,/가 먼저
console.log(i)          // 3 + 20

var i = (3 + 4) * 5     // 괄호 먼저
console.log(i)          // 7 * 5

let pencilCount = 3;
let penCount = 4 * 5;   // 4개들이 5박스
let resultI = num1 + num2;

