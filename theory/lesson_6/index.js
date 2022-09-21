/* function init() {
   const ComponentA = Vue.component('component-a', {
      props: [
         'content'
      ],
      data() {
         return {
            title: 'Component A'
         }
      },
      template: `
         <div>
            <h2 @click="$emit('event-a', $event)">{{ title }}</h2>
            <div>{{ content }}</div>
            <component-b>
               content in component-b
               <template v-slot:common>
                  common slot content
               </template>
            </component-b>
         </div>
      `
   });
   const ComponentB = Vue.component('component-b', {
      template: `
         <div>
            <h2>component B</h2>
            <div>
               <slot name="common"></slot>
            </div>
            <div>
               <slot>default content in component b</slot>
            </div>
         </div>
      `
   });
   
   const app  = new Vue({
      el: '#root',
      methods: {
         fu(e) {
            console.log(e.target)
            alert('in fu')
         }
      }
   })
}

window.onload = init
 */

function init() {
   Vue.component('first-teamplate', {
      props: [
         'text'
      ],
      template: `
      <div @click="$emit('myheart', $event.target)"> {{text}} {{massage}}</div>
     
      `,
      data() {
         return{
           massage: 'hello world!'
         }
      },
   })

   Vue.component('second-comp', {
      data() {
         return {
            isVisible: false,
         }
      },
      teamplate :`
         <div> @click=$emit('myclick' $event.target)
            <div class="modal" v-if="isVisible">
               <h1>htllo</h1>
               <div class="close" @myclick="click">close</div>
            </div>
         </div>
      `
   })

    const app = new Vue({
      el: '#root',
      methods: {
         log(arg) {
            console.log(arg)
         },
         click() {
            this.isVisible = !this.isVisible
         }
      },
    })
}


window.onload = init