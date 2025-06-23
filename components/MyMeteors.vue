<template>
    <div class="grid grid-cols-3  container mx-auto px-20  gap-4">
        <div class="flex w-full flex-col items-center justify-center" v-for="i in 6">
        <div class="relative w-full max-w-md">
            <div class="absolute inset-0 size-full scale-[0.80] rounded-full" />
            <div
                class="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-150 dark:bg-zinc-950 bg-gray-100 px-4 py-8 shadow-xl">
                <div class="mb-4 flex size-5 items-center justify-center rounded-full border border-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" class="size-2 text-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

                <h1 class="relative  mb-4 text-xl font-bold text-white">
                    Meteors because they&apos;re cool
                </h1>

                <p class="relative  mb-4 text-base font-normal text-slate-500">
                    I don&apos;t know what to write so I&apos;ll just paste something cool here. One more
                    sentence because lorem ipsum is just unacceptable. Won&apos;t ChatGPT the shit out of
                    this.
                </p>

                <button class="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">Explore</button>
                <Meteors />
            </div>
        </div>
    </div>
    </div>
    


</template>
<script lang='ts' setup name='YourName'>
import Meteors from './Meteors.vue';
</script>
<style scoped></style>