<template>
  <div class="hello-text">
    {{hello}}, {{name}}
  </div>
</template>

<script>
import config from './config.json';
export default {
  data: () => ({
    hello: 'Hello',
    name: config.name
  })
}
</script>

<style scoped>
.hello-text {
  color: springgreen;
}
</style>

