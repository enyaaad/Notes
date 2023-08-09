<script lang="ts">
import Loader from "@/components/UI/Loader.vue";

export default {
  components: {Loader},
  props: {
    src:{
      type:String,
      required:true,
    },
    fallbackSrc:{
      type:String,
      required: true,
    },
  },
  data(){
    return{
      imageSource: this.src,
      isLoading:true,
      imageLoaded:false,
      hasError: false,
    };
  },
  computed: {
    displayedImage(){
      return this.hasError ? this.fallbackSrc : this.imageSource
    }
  },
  methods: {
    handleImageError(){
      this.isLoading = false;
      this.hasError = true;
    },
    handleImageLoad(){
      this.isLoading = false;
    }

  }
}
</script>

<template>
  <div class="fallback-image">
    <loader v-if="isLoading"></loader>
    <img :src="displayedImage"  @load="handleImageLoad" @error="handleImageError" alt="loaded image"/>
  </div>
</template>

<style scoped>
.fallback-image{
    display: flex;
    justify-content: center;
    max-height: 100%
}
.fallback-image img{
    height: 100%;
    max-width: 300px;
    margin-bottom: 10px;
}
</style>
