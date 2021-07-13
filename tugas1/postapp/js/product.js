
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
const tampiltotal =()=>{
  document.getElementById("tot").innerHTML =`
  <div class="totalitem">
    <div class="text">
      <div class="text1">
        <h1 class="titletotal">Total:</h1>
        <p class="ppn">*Belum termasuk ppn</p>
      </div>
      <div class="text2">
        <span class="number" id="nm" value="" >total</span>
      </div>
    </div>
    <button  class="check">Checkout</button>
    <button onclick="btndel()" class="cancel">Cancel</button>
  </div>
  `
}
const gambarcadangan = ()=>{
  document.getElementById("cartitem").innerHTML =`
  <div class="empty" id="del">
    <img class="cup" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cupblank.png" alt="" srcset="">
    <h3>Your cart is empty</h3>
    <p>Please add some items from the menu</p>
  </div>
  `
}
const min = (id)=>{
  const i = cart.findIndex((x=> x.id == id))
    if(cart[i].qty<=1){
      cart.splice([min],1)
    }
    else{
      cart[i].qty -= 1
    }
}

const btndel=()=>{
  cart = []
  itemcart()
  totalprice()
  gambarcadangan()
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
  var total = 0
  cart.forEach((e)=>{
    total += e.qty*e.price
  })
  document.getElementById("nm").innerText = `Rp.${total}*`
}
// menambahkan ke array cart
const addcart = (id) => {
    const obj = product.find((e)=>{
        if(e.id === id){
            return e
        }
    })
    
    const check = cartchecker(id)
    if(check === undefined){
      const productqty = {
        id: obj.id,
        picture: obj.picture,
        product_name: obj.product_name,
        price: obj.price,
        qty: 1,
      }
      cart.push(productqty) // mengisi array cart
    }else{
      add(id)
    }
    tampiltotal()
    itemcart() // memanggil fungsi itemcart
    totalprice()
}
let status = true
const side =()=>{
  
  if(status == false){
    document.getElementById("sb").style.left = "-250px";
    document.getElementById("items").style.paddingLeft = "0px";
    status = true;
  }
  else if(status == true){
    document.getElementById("sb").style.left = "0px";
    document.getElementById("items").style.paddingLeft = "75px";
    status = false;
  }
}





