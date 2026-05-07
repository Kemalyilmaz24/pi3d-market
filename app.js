const products = [
    { 
        name: "Modern Vazo Modeli", 
        price: 15, 
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        name: "Ergonomik Telefon Standı", 
        price: 10, 
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        name: "Endüstriyel Dişli Çark", 
        price: 25, 
        img: "https://images.unsplash.com/photo-1530047625168-4b29bf8460bc?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        name: "Minimalist Kalemlik", 
        price: 8, 
        img: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=400&q=80" 
    }
];

// HTML içindeki ürün listesi alanını seçiyoruz
const productList = document.getElementById('product-list');

// Ürünleri döngüye alarak tek tek ekrana basıyoruz
products.forEach(p => {
    const card = `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p class="price-tag">${p.price} Pi</p>
            <button class="buy-btn" onclick="orderProduct('${p.name}')">Pi ile Satın Al</button>
        </div>
    `;
    productList.innerHTML += card;
});

// Satın alma butonuna tıklandığında çalışacak basit fonksiyon
function orderProduct(productName) {
    alert(productName + " için Pi ödeme sistemi yakında aktif edilecek!");
}