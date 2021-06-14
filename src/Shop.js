
export default class Store {
    constructor() {
        this._types = [
            {id: 1, name: 'OUTWEAR'},
            {id: 2, name: 'SWEATSHIRT'}
        ]

        this._items = [
            {id: 1, name: 'Куртка', img: 'https://cdn.shopify.com/s/files/1/1621/9773/products/bomber_3.0_11_86f6ad8f-ecbc-45d9-a196-721d5bc4307a_1024x1024.jpg?v=1612708544', price: '45$'},
            {id: 2, name: 'Плащ', img: 'https://cdn.shopify.com/s/files/1/1621/9773/products/poncho_white_4_1024x1024.jpg?v=1621360887', price: '25$'},
            {id: 3, name: 'Кофта', img: 'https://cdn.shopify.com/s/files/1/1621/9773/products/tec_9_hoodie_7_1024x1024.jpg?v=1618851666', price: '175$'},
            {id: 4, name: 'Кофточка', img: 'https://cdn.shopify.com/s/files/1/1621/9773/products/DSC_0427_1024x1024.jpg?v=1615303888', price: '145$'},
            
            
        ]
        this._selectedItems = {}
    }


    setTypes(types) {
        this._types = types
    }

    setItems(items) {
        this._items = items
    }

    setSelectedType(items) {
        this._selectedItems = items
    }


    get types() {
        return this._types
    }

    get items() {
        return this._items
    }

    get selectedItems() {
        return this._selectedItems
    }
}