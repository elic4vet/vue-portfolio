
<template>
  <div id="projects">
    <ul id="project_list">
      <li><font-awesome-icon :icon="['fas', 'fa-star']" /> My portfolio with NextJs <a href="#"><font-awesome-icon :icon="['fas', 'chevron-right']" /></a></li>
      <li><font-awesome-icon :icon="['fas', 'fa-star']" /> My portfolio with React <a href="#"><font-awesome-icon :icon="['fas', 'chevron-right']" /></a></li>
      <li><font-awesome-icon :icon="['fas', 'fa-star']" /> An app built with Vue <a href="#"><font-awesome-icon :icon="['fas', 'chevron-right']" /></a></li>
      <li><font-awesome-icon :icon="['fas', 'fa-star']" /> An app built with Angular <a href="#"><font-awesome-icon :icon="['fas', 'chevron-right']" /></a></li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .projects {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
  }
}
</style>

 