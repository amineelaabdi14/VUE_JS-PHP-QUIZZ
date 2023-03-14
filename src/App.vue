<script>
import Quizz from './views/QuizzView.vue'
import Infos from './views/InfosView.vue'
import Stepper from './components/Stepper.vue'
export default {
  name :'App',
  components : {
    Quizz,
    Infos
  }
}
</script>

<template>
  <Stepper />
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
