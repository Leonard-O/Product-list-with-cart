document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.cart');
    const cartHeader = document.createElement('div');

    cartHeader.className = 'cart-header';
    const cartH2 = document.createElement('h2');
    cartH2.className = 'cart-h2';
    cartH2.textContent = 'Your Cart';
    cartHeader.appendChild(cartH2);

    const cartCounter = document.createElement('p');
    cartCounter.className = 'cart-counter';
    cartCounter.textContent = '0'; //Json data Here
    cartHeader.appendChild(cartCounter);
    cart.appendChild(cartHeader);

    fetch('data.json')
        .then((response) => response.json())
        .then((desserts) => {
            const gridContainer = document.querySelector('.grid-container');
            desserts.forEach((dessertFood) => {
                const dessert = document.createElement('div');
                dessert.classList.add('dessert');

                const dessertImage = document.createElement('img');
                dessertImage.src = dessertFood.image.desktop;
                dessertImage.alt = dessertFood.name;
                dessert.appendChild(dessertImage);

                const description = document.createElement('div');
                description.classList.add('description');
                dessert.appendChild(description);

                const h3 = document.createElement('h3');
                h3.classList.add('dessert-title');
                h3.textContent = dessertFood.name;

                const h2 = document.createElement('h2');
                h2.classList.add('dessert-sub-title');
                h2.textContent = dessertFood.category;

                const priceParagraph = document.createElement('p');
                priceParagraph.classList.add('dessert-price');
                priceParagraph.textContent = `$${dessertFood.price}`;

                description.appendChild(h3);
                description.appendChild(h2);
                description.appendChild(priceParagraph);

                const addToCartBtn = document.createElement('add-to-cart-btn');
                addToCartBtn.classList.add('add-to-cart-btn');
                const img = document.createElement('img');
                img.classList.add('cart-icon');
                img.src = './assets/images/icon-add-to-cart.svg';

                const addToCartParagraph = document.createElement('p');
                addToCartParagraph.classList.add('add-to-cart');
                addToCartParagraph.textContent = 'Add to Cart';

                const addMinusContainer = document.createElement('div');
                addMinusContainer.classList.add('add-minus-container');
                const iconDecrementQuantity = document.createElement('img');
                iconDecrementQuantity.classList.add('add-minus');
                iconDecrementQuantity.src =
                    './assets/images/icon-decrement-quantity.svg';
                const iconIncrementQuantity = document.createElement('img');
                iconIncrementQuantity.classList.add('add-minus');
                iconIncrementQuantity.src =
                    './assets/images/icon-increment-quantity.svg';
                const itemCounter = document.createElement('p');
                itemCounter.classList.add('item-counter');
                itemCounter.textContent = '0';

                addMinusContainer.appendChild(iconDecrementQuantity);
                addMinusContainer.appendChild(itemCounter);
                addMinusContainer.appendChild(iconIncrementQuantity);
                dessert.appendChild(addMinusContainer);

                addToCartBtn.appendChild(img);
                addToCartBtn.appendChild(addToCartParagraph);

                let thePlusCounter;

                addToCartBtn.addEventListener('click', (e) => {
                    addToCartBtn.style.display = 'none';
                    itemCounter.textContent++;
                    addMinusContainer.style.display = 'flex';

                    //**************************************** Cart Logic ****************************************

                    const cartContent = document.createElement('div');
                    cartContent.className = 'cart-content';

                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartContent.appendChild(cartItem);

                    const cartLeft = document.createElement('div');
                    cartLeft.className = 'cart-left';
                    cartItem.appendChild(cartLeft);

                    const cartItemTitle = document.createElement('h3');
                    cartItemTitle.className = 'cart-item-title';
                    cartItemTitle.textContent = dessertFood.name; // Dynamic data Here
                    cartLeft.appendChild(cartItemTitle);

                    const bottom = document.createElement('div');
                    bottom.className = 'bottom';
                    cartLeft.appendChild(bottom);

                    let cartItemNumber = document.createElement('p');
                    cartItemNumber.className = 'cart-item-number';
                    cartItemNumber.textContent = 1; //Dynamic data Here
                    // parseInt((cartItemNumber.textContent += thePlusCounter));

                    bottom.appendChild(cartItemNumber);

                    const cartPrices = document.createElement('div');
                    cartPrices.className = 'cart-prices';
                    bottom.appendChild(cartPrices);

                    const cartItemPrice = document.createElement('p');
                    cartItemPrice.className = 'cart-item-price';
                    cartItemPrice.textContent = `$${dessertFood.price}`; //Dynamic data Here
                    cartPrices.appendChild(cartItemPrice);

                    const totalItemsPrice = document.createElement('p');
                    totalItemsPrice.className = 'total-items-price';
                    totalItemsPrice.textContent = `$${
						dessertFood.price * cartItemNumber.textContent
					}`; //Total of cart item price multiplied by cartItemNumber
                    cartPrices.appendChild(totalItemsPrice);

                    const cartRight = document.createElement('div');
                    cartRight.className = 'cart-right';
                    cartItem.appendChild(cartRight);

                    const removeItem = document.createElement('img');
                    removeItem.className = 'remove-cart-item';
                    removeItem.src = './assets/images/icon-remove-item.svg';
                    cartRight.appendChild(removeItem);

                    cart.appendChild(cartContent);
                });

                // ******************************** End of the Cart logic *************************************

                iconIncrementQuantity.addEventListener('click', () => {
                    thePlusCounter = itemCounter.textContent++;
                    console.log(thePlusCounter);
                });

                iconDecrementQuantity.addEventListener('click', () => {
                    itemCounter.textContent--;
                    if (itemCounter.textContent === '0') {
                        addToCartBtn.style.display = 'flex';
                        addMinusContainer.style.display = 'none';
                    }
                });

                dessert.appendChild(description);
                dessert.appendChild(addToCartBtn);
                gridContainer.appendChild(dessert);
            });
        });

    // .catch((error) => {
    //     console.error('Error fetching data:', error);
    // });
});

// Cart Logic

// const cartHeader = document.createElement('div');

// cartHeader.className = 'cart-header';
// const cartH2 = document.createElement('h2');
// cartH2.className = 'cart-h2';
// cartH2.textContent = 'Your Cart';
// cartHeader.appendChild(cartH2);

// const cartCounter = document.createElement('p');
// cartCounter.className = 'cart-counter';
// cartCounter.textContent = '0'; //Json data Here
// cartHeader.appendChild(cartCounter);
// cart.appendChild(cartHeader);

// const cartContent = document.createElement('div');
// cartContent.className = 'cart-content';

// const cartItem = document.createElement('div');
// cartItem.className = 'cart-item';
// cartContent.appendChild(cartItem);

// const cartLeft = document.createElement('div');
// cartLeft.className = 'cart-left';
// cartItem.appendChild(cartLeft);

// const cartItemTitle = document.createElement('h3');
// cartItemTitle.className = 'cart-item-title';
// cartItemTitle.textContent = 'Classic Tiramisu'; // Dynamic data Here
// cartLeft.appendChild(cartItemTitle);

// const bottom = document.createElement('div');
// bottom.className = 'bottom';
// cartLeft.appendChild(bottom);

// const cartItemNumber = document.createElement('p');
// cartItemNumber.className = 'cart-item-number';
// cartItemNumber.textContent = '1x'; //Dynamic data Here
// bottom.appendChild(cartItemNumber);

// const cartPrices = document.createElement('div');
// cartPrices.className = 'cart-prices';
// bottom.appendChild(cartPrices);

// const cartItemPrice = document.createElement('p');
// cartItemPrice.className = 'cart-item-price';
// cartItemPrice.textContent = '$12.99'; //Dynamic data Here
// cartPrices.appendChild(cartItemPrice);

// const totalItemsPrice = document.createElement('p');
// totalItemsPrice.className = 'total-items-price';
// totalItemsPrice.textContent = '$12.99'; //Total of cart item price multiplied by cartItemNumber
// cartPrices.appendChild(totalItemsPrice);

// const cartRight = document.createElement('div');
// cartRight.className = 'cart-right';
// cartItem.appendChild(cartRight);

// const removeItem = document.createElement('img');
// removeItem.className = 'remove-cart-item';
// removeItem.src = './assets/images/icon-remove-item.svg';
// cartRight.appendChild(removeItem);

// cart.appendChild(cartContent);