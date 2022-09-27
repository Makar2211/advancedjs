import { writeFile, readFile } from 'fs/promises'
import express from 'express';
import cors from 'cors';

const BASKET = './public/basket.json'
const GOODS = './public/goods.json'
function getBasket() {
  return  readFile(BASKET, 'utf-8').then((file) => JSON.parse(file))
}
function getGoods() {
  return readFile(GOODS, 'utf-8').then((file) => JSON.parse(file))
}
function getTeformBasket(){
 return Promise.all([
    getGoods(),
    getBasket()
  ]).then(([basketList, goodsList]) => {
    const result = basketList.map((basketItem) => {
       const goodsItem = goodsList.find(({id: _goodsId}) => {
        return _goodsId === basketItem.id
      });
      return {
        ...basketItem, 
        ...goodsItem
      }
    })
   return result
  })
}
  

const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'))

  app.post('/goods', (res, req) => {
    getBasket().then((basket) => {
      
    const basketItem =  basket.find(({id: _id}) => _id === res.body.id)
    if(!basketItem){
      basket.push({
        id: res.body.id,
        count: 1
      })
    } else {
      basket = basket.map((basketItem) => {
        if(basketItem.id === res.body.id) {
          return {
            ...basketItem,
            count: basketItem.count + 1 
          }
        } else {
          return basketItem
        }
      })
    }
     return writeFile(BASKET, JSON.stringify(basket)).then(() => {
     return getTeformBasket()
     }).then((result) => {
      req.send(result)
     })

    })
    
  })
  app.delete('/goods', (res, req) => {
    getBasket().then((basket) => {
      
      const basketItem =  basket.find(({id: _id}) => _id === res.body.id)
      if(!basketItem){
        basket.push({
          id: res.body.id,
          count: 1
        })
      } else {
        basket = basket.map((basketItem) => {
          if(basketItem.id === res.body.id) {
            return {
              ...basketItem,
              count: basketItem.count - 1
            }
          } else {
            return basketItem
          }
        })
      }
       return writeFile(BASKET, JSON.stringify(basket)).then(() => {
       return getTeformBasket()
       }).then((result) => {
        req.send(result)
       })
  
      })
  })
  
  
  app.get('/basket', (req, res) => {
    getTeformBasket().then((result) => {
      res.send(JSON.stringify(result))
    })
    /* Promise.all([
      getGoods(),
      getBasket()
    ]).then(([basketList, goodsList]) => {
      const result = basketList.map((basketItem) => {
         const goodsItem = goodsList.find(({id: _goodsId}) => {
          return _goodsId === basketItem.id
        });
        return {
          ...basketItem, 
          ...goodsItem
        }
      })
      res.send(JSON.stringify(result))
    }) */
  });

  
  app.listen('8000', () => {
    console.log('server is starting!');
  });