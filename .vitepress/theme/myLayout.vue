<template>
    <div class="px-8 py-8">
        <header>
             <!-- 自定义布局的头部内容 -->
              <!-- 作者和时间 -->
            <div class="my-10 text-sm">
                <span >By: <em class="  text-emerald-400 - not-italic">{{ $frontmatter.author }}</em></span>
                <span class="ml-10" >Update: <em class="not-italic ">{{ $frontmatter.date.slice(0,10) }}</em></span>
            </div>
            <!-- 标题 -->
            <div class="my-10 max-w-3xl ">
                <h1 class="lg:!text-7xl !text-2xl  !font-bold !capitalize !leading-18">{{ $frontmatter.title }}</h1>
            </div>
            <div class="my-10 text-lg leading-6 border-l-emerald-400 border-l-4 px-4">
                <span>{{ $frontmatter.description }}</span>
            </div>
            <!-- 封面 -->
             <div class="rounded-md  overflow-hidden my-10 subpixel-antialiased">
                <img :src="$frontmatter.image" alt="picure">
             </div>
           
        </header>
        <main class="vp-doc code-block max-w-2xl mx-auto my-20">
            <!-- 确保这里渲染了 Markdown 内容 -->
            <Content />
        </main>
         <!-- 使用默认主题的导航 -->
        <!-- 添加上一篇/下一篇导航 -->
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
            <!-- 自定义布局的尾部内容 -->
            <Giscus :key="page.filePath" id="comments" repo="Hidaddycn/enstar" repoId="R_kgDOPAKKgQ" category="General"
                categoryId="DIC_kwDOPAKKgc4CsCI7" mapping="pathname" reactionsEnabled="1" emitMetadata="0"
                inputPosition="bottom" :theme="isDark ? 'dark' : 'light'" lang="en" crossorigin="anonymous" />
        </footer>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import { computed } from 'vue';
import Giscus from "@giscus/vue";
import { useData } from "vitepress";


import { data as oldposts } from '../../.vitepress/theme/blog.data.js'
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
          description:post.frontmatter.description,
          src: post.frontmatter.image,
          author: post.frontmatter.author,
          slug: post.url
        }
      })
      .sort((a, b) => b.date - a.date) // 降序（最新在前）
  


// 获取当前文章的索引
const currentIndex = computed(() => {
  if (!posts|| !page.value) return -10;

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
console.log('当前文章:', frontmatter.value);
console.log('当前索引:', currentIndex.value);
console.log('上一篇:', prev.value);
console.log('下一篇:', next.value);



</script>
<style >

</style>