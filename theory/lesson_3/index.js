function f1() {
   console.log(1)
}
function f2() {
   console.log(2)
}
function f3() {
   console.log(3)
}


//f1();
//setTimeout(f2, 1000)
//f3();

function service(callback) {
   setTimeout(() => {
      callback({
         name: 'John'
      })
   }, 1000)
}


let d = null;

service((data) => {
   d = data
})





/* ToDo  HTTP */

const httpExample_1 = () => {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
}
//httpExample_1()

const httpExample_2 = () => {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: 'foo',
         body: 'bar',
         userId: 1,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
}
// httpExample_2()

/* ToDo  xmlHttpRequest */
const xmlHttpRequestATemplate_1 = () => {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
  
   
   const loadHandler = () => {
      console.log(JSON.parse(xhr.response));
   }
   xhr.onload = loadHandler;
   xhr.send();
}

// xmlHttpRequestATemplate_1()

/* ToDo вызов асинхронных действий */
const asyncActionsTemplate_1 = () => {
   setTimeout(() => {
      console.log('Hello world! 1')
   }, 1000)
}
asyncActionsTemplate_1()

const asyncActionsTemplate_2 = () => {
   setInterval(() => {
      console.log('Hello world! 2')
   }, 1000)
}
asyncActionsTemplate_2()

const asyncActionsTemplate_3 = () => {
   console.log('Hello world! 3')
}
window.onload = asyncActionsTemplate_3

const asyncActionsTemplate_4 = () => {
   Promise.resolve().then(() => {
      console.log('Hello world! 4')
   })
}


