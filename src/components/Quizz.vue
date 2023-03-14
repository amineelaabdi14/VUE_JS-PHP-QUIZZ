<script>
import Answers from './Answers.vue'
import Question from './Question.vue'
import ProgressBar from './ProgressBar.vue'
import Stepper from './Stepper.vue'
export default {
  name :'App',
  components : {
    Answers,
    Question,
    ProgressBar,
    Stepper
  }
}
</script>

<template>
  <div id="page-content">
    <Stepper />
    <ProgressBar />
    <Question />
    <Answers />
  </div>
  
</template>

<style>
#page-content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #404258;
  padding: 0 ;
  margin :0;
}
#app  {
  padding: 0!important;
  margin:0!important;
}
</style>
