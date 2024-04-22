<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <RouterLink class="navbar-brand" to="/">
          <img src="./assets/tree.svg" alt="Logo" class="logo"/>
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" exact>Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/products">Products</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  background-color: #343a40;
  padding: 10px 0;
}

.navbar-brand img {
  height: 40px;
}

.navbar-nav .nav-link {
  color: #ffffff;
  margin: 0 10px;
  font-size: 18px;
}

.navbar-nav .nav-link:hover {
  color: #ffffff;
}

.logo {
  height: 40px;
  width: auto;
  animation: rotateLogo 2s linear infinite;
}

@keyframes rotateLogo {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
