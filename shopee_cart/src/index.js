import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishlist = []

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

//adicionando no carrinho ou wishlist
await cartService.addItem(myCart,item1)
await cartService.addItem(myCart,item2)

//mostra os itens
await cartService.displayCart(myCart)

//calcula o total
await cartService.calculateTotal(myCart)
//console.log(item2.subtotal()); //testar subtotal

//remove todas as unidades do item
/* await cartService.deleteItem(myCart,item1.name)
await cartService.deleteItem(myCart,item2.name) */

//remove pelo index
//await cartService.removeItem(myCart,1)

//remove enviando o item
await cartService.removeItem(myCart,item2)
await cartService.removeItem(myCart,item2)
//await cartService.removeItem(myCart,item2)

//calcula o total
await cartService.calculateTotal(myCart)

await cartService.displayCart(myCart)

//remove pelo index
//await cartService.removeItem(myCart,1)

//calcula o total
await cartService.calculateTotal(myCart)

await cartService.displayCart(myCart)