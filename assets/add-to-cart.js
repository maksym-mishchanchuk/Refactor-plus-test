class AddToCartButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="add-to-cart" data-product-id="${this.getAttribute("data-id")}">
        Add to cart - ${this.getAttribute("data-price")}
      </button>
    `;

    this.querySelector("button").addEventListener("click", async () => {
      let productId = this.getAttribute("data-id");

      try {
        let response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: productId, quantity: 1 })
        });

        if (!response.ok) throw new Error("❌ Unable to add product!");

        let data = await response.json();
        console.log("✅ Added to cart:", data);
      } catch (error) {
        console.error(error);
        alert("Error adding to cart!");
      }
    });
  }
}

customElements.define("add-to-cart-button", AddToCartButton);


