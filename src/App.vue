<script>
import Quizz from './components/Quizz.vue'
import Infos from './components/Infos.vue'
export default {
  name :'App',
  components : {
    Quizz,
    Infos
  }
}
</script>

<template>

  <Infos />
</template>

<style scoped>
#app  {
  padding: 0!important;
  margin:0!important;
  width: 100vw;
  height: 100vh;
}
</style>
