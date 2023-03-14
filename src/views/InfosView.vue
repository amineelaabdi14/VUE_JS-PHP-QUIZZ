<template>
    <section id="index-content">
      <div id="container">
        <Stepper :active="1" />
      </div>
      
        <div id="php-logo-container">
            <img src="../assets/php-logo.png" alt="" id="php-logo">
        </div>
        <div id="description">
            <p>
                PHP is an open-source server-side scripting language that many devs use for web development. It is also a general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs).
            </p>
            <router-link to="/quizz" id="take-test">Take Test</router-link>
        </div>
    </section>
</template>

<script>
import Stepper from "../components/Stepper.vue"
export default {
    data(){
        return {

        }
    },
    methods:{
        
    },
    components :{
      Stepper,
    },
    
}
</script>

<style scoped>

div#container {
  position: fixed;
  top: 0;
  margin: auto;
  width: 100%;
}
#take-test {
  background-color: #d4939d;
  border: 0;
  border-radius: 6px;
  text-align: center;
  font-size: 1.35rem;
  color: white;
  width: 100%;
  height: 45px;
  text-align: center;
  display: block;
  text-decoration: none;
}

#take-test:hover {
  background-color: #404258;
  color: white;
  border: 2px solid #d4939d;
}

#index-content {
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
}
@media (max-width: 992px) {
  #index-content {
    flex-direction: column;
    justify-content: center;
  }
}
#php-logo {
  width: 500px;
}
#description {
  color: rgb(226, 226, 226);
  font-family: "Open Sans", sans-serif;
  font-size: 1.4rem;
  width: 500px;
  text-align: justify;
  line-height: 2.9rem;
  font-weight: medium;
}
</style>