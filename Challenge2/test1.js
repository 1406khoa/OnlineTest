
const ProductList = [
    {
        name: "Laptop",
        price: 999.99,
        quantity: 5
    },

    {
        name: "Smartphone",
        price: 499.99,
        quantity: 10
    },

    {
        name: "Tablet",
        price: 299.99,
        quantity: 0
    },

    {
        name: "Smartwatch",
        price: 199.99,
        quantity: 3
    }
]


// Question 1
function calculateTotalPrice(ProductList) {
    let total = 0;
    for (let i = 0; i < ProductList.length; i++) {
        total += ProductList[i].price * ProductList[i].quantity;
    }
    return total;
}

//Question 2
function MostExpensiveProduct(ProductList) {
    return ProductList.reduce((prev, current) => (prev.price > current.price) ? prev : current);
}

//Question 3
function isExist(ProductList, productName) {
    
    for (let i = 0; i < ProductList.length; i++) {
        if (ProductList[i].name === productName) {
            return true;
        }
    }
    return false;
}

// Question 4

function sortProducts(ProductList, sortBy, order = "asc") {
    return ProductList.sort((a, b) => {
        const comparison = a[sortBy] - b[sortBy];
        return order === "asc" ? comparison : -comparison;
    });
}




console.log("Total price of all products: " + calculateTotalPrice(ProductList));
console.log("Most expensive product: " + MostExpensiveProduct(ProductList).name);
console.log("Is Headphone exist in the product list? - Answer: " + isExist(ProductList, "Headphone"));

console.log("Sort by price descending:");
console.table(sortProducts(ProductList, "price", "desc"));

console.log("Sort by price ascending:");
console.table(sortProducts(ProductList, "price", "asc"));

console.log("Sort by quantity descending:");
console.table(sortProducts(ProductList, "quantity", "desc"));

console.log("Sort by quantity ascending:");
console.table(sortProducts(ProductList, "quantity", "asc"));
