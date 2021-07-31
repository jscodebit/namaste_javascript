// // Undefine, Scope Chain
// var x = 1;
// a();
// b();

// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

// //Lexical Scope
// function a(){
//     var b = 10;
//     c();
//     function c(){

//     }
// }

// a();
// console.log(b);


// // Let, const in JavaScript Temporal dead zone
// let a;

// a = 10;

// const b = 100;
// console.log(a);

// //Block, Scope and Shadowing
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//Another scenario
const c = 100;
function x(){
    const c = 20;

    console.log(window.c);
    window.c = 30;
    console.log(c);
}

x();
console.log(c);
