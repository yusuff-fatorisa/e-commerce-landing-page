const toggler = document.querySelector(".hamburger");
const theNav = document.querySelector(".logo-nav nav");
const theClose = document.querySelector(".close-menu");
// console.log(theClose);


const decrementer = document.querySelector("[data-decrement]");
const incrementer = document.querySelector("[data-increment]");
const count = document.querySelector("[data-show-count]");
let value = Number(count.innerText);


const thumbnailImages = document.querySelectorAll(".thumbnails > img");
const bigDisplay = document.querySelectorAll(".full-display > img");




// Mobile menu toggle functionalities
toggler.addEventListener("click", () => {
	theNav.classList.add("open");
})

theClose.addEventListener("click", () => {
	theNav.classList.remove("open");
})


// Shopping Item Counts Functionalities
decrementer.addEventListener("click", () => {
	if (value > 0) {
		value--;
		count.textContent = value;
	}
})

incrementer.addEventListener("click", () => {
	if (value >= 0) {
		value++;
		count.textContent = value;
	}
})

// display images functionalities

thumbnailImages.forEach(thumbnail => {
	thumbnail.addEventListener("click", () => {
		const thumbnailID = thumbnail.getAttribute("id");
		for (let smallImage of thumbnailImages) {
			if (smallImage.getAttribute("id") !== thumbnailID) {
				smallImage.classList.remove("active-thumbnail");
			}
			else {
				smallImage.classList.add("active-thumbnail");
			}
		}
		for (let bigImage of bigDisplay) {
			if (bigImage.classList.contains(thumbnailID)) {
				bigImage.classList.add("show");
				bigImage.classList.remove("hide");
			}
			else {
				bigImage.classList.remove("show");
				bigImage.classList.add("hide");
			}
		}
	})
})


const addToCart = document.querySelector("[data-add-to-cart]");
const cartCount = document.querySelector("[data-cart-count]");
let cartValue = Number(cartCount.innerText);
const myCartDisplay = document.querySelector("[data-bubble-display-container]");
const defaultCartDisplay = document.querySelector("[data-bubble-display]");
const checkout = document.querySelector("[data-checkout]");
const cartSummaryPrice = document.querySelector("[data-summary-price-holder]");

//Add-To-Cart Functionalities

addToCart.addEventListener("click", () => {
	/*The below code displays the value on the cart*/

	if (value > 0) {
		if (cartValue === 0) {
			cartCount.classList.remove("hide-cart-count");
			cartCount.classList.add("show-cart-count");
			cartValue++;
			cartCount.textContent = cartValue;
		}
		else {
			cartValue++;
			cartCount.textContent = cartValue;
		}

		const numberOfQuantity = value;
		value = 0;
		count.textContent = value;

		/*The below code displays the products, quantities and prices of items already 
		in the cart when the cart is hovered on*/

		if (cartValue > 0) {
			defaultCartDisplay.classList.add("hide-default-cart-display");

			let template = document.querySelector("template");
			let templateContent = template.content.cloneNode(true);
			let templateCopy = templateContent.querySelector(".testout");

			let templateImage = templateCopy.querySelector("img:nth-of-type(1)");
			templateImage.src = thumbnailImages[0].getAttribute("src");


			let templateText = templateCopy.querySelector(".details");
			let templateTextHeading = templateText.querySelector("h5");
			templateTextHeading.textContent = document.querySelector(".product-description h1").innerText;

			let textPrice = templateText.querySelector("p");
			textPrice.classList.add("text-price");

			let totalPrice = textPrice.querySelector("span");
			totalPrice.classList.add("output-price");
			let listedPrice = document.querySelector(".discounted-price span:first-child").innerText;
			let listedPriceValue = listedPrice.slice(1);
			let formattedPrice = Number(listedPriceValue);
			calculatedPrice = `${numberOfQuantity * formattedPrice}`;
			if ((calculatedPrice - Math.floor(calculatedPrice)) !== 0) {
				totalPrice.textContent = `$${calculatedPrice}`;
			}
			else {
				totalPrice.textContent = `$${calculatedPrice}.00`;
			}

			textPrice.textContent = `${document.querySelector(".discounted-price span:first-child").innerText} * ${numberOfQuantity} `;
			textPrice.appendChild(totalPrice);

			currentTotal = +cartSummaryPrice.innerText;
			currentTotal += +calculatedPrice;
			cartSummaryPrice.textContent = currentTotal.toFixed(2);

			let templateDel = templateCopy.querySelector("img:nth-of-type(2)");
			const delSRC = "./images/icon-delete.svg";
			templateDel.src = delSRC;
			templateDel.style.cursor = "pointer";
			templateDel.onclick = () => {
				myCartDisplay.removeChild(templateDel.parentElement);
				cartValue--;
				cartCount.textContent = cartValue

				const deductedValue = templateDel.parentElement.querySelector(".output-price").innerText.slice(1);
				currentTotal -= +deductedValue;
				cartSummaryPrice.textContent = currentTotal.toFixed(2);

				if (cartValue === 0) {
					checkout.classList.remove("show-flex");
					defaultCartDisplay.classList.remove("hide-default-cart-display");
					cartCount.classList.add("hide-cart-count");
					cartCount.classList.remove("show-cart-count");
				}
				else if (cartValue > 0) {
					defaultCartDisplay.classList.add("hide-default-cart-display");
					defaultCartDisplay.classList.remove("show-default-cart-display");
				}
			}

			myCartDisplay.appendChild(templateCopy);

		}
		 else {
		 	defaultCartDisplay.classList.remove("hide-default-cart-display");
		 	defaultCartDisplay.classList.add("show-default-cart-display")
		 }
	}

	/*The code below adds or removes the checkout button when necessary*/

    if (cartValue === 1) {
    	checkout.classList.add("show-flex")
	}

})


