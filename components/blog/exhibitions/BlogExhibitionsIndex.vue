<template>
    <div>
        <div class="px-10">
            <div class="text-3xl font-semibold mt-20">Exhibitions Shows</div>
            <div class="mt-2 mb-8 text-zinc-500">This page contains a collection of miscellaneous notes, capturing the little moments and insights from life and work.</div>
        </div>
        <div  class="px-10">
            <BlogCard v-for="item in posts" :key="item.url" :title="item.frontmatter.title" :description="item.frontmatter
.description" :src="item.frontmatter.image" :slug="item.url"/>
        </div>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import BlogCard from '../BlogCard.vue';
import { data as posts } from '../../../.vitepress/theme/exhibitionsblog.data.js'


</script>
<style scoped></style>