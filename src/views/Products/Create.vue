<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Product</h4>
      </div>
      <div class="card-body">
        <ul
          class="alert alert-warning"
          v-if="Object.keys(this.errorList).length > 0"
        >
          <li
            class="mb-0 ms-3"
            v-for="(error, index) in this.errorList"
            :key="index"
          >
            {{ error[0] }}
          </li>
        </ul>
        <div class="mb-3">
       
          <label for="">Name</label>
          <input
            type="text"
            v-model="model.product.name"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Description</label>
          <input
            type="text"
            v-model="model.product.description"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Quantity</label>
          <input
            type="text"
            v-model="model.product.quantity"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="">Price</label>
          <input
            type="text"
            v-model="model.product.price"
            class="form-control"
          />
        </div>
        <button type="button" @click="saveProduct" class="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'productCreate',
  data() {
    return {
      csrfToken: null,
      errorList: {},
      
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
  },
  methods: {
    fetchCsrfCookie() {
      axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
          // CSRF cookie is now set
          console.log('CSRF cookie set');
          this.csrfToken = response.data.csrfToken;
          console.log(this.csrfToken);
        })
        .catch(error => {
          console.error('Failed to fetch CSRF cookie:', error);
        });
    },
    
    saveProduct() {
      axios.post('http://localhost:8000/product', this.model.product, {
       
      })
        .then((res) => {
          console.log(res);
          alert(res.data);

          this.product = {
            name: "",
            description: "",
            quantity: "",
            price: "",
          };
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
