// VIEW CART BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cartButton");
    let inCart = false; 

    cartButton.addEventListener("click", () => {
        if (inCart) {
            cartButton.textContent = "Add to Cart";
            cartButton.classList.remove("cart-active");
            cartButton.style.pointerEvents = "auto"; 
        } else {
            cartButton.textContent = "View Cart • 1";
            cartButton.classList.add("cart-active");
            cartButton.style.pointerEvents = "auto"; 
        }
        inCart = !inCart;
    });
});

// ASAP BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const asapButton = document.getElementById("asapButton");

    asapButton.addEventListener("click", () => {
        asapButton.classList.toggle("asap-active");
    });
});

// RED & GREEN BUTTONS
document.addEventListener("DOMContentLoaded", () => {
    const circleButton = document.getElementById("circleButton");

    circleButton.addEventListener("click", () => {
        circleButton.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const circleButton2 = document.getElementById("circleButton2");

    circleButton2.addEventListener("click", () => {
        circleButton2.classList.toggle("active");
    });
});

// ITEM COUNT BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const decreaseBtn = document.getElementById("decreaseBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const counterValue = document.getElementById("counterValue");

    let count = 0; 

    increaseBtn.addEventListener("click", () => {
        count++;
        counterValue.textContent = count;
    });

    decreaseBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            counterValue.textContent = count;
        }
    });
});

// HEART BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const heartButton = document.getElementById("heartButton");
    const heartIcon = document.getElementById("heartIcon");

    let isLiked = false;

    heartButton.addEventListener("click", () => {
        isLiked = !isLiked;

        if (isLiked) {
            heartIcon.src = "icons/heart-colored-icon.png"; 
            heartButton.classList.add("heart-active");
        } else {
            heartIcon.src = "icons/heart-coloredfilled-icon.png"; 
            heartButton.classList.remove("heart-active");
        }
    });
});

// DROPDOWN BUTTON
document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
        dropdownButton.classList.toggle("active");
    });

    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            dropdownButton.innerHTML = `${item.textContent} <span class="arrow">&#9662;</span>`;
            dropdownMenu.classList.remove("show");
            dropdownButton.classList.remove("active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
            dropdownButton.classList.remove("active");
        }
    });
});
