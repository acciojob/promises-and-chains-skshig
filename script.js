//your JS code here. If required.
let myName = document.getElementById('name');
let myAge = document.getElementById('age');

// function welcome (){
    // return new Promise(function(resolve,reject){
    //  setTimeout(()=>{
    //         if(myAge.value >= 18){
    //             resolve("hi");}
    //         // else{
    //         //     reject("Oh sorry" +myName.value + "You aren't old enough");
    //         //     }
    //     })
    // },4000)};
    // welcome.then((response)=>{
    //     document.getElementById('display').innerHTML = "Welcome" +myName.value+"You can vote";
    // }).catch((e)=>{
    //     console.log("Oh sorry" + myName.value + "You aren't old enough")
    // });


// -----------------**-----------------------
// let welcome = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//            if(myAge.value >= 18){
//                resolve("hi");}
//        })
//    },1000).then((response)=>{
//     function fetchData(){
//         console.log( "Welcome" +myName.value+"You can vote");
//         document.getElementById('display').innerHTML =  "Welcome" +myName.value+"You can vote"
//         }
//    }).catch((e)=>{
//     document.getElementById('display').innerHTML = "Oh sorry" + myName.value + "You aren't old enough"
//    });

//    document.getElementById('btn').addEventListener('click',console.log("btn clicked"));
   function btnClicked(){
    console.log("btn is clicked")
     let myPromise = new Promise(function(resolve,reject){
        setTimeout(()=>{
               if(myAge.value >= 18){
                console.log("age over 18")
                   resolve("hi");}
               else{
                   reject("Oh sorry" +myName.value + "You aren't old enough");
                   }
           })
       },4000)
       myPromise.then((response)=>{
        console.log("then part")
           document.getElementById('display').innerHTML = "Welcome" +myName.value+"You can vote";
       })
       myPromise.catch((e)=>{
        document.getElementById('display').innerHTML = "Oh sorry" + myName.value + "You aren't old enough";
       });
    }



