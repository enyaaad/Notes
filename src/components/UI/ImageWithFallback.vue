<script setup lang="ts">

const Props = defineProps({
  src: {
    type: String,
    required: true,
    default: LoadingLoader
  }
});

import {onMounted, ref, toRefs} from "vue";
import {computed} from "vue";
import LoadingLoader from "@/components/UI/LoadingLoader.vue"
import fallbackSrc from "@/assets/icons/mockImg.png"
const imageSource = ref<string>(<string>Props.src)
const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)



let displayedImage = computed(() => {return hasError.value ? fallbackSrc : imageSource.value})

const handleImageError = () => {
  isLoading.value = false;
  hasError.value = true;
}

const handleImageLoad = () => {
  isLoading.value = false;
}
</script>

<template>
  <div class="fallback-image">
    <LoadingLoader v-if="isLoading"></LoadingLoader>
    <img :src="displayedImage" @load="handleImageLoad" @error="handleImageError" alt=""/>
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
