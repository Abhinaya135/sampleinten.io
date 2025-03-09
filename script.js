// Wrap everything inside an IIFE to avoid polluting the global scope
(function (global) {
    var dc = global.$dc || {};

    // Available category short names
    const categoryShortNames = ["L", "D", "S", "V", "SP"]; // Example: Lunch, Dinner, Sushi, Vegetarian, Specials

    // Function to pick a random category
    function getRandomCategory() {
        let randomIndex = Math.floor(Math.random() * categoryShortNames.length);
        return categoryShortNames[randomIndex];
    }

    // Wait until the page loads
    document.addEventListener("DOMContentLoaded", function () {
        const specialsTile = document.querySelector("#specials-tile a");

        if (specialsTile) {
            specialsTile.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default link behavior

                let randomCategory = getRandomCategory();
                console.log("Random category selected:", randomCategory); // Debugging log

                $dc.loadMenuItems(randomCategory);
            });
        }
    });

    global.$dc = dc;
})(window);
