const menu = [ 
    
     { id : 1 , name : "Espresso" , image : "imeges/espresso.jpg", prepTime : 2 , sizes : { small : 25 , medium : 30 , large : 35 } } ,
  
  { id : 2 , name : "Latte" , image : "imeges/latte.jpg" , prepTime : 4 , sizes : { small : 35 , medium : 45 , large : 55 } } ,
   
       { id : 3 , name : "Cappuccino" , image : "imeges/Cappuccino .jpg", prepTime: 4 , sizes : { small : 35 , medium : 45 , large : 55 } } ,
  
     { id : 4 , name : "Americano" , image : "imeges/Americano.jpg" , prepTime : 3, sizes : { small : 30 , medium : 38 , large : 45 } },
   
       { id : 5 , name : "Mocha", image : "imeges/Mocha.jpg", prepTime : 5 , sizes : { small : 40 , medium : 50 , large : 60  } },
   
     { id : 6 , name : "Iced Coffee" , image : "imeges/iced coffee.jpg", prepTime : 3 , sizes : { small : 35 , medium : 42 , large : 50  } }
];

    function renderMenu() {
      const menuContainer = document.getElementById("menu-items");
              if (!menuContainer) return;
       menuContainer.innerHTML = "";

     menu.forEach(item => {
        const itemDiv = document.createElement("div");
                  itemDiv.className = "menu-item";

       let sizeButtons = "";
                     for (const size in item.sizes) {
              sizeButtons += `
                    <button class="size-btn" onclick="addToCart(${item.id}, '${size}')">
               ${size} - ${item.sizes[size]} EGP
                  </button>`;
    }

   itemDiv.innerHTML = `
                 <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
                <p>Prep Time: ${item.prepTime} mins</p>
      <div class="size-buttons">${sizeButtons}</div>`;

        menuContainer.appendChild(itemDiv);
  });
}


  renderMenu() ;

let cart = [] ;

   function addToCart(itemId, size) {
        const item = menu.find(m => m.id === itemId);
      const price = item.sizes[size];
             const existing = cart.find(c => c.id === itemId && c.size === size) ;

         if (existing) {
                existing.quantity++;
              } else {
                  cart.push({ id : item.id, name: item.name , size , price , prepTime : item.prepTime, quantity: 1 }) ;
                   }
  renderCart();
}

  function removeFromCart(itemId, size) {
    cart = cart.filter(c => !(c.id === itemId && c.size === size)) ;
     renderCart();
 }

      function changeQuantity(itemId , size , delta ) {
         const cartItem = cart.find(c => c.id === itemId && c.size === size) ;
       if (!cartItem) return;

     cartItem.quantity += delta ;
       if (cartItem.quantity <= 0) {
    removeFromCart(itemId, size);
           return;
              } else {
           renderCart();
  }
}

       function renderCart() {
                       const cartContainer = document.getElementById("cart-items");
                   if (!cartContainer) return;
                         cartContainer.innerHTML = "";
               let total = 0;

            cart.forEach(c => {
                     total += c.price * c.quantity;
              const cartDiv = document.createElement("div");
          cartDiv.className = "cart-item";
                    cartDiv.innerHTML = `
                <span>${c.name} (${c.size}) x${c.quantity}</span>
             <span>${c.price * c.quantity} EGP</span>
      <button onclick="changeQuantity(${c.id}, '${c.size}', -1)">-</button>
              <button onclick="changeQuantity(${c.id}, '${c.size}', 1)">+</button>
      <button onclick="removeFromCart(${c.id}, '${c.size}')">Delete</button>`;
                  cartContainer.appendChild(cartDiv);
        });

          const totalElement = document.getElementById("cart-total");
                if (totalElement) {
            totalElement.textContent = `Total: ${total} EGP`;
     }
}



   document.getElementById("confirm-btn").addEventListener("click", () =>  {
         if (cart.length === 0 ) {
          alert("your cart is empty! Please select a drink first.")  ;
                   return   ;
          }

      const pickupTime = calculatePickupTime()   ;
             const orderStatus = document.getElementById("order-status");
if (orderStatus) {
        orderStatus.innerHTML = `Order Confirmed ✅ <br> Pickup Time: ${pickupTime}`;
                orderStatus.style.display = "block";
}
  cart = [] ;
  renderCart() ;
});

        function calculatePickupTime () {
            
        const maxPrepTime = Math.max(...cart.map(c => c.prepTime)) ;
                           const extraItemsBuffer = (cart.length - 1) * 1  ;
               const totalMinutes = maxPrepTime + extraItemsBuffer ;

           const now = new Date () ;
       now.setMinutes (now.getMinutes() + totalMinutes)  ;
               const hours = now.getHours().toString().padStart( 2 , "0")  ;
          const minutes = now.getMinutes().toString().padStart( 2 , "0") ;



      return `${hours}:${minutes} (In about ${totalMinutes} minutes)` ;
   }

    