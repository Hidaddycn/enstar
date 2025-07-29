<template>
    <div class="">
        <div class=" my-8 " >
            <div class="relative w-full max-w-3xl hover:cursor-pointer " @click="goblogdetail">

                <div
                    class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-150 dark:bg-zinc-950 bg-gray-150 px-4 py-4 shadow-xl">
                    <!-- 16:9 图片容器 -->
                    <div class="relative w-full pt-[56.25%] overflow-hidden rounded-xl">
                        <!-- 56.25% = 9/16 * 100% -->
                        <img :src="src"
                            alt="" class="absolute top-0 left-0 w-full h-full object-cover">
                    </div>

                    <div class=" mt-6 mb-4 text-xl font-bold ">
                        {{title}}
                    </div>

                    <p class="mb-4 text-base font-normal text-slate-500 
          line-clamp-3 
          overflow-hidden">
                       {{ description }}
                    </p>

                    <div class="rounded-full border mt-4 px-2 py-1  dark:bg-white text-white text-xs dark:text-zinc-800 bg-zinc-950">Explore</div>
                    <Meteors />
                </div>
            </div>
        </div>
    </div>



</template>
<script lang='ts' setup name='YourName'>
import Meteors from '../Meteors.vue';
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
  }
})
const goblogdetail = ()=>{
 window.location.href = props?.slug;
}
</script>
<style scoped></style>