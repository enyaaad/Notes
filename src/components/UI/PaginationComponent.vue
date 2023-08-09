<template>

  <div v-if="show" class="ui-pagination">
    <div v-if="viewportWidth>1024">
      <a
          v-for="item in items"
          :key="item.label"
          class="ui-pagination__item"
          @click="redirectTo(item.to)">
        {{ item.label }}
      </a>
    </div>
    <div v-else>
      <a
          v-for="pagItem in paginatedRows"
          :key="pagItem.label"
          class="ui-pagination__item"
          @click="redirectTo(pagItem.to)">
        {{ pagItem.label }}
      </a>
    </div>
  </div>

</template>


<script setup lang="ts">
type Emit = {
  (event: 'update:value', value: number):void
}

import {computed, onMounted, ref} from "vue";

const viewportWidth = ref<number>(0)

const emit = defineEmits<Emit>()

const Props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true
  }
})
onMounted(()=>{updateViewportSize()})
const paginatedRows = computed(()=>{
    if (Props.value > 1)
      return [
        {
          label: '«',
          disabled: isFirst,
          to: 1,
        },
        ...[...Array(Props.pages)].map((value, index) => ({
          label: index + 1,
          disabled: index + 1 === Props.value,
          to: index + 1,
        })).slice(Props.value - 2, Props.value + 3),
        {
          label: '»',
          disabled: isLast,
          to: Props.pages,
        },
      ];
    return [
      {
        label: '«',
        disabled: isFirst,
        to: 1,
      },
      ...[...Array(Props.pages)].map((value, index) => ({
        label: index + 1,
        disabled: index + 1 === Props.value,
        to: index + 1,
      })).slice(Props.value - 1, Props.value + 3),
      {
        label: '»',
        disabled: isLast,
        to: Props.pages,
      },
    ];
})

const show = computed(()=>{return Props.pages > 1})
const isFirst = computed(()=>{ return Props.value === 1})
const isLast = computed(()=>{ return Props.value === Props.pages})
const items = computed(()=>{
  return [
    {
      label: '«',
      disabled: isFirst,
      to: 1,
    },
    ...[...Array(Props.pages)].map((value, index) => ({
      label: index + 1,
      disabled: index + 1 === Props.value,
      to: index + 1,
    })),
    {
      label: '»',
      disabled: isLast,
      to: Props.pages,
    },
  ]
})
const updateViewportSize = () => {
  viewportWidth.value = window.innerWidth;
}
const redirectTo = (page) => {
  if (page === Props.value) {
    return
  }
  emit("update:value",page)
}

</script>

<style scoped lang="sass">
.ui-pagination__item:hover
  cursor: pointer

a, .green
  margin: 2px
  text-decoration: none
  color: hsla(160, 100%, 37%, 1)
  transition: 0.4s

@media (hover: hover)
  a:hover
    background-color: hsla(160, 100%, 37%, 0.2)

</style>
