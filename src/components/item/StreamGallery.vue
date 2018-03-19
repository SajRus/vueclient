<template>
  <div class="image-container">
      <div class="image-item" 
        v-for="prey in preys"
        v-bind:key="prey._id">
          <img class="img-src" :src="imgPath + '/' + prey.id" :alt="prey._id">
      </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "StreamGallery",
  props: ["preys"],
  data() {
    return {
      imgPath: Vue.config.apiPaths.imageServerPath
    };
  }
};
</script>
<style>
.image-container {
  width: 100%;
  height: 214px;
  overflow-y: scroll;
}
.image-item {
  height: 100px;
  width: 100px;
  padding-left: 1px;
  padding-top: 1px;
  position: relative;
  display: inline-block;
}
.img-src {
  width: 100%;
  height: 100%;
}
</style>
