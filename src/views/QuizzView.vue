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
      correctAnswers :0
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
          let avgTime=0, total=0;
          for(let i of this.responseTime)
          {
              total+=Number(i);
          }
          avgTime=total/this.responseTime.length;
          this.$router.push({
            path : '/result',
            query: {
              correct : this.correctAnswers,
              false : this.falseAnswers,
              time : avgTime
            }
          });
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
      },
      handleChildEvent(response){
        this.responseTime.push(10-document.getElementById('myTimer').innerText);
        document.getElementById('inner-progress-bar').style.width=( this.currentQuestion*100 / questions.length)+'%';
        if(Number(questions[this.currentQuestion-1].answer)==Number(response))
        {   
            this.correctAnswers++;
            this.timer=10;
            clearTimeout(this.myTimer);
            this.showQuestions();
            // console.log(this.correctAnswers);
            // console.log(this.falseAnswers);
        }
        else {
            this.falseAnswers++;
            this.timer=10;
            clearTimeout(this.myTimer);
            this.showQuestions();
            // console.log(this.correctAnswers);
            // console.log(this.falseAnswers);
        }
      },
      startQuizz(){
        this.shuffle();
        this.showQuestions();
      }
  },
  mounted() 
  {
    this.startQuizz();

  }

}
</script>

<template>
  <div id="page-content">
    <Stepper :active="2" />
    <ProgressBar />
    <Question />
    <Answers @child-event="handleChildEvent" />
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
