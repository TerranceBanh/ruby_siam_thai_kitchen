for (let i = 0, itemsLen = items.length; i < itemsLen; i++) {
  const isLunchMenu = window.location.href.includes('lunch.html')
  const isLunchMenuItem = items[i].menus.includes('Lunch')
  const processHTML = () => menu.innerHTML += `
    <div class="container">
      <img class="img" src="../food/${items[i].name.split(' ').join('_').toLowerCase()}.jpg" onerror="this.src = 'https://via.placeholder.com/200'" alt="${items[i].name}">
      <div class="name">
        <span>${items[i].name}</span>
      </div>
      <div class="description">
        <span>${
          items[i].description !== "" ?
          items[i].description :
          typeof items[i].ingredients[0] !== 'string' ?
          items[i].ingredients.slice(1).join(', ') :
          items[i].ingredients.join(', ')
        }</span>
      </div>
      <div class="price">
        <span>${((
          // Variables
          priceIsNumber = typeof items[i].price === 'number',
          priceIsNotNumber = typeof items[i].price !== 'number',
          isDinnerPage = window.location.href.includes('dinner.html'),
          isLunchPage = window.location.href.includes('lunch.html'),
          price = {
            str1: priceIsNotNumber ? `$${items[i].price[0][1]} ${items[i].ingredients[0][0]} / ${items[i].ingredients[0][1]} / ${items[i].ingredients[0][2]}` : undefined,
            str2: priceIsNotNumber ? `$${items[i].price[1][1]} ${items[i].price[1][0]}` : undefined,
            str3: priceIsNotNumber ? `$${items[i].price[0][1] - 2} ${items[i].ingredients[0][0]} / ${items[i].ingredients[0][1]} / ${items[i].ingredients[0][2]}` : undefined
          }
        ) => {
          if (priceIsNumber) return '$' + items[i].price
          else if (isDinnerPage) return `${price.str1}<br>${price.str2}`
          else if (isLunchPage) return price.str3
        })()}</span>
      </div>
    </div>
  `

  if (isLunchMenu) {
    if (isLunchMenuItem) processHTML()
    else continue
  }
  else processHTML()
}

const img = document.getElementsByClassName('img')

for (let i = 0, imgLen = img.length; i < imgLen; i++) {
  img[i].clicked = false
  img[i].onclick = (
    width,
    height
  ) => {
    if (!img[i].clicked) {
      if (window.innerWidth > window.innerHeight) {
        img[i].style.height = '100vh'
        height = window.getComputedStyle(img[i]).height
        img[i].style.width = height
        img[i].style.paddingLeft = (parseInt(window.innerWidth) - parseInt(height) / 2).toString() + 'px'
        img[i].style.paddingRight = (parseInt(window.innerWidth) - parseInt(height) / 2).toString() + 'px'
        img[i].style.top = 0
        img[i].style.left = '50%'
        img[i].style.transform = 'translateX(-50%)'
      }
      else if (window.innerWidth < window.innerHeight) {
        img[i].style.width = '100vw'
        width = window.getComputedStyle(img[i]).width
        img[i].style.height = width
        img[i].style.paddingTop = (parseInt(window.innerHeight) - parseInt(width) / 2).toString() + 'px'
        img[i].style.paddingBottom = (parseInt(window.innerHeight) - parseInt(width) / 2).toString() + 'px'
        img[i].style.top = '50%'
        img[i].style.left = 0
        img[i].style.transform = 'translateY(-50%)'
      }
      img[i].style.zIndex = 1
      img[i].style.position = 'fixed'
      img[i].style.backgroundColor = 'black'
      img[i].clicked = true
    }
    else {
      img[i].style.width = '20rem'
      img[i].style.height = '20rem'
      img[i].style.paddingTop = 0
      img[i].style.paddingBottom = 0
      img[i].style.paddingLeft = 0
      img[i].style.paddingRight = 0
      img[i].style.top = 0
      img[i].style.left = 0
      img[i].style.zIndex = 0
      img[i].style.position = ''
      img[i].style.backgroundColor = ''
      img[i].clicked = false
      if (window.innerWidth > window.innerHeight) img[i].style.transform = 'translateX(0%)'
      else if (window.innerWidth < window.innerHeight) img[i].style.transform = 'translateY(0%)'

    }
  }
}
