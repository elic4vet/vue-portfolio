<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'

</script>

<template>
  <WelcomeItem>
    <template #icon>
 
      <DocumentationIcon />
 
    </template>
    <template #heading>Projects</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>
 
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Education</template>
    <div class="education">
    </div>
  </WelcomeItem>
</template>


<style>
button {
  border-radius: 20px;
  border: none;
}

.experience {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
}

#project_list {
  list-style: none;
  padding: 0;
}

.section {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  
.logo {
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 10px;
  object-fit: cover;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

</style>