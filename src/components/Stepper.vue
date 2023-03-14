<template>
    <div id="stepper-component">
        <i class="fa-solid fa-house-chimney myIcon " :class="{'active-icon': active==1} "></i>
        <i class="fa-solid fa-pen myIcon" :class="{'active-icon': active==2}" ></i>
        <i class="fa-solid fa-graduation-cap myIcon" :class="{'active-icon': active==3}"></i>
    </div>
</template>

<script>
export default{
  props :['active']
}
</script>

<style>
#stepper-component {
  margin: auto;
  margin-top: 2rem;
  width: 70vw;
  display: flex;
  justify-content: space-around;
}
.myIcon, .active-icon {
  color: rgb(198, 198, 198);
  font-size: 1.6rem;
  font-family: "Font Awesome Free";
}

.active-icon {
  color: #d4939d;
}

</style>