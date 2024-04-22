<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            ligula non nunc vestibulum, eu mattis lorem vehicula.
          </p>
        </div>
        <div class="about-image-container">
          <img
            src="https://source.unsplash.com/random/800x400"
            alt="About Image"
            class="about-image"
          />
        </div>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <h2>Our Team</h2>
        <div class="team-member">
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Team Member"
          />
          <h3>John Doe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            ligula non nunc vestibulum.
          </p>
        </div>
        <div class="team-member">
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Team Member"
          />
          <h3>Jane Doe</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            ligula non nunc vestibulum.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
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

.about-image-container {
  display: flex;
  justify-content: center;
}

.about-image {
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

.team-member {
  text-align: center;
}

.team-member img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
