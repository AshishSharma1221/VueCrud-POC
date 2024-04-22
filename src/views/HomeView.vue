<template>
  <main>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            ligula non nunc vestibulum, eu mattis lorem vehicula.
          </p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
        <div class="hero-image-container">
          <img
            src="https://source.unsplash.com/random/800x400"
            alt="Hero Image"
            class="hero-image"
          />
        </div>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <h2>Our Features</h2>
        <div class="feature">
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Feature Image"
          />
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="feature">
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Feature Image"
          />
          <h3>Feature 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="feature">
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Feature Image"
          />
          <h3>Feature 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>

.hero {
  background-color: #f0f0f0;
  padding: 80px 0;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.hero-content .btn {
  font-size: 18px;
}

.hero-image-container {
  display: flex;
  justify-content: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  margin-top: 30px;
}

.features {
  padding: 50px 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 50px;
}

.feature {
  text-align: center;
}

.feature img {
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
}
</style>
