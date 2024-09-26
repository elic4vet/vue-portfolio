import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAtom, faChevronRight , faHome, faStar , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin , } from '@fortawesome/free-brands-svg-icons';

library.add(faChevronRight);
library.add(faAtom);
library.add(faHome);
library.add(faStar);
library.add(faLinkedin);
library.add(faGithub);
library.add(faEnvelope);

config.familyDefault = "classic";
config.styleDefault = "duotone";

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
