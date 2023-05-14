// // // При розв’язанні задач намагайтесь використовувати відповідні методи (map, filter, reduce,…) всюди, де це можливо
// // // Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// // //  1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

// //згенерувати історію цін на цінні папери
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
//                 // prevList.push(index) //задача 2 індекси тільки тих, що більші за 1000 грн.
//                 prevList.push(el) 
//             return prevList
//         },
// []
// )
// document.write(`${newArr}`)


// //працює

// // // =======



// // //приклад=>
// // // Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
// //     // let ar=[12,3544,12,6565,23,5656,1,23,2343434]
// //     // // let resIndexList= arr.reduce(
// //     // //     (prevList, el,index) => {
// //     // //         if (el>1000)
// //     // //             prevList.push(index)
// //     // //         retun prevList
// //     // //     },
// //     // //     []
// //     // // )
// //     // let resIndexList =[]
// //     // for (let index = 0; index < arr.length; index++) {
// //     //     if(arr[index]>1000) resIndexList.push(index)
// //     // }
