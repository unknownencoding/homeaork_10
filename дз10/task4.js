// // // // // 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

// // //згенерувати історію цін на цінні папери
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10))
//    }
// document.write(`рандомний масив цін ${arr}<br>`)
// // // // //знайти максимальне  
// let max = Math.max(...arr);

// //ціни у відсотках стосовно максимального
// let ineterestFromMax = arr.map(
//     (element) => {return (element/max)*100}
// )
// document.write(`ціни у відсотках стосовно максимального ${ineterestFromMax}`)
// // //працює


