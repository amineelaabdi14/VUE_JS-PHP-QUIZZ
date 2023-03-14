<script>
import Answers from '../components/Answers.vue'
import Question from '../components/Question.vue'
import ProgressBar from '../components/ProgressBar.vue'
import Stepper from '../components/Stepper.vue'
import { questions } from '../data.js';


export default {
  data(){
    return{
      currentQuestion:0,
      question:0,
      timer :10,
      myTimer :0,
      responseTime : [],
      falseAnswers :0,
      correctAnswer :0
    }
  },
  name :'App',
  components : {
    Answers,
    Question,
    ProgressBar,
    Stepper
  },

  methods :{
      showQuestions(){
      this.shuffle();
      if(this.currentQuestion!=questions.length)
      {   
          this.question = questions[this.currentQuestion];
          document.getElementById('myQuestion').innerText=this.question.question;
          document.getElementById('res1').innerText=this.question.choice1;
          document.getElementById('res2').innerText=this.question.choice2;
          document.getElementById('res3').innerText=this.question.choice3;
          document.getElementById('res4').innerText=this.question.choice4;
          this.currentQuestion++;
          this.startTimer();
      }
      else{
          this.$router.push('/result');
      }
      },
      shuffle(){
        for(let i=questions.length-1;i>0;i--)
          {   
              let randIndex= Math.floor( Math.random()*questions.length);
              [ questions[randIndex] , questions[i] ] = [ questions[i] , questions[randIndex] ];
          }
      },
      startTimer(){
        document.getElementById('myTimer').innerText=this.timer;
        this.timer--;
        if(this.timer!=0) 
        {
          this.myTimer=setTimeout(this.startTimer,1000);
        }    
        else {
            this.responseTime[this.responseTime.length]=10;
            document.getElementById('inner-progress-bar').style.width=( this.currentQuestion*100 / questions.length)+'%';
            this.falseAnswers+=1;
            this.timer=10;
            this.showQuestions();
        }
      }
  },
  mounted() 
  {
    this.showQuestions();

  }

}
</script>

<template>
  <div id="page-content">
    <Stepper :active="2" />
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
  padding: 0 ;
  margin :0;
  margin-top: 20px;
}
#app  {
  padding: 0!important;
  margin:0!important;
}
</style>
