// // // 9)Підрахувати суму цін, що більше за 1000



// // //згенерувати історію цін на цінні папери
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10000))
//    }
// document.write(`${arr}<br>`)

// const bigSum = arr.reduce(
//         (prevSum, element)=>element>1000 ? prevSum+element : prevSum,
//         0
//       )
// document.write(`${bigSum}<br>`)

// // //все працює!!!!