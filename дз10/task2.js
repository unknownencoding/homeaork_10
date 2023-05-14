// //  2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
      
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10000))
//    }
// document.write(`${arr}<br>`)

//                 // let newArr = arr.filter(price => price[element]>1000)
//                 // let newArr = arr.map(price => price[element]>1000)
// let newArr = arr.reduce((prevList, el,index) => {
//             if (el>1000)
//                 prevList.push(index)
//                 // prevList.push(el) //задача 1 ті, що більші за 1000 грн.

//             return prevList
//         },
// []
// )
// document.write(`${newArr}`)

// //працює