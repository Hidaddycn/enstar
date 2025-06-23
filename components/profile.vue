<template>
  <div>
    <div class="container mt-20 m-auto ">
      <div class="text-center md:text-left ">
        <SparklesText text="We are En Star" :colors="{ first: '#9E7AFF', second: '#FE8BBB' }" :sparkles-count="10"
          class="my-4 " />

      </div>
      <div class="  md:grid grid-cols-4 gap-8 items-center">

        <p class="font-light italic text-xl text-justify  col-span-3 p-4">
          English Version:
          Jiaxing EN Star Import & Export Co., Ltd. is a professional global trading partner dedicated to delivering
          high-quality commodities worldwide. Guided by our core philosophy of "Star-Navigated, Trust-Shared", we
          provide
          efficient and reliable end-to-end import/export solutions. Leveraging the strategic advantages of the Yangtze
          River Delta, we specialize in building materials, consumer goods, and industrial equipment, offering
          customized
          services and robust supply chain management to bridge "Made in China" with global markets.
        </p>

        <div class="flex md:justify-end justify-center">
          <div class="flex flex-col justify-center items-center">
            <img src="/test.png" alt="" class="w-64 h-64 rounded-full">
            <span class="font-bold">Founder & CEO</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-10 md:block">
        <Button @click="openHanlder">Contant Us</Button>
      </div>
    </div>

    <div>
      <div class="p-18 container m-auto grid md:grid-cols-4 my-36 gap-2  md:px-0 ">
        <div class="card  m-auto rounded-2xl  bg-gray-50 p-10  md:col-span-1 ">
          <div class="text-xl mb-5 font-medium">Contact</div>
          <div class="font-light mb-2"><span>Block F, Shishangbang Road, Baibu Town (opposite The Accord), Jiaxing,
              Zhejiang, China</span></div>
          <div class="font-light mb-2"><span>Sales Manager</span></div>
          <div class="font-light mb-2"><span>contact: Anne</span></div>
          <div class="font-light "><span>Phone: +86-15858302254</span></div>
          <div class="font-light "><span>Email: Anne@go-lighting.cn</span></div>
        </div>
        <div class="m-auto rounded-2xl card max-h-80 bg-gray-50 p-10 md:col-span-1 ">
          <div class="text-xl mb-5 font-medium">Wechat</div>
          <img src="/wechat.jpg" alt="" class="w-50">
        </div>
        <div class="m-auto rounded-2xl card max-h-80 bg-gray-50 p-10 md:col-span-1 ">
          <div class="text-xl mb-5 font-medium">Wechat</div>
          <img src="/wechat.jpg" alt="" class="w-50">
        </div>
        <div class="m-auto rounded-2xl card max-h-80 bg-gray-50 p-10 md:col-span-1 ">
          <div class="text-xl mb-5 font-medium">Wechat</div>
          <img src="/wechat.jpg" alt="" class="w-50">
        </div>

      </div>

      <div class="container m-auto text-center mt-80">
        <div class="text-5xl font-bold">See how EN STAR partners with over 100 businesses</div>
      </div>
      <MyMarquee class="my-40" />

    </div>
    <div class="mt-20 mb-60 container m-auto">
      <div class="text-5xl font-bold text-center my-20">Our Values</div>
      <div class=" m-auto md:px-0 px-6">
        <ul class="grid md:grid-cols-2 gap-10">
          <li
            class=" card hover:bg-gray-100 px-5 py-5 gap-4 flex items-center rounded-2xl  bg-gray-50 font-light cursor-pointer">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 16 16"><!-- Icon from Charm Icons by Jay Newey - https://github.com/jaynewey/charm-icons/blob/main/LICENSE -->
                <g fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z" />
                  <path d="m5.75 7.75l1.5 1.5l3-3.5" />
                </g>
              </svg>
            </div>
            Trusted global partner delivering honest transactions with full transparency and ethical compliance.
          </li>
          <li
            class="card hover:bg-gray-100 px-5 py-5 gap-4 flex items-center rounded-2xl  bg-gray-50 font-light cursor-pointer">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 16 16"><!-- Icon from Charm Icons by Jay Newey - https://github.com/jaynewey/charm-icons/blob/main/LICENSE -->
                <g fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z" />
                  <path d="m5.75 7.75l1.5 1.5l3-3.5" />
                </g>
              </svg>
            </div>
            Rigorous inspections ensure premium products meeting international standards and client specifications.
          </li>
          <li
            class="card hover:bg-gray-100 px-5 py-5 gap-4 flex items-center rounded-2xl  bg-gray-50 font-light cursor-pointer">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 16 16"><!-- Icon from Charm Icons by Jay Newey - https://github.com/jaynewey/charm-icons/blob/main/LICENSE -->
                <g fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z" />
                  <path d="m5.75 7.75l1.5 1.5l3-3.5" />
                </g>
              </svg>
            </div>
            Seamless shipping solutions with real-time tracking and on-time delivery guarantee.

          </li>
          <li
            class="card hover:bg-gray-100 px-5 py-5 gap-4 flex items-center rounded-2xl  bg-gray-50 font-light cursor-pointer">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                viewBox="0 0 16 16"><!-- Icon from Charm Icons by Jay Newey - https://github.com/jaynewey/charm-icons/blob/main/LICENSE -->
                <g fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                  <path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z" />
                  <path d="m5.75 7.75l1.5 1.5l3-3.5" />
                </g>
              </svg>
            </div>
            Smart digital solutions and market intelligence for competitive sourcing advantages.
          </li>


        </ul>
      </div>
    </div>
    <!-- <Modal @close="closehandler" :isOpen="isOpen"/> -->
  </div>



</template>
<script setup>
import MyMarquee from './MyMarquee.vue'
import MyButton from './mybutton.vue'
import Button from './Button.vue'
import Timeline from './TimeLine.vue'
import FlipWords from './FlipWords.vue'
import SparklesText from './SparklesText.vue'
import MyGlowingEffect from './MyGlowingEffect.vue'

//import Modal from './Modal.vue'

import {ref } from 'vue'
const isOpen = ref(false)
// const closehandler= ()=>{
//   isOpen.value = false
// }

const openHanlder = ()=>{
  const to = 'someone@example.com'; // 收件人邮箱地址
      const subject = 'From My Website: go-lighting.cn'; // 邮件主题
      const body = 'Hi My Friend ...'; // 邮件正文

      // 使用 encodeURIComponent 对主题和正文进行 URL 编码
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

</script>
<style scoped>
/* img {
  width: 181px;
  height: 181px;
} */

.bg {
  height: 500px;
  background-image: url('/img/2.svg');
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: 50%;
}

.card {
  background-color: var(--vp-c-bg-soft);
}
</style>