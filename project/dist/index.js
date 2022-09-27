/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const BASE_URL = 'http://localhost:8000/';\r\nconst GOODS =  `${BASE_URL}goods`;\r\nconst GET_GOODS_ITEMS = `${BASE_URL}goods.json`\r\nconst GET_BASKET_GOODS_ITEMS = `${BASE_URL}basket`\r\n\r\nfunction service(url) {\r\n  return fetch(url)\r\n  .then((res) => res.json())\r\n}\r\nfunction serviceWithBody(url, body) {\r\n  return fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      \"Content-type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(body)\r\n  }).then((res) => res.json())\r\n}\r\n\r\n\r\nfunction init() {\r\n\r\n  Vue.component('custom-search', {\r\n    template: `\r\n    <input placeholder=\"поиск\" type=\"text\" class=\"goods-search\" @input=\"$emit('input', $event.target.value)\"/>\r\n    `\r\n  })\r\n\r\n\r\n  const CustomButton = Vue.component('custom-button', {\r\n    template: `\r\n      <button class=\"search-button\" type=\"button\" v-on:click=\"$emit('click')\">\r\n         <slot></slot>\r\n      </button>\r\n    `\r\n  })\r\n   const BasketItem = Vue.component('basket-item', {\r\n   \r\n    props: [\r\n      'item'\r\n    ],\r\n    template: `\r\n        <div class=\"basket-item\">\r\n          <div class=\"basket-item_field\">\r\n            <span class=\"basket-item__title\">{{ item.product_name }}</span>\r\n            <span class=\"basket-item__price\">( {{ item.price }}uan. )</span>\r\n          </div>\r\n           <div class=\"basket-item__count\">\r\n             <span>{{ item.count }}шт.</span>\r\n             <button @click=\"$emit('add', item.id)\">+</button> \r\n             <button>-</button>\r\n           </div>\r\n           <div class=\"basket-item__total\">Всего: {{ item.total }} uan.</div>\r\n        </div>\r\n      `,\r\n      \r\n  })\r\n  const basketGoods = Vue.component('basket-goods', {\r\n    data() {\r\n      return {\r\n        basketGoodsItems: []\r\n      }\r\n    },\r\n    \r\n    template: `\r\n        <div class=\"fixed-area\">\r\n           <div class=\"basket-card\">\r\n              <div class=\"basket-card__header\">\r\n                 <h1 class=\"basket-card__header__title\">basket card</h1>\r\n                 <div class=\"basket-card__header__delete-icon\"\r\n                    v-on:click=\"$emit('closeclick')\"\r\n                 ></div>\r\n              </div>\r\n              <div class=\"basket-card__content\">\r\n                 <basket-item \r\n                 @add=\"addGoods\"\r\n                 v-for=\"item in basketGoodsItems\" \r\n                 :item=\"item\"></basket-item>\r\n              </div>\r\n           </div>\r\n        </div>\r\n      `,\r\n    mounted() {\r\n      service(GET_BASKET_GOODS_ITEMS).then((basketGoods) => {\r\n        this.basketGoodsItems = basketGoods\r\n      })\r\n    },\r\n    methods: {\r\n      addGoods(id) {\r\n        serviceWithBody(GOODS, {\r\n          id\r\n        }).then((data) => {\r\n          this.basketGoodsItems = data;\r\n        })\r\n        \r\n      }\r\n    }\r\n  })\r\n  \r\n  const goodsItem = Vue.component('goods-item', {\r\n    props: [\r\n       'item'\r\n    ],\r\n    template: `\r\n      <div class=\"goods-item\">\r\n         <h3>{{ item.product_name }}</h3>\r\n         <p>{{ item.price }}</p>\r\n         <div> \r\n          <custom-button @click=\"addGoods\">добавить</custom-button>\r\n         </div>\r\n      </div>\r\n    `,\r\n    methods: {\r\n      addGoods() {\r\n        serviceWithBody(GOODS, {\r\n          id: this.item.id\r\n        })\r\n        \r\n      }\r\n    }\r\n  })\r\n  \r\n  const app = new Vue({\r\n    el: '#root',\r\n    data: {\r\n      items: [],\r\n      search: '',\r\n      cardIsVision: false\r\n    },\r\n    methods: {\r\n      setVisionCard() {\r\n        this.cardIsVision = !this.cardIsVision\r\n      },\r\n      fetchGoods() {\r\n        service(GET_GOODS_ITEMS).then((data) => {\r\n          this.items = data;\r\n          this.filteredItems = data;\r\n        });\r\n      },\r\n      \r\n    },\r\n    computed: {\r\n      calculatePrice() {\r\n        return this.filteredItems.reduce((prev, { price }) => {\r\n          return prev + price;\r\n        }, 0)\r\n      },\r\n      filteredItems() {\r\n        return this.items.filter(({ product_name }) => {\r\n          return product_name.match(new RegExp(this.search, 'gui'))\r\n        })\r\n      }\r\n    },\r\n    mounted() {\r\n      this.fetchGoods();\r\n    }\r\n  })\r\n}\r\nwindow.onload = init\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;