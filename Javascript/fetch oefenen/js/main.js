console.log("Bram")

const shop_url = "https://dummyjson.com/products?limit=4"
fetch(shop_url)
.then((response) => response.json())
.then((data) => {
    console.log("Ontvangen data: ", data);
});
