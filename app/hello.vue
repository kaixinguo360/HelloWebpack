<template>
  <div class="hello-text">
    {{hello}}, {{name}}
  </div>
</template>

<script>
import {Vue} from "vue-property-decorator";
import config from './config.json';

export default class HelloComponent extends Vue {
  hello = 'Hello';
  name = config.name;
}
</script>

<style scoped>
.hello-text {
  color: springgreen;
}
</style>

