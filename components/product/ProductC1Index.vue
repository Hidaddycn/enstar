<template>
    <div>
        <div class="px-10 border-b my-10">
            <div class="bg-black mr-6 p-3 px-9 rounded-sm inline-block text-white font-semibold  dark:text-black dark:bg-white">Frame</div>
            <div class=" p-3 px-9 rounded-sm inline-block text-black font-semibold hover:cursor-pointer dark:text-white  outline-offset-2 outline-1 dark:hover:outline-white hover:outline-black " @click="godriver">Driver</div>
            <div class="text-6xl font-semibold mt-20">Led Panel Light Frame</div>
            <div class="mt-2 mb-8 text-zinc-500">This page contains a collection of miscellaneous notes, capturing the little moments and insights from life and work.</div>
        </div>
        <div  class="px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 mx-auto">
          <ProductCard1 v-for="item in teamStories" :key="item.link" :title="item.title" :description="item.description" :src="item.image" :slug="item.link"/>
        </div>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import ProductCard1 from './ProductCard1.vue';
const teamStories = [
    {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/product/led-panel-light-driver/text.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/1_1.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/3.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },
     {
        title: 'Our Team',
        description: 'Meet the dedicated individuals behind our success.',
        image: '/product/main.jpg',
        link: '/blog/team/two.html'
    },

    
   
];

const godriver = () => {
  window.location.href = '/product/led-panel-light-driver/index';
}
</script>
<style scoped></style>