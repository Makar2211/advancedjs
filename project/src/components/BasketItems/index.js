export default Vue.component('basket-item', {
   
    props: [
      'item'
    ],
    template: `
        <div class="basket-item">
          <div class="basket-item_field">
            <span class="basket-item__title">{{ item.product_name }}</span>
            <span class="basket-item__price">( {{ item.price }}uan. )</span>
          </div>
           <div class="basket-item__count">
             <span>{{ item.count }}шт.</span>
             <button @click="$emit('add', item.id)">+</button> 
             <button @click="$emit('remove', item.id)">-</button>
           </div>
           <div class="basket-item__total">Всего: {{ item.total }} uan.</div>
        </div>
      `,
      
  })