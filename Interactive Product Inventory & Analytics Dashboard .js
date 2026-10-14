
console.log("--- Initializing Inventory System ---");

// 1. Data initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// 2. User input
let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

// Validate input
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details.");
} else {
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );
}

// 3. Function to assign product category
function getCategory(price) {
    let category;

    if (price < 100) {
        category = "Budget";
    } else if (price < 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

// 4. Process inventory using forEach
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(product => {
    console.log(`* Item: ${product.name} ($${product.price}) -> Category: ${getCategory(product.price)}`);
});

// 5. Calculate total inventory value
const calculateTotal = items => {
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    return total;
};

// 6. Financial analytics
const totalValue = calculateTotal(inventory);

const affordableItems = inventory.filter(
    product => product.price < 200
);

const report = inventory.map(
    product => `${product.name.toUpperCase()}: $${product.price}`
);

console.log("\n--- Financial Analytics ---");

console.log("Total Inventory Value: $" + totalValue);

console.log("Filtered Affordable Items (Under $200):",JSON.stringify(affordableItems.map(item => item.name)));

console.log("Formatted Report List:",JSON.stringify(report));
