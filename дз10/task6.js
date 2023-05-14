// //       6)Визначити, чи є ціна, що менше 1000

//  function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10000))
//    }
// document.write(`${arr}<br>`)


// let quantityIndex =arr.reduce(
// (prevQuantityIndex,element) => 
// element < 1000 ? prevQuantityIndex + 1 : prevQuantityIndex,0
// )
// document.write(`кількість цін, що менше за 1000 = ${quantityIndex}`)


// // ПРАЦЮЄ!!!