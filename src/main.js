import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAtom, faChevronRight , faHome} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight);
library.add(faAtom);
library.add(faHome);

config.familyDefault = "classic";
config.styleDefault = "duotone";

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
