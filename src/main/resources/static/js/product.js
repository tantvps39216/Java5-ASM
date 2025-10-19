const products = [
  { hinh: ["iphone13.jpg", "iphone-13_2_.webp", "iphone-14_1.webp"], name: "iPhone 13", price: 20000000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["samsung2.webp", "galaxy1.webp", "galaxy2.webp"], name: "Galaxy S24 Ultra", price: 4250000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["xiaomi-redmi-note-12-pro-5g.webp", "dien-thoai-realme-c60_4__1.webp", "dien-thoai-realme-c61_2_.webp"], name: "Xiaomi Redmi Note 12", price: 3300000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["iphone-15.webp", "ip15-1.png", "ip15-2.webp"], name: "iPhone 15 ProMax", price: 29000000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["c3845789-dda7-44d7-a9eb-bb8e775c9ffb.webp", "dien-thoai-oppo-a18-4gb-64gb_1_.webp", "dien-thoai-oppo-reno-11-f-2.webp"], name: "Samsung Galaxy M34 5G", price: 3780000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["samsung-galaxy-a05sl.webp", "samsung4.webp", "samsung5.webp"], name: "Samsung Galaxy A05S", price: 4250000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["samsung-galaxy-a54.webp", "samsung5.webp",  "samsung4.webp"], name: "Samsung Galaxy A54", price: 4280000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" },
  { hinh: ["xiaomi-poco-m5.webp",  "xiaomi-poco-f4.webp", "xiaomi-redmi-note-12-pro-5g.webp"], name: "Xiaomi poco m5", price: 3200000, desc: "Sản phẩm hiện có tại Website, Facebook và hệ thống cửa hàng Cellphones toàn quốc" }
];

const productList = document.getElementById("list_pro");
productList.innerHTML = "";

products.forEach(product => {
  productList.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card shadow-sm">
        <img src="imgs/${product.hinh[0]}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="text-danger fw-bold">${product.price.toLocaleString()} VND</p>
          <button class="btn btn-outline-primary btn-sm mt-2" onclick='viewDetail(${JSON.stringify(product)})'>
            Xem chi tiết
          </button>
          <button class="btn btn-outline-success btn-sm mt-2" onclick='addToCart(${JSON.stringify(product)})'>
            <i class="fa fa-cart-plus"></i> Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  `;
});

function viewDetail(product) {
  localStorage.setItem("product", JSON.stringify(product));
  window.location.href = "/detail";
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
}
