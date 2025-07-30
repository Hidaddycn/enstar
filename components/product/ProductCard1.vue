<template>

  <div class=" hover:cursor-pointer group" @click="goblogdetail">

    <div
      class="relative flex h-full flex-col  items-start justify-end overflow-hidden rounded-2xl border border-gray-150 dark:bg-zinc-950 bg-gray-150 px-4 py-4 shadow-xl ">
      <!-- 16:9 图片容器 -->
      <div class="relative group-hover:-translate-y-60 transition-transform duration-1000 ease-in-out rongqi">
        <div
          class="  relative w-full  rounded-xl overflow-hidden opacity-100 group-hover:opacity-0  duration-1000 ease-in-out">
          <!-- 56.25% = 9/16 * 100% -->
          <img :src="src" alt="" class=" w-full h-full object-cover">
        </div>

        <div class=" mt-6 mb-4 md:text-3xl text-xl font-bold text-center  w-full">
          {{ title }}
        </div>

        <p class="mb-4 md:text-xl 
        text-center
        px-2
        line-clamp-2
        overflow-hidden">
          {{ description }}
        </p>
        <div class="mt-20   text-secondary">
          <p>
            <span class="mx-2">2700K</span>
            <span class="mx-2">3000K</span>
            <span class="mx-2">4500K</span>
          </p>
          <p>Power (W): 1 W</p>
          <p>Delivered lumens: min 74 lm - max 85 lm</p>
          <p>IP: IP65</p>
          <!-- <div class="flex justify-center mt-4 gap-4">
            <span class="w-6 h-6 rounded-full bg-blue-100 block"></span>
            <span class="w-6 h-6 rounded-full bg-gray-100 block"></span>
            <span class="w-6 h-6 rounded-full bg-red-100 block"></span>
          </div> -->









        </div>

        <!-- <div class="flex items-center justify-between mt-4 w-full">
          <div
            class="rounded-full border w-full py-2 text-center  bg-gray-200 text-white text-xs dark:text-zinc-800 dark:bg-zinc-900">
            View Detail</div>

        </div> -->
      </div>
      <!-- <Meteors /> -->
    </div>
  </div>




</template>
<script lang='ts' setup name='YourName'>
// import Meteors from '../Meteors.vue';
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
const goblogdetail = () => {
  window.location.href = props?.slug;
}
</script>
<style scoped>
/* .rongqi {
  height: 480px;
}
@media (min-width: 400px) {
  .rongqi {
    height: 480px;
  }
}

@media (min-width: 640px) {
  .rongqi {
    height: 580px;
  }
}

@media (min-width: 768px) {
  .rongqi {
    height: 580px;
  }
} */

.dark .text-secondary {
  color: white;
  
}
.text-secondary {
  text-align: center;
  color:black;
  position: absolute;
  top: 100%;
  /* 初始位置在容器底部 */
  left: 0;
  width: 100%;
  opacity: 1;
  /* 初始不可见 */
  transition: opacity 0.3s ease;
}

.container:hover .text-secondary {
  opacity: 1;
  /* 显示第二段文字 */
}
</style>