<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Products
          <RouterLink to="/product/create" class="btn btn-primary float-end">
            Add Product
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.products.length > 0">
            <tr v-for="(product, index) in this.products" :key="index">
              <td>{{ product.name }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.price }}</td>
              <td>
                <RouterLink
                  to="/product/create"
                  class="btn btn-success"
                >
                  Edit
                </RouterLink>
                <RouterLink
                  to="/product/create"
                  class="btn btn-danger"
                >
                  Delete
                </RouterLink>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6">Loading...</td>
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
    // console.log("Ash is here");
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get("http://localhost:8000/showproducts").then((res) => {
        this.products = res.data;
        //  console.log(this.products);
      });
    },
  },
};
</script>

