<template>
    <div id="responses-area">

        <div id="first-responses">
            <div id="res1" class="response" @click="sendDataToParent(1)">
                
            </div>
            <div id="res2" class="response" @click="sendDataToParent(2)">
                
            </div>
        </div>
        <div id="second-responses">
            <div id="res3" class="response" @click="sendDataToParent(3)">
                
            </div>
            <div id="res4" class="response" @click="sendDataToParent(4)">
                
            </div>
        </div>
    </div>
</template>

<script>    
export default {
  methods : {
    sendDataToParent(myAnswer) {
      this.$emit('child-event', myAnswer);
    }
  }
}
</script>

<style>
#first-responses, #second-responses {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 45vw;
}
#responses-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90vw;
  margin: auto;
  margin-top: 2rem;
}   
.response {
  background-color: black;
  width: 20vw;
  min-width: 230px;
  color: white;
  height: 140px;
  border-radius: 6px;
  background-color: #d4939d;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
}

.response:hover {
  background-color: #404258;
  border: 3px solid #d4939d;
  cursor: pointer;
}
@media (max-width: 600px) {
  #responses-area {
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  .response {
    width: 90vw;
  }
}
@media (max-width: 1050px) {
  #first-responses, #second-responses {
    flex-direction: column;
    align-items: center;
    height: 300px;
  }
  .response {
    width: 40vw;
  }
}
</style>