<template>
  
        <div
      class="relative  flex w-full flex-col items-center justify-center overflow-hidden rounded-lg   "
    >
      <!-- First Marquee -->
      <Marquee
        pause-on-hover
        class="[--duration:20s]  "
        
      >
        <ReviewCard
          v-for="review in firstRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>
  
      <!-- Second Marquee (reverse) -->
      <Marquee
        reverse
        pause-on-hover
        class="[--duration:20s]"
      >
        <ReviewCard
          v-for="review in secondRow"
          :key="review.username"
          :img="review.img"
          :name="review.name"
          :username="review.username"
          :body="review.body"
        />
      </Marquee>
  
      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
      ></div>
  
      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>

   
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import Marquee from './Marquee.vue'
import ReviewCard from './ReviewCard.vue'
  // Reviews data
  const reviews = [
    {
      name: "Ahmad",
      username: "sManager",
      body: "Jiaxing En Star’s slim panels cut our energy bill by 40 %—excellent quality and fast delivery",
      img: "/avatar3.jpg",
    },
    {
      name: "Kwame",
      username: "Sole Proprietor",
      body: "Zero dead pixels after two years; En Star panels still shine like new for our retail chain.",
      img: "/avatar1.jpg",
    },
    {
      name: "John",
      username: "Founder & Owner",
      body: "The 0–10 V dimming works flawlessly—our client loved the flicker-free light from En Star.",
      img: "/avatar2.jpg",
    },
    {
      name: "Malik",
      username: "CEO",
      body: "Samples arrived in five days; En Star’s rapid response won our bulk hospital tender.",
      img: "/avatar4.jpg",
    },
    {
      name: "Amira",
      username: "Procurement Officer",
      body: "Packing was drop-test proof; every En Star panel reached Dubai without a single scratch",
      img: "/avatar5.jpg",
    },
    {
      name: "Александр",
      username: "Procurement Officer",
      body: "Five-star support—En Star customized 600 × 600 mm frames to match our ceiling grid",
      img: "/avatar7.jpg",
    },
     {
      name: "Ольга",
      username: "Procurement Manager",
      body: "Competitive price, premium driver; En Star beat European quotes by 20 % without quality loss",
      img: "/avatar8.jpg",
    },
     {
      name: "Daniel",
      username: "Manager",
      body: "CRI > 90 shows true colors; our supermarket displays look vibrant under En Star LEDs.",
      img: "/avatar9.jpg",
    },
     {
      name: "Youssef",
      username: "Manager",
      body: "Plug-and-play connectors saved our installers two hours per room—thanks, En Star.",
      img: "/avatar10.jpg",
    },
     {
      name: "Richard",
      username: "Manager",
      body: "Three-year warranty and real lumen reports give us confidence to resell En Star worldwide",
      img: "/avatar11.jpg",
    },
     {
      name: "Christopher",
      username: "CEO",
      body: "En Star’s eco-friendly packaging aligns with our sustainability goals; customers notice and appreciate it.",
      img: "/avatar6.jpg",
    },
  ];
  
  // Split reviews into two rows
  const firstRow = ref(reviews.slice(0, reviews.length / 2));
  const secondRow = ref(reviews.slice(reviews.length / 2));
  </script>