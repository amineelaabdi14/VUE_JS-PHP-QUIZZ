<template>
    <div id="result-content">
      <div id="container">
        <Stepper :active="3" />
      </div>
        <h1>Well Done!</h1>
        <div id="stats">

        <div id="correct-answers">
            <p>Correct answer</p>
            <span></span>
        </div>

        <div id="false-answers">
            <p>False answer</p>
            <span></span>
        </div>

        <div id="avg-time">
            <p>Avg response time</p>
            <span></span>
        </div>
        </div>
    </div>
  


</template>

<script>
import Stepper from '../components/Stepper.vue'
export default {
  components : {
    Stepper
  }
}
</script>

<style>
div#container {
  position: fixed;
  top: 0;
  margin: auto;
  width: 100%;
}
#result-content{
    width:100vw;
    margin-bottom: 100px;
}
#stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h1 {
  color: white;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 4rem;
}
#correct-answers, #avg-time, #false-answers {
  border: 2px solid green;
  background-color: rgba(0, 128, 0, 0.07);
  border-radius: 0.3rem;
  width: 200px;
  height: 130px;
  margin-left: 1rem;
  font-family: "Open Sans", sans-serif;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
#avg-time {
  background-color: rgba(255, 255, 255, 0.07);
  border-color: white;
}
#false-answers {
  background-color: rgba(255, 0, 0, 0.07);
  border-color: red;
}
</style>