<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Projects</template>

    <div id="projects">
      <ul id="project_list">
        <li><font-awesome-icon :icon="['fas', 'atom']" /> My portfolio with NextJs <a href="#"><font-awesome-icon
              :icon="['fas', 'chevron-right']" /></a></li>
        <li><font-awesome-icon :icon="['fas', 'atom']" /> My portfolio with React <a href="#"><font-awesome-icon
              :icon="['fas', 'chevron-right']" /></a></li>
        <li><font-awesome-icon :icon="['fas', 'atom']" /> An app built with Vue <a href="#"><font-awesome-icon
              :icon="['fas', 'chevron-right']" /></a></li>
        <li><font-awesome-icon :icon="['fas', 'atom']" /> An app built with Angular <a href="#"><font-awesome-icon
              :icon="['fas', 'chevron-right']" /></a></li>
      </ul>
    </div>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Experience</template>
    <div class="experience">
      <p> <img src="../assets/kreativstorm.png" class="logo"> Junior Frontend Developer training internship</p>
      <p><img src="../assets/arvato.jpg" class="logo"> Arvato SE - Costumer service employee</p>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Education</template>
    <div class="education">

      <div><a src="../assets/codefirstgirlslogo.png"></a>
        <p> Introduction to Python & Apps</p>
        <p class="tags"> <button> Python </button>,<button> App Development </button>, <button> Pandas </button>,
          <button>
            Libraries
          </button>
        </p>
      </div>

      <div>
        <a src="../assets/freecodecamplogo.png"></a>
        <p> FreeCodeCamp - Responsive Web Design Certification </p>
        <p class="tags"> <button>HTML </button>, <button> CSS </button> , <button> JavaScript</button> , <button>
            React</button> , <button> TypeScript</button></p>
      </div>

      <a src="../assets/shecodeslogo.png"></a>
      <p> SheCodes - Frontend Development Workshop </p>
      <p class="tags"><button>HTML</button>, <button> CSS</button> , <button> JavaScript</button> , <button>
          React</button> ,
        <button>Figma</button>
      </p>

      <a src="../udacitylogo.png"></a>
      <p> Udacity - Nanodegree program : AI Product Manager </p>
      <p class="tags"><button> AI</button>, <button> Product Management</button> , <button> Machine learning</button>/>
      </p>

      <a src="../ekpalogo.jpg"></a>
      <p> National and Kapodistrian University of Athens" - B.Sc. French Language and Litterature </p>
      <p class="tags"><button> French</button>, <button> Language</button> , <button>
          Litterature</button> ,<button> Bachelor Degree</button></p>
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

.logo {
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  object-fit: cover;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>