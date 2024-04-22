<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">Edit Product</h4>
      </div>
      <div class="card-body">
        <div class="alert alert-warning" v-if="Object.keys(errorList).length > 0">
          <ul class="list-unstyled">
            <li v-for="(error, index) in errorList" :key="index" class="mb-0 ms-3">{{ error[0] }}</li>
          </ul>
        </div>
        <form @submit.prevent="updateProduct">
          <div class="mb-3">
            <label for="productName" class="form-label">Name</label>
            <input id="productName" type="text" v-model="model.product.name" class="form-control">
          </div>
          <div class="mb-3">
            <label for="productDescription" class="form-label">Description</label>
            <input id="productDescription" type="text" v-model="model.product.description" class="form-control">
          </div>
          <div class="mb-3">
            <label for="productQuantity" class="form-label">Quantity</label>
            <input id="productQuantity" type="text" v-model="model.product.quantity" class="form-control">
          </div>
          <div class="mb-3">
            <label for="productPrice" class="form-label">Price</label>
            <input id="productPrice" type="text" v-model="model.product.price" class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ProductEdit',
  data() {
    return {
      csrfToken: null,
      errorList: {},
      productId: '',
      model: {
        product: {
          name: "",
          description: "",
          quantity: "",
          price: "",
        },
      },
    }
  },
  mounted() {
     this.fetchCsrfCookie();
     this.productId = this.$route.params.id;
     this.getProductData(this.$route.params.id);
  },
  methods: {
    fetchCsrfCookie() {
      axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
          console.log('CSRF cookie set');
          this.csrfToken = response.data.csrfToken;
        })
        .catch(error => {
          console.error('Failed to fetch CSRF cookie:', error);
        });
    },
    getProductData(productId) {
      axios.get(`http://localhost:8000/product/${productId}/edit`)
      .then(res => {
        console.log(res.data);
        this.model.product = res.data;
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          console.log("Error1", error.response);
          alert("This product ID is not present.");
        }
      });
    },
    updateProduct() {
      axios.put(`http://localhost:8000/product/${this.productId}/update`, this.model.product)
        .then((res) => {
          console.log(res);
          alert("Product updated successfully!");
          this.$router.push('/products');
        })
        .catch((error) =>  {
          if (error.response) {
            console.log("Error1", error.response.data.errors);
            this.errorList = error.response.data.errors;
          } else if ("Error2", error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  }
}
</script>

<style scoped>
.card-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
