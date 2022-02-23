class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const $productList = document.getElementById("product-list")
    const element = document.createElement("div")
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Product Name</strong>: ${product.name}
          <strong>Product Price</strong>: ${product.price}
          <strong>Product Year</strong>: ${product.year}
          <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
        </div>
      </div>
    `
    $productList.appendChild(element)
  }

  resetForm() {
    document.getElementById("product-form").reset()
  }

  deleteProduct(element) {
    if (element.name == "delete") {
      element.parentElement.parentElement.parentElement.remove()
      this.showMessage("Producto eliminado", "danger")
    }
  }

  showMessage(message, cssClass) {
    const divMessage = document.createElement("div")
    divMessage.className = `alert alert-${cssClass} mt-4`
    divMessage.appendChild(document.createTextNode(message))
    // Showing in DOM
    const container = document.querySelector(".container")
    const app = document.querySelector("#app")
    container.insertBefore(divMessage, app)
    setTimeout(function() {
      divMessage.remove()
    }, 3000)
  }
}

// DOM Events

document.getElementById("product-form").addEventListener("submit", function (e) {

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(name, price, year)

  const ui = new UI()
  ui.addProduct(product)
  ui.resetForm()
  ui.showMessage("Producto añadido con exito", "success")

  e.preventDefault()
});

document.getElementById("product-list").addEventListener("click", function(e) {
  const ui = new UI()
  ui.deleteProduct(e.target)
})