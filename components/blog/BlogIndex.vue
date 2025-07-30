<template>
  <div class="reactive">
    <div class="">
      <div class="px-10  border-l-4 border-emerald-400">
        <div class="font-semibold mt-20 mb-10 text-4xl md:text-7xl subpixel-antialiased capitalize dark:text-emerald-400">"Feel free to
          explore my blog"</div>
        <div class="mt-1 mb-8 text-zinc-500 text-xl">
          <p>
            This is where we tell our stories—sharing company news, project updates, and team moments with you.
          </p>
        </div>
      </div>
      <!-- <div class="fixed top-60 right-60  cc w-96 max-w-sm rounded-2xl">
                <div
                    class=" font-bold text-7xl text-black dark:text-white transform rotate-90 inline-block translate-y-30 -translate-x-30">
                    MY BLOGS</div>
                <div class="   p-4">
                    <div>
                        <span>Science
                            See all Science</span>
                    </div>
                    <div class="mt-4 border-l p-2 border-white">
                       <span class="text-4xl font-extrabold dark:text-white text-white"> How to design an actually good flash flood alert system</span>
                    </div>
                    <div class="rounded-sm overflow-hidden mt-8">
                        <img src="/case/case4.png" alt="">
                    </div>
                     <div class="text-xs mt-8">
                        <span class="font-bold  text-emerald-400 mr-10">Alex Wang</span> 
                        <span class="text-slate-600 dark:text-slate-100">May 13, 2024</span>
                     </div>
                </div>
            </div> -->
      <div class="mt-20">
        <!-- <BlogCard v-for="item in posts" :key="item.url" :title="item.frontmatter.title" :description="item.frontmatter
                .description" :src="item.frontmatter.image" :slug="item.url" /> -->
        <BlogItem v-for="item in posts" :key="item.url" :title="item.title" :description="item
          .description" :src="item.src" :slug="item.url" :author="item.author " :date="item.date "/>

      </div>
    </div>

  </div>
</template>
<script lang='ts' setup name='YourName'>
// import BlogCard from '../BlogCard.vue';
import BlogItem from './BlogItem.vue';
import { data as oldposts } from '../../.vitepress/theme/blog.data.js'
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
  
//console.log('posts', posts);



</script>
<style scoped>
.cc {
  height: 560px;
  background-color: rgba(82, 0, 255, .9)
}
</style>