import Vue from 'vue';
import HelloComponent from './hello.vue';

new Vue({ render: (h) => h(HelloComponent) }).$mount('#root');
