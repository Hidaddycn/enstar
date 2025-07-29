<template>
    <figure
      class="relative reviewcards w-60 h-48 md:w-76 md:h-40 cursor-pointer  rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div class="flex flex-row items-center gap-4 ">
        <div class="h-16   w-16 overflow-hidden border rounded-full">
           <img
          :src="img"
          class=" "
         
          alt=""
        />
        </div>
       
        <div class="flex flex-col">
          <span class="text-xl font-medium dark:text-white">
            {{ name }}
          </span>
          <p class="text-md font-medium dark:text-white/40">{{ username }}</p>
        </div>
      </div>
     <div class="mt-2 overflow-hidden text-sm dark:text-white/40">
        <blockquote class=" line-clamp-2 ">{{ body }}</blockquote>
     </div>
    </figure>
  </template>
  
  <script lang="ts" setup>
  interface Props {
    img: string;
    name: string;
    username: string;
    body: string;
  }
  
  defineProps<Props>();
  </script>
  <style scoped>
  .reviewcard{
    width:380px;
    height: 260px;
  }
</style>