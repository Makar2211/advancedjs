import {service, serviceWithBody, serviceDelete} from '../../servises';
import { GET_BASKET_GOODS_ITEMS, GOODS } from "../../constants";
Vue.component('goods-item', {
    props: [
       'item'
    ],
    template: `
      <div class="goods-item">
         <h3>{{ item.product_name }}</h3>
         <p>{{ item.price }}</p>
         <div> 
          <custom-button @click="addGoods">добавить</custom-button>
         </div>
      </div>
    `,
    methods: {
      addGoods() {
        serviceWithBody(GOODS, {
          id: this.item.id
        })
        
      }
    }
  })

export default Vue.component('basket-goods', {
    data() {
      return {
        basketGoodsItems: []
      }
    },
    
    template: `
        <div class="fixed-area">
           <div class="basket-card">
              <div class="basket-card__header">
                 <h1 class="basket-card__header__title">basket card</h1>
                 <div class="basket-card__header__delete-icon"
                    v-on:click="$emit('closeclick')"
                 ></div>
              </div>
              <div class="basket-card__content">
                 <basket-item 
                 @add="addGoods"
                 @remove="removeGoods"
                
                 v-for="item in basketGoodsItems" 
                 :item="item"></basket-item>
              </div>
           </div>
        </div>
      `,
    mounted() {
      service(GET_BASKET_GOODS_ITEMS).then((basketGoods) => {
        this.basketGoodsItems = basketGoods
      })
    },
    methods: {
      addGoods(id) {
        serviceWithBody(GOODS, {
          id
        }).then((data) => {
          this.basketGoodsItems = data;
        })
        
      },
      removeGoods(id) {
        serviceDelete(GOODS, {
          id
        }).then((data) => {
          this.basketGoodsItems = data;
        })
        
      }
    }
  })