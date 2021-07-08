const product =[
    {
        id: 1,
        product_name: "sandisk 1",
        price: 1000,
        picture: "https://shop.westerndigital.com/content/dam/store/en-us/assets/products/memory-cards/extreme-uhs-i-microsd/extreme-uhs-i-microsd-32gb.png",
        is_ready: true,
        description: "sdcard sandisk 32gb"
    },
    {
        id: 2,
        product_name: "sandisk 2",
        price: 1000,
        picture: "https://shop.westerndigital.com/content/dam/store/en-us/assets/products/memory-cards/extreme-uhs-i-microsd/extreme-uhs-i-microsd-32gb.png",
        is_ready: true,
        description: "sdcard sandisk 32gb"
    },
    {
        id: 3,
        product_name: "sandisk 3",
        price: 1000,
        picture: "https://shop.westerndigital.com/content/dam/store/en-us/assets/products/memory-cards/extreme-uhs-i-microsd/extreme-uhs-i-microsd-32gb.png",
        is_ready: true,
        description: "sdcard sandisk 32gb"
    },
    {
        id: 4,
        product_name: "sandisk 4",
        price: 1000,
        picture: "https://shop.westerndigital.com/content/dam/store/en-us/assets/products/memory-cards/extreme-uhs-i-microsd/extreme-uhs-i-microsd-32gb.png",
        is_ready: true,
        description: "sdcard sandisk 32gb"
    },
    {
        id: 5,
        product_name: "sandisk 5",
        price: 1000,
        picture: "https://shop.westerndigital.com/content/dam/store/en-us/assets/products/memory-cards/extreme-uhs-i-microsd/extreme-uhs-i-microsd-32gb.png",
        is_ready: true,
        description: "sdcard sandisk 32gb"
    }
]
let cart = []

const tampil =(data)=>{
    data.forEach((e, i)=>{
    document.getElementById("container").innerHTML += `
    <div class="div" id="${e.id}">
    <div class="div">${e.product_name}</div>
    <div class="div">${e.price} </div>
    <img src="${e.picture}">
    <div class="div">${e.description}</div>
    <button onclick ="deleted(${e.id})">deleted</button>
    <button onclick ="tampung(${e.id})">tampung</button>
    </div>
    `
    })
}
tampil(product)

// cart.forEach((e)=>{
//     document.getElementById("container").innerHTML += ${e}
// })


const tampung =(add)=>{
    cart.push(document.getElementById(add[0]))
    console.log(cart)
}

const deleted =(e)=>{
    document.getElementById(e).remove()
}

