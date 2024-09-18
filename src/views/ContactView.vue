<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
</script>



<template>
  <WelcomeItem>
    <template #icon><DocumentationIcon /></template>
    <template #heading>Contact</template>
    <p> Feel free to contact me </p>
    
  </WelcomeItem>
 

</template>

<style>
@media (min-width: 1024px) {
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>