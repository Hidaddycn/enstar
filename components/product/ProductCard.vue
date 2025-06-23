<template>
<div class="card w-full  p-6  hover:border-green-800 max-w-sm  transition-all duration-300 ease-in-out  hover:shadow-xl">
    <div class="bg-white  overflow-hidden max-h-60">
        <img :src="src" alt="">
    </div>
    <div class="font-bold my-2">{{title}}</div>
    <div class="text-xs">{{description}}</div>
   <div class="mt-10 flex justify-between items-center">
    <a :href="slug" class="flex items-center text-blue-500 hover:underline">
    <span> Detail</span>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#888888" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
   </a>
  
   </div>
</div>
</template>
<script lang='ts' setup name='YourName'>
import Button from '../Button.vue'
defineProps({
    src: {
      type: String,
      default: '/p1.jpg'
    },
  title: {
    type: String,
    default: 'Product Title'
  },
  description: {
    type: String,
    default: 'Product Description'
  },
  slug: {
    type: String,
    default: '/product-detail'
  }
})
</script>
<style scoped>
.button{
    background-color:var(--vp-button-brand-bg);
  }
.card {
  background-color: var(--vp-c-bg-soft);
}
</style>