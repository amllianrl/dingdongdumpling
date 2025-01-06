// Slideshow Script
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
document.addEventListener("DOMContentLoaded", () => {
    const menuBoxes = document.querySelectorAll(".menu-box");
    const popup = document.getElementById("popup");
    const popupDescription = document.getElementById("popup-description");
    const closeButton = document.querySelector(".close-button");

    const descriptions = {         
        "Mee Tarik": "<strong>Description:</strong> A traditional hand-pulled noodle dish served with rich, flavorful broth.<br><strong>Ingredients:</strong> Wheat flour, water, salt, broth, spices.<br><strong>Availability:</strong> Dine-in only.<br><strong>Price:</strong> RM 8.",         
        "Vegetable Dumplings": "<strong>Description:</strong> Delicious dumplings filled with a mix of fresh vegetables.<br><strong>Ingredients:</strong> Cabbage, carrots, mushrooms, garlic, soy sauce.<br><strong>Availability:</strong> Delivery and dine-in.<br><strong>Price:</strong> Regular RM 8, Large RM 11.",         
        "Beef Dumplings": "<strong>Description:</strong> Juicy dumplings stuffed with savory beef filling.<br><strong>Ingredients:</strong> Beef, garlic, onion, ginger, spices.<br><strong>Availability:</strong> Delivery and dine-in.<br><strong>Price:</strong> Regular RM 9, Large RM 12.",         
        "Chicken Dumplings": "<strong>Description:</strong> Tasty dumplings packed with flavorful chicken.<br><strong>Ingredients:</strong> Chicken, scallions, soy sauce, ginger.<br><strong>Availability:</strong> Delivery and dine-in.<br><strong>Price:</strong> Regular RM 9, Large RM 12."     
    };
    

    menuBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            const itemName = box.querySelector("h4").textContent.trim();
            popupDescription.innerHTML = `
                <p>${descriptions[itemName] || "No description available."}</p>
                
            `;
            popup.classList.remove("hidden");

            
         
        });
    });

    closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });
});
