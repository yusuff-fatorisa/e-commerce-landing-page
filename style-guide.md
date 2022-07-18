# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Orange: hsl(26, 100%, 55%)
- Pale orange: hsl(25, 100%, 94%)

### Neutral

- Very vark blue: hsl(220, 13%, 13%)
- Dark grayish blue: hsl(219, 9%, 45%)
- Grayish blue: hsl(220, 14%, 75%)
- Light grayish blue: hsl(223, 64%, 98%)
- White: hsl(0, 0%, 100%)
- Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)

## Typography

### Body Copy

- Font size (paragraph): 16px

### Font

- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700





if (cartValue !== 0) {
			defaultContentDisplay.classList.add("hide-cart-count"); //takes away the initial paragraph content
			let newContentDisplay = document.createElement("div"); //creates a div for the inner display
			let firstImage = document.createElement("img"); // creates the first image of the product
			firstImage.classList.add("show-product-in-cart")//styles the image
			firstImage.src = thumbnailImages[0].getAttribute("src");//gets and sets the image src attribute
			newContentDisplay.appendChild(firstImage);// appends it into the required position
			let bubbleContent = document.createElement("div");// //creates an inner div
			let bubbleContentTitle = document.createElement("h5");// creates a heading element
			bubbleContentTitle.textContent = productTitle;//sets the text content
			const quantityAndPrice = document.createElement("span");
			let priceContent = `${grabPrice} * ${value}   ${grabPrice.slice(1) * value}`;
			quantityAndPrice.textContent = priceContent;
			bubbleContent.appendChild(bubbleContentTitle);//appends the heading element into the inner div
			bubbleContent.appendChild(quantityAndPrice);
			newContentDisplay.appendChild(bubbleContent);//appends the inner div itself
			cartContentDisplay.appendChild(newContentDisplay);
		}
		else {
			defaultContentDisplay.classList.remove("hide-cart-count");
			defaultContentDisplay.classList.add("show-cart-count");
			/*
			take note as one of the statement in the above else block may need to be removed
			*/
		}
