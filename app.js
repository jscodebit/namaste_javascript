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

// //Another scenario
// const c = 100;
// function x(){
//     const c = 20;

//     console.log(window.c);
//     window.c = 30;
//     console.log(c);
// }

// x();
// console.log(c);

// //Illegal shadowing
// let a = 100;
// {
//     var a = 30; //You cannot do this shadowing
//     console.log(a);
// }
// console.log(a);

// // Right way of doing this
// let a = 100;
// {
//     let a = 30; //You cannot do this shadowing
//     console.log(a);
// }
// console.log(a);

// var a = 100;
// {
//     let a = 30; //You cannot do this shadowing
//     console.log(a);
// }
// console.log(a);

// //Another legal shadowing
// let a = 30;
// function x(){
//     var a = 100;
// }

// Classic Closure Example
// function z(){
//     let b = 900;
//     function x(){
//         let a = 7;
//         function y(){
//             console.log(a);
//             console.log(b);
//         }
//         a = 100;
//         y();
//     }
//     x();
// }
// z();

// // Simple setTimeout example
// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
// x();

// //Print 1, 2 ,3 4, 5 with a minute gap
// function x(){
//     for(let i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste Javascript");
// }
// x();

// //Closure Interview Examples
// function anotherOuter(){
//     var anotherVar = 100;
//     function outer(b){
//         function inner(){
//             console.log(a, b, anotherVar);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;


// var result = anotherOuter()("Hello World");
// result();

// Closure Interview questions
// Increment Function
function Counter(){
    var count = 0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}

var counter1 = Counter();
counter1();counter1();counter1();