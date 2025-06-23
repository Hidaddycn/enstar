<template>
    <div class="relative grid h-[900px] place-content-center overflow-hidden  w-1/2">
     
  
      <PatternBackground
        :class="[
          '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
          'inset-0 h-[200%] skew-y-12',
        ]"
      />
    </div>
  </template>
    
  <script setup lang="ts">
import PatternBackground from './PatternBackground.vue';
  </script>