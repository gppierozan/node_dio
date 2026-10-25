//quais ações meu carrinho pode fazer

//casos de uso
//adicionar item
async function addItem(userCart,item) {
    userCart.push(item)
}

//deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name) //findIndex acha o item.name exatamente igual ao name recebido, dentro do array
    if (index !== -1){
        userCart.splice(index,1)
    }
}

//remover um item usando index
/* async function removeItem(userCart,index) {
    const deleteIndex = index - 1

    if (index >= 0 && index <= userCart.length){
        userCart.splice(deleteIndex,1)
    }
} */

async function removeItem(userCart,item) {
    //acha o item no array
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //se não achar
    if (indexFound == -1){
        console.log("Item não encontrado.")
        return        
    }

    //item > 1 = subtrair um item, item = 1 deletar o item
    if (userCart[indexFound].quantity>1){
        userCart[indexFound].quantity -=1
        return
    }

    if (userCart[indexFound].quantity==1){
        userCart.splice(indexFound,1)
        return
    }

}

//calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal() , 0) //reduce é como se fosse um for
    console.log(`🛒 Total: ${result}`)
}

async function displayCart(userCart) {
    if (userCart.length < 1) {
        console.log("Cart is empty.");
    } else {
        console.log("Shopee cart list: ")
        userCart.forEach((item,index) => {
            console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()} `);
        })        
    }
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}