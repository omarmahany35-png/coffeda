
# Coffeda - Online Coffee Ordering System

A responsive and interactive web application designed for browsing a coffee menu and placing orders online. The system allows users to view available drinks with custom prices based on size, manage a dynamic shopping cart, and calculate an accurate order pickup time upon confirmation.



## Features

* **Interactive Menu:** Displays a selection of coffee drinks with distinct preparation times and dynamic pricing for small, medium, and large sizes.
* **Dynamic Shopping Cart:**
  * Allows users to add items by selecting their preferred size.
  * Supports real-time quantity adjustments (increment/decrement) and item removal.
  * Automatically recalculates the total order price instantly.
* **Smart Pickup Time Calculation:** Upon order confirmation, the system analyzes the cart items to determine the maximum preparation time required. It applies an additional time buffer for subsequent items and updates the user with the precise clock time for order pickup.



## Tech Stack

* **HTML5:** Used to build the structural layout of the web page, menu container, and cart sidebar.
* **CSS3:** Used for styling, layout positioning, and ensuring a clean visual appearance.
* **JavaScript (ES6):** Used for handling the application logic, state management of the shopping cart, DOM manipulation, and mathematical calculations.



## Project Structure

text
 imeges/               # Directory containing the drink product images
 index.html            # Main HTML document structure
 style.css             # Main stylesheet for layout and design
 script.js             # Application logic, cart management, and event handling





## How to Run

1. Download or clone this repository to your local machine.
2. Ensure that all drink images are correctly placed inside the `imeges` folder.
3. Open the `index.html` file directly in any modern web browser (such as Google Chrome or Mozilla Firefox) to run the application.



## Technical Insights

* **Time Calculation Formula:** The pickup time algorithm utilizes `Math.max()` to find the longest baseline preparation time among the selected items, ensuring an efficient and realistic estimation:

$$\text{Total Minutes} = \text{Max Prep Time} + (\text{Cart Length} - 1) \times 1$$


* **Error Handling & Validation:** Safe conditional checks are implemented across the functions to prevent runtime errors. For example, the system validates that the cart is not empty before allowing checkout and ensures the DOM elements exist before updating text content.

