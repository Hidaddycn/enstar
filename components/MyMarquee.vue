<template>
  
        <div
      class="relative  flex w-full flex-col items-center justify-center overflow-hidden rounded-lg   "
    >
      <!-- First Marquee -->
      <Marquee
        pause-on-hover
        class="[--duration:90s]  "
        
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
        class="[--duration:90s]"
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
      name: "Jack",
      username: "Sales Manager",
      body: "The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome",
      img: "/actor.webp",
    },
    {
      name: "Jack",
      username: "Sales Manager",
      body: "The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome",
      img: "/actor.webp",
    },
    {
      name: "Jack",
      username: "Sales Manager",
      body: "The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome",
      img: "/actor.webp",
    },
    {
      name: "Jack",
      username: "Sales Manager",
      body: "The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome",
      img: "/actor.webp",
    },
    {
      name: "Jack",
      username: "Sales Manager",
      body: "The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome",
      img: "/actor.webp",
    },
    {
      name: "Jack",
      username: "Sales Manager",
      body: "The automation - hands down. I use Tidio all the time and suggest it to my clients for its ease of use and excellent support. I've not used it yet with shopping carts but I can really imagine it being awesome",
      img: "/actor.webp",
    },
  ];
  
  // Split reviews into two rows
  const firstRow = ref(reviews.slice(0, reviews.length / 2));
  const secondRow = ref(reviews.slice(reviews.length / 2));
  </script>