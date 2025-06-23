<template>
    <div
      ref="containerRef"
      class="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  p-10 md:shadow-xl"
    >
      <div
        class="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10"
      >
        <div class="flex flex-row items-center justify-between">
          <div
            ref="div1Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
          <div
            ref="div5Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div
            ref="div2Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
          <div
            ref="div4Ref"
            class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 text-black shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
          <div
            ref="div6Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div
            ref="div3Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
          <div
            ref="div7Ref"
            class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 7.5v9l-4 2.25L12 21l-4-2.25l-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25l4-2.25M12 12v9m0-9L8 9.75L4 7.5"/><path d="m20 12l-4 2v4.75M4 12l4 2v4.75m0-13.5l4 2.25l4-2.25"/></g></svg>
          </div>
        </div>
      </div>
  
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div1Ref"
        :to-ref="div4Ref"
        :curvature="-75"
        :end-y-offset="-10"
        :duration="7"
      />
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div2Ref"
        :to-ref="div4Ref"
         :duration="6"
      />
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div3Ref"
        :to-ref="div4Ref"
        :curvature="75"
        :end-y-offset="10"
          :duration="5"
      />
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div5Ref"
        :to-ref="div4Ref"
        :curvature="-75"
        :end-y-offset="-10"
          :duration="6"
      />
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div6Ref"
        :to-ref="div4Ref"
      />
      <AnimatedBeam
        :container-ref="containerRef"
        :from-ref="div7Ref"
        :to-ref="div4Ref"
        :curvature="75"
        :end-y-offset="10"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import AnimatedBeam from "./AnimatedBeam.vue";
  
  const containerRef = ref(null);
  const div1Ref = ref(null);
  const div2Ref = ref(null);
  const div3Ref = ref(null);
  const div4Ref = ref(null);
  const div5Ref = ref(null);
  const div6Ref = ref(null);
  const div7Ref = ref(null);
  </script>