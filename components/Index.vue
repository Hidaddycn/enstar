<template>

    <div class="px-4">
        <FluidCursor />
        <!-- 液体logo -->
        <div class="h-96 w-full items-center justify-center hidden md:block z-20 relative">
            <LiquidLogo image-url="/yetai.png" />
            <!-- <TextGlitch class="text-6xl font-bold" text="EN STAR" /> -->
        </div>

        <!-- <div class="w-full rounded-lg p-4 flex items-center justify-center">
            <TextGlitch :speed="1" :enable-shadows="true" text="EN STAR" />
        </div> -->
        <!-- 文字 -->
        <div class="flex justify-center ">
            <div class="text-blance flex justify-center  z-20">
                <div class="text-balance text-center text-4xl font-bold  leading-loose">
                    <LinkPreview url="https://tailwindcss.com" class="" imageSrc="/p1.jpg" :isStatic="true">
                        <span
                            class="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent hover:cursor-pointer">
                            Lighting .
                        </span>
                    </LinkPreview>
                    the Way, Across the
                    <!-- <TextHighlight class="rounded-xl bg-gradient-to-r from-green-300 to-blue-300 p-2"
                        text-end-color="hsl(var(--accent))">

                        <FlipWords :words='["Global", "Turkey", "Egypt", "Saudi Arabia", "Poland", "Germany"]'
                            :duration="3000" class="text-4xl !text-primary" />
                    </TextHighlight> -->
                    <span class="rounded-xl bg-gradient-to-r from-green-300 to-blue-300 p-2"
                        text-end-color="hsl(var(--accent))">

                        <FlipWords :words='["Global", "Kenya", "Turkey", "Egypt", "Saudi Arabia", "Poland", "Germany"]'
                            :duration="3000" class="text-4xl !text-primary" />
                    </span>

                </div>
            </div>
        </div>

        <div class="flex items-center justify-center  p-4">
            <TextGenerateEffect class="md:w-1/3 text-center "
                words="We are a LED panel light supplier from China. Though separated by thousands of miles, our high-quality products, prompt service, and mutual trust will build a strong business partnership between us." />
        </div>
        <!-- 按钮 -->
        <div class=" z-20 flex h-56 w-full flex-col items-center justify-center ">
            <GradientButton :bg-color="bgColor" @click="openHanlder" class="hover:cursor-point  z-20">Contact Us 🚀
            </GradientButton>
        </div>
        <!-- 核心人物介绍 -->
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10 relative z-50">Team Introduction
        </div>
        <div class="relative h-[500px] w-full overflow-hidden rounded-lg z-20">
            <div class="mt-[64px] flex justify-center px-12">
                <TestimonialSlider :testimonials="testimonials" />
            </div>
        </div>
        <!-- 供应商 -->
        <!-- <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">World-class Vendors
        </div> -->
        <!-- <MyAnimatedBeam/> -->
        <!-- 地图 -->
        <!-- <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">From JIAXING
        </div>
        <MyWorldMap/> -->
        <!-- 核心价值 -->
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-30">Application Case
        </div>
        <!-- <MyMeteors /> -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto   gap-4">
            <!-- 案例 -->
            <div class="relative z-10 " v-for="item in caselist">
                <CardContainer>
                    <CardBody
                        class="group/card  relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                        <CardItem :translate-z="50" class="text-xl font-bold text-neutral-600 dark:text-white mb-4">
                            {{ item.title }}
                        </CardItem>
                        <CardItem as="p" translate-z="60"
                            class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300 line-clamp-2">
                            {{ item.desc }}
                        </CardItem>
                        <CardItem :translate-z="100" class="mt-4 w-full">
                            <img :src="item.image"
                                class="min-h-60 max-h-60 w-full overflow-hidden border rounded-md object-cover group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div class="mt-20 flex items-center justify-between">
                            <CardItem :translate-z="20" as="a" :href="item.src"
                                class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white">
                                Visit →
                            </CardItem>

                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">Voices from Our Customers
        </div>
        <MyMarquee class="my-40" />

        <!-- beijing -->
        <div class="fullscreen flex flex-col">
            <ParticlesBg class="absolute inset-0" :quantity="100" :ease="100" :color="isDark ? '#FFF' : '#000'"
                :staticity="10" refresh />
        </div>
    </div>
</template>

<script lang="ts" setup name="YourName">
import ParticlesBg from './ParticlesBg.vue';
import FlipWords from './FlipWords.vue';
import LinkPreview from './LinkPreview.vue';
import LiquidLogo from './liquidlogo/LiquidLogo.vue';
import TextGenerateEffect from './TextGenerateEffect.vue';
import GradientButton from './GradientButton.vue';
import TestimonialSlider from './TestimonialSlider.vue';
import MyMarquee from './MyMarquee.vue';
import MyWorldMap from './MyWorldMap.vue';
import MyAnimatedBeam from './MyAnimatedBeam.vue';
import MyMeteors from './MyMeteors.vue';
import TextHighlight from './TextHighlight.vue';
import FluidCursor from './FluidCursor.vue';
import TextGlitch from './TextGlitch.vue';
import CardContainer from "./CardContainer.vue";
import CardBody from "./CardBody.vue";
import CardItem from "./CardItem.vue";


import { computed, watch } from "vue";
import { useColorMode } from "@vueuse/core";
import { ref } from "vue";
import { useData } from 'vitepress'
import { rand } from "@vueuse/core";

const caselist = ref([
    { id: 1, title: "Radiology Suite | Hospital CT Room In Poland", desc: 'Ultra-uniform 600 × 600 mm LED panel lights deliver flicker-free 5 000 K daylight inside a Beijing hospital’s CT scanning suite. The 0–100 % DALI dimming curve keeps luminance below 300 cd/m² during patient positioning, eliminating ghost images on the CT console while cutting energy use by 60 % compared with legacy fluorescent troffers ', image: "/case/case2.png", src: 'blog/blogs/Radiology-Suite-Hospital-CT-Room-In-Poland.html' },
    { id: 2, title: "Productivity Boost | Open-Plan Office In Turkey", desc: 'A 200-desk insurance office swapped out aging fluorescent troffers for 40 W edge-lit LED panels with 0–10 V dimming. Simple wall-slider controls let staff brighten or dim rows as needed, cutting eye-strain complaints by 20 % and shaving 45 % off the lighting portion of the monthly utility bill—no smart apps, no LEED consultants, just better light.s', image: "/case/case1.png", src: 'blog/blogs/Productivity-Boost-Open-Plan-Office-In-Turkey.html' },
    { id: 3, title: "Comfort Care | General Wards Our Led Panel Light In Saudi Arabia", desc: 'Energy-saving LED panels have been installed in the ward, delivering even, glare-free light throughout the space. This lighting design creates a comfortable visual environment for patients, preventing eye strain caused by excessive or uneven illumination.', image: "/case/case3.png", src: 'blog/blogs/Comfort-Care-General-Wards-Our-Led-Panel-Light-In-Saudi-Arabia.html' },
    { id: 4, title: "Bright Minds | Classroom In Germany", desc: 'A German primary school has upgraded all 30 classrooms with 40 W LED panels  The panels emit a gentle, glare-free light that minimizes eye strain and fatigue—ideal for students who spend long days indoors. Their high efficiency cuts annual lighting electricity use by 58 %, freeing enough budget to purchase 2,00 new textbooks each year while also lowering the school’s carbon footprint.', image: "/case/case4.png", src: 'blog/blogs/Bright-Minds-Classroom-In-Germany.html' },
    { id: 5, title: "Power Workout | Fitness Studio In Egypt", desc: 'In a 24-hour gym in Egypt, high-lumen 1 × 4 ft panels (125 lm/W) provide shadow-free lighting for free-weight zones. The fixtures have a lifespan of over 50,000 hours and slash midnight energy draw by 85%.', image: "/case/case5.png", src: 'blog/blogs/Power-Workout-Fitness-Studio-In-Egypt.html' },
    { id: 6, title: "Shop in Style | Shopping Mall In Kenya", desc: 'A supermarket in Nairobi, Kenya, has switched to our LED panels. The enhanced color rendering makes merchandise stand out, boosting foot traffic by 12 %, while the energy-efficient fixtures cut the owner’s electricity bill by 30 %.', image: "/case/case6.png", src: 'blog/blogs/Shop-in-Style-Shopping-Mall-In-Kenya.html' },
]);
const { isDark } = useData()
const bgColor = computed(() => (isDark.value ? "#000" : "#fff"));

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


const testimonials = [
    {
        img: `/qinxue.jpg`,
        quote:
            "200+ satisfied global clients can attest to our solutions. For stable quality and competitive pricing, contact me anytime!",
        name: "Anne QIN",
        role: "Sales Manager",
    },
    {
        img: `/zhuxiaoming.jpg`,
        quote:
            "At EN Star, we don't just sell LED lights - we deliver solutions that brighten people's lives.",
        name: "Jack ZHU",
        role: "CEO",
    },
    {
        img: `/zhangsan.png`,
        quote:
            "Robust financial management forms the foundation for EN Star's accelerated development.",
        name: "Frank ZHANG",
        role: "CFO",
    },

];



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