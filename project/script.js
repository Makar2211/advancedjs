const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

class GoodsItem {
  constructor({title ='', price = 0}){
    this.title = title;
    this.price = price;
  }
  render() {
    return  `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price} грн</p>
      </div>
    `
  }
}

class GoodsList{
  fetchData() {
    this.list = goods
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


const goodsList = new GoodsList(goods);
goodsList.fetchData();
goodsList.render();
goodsList.getCount();


