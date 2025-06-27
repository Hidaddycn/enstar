<template>
    <div>
        <div class="px-10">
            <div class="text-3xl font-semibold mt-20">Team Stories</div>
            <div class="mt-2 mb-8 text-zinc-500">Behind-the-Scenes Stories of Our United Journey</div>
        </div>
        <div  class="px-10">
          <BlogCard v-for="item in posts" :key="item.link" :title="item.title" :description="item.frontmatter
.description" :src="item.image" :slug="item.url"/>
        </div>
  
    </div>
</template>
<script lang='ts' setup name='YourName'>
import BlogCard from '../BlogCard.vue';

import { data as posts } from '../../../.vitepress/theme/blog.data.js'
console.log(posts);
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