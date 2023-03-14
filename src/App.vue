<script>
import Quizz from './views/QuizzView.vue'
import Infos from './views/InfosView.vue'
export default {
  name :'App',
  components : {
    Quizz,
    Infos,
  }
}
</script>

<template>
  <div id="container">
  </div>
    <router-view />
  
  
</template>

<style scoped>
#app  {
  padding: 0!important;
  margin:0!important;
  width: 100vw;
  height: 100vh;
}
</style>
