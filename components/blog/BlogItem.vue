<template>
    <div class="">
        <div class=" my-12 border-b p-4  max-w-4xl dark:hover:bg-stone-950 hover:bg-slate-50 transition" >
            <div class="hover:cursor-pointer " @click="goblogdetail">
                <div class="flex justify-between gap-4">
                    <!-- <div class="shrink-0 border-l border-emerald-400 "></div> -->
                   <div>
                     <div class="leading-tight font-bold text-xl xl:text-3xl lg:h-28 h-24 subpixel-antialiased tracking-tight overflow-hidden  hover:underline decoration-emerald-400 underline-offset-4">{{props.title}}</div>
                     <div class="text-xs mt-2">
                        <span class="font-bold  text-emerald-400 mr-10">{{props.author}}</span> 
                        <span class="text-slate-600 dark:text-slate-100">{{ props.date.toLocaleDateString('en-US', options) }}</span>
                     </div>
                   </div>
                    <div class="lg:h-32 rounded-sm overflow-hidden lg:w-40 w-24 h-24 shrink-0">
                        <img :src="props.src" alt="" class="bolgimg ">
                    </div>

                </div>
            </div>
        </div>
    </div>



</template>
<script lang='ts' setup name='YourName'>
import Meteors from '../Meteors.vue';
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
// const formattedDate = date.toLocaleDateString('en-US', options);
const props = defineProps({
    src: {
      type: String,
      default: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  title: {
    type: String,
    default: 'Product Title'
  },
  description: {
    type: String,
    default: 'Product Description'
  },
  slug: {
    type: String,
    default: '/blog/index'
  },
  author: {
    type: String,
    default: 'Alex Wang'
  },
  date: {
    type: String,
    default: 'May 13, 2024'
  }
})
const goblogdetail = ()=>{
 window.location.href = props?.slug;
}
</script>
<style scoped>
.bolgimg {
    height: 100%;
    object-fit: cover;
}
</style>