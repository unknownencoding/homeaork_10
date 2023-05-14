// //       13)Знайти індекс останньої ціни, що більше за 1000

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10000))
//    }
// document.write(`${arr}<br>`)

//             // let indexLastPriseMore_1000 = (element) => element > 1000;
//             // document.write(arr.findLastIndex(indexLastPriseMore_1000));

//             //мало б працювати???

//             // let indexLastPriseMore_1000 = arr.indexLastPriseMore_1000((element) => element > 1000);
//             // document.write(indexLastPriseMore_1000) 
//             // так теж не працює


//         let indexLastPriseMore_1000 = -1;

//         for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] > 1000) {
//         indexLastPriseMore_1000 = i;
//         break;
//         }
//         }
//         document.write(indexLastPriseMore_1000)

//         //  працює!!!!
