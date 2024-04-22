<template>
  <div class="container">
    <div class="card">
      <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h4>Products</h4>
        <RouterLink to="/product/create" class="btn btn-light">
          Add Product
        </RouterLink>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th><strong>Name</strong></th>
              <th><strong>Description</strong></th>
              <th><strong>Quantity</strong></th>
              <th><strong>Price</strong></th>
              <th><strong>Action</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.price }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Product Actions">
                  <RouterLink :to="{ path: '/product/'+product.id+'/edit' }" class="btn btn-success">
                    Edit
                  </RouterLink>
                  <button type="button" class="btn btn-danger" @click="deleteProduct(product.id)">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="products.length === 0">
              <td colspan="5" class="text-center">No products available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get("http://localhost:8000/showproducts")
        .then((res) => {
          this.products = res.data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    deleteProduct(productId) {
      if (confirm('Are you sure you want to delete this record?')) {
        axios.delete(`http://localhost:8000/product/${productId}/destroy`)
          .then(res => {
            alert("Product Deleted!");
            this.getProducts();
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.card-header {
  background-color: #007bff; 
}

.card-body {
  background-color: #f8f9fa;
}

.btn-success,
.btn-danger {
  color: #fff; 
}

.btn-success:hover,
.btn-danger:hover {
  color: #fff; 
}

.btn-light {
  background-color: #f8f9fa; 
  color: #007bff; 
}

.btn-light:hover {
  background-color: #e2e6ea;
}

.table th {
  font-weight: bold;
  font-family: sans-serif;
}
</style>
