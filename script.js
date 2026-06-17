const menu =  [ 


  { id : 1 , name : "Espresso" , image : "imeges\espresso.jpg", prepTime : 2 ,
    sizes : { small : 25 , medium : 30 , large : 35 } } ,
  { id : 2 , name : "Latte" , image : "imeges\latte.jpg" , prepTime : 4 ,
    sizes : { small : 35 , medium : 45 , large : 55 } } ,
  { id : 3, name : "Cappucceno" , image : "imeges\Cappuccino .jpg", prepTime: 4 ,
    sizes : { small : 35 , medium : 45 , large : 55 } } ,
  { id : 4 , name : "Americano" , image : "imeges\Americano.jpg" , prepTime : 3,
    sizes : { small : 30 , medium : 38 , large : 45 } },
  { id : 5 , name : "Mocha", image : "imeges\Mocha.jpg", prepTime : 5 ,
    sizes : { small : 40 , medium : 50 , large : 60  } },
  { id : 6 , name : "Iced Coffee " , image : "imeges\iced coffee.jpg", prepTime : 3 ,
    sizes : { small : 35 , medium : 42 , large : 50  } }

];

function renderMenu() {
  const menuContainer = document.getElementById("menu-items");
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

renderMenu();