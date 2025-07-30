<template>
    <div>
        <div class="no-scrollbar overflow-y-hidden overflow-x-scroll"
            style="height: auto; transform: none; transform-origin: 50% 50% 0px;">
            <table class="w-full select-none">
                <thead class="text-left">
                    <tr
                        class="border-b border-grey-extra-light bg-beige-extra-light dark:border-grey-light dark:bg-zinc-900 bg-zinc-100 h-20">
                        <th
                            class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16  font-medium  tracking-28 text-black dark:text-white">
                            <span class="text-black dark:text-white">Size(MM)</span>
                        </th>
                        <th
                            class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16  font-medium  tracking-28 text-black dark:text-white">
                            <span class="text-black dark:text-white">Power (W)</span>
                        </th>
                        <th
                            class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16  font-medium  tracking-28 text-black dark:text-white">
                            <span class="text-black dark:text-white">Delivered lumens</span>
                        </th>
                        <th
                            class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16  font-medium  tracking-28 text-black dark:text-white">
                            <span class="text-black dark:text-white">CCT</span>
                        </th>
                        <th
                            class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16  font-medium  tracking-28 text-black dark:text-white">
                            <span class="text-black dark:text-white">Optic</span>
                        </th>
                        <th
                            class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16  font-medium  tracking-28 text-black dark:text-white">
                            <span class="text-black dark:text-white">Finishes</span>
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index"
                        class="hover:bg-zinc-50 dark:hover:bg-zinc-900 group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                        <td
                            class=" font-sans text-14-xd xxl:text-14-vw h-16 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            <span class="inline-flex items-center gap-4"><span>{{item.size}}</span></span>
                        </td>
                        <td
                            class=" font-sans text-14-xd xxl:text-14-vw h-16 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            25 W</td>
                        <td
                            class=" font-sans text-14-xd xxl:text-14-vw h-16 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            2104 lm</td>
                        <td
                            class=" font-sans text-14-xd xxl:text-14-vw h-16 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            2104 lm</td>
                        <td
                            class=" font-sans text-14-xd xxl:text-14-vw h-16 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            2104 lm</td>
                        <td
                            class=" font-sans text-14-xd xxl:text-14-vw h-16 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            2104 lm</td>






                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script lang='ts' setup name='YourName'>
interface Item {
  size: string
  power: string
  deliveredLumens: string
  cct: string
  optic: string
  finishes: string
}

interface Props {
  items?: Item[]
}

// 默认值
const props = withDefaults(defineProps<Props>(), {
  items: () => [
    {
      size: '4 inch',
      power: '10 W',
      deliveredLumens: '800 lm',
      cct: '3000 K',
      optic: '30°',
      finishes: 'White'
    },
    {
      size: '6 inch',
      power: '15 W',
      deliveredLumens: '1200 lm',
      cct: '4000 K',
      optic: '60°',
      finishes: 'Black'
    }
  ]
})
</script>
<style scoped></style>