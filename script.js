// ======================
// Global Variables
// ======================

let cartCount = 0;

let selectedColor = "";

let selectedSize = "";

let currentProduct = "";

let currentPrice = "";

// ======================
// Scroll To Products
// ======================

function goToProducts(){

    document
        .getElementById("products")
        .scrollIntoView({
            behavior:"smooth"
        });
}

// ======================
// Open Product Popup
// ======================

function showProduct(
    title,
    price,
    description,
    offer,
    image,
    image1,
    image2,
    image3
){

    // Store Product

    currentProduct = title;

    currentPrice = price;

    // Product Details

    document
        .getElementById("popup-title")
        .innerHTML = title;

    document
        .getElementById("popup-price")
        .innerHTML =
        "Price : " + price;

    document
        .getElementById("popup-offer")
        .innerHTML =
        "Offer : " + offer;

    document
        .getElementById("popup-description")
        .innerHTML =
        description;

    // Main Image

    document
        .getElementById("popup-img")
        .src = image;

    // Multiple Images

    document
        .getElementById("img1")
        .src = image1;

    document
        .getElementById("img2")
        .src = image2;

    document
        .getElementById("img3")
        .src = image3;

    // Reset Selected Values

    selectedColor = "";

    selectedSize = "";

    document
        .getElementById("selected-color")
        .innerHTML =
        "Selected Color : None";

    document
        .getElementById("selected-size")
        .innerHTML =
        "Selected Size : None";

    // Show Popup

    document
        .getElementById("product-popup")
        .style.display = "flex";
}

// ======================
// Change Product Image
// ======================

function changeImage(image){

    document
        .getElementById("popup-img")
        .src = image;
}

// ======================
// Select Color
// ======================

function selectColor(color){

    selectedColor = color;

    document
        .getElementById("selected-color")
        .innerHTML =
        "Selected Color : " + color;
}

// ======================
// Select Size
// ======================

function selectSize(size){

    selectedSize = size;

    document
        .getElementById("selected-size")
        .innerHTML =
        "Selected Size : " + size;
}

// ======================
// Add To Cart
// ======================

function popupAddToCart(){

    // Check Color

    if(selectedColor === ""){

        alert(
            "Please Select Color"
        );

        return;
    }

    // Check Size

    if(selectedSize === ""){

        alert(
            "Please Select Size"
        );

        return;
    }

    // Increase Cart Count

    cartCount++;

    document
        .getElementById("cart-count")
        .innerHTML = cartCount;

    // Cart Section

    const cart =
        document.getElementById("cart-items");

    // Remove Default Text

    if(cart.innerHTML.includes(
        "No products selected"
    )){

        cart.innerHTML = "";
    }

    // Add Product

    cart.innerHTML += `

        <div class="cart-item">

            <h3>
                ${currentProduct}
            </h3>

            <p>
                Price : ${currentPrice}
            </p>

            <p>
                Color : ${selectedColor}
            </p>

            <p>
                Size : ${selectedSize}
            </p>

        </div>

    `;

    // Success Message

    alert(
        "✅ Product Added To Cart"
    );

    // Close Popup

    closePopup();
}

// ======================
// Close Popup
// ======================

function closePopup(){

    document
        .getElementById("product-popup")
        .style.display = "none";
}