function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTable = document.getElementById("cartTable");
  let total = 0;

  // Xóa các dòng cũ, giữ lại header
  cartTable.innerHTML = `
    <tr>
      <th>Hình</th>
      <th>Tên SP</th>
      <th>Màu</th>
      <th>Giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
      <th>Hành động</th>
    </tr>
  `;

  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    let row = cartTable.insertRow();
    row.innerHTML = `
      <td><img src="imgs/${item.hinh[0]}" width="70"></td>
      <td>${item.name}</td>
      <td>${item.color || 'Mặc định'}</td>
      <td>${item.price.toLocaleString()} VND</td>
      <td>
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">-</button>
        <span class="mx-2">${item.quantity}</span>
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
      </td>
      <td>${subtotal.toLocaleString()} VND</td>
      <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Xóa</button></td>
    `;
  });

  document.getElementById("total").innerText = total.toLocaleString() + " VND";
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function changeQty(index, delta) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

window.onload = renderCart;
