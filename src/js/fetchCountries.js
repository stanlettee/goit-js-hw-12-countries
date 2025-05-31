import debounce from 'lodash.debounce';
const input = document.querySelector('#input')
const div = document.querySelector('#div')

input.addEventListener('input', debounce(inputFunc, 500))



// input.addEventListener('debounce', (e) => {
//     return new Promise((res,rej) => {
//         if (typeof e.target.value === 'string'){
//             fetch()
//             res().then()
//         } else {
//             rej()
//         }
//     })

// })

fetch("https://restcountries.com/#endpoints-name")