<template>
    <div id="progress-infos">
        <div id="counter">Time left :<span id="myTimer"></span></div>
        <div id="progress-bar"><div id="inner-progress-bar"></div></div>
    </div>
</template>

<script>

</script>

<style>
#progress-infos {
  margin: auto;
  margin-top: 2rem;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  height: 60px;
}
#counter {
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: start;
  align-items: center;
  color: white;
  width: 200px;
  height: 40px;
  margin-top: 2rem;
  text-align: left;
}

#counter span {
  background-color: #1B2430;
  border-radius: 6px;
  height: 40px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;
}
#progress-bar {
  height: 30px;
  width: 90vw;
  border-radius: 1rem;
  border: 3px solid #1B2430;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#inner-progress-bar {
  border-radius: 0.3rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  height: 25px;
  width: 0%;
  background-color: #1B2430;
  transition: width 2s;
}
@media (max-width: 550px) {
  #progress-infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 120px;
  }
}
</style>