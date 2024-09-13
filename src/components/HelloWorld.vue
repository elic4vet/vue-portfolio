<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h3 class="greetings">Hello, I'm
    <h2 class="green">Elisabeth Erkekoglou</h2>
    <p> Junior Frontend Developer based in Germany </p>
    <p> working as a Costumer Service Employee <br /> </p>
    <p><span class="green">@ Arvato SE</span>
      since<span class="green">October 2016</span>
    </p>
  </h3>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

p {
  font-size: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
