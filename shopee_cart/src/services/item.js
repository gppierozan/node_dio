//casos de usos dos itens

//criar item com sub total calculado
async function createItem(name,price,quantity) {
    return {
        name,
        price,
        quantity,
        subtotal:  () => price * quantity, //função seta para calcular o valor ( parenteses seta )
    }
}

export default createItem