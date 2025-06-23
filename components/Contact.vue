<template>
    <div>
        <p
            class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Contact Us
        </p>
       <div class="container mx-auto mt-10 max-w-2xl px-4">
            <!-- <p class="text-center text-lg text-gray-800 dark:text-gray-100">
                If you have any questions or inquiries, feel free to reach out to us. We are here to help!
            </p> -->
            <div class="text-left text-lg text-gray-800 dark:text-white mt-10">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400 font-semibold">COMPANY</p>
             <p class="text-sm leading-4 uppercase font-medium" >JIAXING EN STAR import & export co .,ltd</p>
            </div>
            <div class="text-left text-lg text-gray-800 dark:text-white mt-4">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400 font-semibold">ADDRESS</p>
             <p class="text-sm leading-4 uppercase font-medium" >96 XX Road, Nanhu District, Jiaxing City, Zhejiang Province, China</p>
            </div>
            <div class="grid grid-cols-3 mt-4">
                <div class="text-left text-lg text-gray-800 dark:text-white ">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400 font-semibold">PHONE</p>
             <p class="text-sm leading-4 uppercase font-medium" >+086 15858302254</p>
            </div>
            <div class="text-left text-lg text-gray-800 dark:text-white ">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400  font-semibold">EMAIL</p>
             <p class="text-sm leading-4 uppercase font-medium" >Anne@go-light.com</p>
            </div>
            <div class="text-left text-lg text-gray-800 dark:text-white ">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400  font-semibold">WECHAT</p>
             <p class="text-sm leading-4 uppercase font-medium" >158858521</p>
            </div>
            </div>
           
       
       </div>
        <div class="fullscreen flex flex-col">
            <MyGridBackground class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
                :staticity="10" refresh />
        </div>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import MyGridBackground from './gridbackground/MyGridBackground.vue';

import { useData } from 'vitepress'

const { isDark } = useData()
</script>
<style scoped>
.fullscreen {
    position: fixed;
    /* 或 absolute */
    top: 0;
    left: 0;
    width: 100vw;
    /* 视口宽度 */
    height: 100vh;
    /* 视口高度 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* 确保在最上层 */
}
</style>