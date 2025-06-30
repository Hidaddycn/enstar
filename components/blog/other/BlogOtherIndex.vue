<template>
    <div>
        <div class="px-10">
            <div class="text-3xl font-semibold mt-20">Other</div>
            <div class="mt-2 mb-8 text-zinc-500">This page contains a collection of miscellaneous notes, capturing the little moments and insights from life and work.</div>
        </div>
        <div  class="px-10">
            <BlogCard v-for="item in posts" :key="item.url" :title="item.frontmatter.title" :description="item.frontmatter
.description" :src="item.frontmatter.image" :slug="item.url"/>
        </div>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import { data as posts } from '../../../.vitepress/theme/otherblog.data.js'
// console.log(posts);
import BlogCard from '../BlogCard.vue';
const teamStories = [
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/two.html'
    },
    {
        title: 'Team Achievements',
        description: 'Celebrating our milestones and accomplishments.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/one.html'
    },
    {
        title: 'Team Culture',
        description: 'Exploring the values and culture that unite us.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/'
    },
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/two.html'
    },
    {
        title: 'Team Achievements',
        description: 'Celebrating our milestones and accomplishments.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/one.html'
    },
    {
        title: 'Team Culture',
        description: 'Exploring the values and culture that unite us.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/'
    },
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/two.html'
    },
    {
        title: 'Team Achievements',
        description: 'Celebrating our milestones and accomplishments.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/one.html'
    },
    {
        title: 'Team Culture',
        description: 'Exploring the values and culture that unite us.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/'
    },
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/two.html'
    },
    {
        title: 'Team Achievements',
        description: 'Celebrating our milestones and accomplishments.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/one.html'
    },
    {
        title: 'Team Culture',
        description: 'Exploring the values and culture that unite us.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/'
    },
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/two.html'
    },
    {
        title: 'Team Achievements',
        description: 'Celebrating our milestones and accomplishments.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/one.html'
    },
    {
        title: 'Team Culture',
        description: 'Exploring the values and culture that unite us.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/'
    },
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/two.html'
    },
    {
        title: 'Team Achievements',
        description: 'Celebrating our milestones and accomplishments.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/one.html'
    },
    {
        title: 'Team Culture',
        description: 'Exploring the values and culture that unite us.',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/blog/team/'
    }
];

</script>
<style scoped></style>