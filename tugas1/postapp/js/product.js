
var cart = []
// menampilkan produk
product.forEach((e)=>{
    document.getElementById("items").innerHTML +=
    `<div class="prd" id="${e.id}">
    <img src="${e.picture}" onclick="addcart(${e.id})">
    <div class="itemname" >${e.product_name}</div>
    <div class="itemprice">${e.price}</div>
    </div>
    `
})
// menampilkan cart
const itemcart = ()=>{
    document.getElementById("cartitem").innerHTML =""
    cart.forEach((e)=>{
      document.getElementById("cartitem").innerHTML +=
      `<div class="cartprd" id="cartitem">
        <img src="${e.picture}">
        <div class="row">
          <div class="cartname" id="nme">${e.product_name}</div>
            <div class="btn">
              <button onclick="btnadd(${e.id})" class="max">+</button>
              <input class="qty" id="vl" type="number" value="${e.qty}">
              <button onclick="btnmin(${e.id})" class="min">-</button>
            </div>
        </div>
        <div class="row2">
          <div class="cartprice">Rp.${e.price}</div>
        </div>
      </div>
      `
      
    })
    
}

const btnadd=(id)=>{
  add(id)
  // untuk update tampilan ke fungsi itemcard sehingga bisa ditampilkan
  totalprice()
  itemcart()
  
}
// menambah data qty jika ditemukan data ganda
const add = (id)=>{
  const cartupdate = cart.map((e)=>{
    if(e.id===id){
      // update data di cart dengan menimpanya dengan data baru dari
      // cartupdate dan qtynya ditambah satu
      return{
        id: e.id,
        picture: e.picture,
        product_name: e.product_name,
        price: e.price,
        qty: e.qty+1,
      }
    }
    else{
      return e
    }
  })
  // masukin data dari var cartupdate kedalam cart
  cart = cartupdate
  
}
const btnmin=(id)=>{
  min(id)
  // untuk update tampilan ke fungsi itemcard sehingga bisa ditampilkan
  totalprice()
  itemcart()
  
}
const min = (id)=>{
  const cartupdate = cart.map((e)=>{
    if(e.id===id && e.qty>0){
      return{
        id: e.id,
        picture: e.picture,
        product_name: e.product_name,
        price: e.price,
        qty: e.qty-1,
      }
    }
    else if(e.id===id && e.qty <=0){
      e.splice(1)
    }
    else{
      return e
    }
    
  })
  cart = cartupdate
  
}

const btndel=()=>{
  cart.map((e)=>{
    del(e.id)
  })
  document.getElementById("cartitem").innerHTML =`
  <div class="empty" id="del">
    <img class="cup" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cupblank.png" alt="" srcset="">
    <h3>Your cart is empty</h3>
    <p>Please add some items from the menu</p>
  </div>
  `
  
  // itemcart()
  // totalprice()
  
}

const del =(id)=>{
  const cartupdate = cart.filter((e)=>{
    if(e.id !== id){
      return e
    }
  })
  cart = cartupdate
  itemcart()
  totalprice()
}
// mencari data ganda dengan fungsi cartchecker
const cartchecker = (id)=>{
  const findid = cart.find((item)=>{
    if(item.id === id){
      return item
    }
  })
  return findid
}
// total
const totalprice =()=>{
  var ttl = 0

  cart.map((e)=>{
    total = ttl + e.qty*e.price

    document.getElementById("nm").innerText = `Rp.${total}*`
  })
  // console.log(update)
}
// menambahkan ke array cart
const addcart = (id) => {
    const obj = product.find((e)=>{
        if(e.id === id){
            return e
        }
    })
    const productqty = {
      id: obj.id,
      picture: obj.picture,
      product_name: obj.product_name,
      price: obj.price,
      qty: 1,
    }
    
    const check = cartchecker(id)
    if(check === undefined){
      cart.push(productqty) // mengisi array cart
    }else{
      add(id)
    }
    
    itemcart() // memanggil fungsi itemcart
    totalprice()
    
    
    
    
}





