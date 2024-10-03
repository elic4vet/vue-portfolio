<script setup>
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="greetings">
    <h2> Hello👋</h2>
    <h1 class="green">I'm Elisabeth Erkekoglou</h1>
    <p> Junior Frontend Developer based in Germany </p>
    <p> working as a Costumer Service Employee <br /> </p>
    <p><span class="green">@Arvato SE</span>
    since<span class="green">October 2016</span></p>
  </div>
 
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
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
