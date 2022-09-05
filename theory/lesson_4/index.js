/* const x =  ' global'
//debugger

function fu1() {  
   const x = 'fu1'
   //debugger
   {
      const x = 'block'
       try {
         throw new Error()
       } catch (error) {
         const x = 'try catch'
       }
   }
}
fu1() */

/* if(false) {
   var x = 'test'
}  */


//замыкание 
/* function fu1 () {
   const x = 10
   function fu2() {
      console.log(x)
   }
   return fu2();
}

const f = fu1();

function f3(callback) {
   callback;
}

f3(f); */


                                      //контекст (this)
/* var x = 10
function fu1() {
   console.log(this.x)
}



const obj = {
   x: 20,
   objFu: fu1
}

fu1() */

                                     //потеря контекста
/* function fu2(callback) {
callback()
}
fu2(obj.objFu()) */

//насильное присвоение контекста apply, bind, call
/* const obj = {
   x: 20,
}

function fu(a, b, c) {
   console.log(this.x)
} */

//fu.apply(obj, [1, 2 ,3])
//fu.call(obj, 1, 2, 3)
//const fu2  = fu.bind(obj)
//fu2()


//this в конструторе


/* function Fu1() {
   console.log(this)
   debugger
}

const fu1 = new Fu1() */

/* class Fu1 {
    x = 10;
   fu() {
      console.log(this.x)
      debugger
   }
}

const fu1 = new Fu1()
function fu2 (callback) {
   callback()
}
fu2(fu1.fu) */
 

//контекст и стрелочные функции




/* class Fu {
   fu = () => {
      console.log(this)
      debugger
   }
}

const obj = new Fu()


function f2(callback) {
   callback();
}


fu2(obj.fu) */


/* function fu() {
   const fu2 = () => {
      console.log(this)
   }
   fu2()
}

fu.call({
   name: 'Jobn'
})

fu.call({
   name: 'Makar'
}) */

//promise
/* const pormise = new Promise((resolve, reject) => {
   setTimeout(() => {
      const x  = Math.floor(Math.random() * 100 )
      if(x >=50) {
         reject(new Error('вы проиграли, число больше или равна 50'))
      } else {
         resolve(`число равно ${x}`)
      }
   }, 0)
  
})

pormise.then((x) => {
   console.log(`win - ${x}`)
})

pormise.catch((x) => {
console.Error(`lose - ${x}`)
}) */

//fetch
/* fetch('https://run.mocky.io/v3/0644da2e-74fb-49d7-aaa0-f837a7c5540f');
then((res) =>  res.json())
.then((data) => {
   debugger
}) */


//регулярные вырожение это ссылочный тип 

const str = 'hello world!'
const re = new RegExp('world', 'gi')
const re2 = /world/gi
const res = str.match(re)
const res2 = str.replace(re, 'test')
const test = re.test(str)


/* ToDo Promises */

const promiseActionsTemplate_1 = () => {
   const promise = new Promise(() => {
      console.log('hello from promise!')
   })
   debugger
}
//promiseActionsTemplate_1()
const promiseActionsTemplate_2 = () => {
   const promise = new Promise((resolve) => {
      console.log('hello from promise!')
      resolve()
   })
   debugger
   promise.then(() => {
      debugger
   })
}
//promiseActionsTemplate_2()

const promiseActionsTemplate_3 = () => {
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
         const random = Math.floor(Math.random() * 100);
         if (random < 50) {
            resolve(random)
         } else {
            reject(random)
         }
      }, 1000)
   })
   
   
   promise.then((random) => {
      console.log(`Resolve random - ${random}`)
   })
   
   promise.catch((random) => {
      console.log(`Reject random - ${random}`)
   })
   
}
//promiseActionsTemplate_3()

function myFun(){
   const promise = new Promise((resolve, reject) => {
      setInterval(() => {
         const sum = Math.floor(Math.random() * 200)
   
         if(sum >= 100) {
            resolve(sum)
   
         } else {
            reject(new Error('ошибка'))
         }
      }, 1000);
   })

promise.then((random) => {
   console.log(`число ${random}  прошло проверку`)
})
promise.catch((random) => {
   console.log(`число ${random}  не прошло проверку`)
})
}
//myFun()


const promiseActionsTemplate_4 = () => {

}
//promiseActionsTemplate_4();


/* ToDo fetch */
const fetchExample_1 = () => {
   fetch('https://jsonplaceholder.typicode.com/posts/1')
}
//fetchExample_1()

const fetchExample_2 = () => {
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

//fetchExample_2()

/* ToDo this */

const thisExample_1 = () => {
   function fu() {
      console.log(this)
      debugger
   }
   fu()
}
//thisExample_1()

const thisExample_2 = () => {
   'use strict'
   function fu() {
      console.log(this)
   }
   fu()
}
//thisExample_2()

const thisExample_3 = () => {
   function fu() {
      console.log(this)
   }
   
   const obj = {
      fu,
      name: 'John',
      age: 20,
   }
   fu();
   obj.fu()
}
//thisExample_3()

const thisExample_4 = () => {
   function fu() {
      console.log(this);
   }
   
   const obj = {
      name: 'John',
      age: 20,
   };
   
   fu.call(obj);
   const fu2 = fu.bind(obj, 1, 2, 3);
   fu2();
   const fu3 = fu.apply(obj, [1, 2, 3]);
   fu3();
}
// thisExample_4()


const thisExample_5 = () => {
   const obj = {
      name: 'John',
      age: 20,
      sayThis: function () {
         console.log(this);
      }
   };
   
   function fu(callBack) {
      callBack()
   }
   
   obj.sayThis();
   
   fu(obj.sayThis);
}
//thisExample_5();

const thisExample_6 = () => {
   function User() {
      this.name = 'John';
      console.log(this)
   }
}
//thisExample_6();

const thisExample_7 = () => {
   function fu() {
      const arrowFu = () => {
         console.log('arrowFu', this)
      }
      return arrowFu;
      debugger
   }
   
   const bar = fu.call({
      name: 'John'
   })
   debugger
   
   bar();
   
   const obj = {
      name: 'Lu',
      bar
   }
   debugger
   
   obj.bar();
   debugger
}
thisExample_7();

/* ToDo Регулярные выражения */

const regExpExample_1 = () => {
   const re = /test/giu;
   const re2 = new RegExp('test', 'giu');
   
   const matchResult = 'My test'.match(re);
   const replaceResult = 'My test'.replace(re2, '>my-word<');
   console.log('matchResult - ', matchResult);
   console.log('replaceResult - ', replaceResult);
}

// regExpExample_1()


const regExpExample_2 = () => {
   const re = /экранирование символов - \/ \[ \( \. /;
   const re2 = /символьные классы - \d\D \s\S \w\W /;
   const re4 = /любой символ - . /;
   const re5 = /^Начало и конец строки$/;
   const re6 = /Диапозоны [А-яZ-z0-9]/;
}

// regExpExample_2()