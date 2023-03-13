<template>
    <div id="stepper-component">
        <i class="fa-solid fa-house-chimney myIcon "></i>
        <i class="fa-solid fa-pen myIcon"></i>
        <i class="fa-solid fa-graduation-cap myIcon"></i>
    </div>
</template>

<script>

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