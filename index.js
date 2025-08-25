// function chit (){
//     console.log("hello");
    
// }
// setTimeout(chit,4000)


// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello")
// },4000)
// console.log("three");
// console.log("four")



// function sum (a,b){
//     console.log(a+b);
// }
// function calculator (a,b, sumcallback){
//  sumcallback(a,b)
// }

// calculator (1,2 ,(a,b)=>{
//     console.log(a+b);
// })
// calculator (1,2 ,sum)

// let age =9;
// if (age>=18){
//     if(age>=60){
//         console.log("senir")
//     }else{
//         console.log("middle");
//     }
// }else{
// console.log("child")
// }


const datas=[
    {
        name:"anuj",
        profression:"software developer",
        age:20,

    },
    // {
    //     name:"chitranjan",
    //     profression:"ui desiger",
    //     age:15
    // }

]


datas.forEach(loop);

function loop(value){
document.write(value)
}
