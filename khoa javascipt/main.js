// bài 1
// alert('Hi javascipt basic!')// 
// bài 2
// khai bao bien
var fullName = 'Huỳnh Đức Anh và Lương Nam Khánh';
alert(fullName);


// console
/*var fullName='huynh duc anh'
console.log(fullName)
console.warn(fullName)
console.error(fullName)*/

// confirm
// confirm('xac nhan day la web cua ban phai khong')

prompt
prompt('Xac nhan day co phai la web cua ban hay khong')

// settimeout
// setTimeout(function() {
//     alert('Thong bao')
// }, 1000)

//setinterval

// setInterval(function() {
//     console.log('Day la log'+ Math.random())
// }, 1000)

//taon tu chuoi -string operator

// var Name = 'Duc';

// Name += ' Anh';

// console.log(Name);

// toan tu so sanh

// var a='huynh duc anh';
// var b='huynh duc anh';
// if(a>= b) {
//     console.log('dieu kien dung');
// } else {
//     console.log('dieu kien sai');
// }

//boolean
// var a =1;
// var b=2;

// var isSuccess = a>b;

// console.log(isSuccess)


// if else
// var isSuccess = 1<2;
// if(isSuccess) {
//     console.log('DIeu kien dung');
// }else{
//     console.log('Dieu kein sai');
// }

//toan tu logic
var a1 = prompt;
// var b =2;
// var c =3;

if ((a1 == "đúng")){
    console.log("bạn đã mở đúng trình duyệt")
}

// du lieu trong javascript

//Number type
var a = 1;
var b = 2;
var c = 1.5;

// console.log(typeof a)

// String type
var fullName = "Duc Anh";

// Boolean

var isSuccess = true;

// undefined type

var age;
// null
var isNull = null;

//symbol
var id = Symbol('id');
var id2 = Symbol('id');

// function

var myFunction = function() {
    alert('hi chao mn')
}
// myFunction();

//object types

var myObject = {
    name: 'Duc Anh',
    age: 17, 
    adress: 'Da Nang',
    myFunction: function() {
        
    }
};
// console.log('myObject', myObject)

var myArray = [
    'Huynh Duc Anh',
    'Luong Nam Khanh',
    'Nhom 3',
];

console.log(myArray)


