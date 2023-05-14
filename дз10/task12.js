// // //  12)Знайти останню ціну, що більше за 1000


// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;}

//   let arr=[]
//    for (let i = 0; i < 10; i++) {
//         arr.push(getRandomIntInclusive(1, 10000))
//    }
// document.write(`${arr}<br>`)

//        // рішення 1
//                 // let resArray = arr.filter(el=>el>1000)//масив з більше за 1000

//                 //    document.write(resArray.slice(-1)) // останный з масиву більше за 1000


//                 //  // //все працює!!!!


    // // //або
    // // рішення 2

            // let lastElement; 
            // for (let i = arr.length-1; i >= 0; i--) { // перебір циклу з кінця від останнього елемента до 0го
            //    if(arr[i]>1000){     // якщо знаходимо елемент більший за 1000             
            //     lastElement = arr[i]; // то присвоюємо його значення змінній
            //     break;// і зупиняємо цикл
            //    }
            // }
            // document.write(lastElement)

    // //все працює!!!!
