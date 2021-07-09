const data = product

data.forEach((e)=>{
    document.getElementById("items").innerHTML +=
    `<div class="prd">
    <img src="${e.picture}">
    <div class="itemname">${e.product_name}</div>
    <div class="itemprice">${e.price}</div>
    </div>
    `
})
const cart
