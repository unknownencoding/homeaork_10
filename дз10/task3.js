// // 3)Сформувати список з тих цін, які більші за попереднє значення

// // //згенерувати історію цін на цінні папери
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10000))
//    }
// document.write(`рандомний масив цін${arr}<br>`) 

// let sortedPriceList = arr.filter((element, index)=>{
// if (index===0){
//     return false;
// }
// return element > arr[index-1];
// });

// document.write(`Елементи більші за попереднє значення${sortedPriceList}`);

// //працює