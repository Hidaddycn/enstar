<template>
    <!-- <div class="px-8 py-8">
        <header>
           
            <div class="my-10 text-sm">
                <span >By: <em class="  text-emerald-400 - not-italic">{{ $frontmatter.author }}</em></span>
                <span class="ml-10" >Update: <em class="not-italic ">{{ $frontmatter.date.slice(0,10) }}</em></span>
            </div>
       
            <div class="my-10 max-w-3xl ">
                <h1 class="lg:!text-7xl !text-2xl  !font-bold !capitalize !leading-18">{{ $frontmatter.title }}</h1>
            </div>
            <div class="my-10 text-lg leading-6 border-l-emerald-400 border-l-4 px-4">
                <span>{{ $frontmatter.description }}</span>
            </div>
      
             <div class="rounded-md  overflow-hidden my-10 subpixel-antialiased">
                <img :src="$frontmatter.image" alt="picure">
             </div>
           
        </header>
        <main class="vp-doc code-block max-w-2xl mx-auto my-20">
           
            <Content />
        </main>
     
        <div class="max-w-2xl mx-auto">
            <div class="grid grid-cols-2 gap-4  my-10 pt-10 border-t border-gray-200 dark:border-gray-800 ">
                <a v-if="prev" :href="prev.link" class=" transition-colors border hover:border-blue-800 dark:hover:border-blue-400 h-20 rounded-lg overflow-hidden p-2 flex gap-4 items-center ">
                    <span>←</span>
                    <div>
                         <div class="text-sm">{{ prev.holder }}</div>
                         <div class="text-blue-800 dark:text-blue-300 font-medium">{{ prev.text }}</div>
                    </div>
                </a>

                 <a v-if="next" :href="next.link" class=" transition-colors border hover:border-blue-800 dark:hover:border-blue-400  h-20 rounded-lg overflow-hidden p-2 flex gap-4 items-center justify-end">
                 
                    <div class="text-right">
                         <div class="text-sm">{{ next.holder }}</div>
                         <div class="text-blue-800 dark:text-blue-300 font-medium">{{ next.text }}</div>
                    </div>
                       <span> → </span>
                </a>
             
                
              
            </div>
        </div>
        <div class="border-t border-b py-4 my-20 p-2 lg:flex gap-8 items-center">
            <div class="my-4 shrink-0">
                <img src="/logo-light.svg" alt="logo" class="w-20 h-20 "  v-if="!isDark">
                <img src="/logo-dark.svg" alt="logo" class="w-20 h-20 " v-if="isDark">
            </div>
            <div class="flex flex-col gap-1 max-w-2xl">
                <a href="/" class="text-blue-800 dark:text-blue-300 font-bold">JiaXing Enstar Import & Export Co., Ltd</a>
                <span class="text-gray-500 dark:text-gray-300 leading-5">As a leading Chinese LED panel light producer, we deliver innovative lighting solutions for global markets through cutting-edge manufacturing and reliable distribution networks.</span>
                <span href="" class="font-bold text-blue-800 dark:text-blue-300 hover:cursor-pointer" @click="openHanlder">Anne@go-lighting.cn</span>
            </div>
            <div class="my-4 shrink-0">
                <img src="/wechat.jpg" alt="wechatpic" class="w-40 h-40 rounded-lg">
            </div>
        </div>
        <footer>
          
            <Giscus :key="page.filePath" id="comments" repo="Hidaddycn/enstar" repoId="R_kgDOPAKKgQ" category="General"
                categoryId="DIC_kwDOPAKKgc4CsCI7" mapping="pathname" reactionsEnabled="1" emitMetadata="0"
                inputPosition="bottom" :theme="isDark ? 'dark' : 'light'" lang="en" crossorigin="anonymous" />
        </footer>
    </div> -->

    <div class="px-8 py-8">
        <!-- 顶部 面包屑-->
        <div class="border-b  bg-white dark:bg-black ">
            <div class=" p-3 px-9 rounded-sm inline-block text-black font-semibold hover:cursor-pointer dark:text-white  outline-offset-2 outline-1 dark:hover:outline-white hover:outline-black "
                @click="goframe"> <span class="inline-block mr-2">←</span> All Frame</div>
            <div class="my-10 text-5xl font-semibold  ">
                <span>{{ $frontmatter.title }}</span>
            </div>
        </div>
        <!-- 主图和文字 -->
        <div>
            <div class="my-4  grid lg:grid-cols-2 gap-4 ">
                <AppleCardCarousel class="border rounded-2xl overflow-hidden md:p-4">
                    <AppleCarouselItem v-for="(card, index) in data" :key="index" :index="index" class="  ">
                        <AppleCard :card="card" :index="index" :layout="true" class=" ">
                            <div :key="`dummy-content${index}`"
                                class="mb-4 rounded-3xl bg-[#F5F5F7]   dark:bg-neutral-800  overflow-hidden  w-80 ss">
                                <img :src="card.src" alt="Macbook mockup from Aceternity UI" class="" />
                            </div>
                        </AppleCard>
                    </AppleCarouselItem>
                </AppleCardCarousel>
                <!-- 文字 -->
                <div class="lg:p-24 flex items-center">
                    <div>
                        <h2 class="!text-5xl  !text-center !my-10">Led Panel Light Frame</h2>
                        <p class="text-xl lg:text-2xl">stickyThe Doge_P lamp features a circular, radiating shape with a wavy,
                            jagged profile,
                            reminiscent of a fan or a pleated disc. Its design is marked by regular folds that radiate
                            outward from the center, creating an intriguing play of light and shadow on the surface. At
                            the
                            center of the lamp body, the exposed light source enhances the industrial and decorative
                            aesthetic of the object. The overall effect is light and graphic, with a strong yet
                            harmonious
                            visual impact, making it ideal for modern and creative interiors.
                            The body is made of painted metal with a textured finish and is available in five elegant
                            color
                            variants: white, black, peach, petrol, and deep blue, offering great freedom of
                            customization.
                            Equipped with an E27 socket, it supports a LED Bulb light source up to 22W, ensuring
                            efficient
                            and sustainable lighting.</p>
                    </div>
                </div>

            </div>
        </div>
        <main class="v  my-20">
            
            <Content />
        </main>

    </div>
</template>
<script lang='ts' setup name='YourName'>
import { computed } from 'vue';
import Giscus from "@giscus/vue";
import { useData } from "vitepress";
import AppleCardCarousel from '../../components/AppleCardCarousel.vue';
import AppleCarouselItem from '../../components/AppleCarouselItem.vue';

import { data as oldposts } from '../../.vitepress/theme/blog.data.js'
const data = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: "/product/1_1.jpg",
    },

];
const openHanlder = () => {
    // console.log('open contact us');
    const to = 'Anne@go-lighting.cn'; // 收件人邮箱地址
    const subject = 'From My Website: go-lighting.cn'; // 邮件主题
    const body = 'Hi My Friend ...'; // 邮件正文

    // 使用 encodeURIComponent 对主题和正文进行 URL 编码
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

const { isDark, page, frontmatter } = useData();
let posts = oldposts.map((post) => {
    return {
        title: post.frontmatter.title,
        date: new Date(post.frontmatter.date), // 转为 Date 对象
        url: post.url,
        description: post.frontmatter.description,
        src: post.frontmatter.image,
        author: post.frontmatter.author,
        slug: post.url
    }
})
    .sort((a, b) => b.date - a.date) // 降序（最新在前）



// 获取当前文章的索引
const currentIndex = computed(() => {
    if (!posts || !page.value) return -10;

    // 获取当前页面的路径（移除 .md 后缀）
    const currentPath = '/' + page.value.relativePath.replace(/\.md$/, '');

    // 在 posts 数组中查找匹配的路径（移除 .html 后缀）
    return posts.findIndex(post => {
        const postPath = post.url.replace(/\.html$/, '');
        console.log('postPath', postPath);
        return currentPath === postPath;
    });
});

// 获取上一篇文章
const next = computed(() => {
    if (currentIndex.value === -1 || currentIndex.value >= posts.length - 1) {
        return null;
    }

    const prevPost = posts[currentIndex.value + 1]; // 因为是降序，所以+1是更旧的文章
    return {
        holder: 'Next Page',
        text: prevPost.title.slice(0, 20) + '...',
        link: prevPost.url
    };
});

// 获取上一篇文章
const prev = computed(() => {
    if (currentIndex.value <= 0) { // 如果是第一篇文章（索引0）或未找到，就没有下一篇
        return null;
    }

    const nextPost = posts[currentIndex.value - 1]; // 因为是降序，所以-1是更新的文章
    return {
        holder: 'Previous Page',
        text: nextPost.title.slice(0, 20) + '...',
        link: nextPost.url
    };
});

const goframe = () => {
  window.location.href = '/product/led-panel-light-frame/index';
}



</script>
<style>
/* .img{
    width: 700px;
} */

@media (min-width: 768px) {
    .ss {
        width: 500px;
    }
}

@media (min-width: 1024px) {
    .ss {
        width: 600px;
    }
}

@media (min-width: 1240px) {
    .ss {
        width: 700px;
    }
}

@media (min-width: 1920px) {
    .ss {
        width: 800px;
    }
}
</style>