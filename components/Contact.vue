<template>
    <div class="">
        <p
            class=" whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Contact Us
        </p>
       <div class="container mx-auto mt-10 max-w-2xl px-4 ">
            <!-- <p class="text-center text-lg text-gray-800 dark:text-gray-100">
                If you have any questions or inquiries, feel free to reach out to us. We are here to help!
            </p> -->
            <div class="text-left text-lg text-gray-800 dark:text-white mt-10">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400 font-semibold">COMPANY</p>
             <p class="text-sm leading-4 uppercase font-medium" >JIAXING EN STAR import & export co .,ltd (CHINA)</p>
            </div>
            <div class="text-left text-lg text-gray-800 dark:text-white mt-4">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400 font-semibold">ADDRESS</p>
             <p class="text-sm leading-4 uppercase font-medium" >No 1159 changsheng Road, Nanhu District, Jiaxing City, Zhejiang Province, China</p>
            </div>
            <div class="grid grid-cols-3 mt-4">
                <div class="text-left text-lg text-gray-800 dark:text-white ">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400 font-semibold">PHONE</p>
             <p class="text-sm leading-4 uppercase font-medium" >+086 13656617631</p>
            </div>
            <div class="text-left text-lg text-gray-800 dark:text-white ">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400  font-semibold">EMAIL</p>
             <p class="text-sm leading-4 uppercase font-medium hover:cursor-pointer" @click="openHanlder">Anne@go-lighting.cn</p>
            </div>
            <div class="text-left text-lg text-gray-800 dark:text-white ">
             <p class=" text-xs italic text-gray-800 dark:text-gray-400  font-semibold">WECHAT</p>
             <p class="text-sm leading-4 uppercase font-medium" >13656617631</p>
            </div>
            </div>
            <div class=" py-4 my-20 p-2 lg:flex gap-8 items-center">
            <div class="my-4 shrink-0">
                <img src="/logo-light.svg" alt="logo" class="w-20 h-20 "  v-if="!isDark">
                <img src="/logo-dark.svg" alt="logo" class="w-20 h-20 " v-if="isDark">
            </div>
            <div class="flex flex-col gap-1 max-w-2xl">
                <a href="/" class="text-blue-800 dark:text-blue-300 font-bold">JiaXing Enstar Import & Export Co., Ltd</a>
                <span class="text-gray-500 dark:text-gray-300 leading-5">As a leading Chinese LED panel light producer, we deliver innovative lighting solutions for global markets through cutting-edge manufacturing and reliable distribution networks.</span>
                <span href="" class="font-bold text-blue-800 dark:text-blue-300 hover:cursor-pointer relative z-50" @click="openHanlder">Anne@go-lighting.cn</span>
            </div>
            <div class="my-4 shrink-0">
                <img src="/wechat.jpg" alt="wechatpic" class="w-40 h-40 rounded-lg">
            </div>
        </div>
       
       </div>
        <div class="fullscreen flex flex-col z-10">
            <MyGridBackground class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
                :staticity="10" refresh />
        </div>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import MyGridBackground from './gridbackground/MyGridBackground.vue';

import { useData } from 'vitepress'

const { isDark } = useData()
const openHanlder = () => {
    // console.log('open contact us');
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