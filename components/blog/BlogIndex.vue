<template>
    <div>
       <div class="px-4">
        <div class="text-3xl font-semibold mt-20">Global Insights & Stories from Our Export Journey</div>
        <div class="mt-2 mb-8 text-zinc-500">Discover the latest trends, factory updates, and behind-the-scenes stories from our international trade adventures.y</div>
       </div>
        <div @click="goblogcategory(item)" class="flex h-[100px] lg:w-1/2  flex-col gap-4 lg:h-[100px] lg:flex-row p-4" v-for="item in blogcategories" :key="item.id">
      <CardSpotlight
        class="cursor-pointer flex-col flex items-center justify-center whitespace-nowrap   "
        :gradient-color="isDark ? '#363636' : '#fff'"
      >
     
      <div class="flex w-full  justify-between items-center px-4">
        <div class=""> {{item.title}}</div>
        <div class="flex gap-2 items-center">
            <span class="text-xs">View</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="#888888" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"/></svg>
        </div>
      </div>
   
      </CardSpotlight>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  import { useData } from 'vitepress'
  import CardSpotlight from '../CardSpotlight.vue';
const  blogcategories = [
    { title: 'Team Stories',  link:'/blog/teamindex'},
    { title: 'Exhibitions Shows', link:'/blog/exhibitions' },
    { title: 'Collaborations with Clients',  link:'/blog/customer'},
    { title: 'Other Stories', link:'/blog/other' }
  ];
const { isDark } = useData()

const goblogcategory = (item) => {
    window.location.href = item.link;
  }
  </script>