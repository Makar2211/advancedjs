const goods = [
  { product_name: 'Shirt', price: 150 },
  { product_name: 'Socks', price: 50 },
  { product_name: 'Jacket', price: 350 },
  { product_name: 'Shoes', price: 250 },
];

const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = `${GET_GOODS_ITEMS}/catalogData.json`;

function service(url , callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url)
 
  
  const loadHandler = () => {
    callback(JSON.parse(xhr.response));
  }
  xhr.onload = loadHandler;
  xhr.send();
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
  fetchGoods(callback) {
    service(GOODS, (data) => {
      this.list = data
      callback()
    });
  }
  getCount() {
    return goods.reduce((total, item ) => total + item.price, 0) 
  }
  render() {
    const goodsList = this.list.map(item => {
      const goodsItem =  new GoodsItem(item);
      return goodsItem.render()
    }).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
  }
}

class BasketGoods {
  list = [];
  fetchGoods() {
  }
}


const goodsList = new GoodsList(goods);
goodsList.fetchGoods(() => {
  goodsList.render();
});


const basketGoods = new BasketGoods()
basketGoods.fetchData()