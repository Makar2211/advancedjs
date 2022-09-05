const goods = [
  { product_name: 'Shirt', price: 150 },
  { product_name: 'Socks', price: 50 },
  { product_name: 'Jacket', price: 350 },
  { product_name: 'Shoes', price: 250 },
];

const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = `${GET_GOODS_ITEMS}/catalogData.json`;
const GET_BASKET_GOODS_ITEM = `${GET_GOODS_ITEMS}/getBasket.json`

const servise = (url) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET' , url);
    xhr.send()
    xhr.onload = () =>{
      if(xhr.readyState === 4) {
        resolve(JSON.parse(xhr.response))
      }
    }
  })
}


class GoodsItem {
  constructor({product_name ='', price = 0}){
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return  `
      <div class="goods-item">
        <h3>${this.product_name}</h3>
        <p>${this.price} грн</p>
      </div>
    `
  }
}

class GoodsList{
  list = [];
  filteredItems = []
  fetchGoods() {
    return servise(GOODS).then((data) => {
      this.list = data;
      this.filteredItems = data;
      return data;
    })
  }
  filter(str) {
    this.filteredItems = this.list.filter(({product_name}) => {
      return (new RegExp(str, 'i')).test(product_name)
    })
  }
  getCount() {
    return goods.reduce((total, item ) => total + item.price, 0) 
  }
  render() {
    const goodsList = this.filteredItems.map(item => {
      const goodsItem =  new GoodsItem(item);
      return goodsItem.render()
    }).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
  }
}

class BasketGoods {
  list = [];
  fetchGoods(callback = () => {}) {
    servise(GET_BASKET_GOODS_ITEM, (data) => {
      this.list = data
      callback()
    });
  }
}

const goodsList = new GoodsList(goods);
goodsList.fetchGoods().then(() => {
  goodsList.render()
});

const basketGoods = new BasketGoods()
basketGoods.fetchGoods()

document.getElementsByClassName('search-button')[0].addEventListener('click', () => {
  debugger
  const input = document.getElementsByClassName('goods-search')[0].value;
  goodsList.filter(input);
  goodsList.render();
});
