import Vue from 'vue';
import {CreateElement} from 'vue/types/vue';

import HelloComponent from './hello.vue';

new Vue({ render: (h: CreateElement) => h(HelloComponent) }).$mount('#root');
