<template>
    <div>
        <!-- 液体logo -->
        <div class="flex h-96 w-full items-center justify-center">
            <LiquidLogo image-url="/test.png" />
        </div>
        <!-- 文字 -->
        <div>
            <div class="font-bold text-7xl flex justify-center">EN STAR</div>
        </div>
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

                        <FlipWords :words='["Global", "Turkey", "Egypt", "Saudi Arabia", "Poland", "Germany"]'
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
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">Introduction to Team Members
        </div>
        <div class="relative h-[500px] w-full overflow-hidden rounded-lg z-20">
            <div class="mt-[64px] flex justify-center px-12">
                <TestimonialSlider :testimonials="testimonials" />
            </div>
        </div>
        <!-- 供应商 -->
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">World-class Vendors
        </div>
        <MyAnimatedBeam/>
        <!-- 地图 -->
        <!-- <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">From JIAXING
        </div>
        <MyWorldMap/> -->
        <!-- 核心价值 -->
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-30">World-class Vendors
        </div>
        <MyMeteors />
        <div class="text-6xl flex justify-center mt-80 font-bold text-center mb-10">Voices from Our Customers
        </div>
        <MyMarquee class="my-40" />

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


import { computed, watch } from "vue";
import { useColorMode } from "@vueuse/core";
import { ref } from "vue";
import { useData } from 'vitepress'
import { rand } from "@vueuse/core";
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
            "Inspira UI is sleeker than my star cruiser. Launch-ready in seconds. Zero crashes, zero gravity.",
        name: "Buzz Lightyear",
        role: "Intergalactic Interface Command",
    },
    {
        img: `/qinxue.jpg`,
        quote:
            "Clickin' around this thing feels like ridin' a horse with turbo boosters. Inspira’s got giddyup!",
        name: "Jessie",
        role: "Yeehaw Engagement & Barnyard UX",
    },
    {
        img: `/qinxue.jpg`,
        quote:
            "I’ve seen some clunky UIs in my day... but this one? Smoother than a tumbleweed on Tuesday.",
        name: "Woody",
        role: "Sheriff",
    },
    {
        img: `/qinxue.jpg`,
        quote:
            "I was terrified. Then I clicked. Nothing exploded. Inspira UI is a safe space. I’m thriving.",
        name: "Rex",
        role: "Senior Panic Tester, Dinosaur Usability Lab",
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