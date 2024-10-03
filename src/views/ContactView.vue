<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
</script>



<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Contact</template>
    <p> Feel free to contact me </p>
    <a href="https://www.linkedin.com/in/eerkekoglou/" class="link" target="_blank" rel="noreferrer"> <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
    <a href="https://github.com/elic4vet" class="link" target="_blank" rel="noreferrer"> <font-awesome-icon :icon="['fab', 'github']" /></a>
    <a href= "mailto:elisabeth.erkekoglou@gmail.com" class="link"><font-awesome-icon :icon="['fas', 'envelope']" /> </a> 
    <p> Download my CV </p>
  </WelcomeItem>

</template>

<style scoped>
@media (min-width: 1024px) {
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .link {
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }
}
</style>