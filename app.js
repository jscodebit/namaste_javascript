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

function z(){
    let b = 900;
    function x(){
        let a = 7;
        function y(){
            console.log(a);
            console.log(b);
        }
        a = 100;
        y();
    }
    x();
}
z();
