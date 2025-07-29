<template>
<div>
    <div class="no-scrollbar overflow-y-hidden overflow-x-scroll"
                style="height: auto; transform: none; transform-origin: 50% 50% 0px;">
                <table class="w-full select-none">
                    <thead class="text-left">
                        <tr
                            class="border-b border-grey-extra-light bg-beige-extra-light dark:border-grey-light dark:bg-grey-dark">
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">Code</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">Power (W)</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">Delivered lumens</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">CCT</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">Optic</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">Finishes</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">Control</span></th>
                            <th
                                class=" font-sans text-14-xd xxl:text-14-vw relative whitespace-nowrap px-16 py-8 font-medium leading-150 tracking-28 text-black dark:text-white">
                                <span class="text-black dark:text-white">CRI</span></th>
                            <th class="sticky right-0 whitespace-nowrap text-right">
                                <div
                                    class="relative bg-beige-extra-light px-24 py-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:bg-grey-dark dark:before:dark:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                    <button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 ml-auto rotate-180"
                                        aria-label="Close"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DBBMDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2104 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Super warm white" title="Super warm white" role="img"
                                        style="background-image: conic-gradient(rgb(247, 232, 193) 0deg, rgb(247, 232, 193) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>2700
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                  
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Black Ral 9005" title="Text Black Ral 9005" role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/04ba81fda0b03d0f3d915d1eb60270a3_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Black Ral 9005</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dbbmdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DBEMDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2104 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Super warm white" title="Super warm white" role="img"
                                        style="background-image: conic-gradient(rgb(247, 232, 193) 0deg, rgb(247, 232, 193) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>2700
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                   
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Beige Red Ral 3012" title="Text Beige Red Ral 3012"
                                            role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/beaf246e79e7a7c144e8211cc5c0119b_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Beige Red Ral 3012</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dbemdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DGBMDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2104 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Super warm white" title="Super warm white" role="img"
                                        style="background-image: conic-gradient(rgb(247, 232, 193) 0deg, rgb(247, 232, 193) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>2700
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                   
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Green Blue Ral 6004" title="Text Green Blue Ral 6004"
                                            role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/c13b5f5712acfc4dec90aaf74fd97350_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Green Blue Ral 6004</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dgbmdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DLUMDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2104 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Super warm white" title="Super warm white" role="img"
                                        style="background-image: conic-gradient(rgb(247, 232, 193) 0deg, rgb(247, 232, 193) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>2700
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                   
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Steel Blue Ral 5011" title="Text Steel Blue Ral 5011"
                                            role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/fc4c9349fc706efaf9b7154fa9b452f0_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Steel Blue Ral 5011</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dlumdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DWHMDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2104 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Super warm white" title="Super warm white" role="img"
                                        style="background-image: conic-gradient(rgb(247, 232, 193) 0deg, rgb(247, 232, 193) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>2700
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                  
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text white Ral 9003" title="Text white Ral 9003" role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/720e15e47b708b5bc38f14f06090ea45_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            white Ral 9003</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dwhmdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DBBWDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2215 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Warm white" title="Warm white" role="img"
                                        style="background-image: conic-gradient(rgb(255, 254, 241) 0deg, rgb(255, 254, 241) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>3000
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                  
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Black Ral 9005" title="Text Black Ral 9005" role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/04ba81fda0b03d0f3d915d1eb60270a3_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Black Ral 9005</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dbbwdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DBEWDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2215 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Warm white" title="Warm white" role="img"
                                        style="background-image: conic-gradient(rgb(255, 254, 241) 0deg, rgb(255, 254, 241) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>3000
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                    
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Beige Red Ral 3012" title="Text Beige Red Ral 3012"
                                            role="img"
                                            ></span><span>Text
                                            Beige Red Ral 3012</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dbewdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DGBWDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2215 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Warm white" title="Warm white" role="img"
                                        style="background-image: conic-gradient(rgb(255, 254, 241) 0deg, rgb(255, 254, 241) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>3000
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                  
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Green Blue Ral 6004" title="Text Green Blue Ral 6004"
                                            role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/c13b5f5712acfc4dec90aaf74fd97350_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Green Blue Ral 6004</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dgbwdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DLUWDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2215 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Warm white" title="Warm white" role="img"
                                        style="background-image: conic-gradient(rgb(255, 254, 241) 0deg, rgb(255, 254, 241) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>3000
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                    <span>Diffused</span>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text Steel Blue Ral 5011" title="Text Steel Blue Ral 5011"
                                            role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/fc4c9349fc706efaf9b7154fa9b452f0_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            Steel Blue Ral 5011</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dluwdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                        <tr
                            class="group cursor-pointer border-b border-beige-medium text-black transition-colors duration-200 ease-out hover:bg-beige-extra-light dark:border-grey-medium dark:text-white dark:hover:bg-grey-dark">
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <span class="inline-flex items-center gap-4"><span>CA070DWHWDI</span></span></td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                25 W</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                2215 lm</td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4"><span
                                        class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                        aria-label="Warm white" title="Warm white" role="img"
                                        style="background-image: conic-gradient(rgb(255, 254, 241) 0deg, rgb(255, 254, 241) 360deg); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>3000
                                        K</span></div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-4">
                                    
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                <div class="inline-flex items-center gap-6">
                                    <div class="inline-flex items-center gap-4"><span
                                            class="inline-block aspect-square rounded-full border transition-colors duration-200 ease-out border-[#E2E1E166] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] lg:h-16 h-16"
                                            aria-label="Text white Ral 9003" title="Text white Ral 9003" role="img"
                                            style="background-image: url(&quot;https://static.linealight.com/static/720e15e47b708b5bc38f14f06090ea45_ORIGINAL.webp&quot;); background-position: -1px -1px; background-size: calc(100% + 2px) calc(100% + 2px);"></span><span>Text
                                            white Ral 9003</span></div>
                                </div>
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                            </td>
                            <td
                                class=" font-sans text-14-xd xxl:text-14-vw h-56 whitespace-nowrap px-16 tracking-28 xxl:text-16-xd xxxl:text-20-xd">
                                90</td>
                            <td
                                class="sticky right-0 w-120 text-right transition-colors duration-200 ease-out group-hover:bg-beige-extra-light dark:group-hover:bg-grey-dark bg-white dark:bg-black">
                                <div class="inline-flex justify-end gap-24 pl-12 pr-24" style="opacity: 1;"><button
                                        class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white focus-visible:ring-blue-light w-24 h-24 !hidden lg:!inline-flex"
                                        aria-label="_info"><span class="icon-chevron-down z-10 inline-block text-[1rem]"
                                            aria-hidden="true"></span></button>
                                    <div
                                        class="before:absolute before:left-1 before:top-0 before:h-full before:w-1 before:bg-grey-extra-light before:transition-all before:duration-200 dark:before:bg-grey-light lg:before:shadow-stickyTd before:invisible before:opacity-0">
                                        <a target="_self"
                                            class="transition-all duration-200 ease-out disabled:text-opacity-50 dark:disabled:text-opacity-50 nd:cursor-pointer inline-flex items-center justify-center gap-6 text-center disabled:cursor-not-allowed focus-visible:ring-[3px] outline-none z-0 rounded-full justify-center after:rounded-full relative after:absolute after:inset-0 after:transition-all after:duration-200 after:ease-out after:bg-blue-medium after:opacity-0 sh:nd:hover:after:opacity-100 sh:nd:group-hover/button:after:opacity-100 after:scale-0 sh:nd:hover:after:scale-110 sh:nd:group-hover/button:after:scale-110 bg-beige-medium dark:bg-grey-medium text-black dark:text-white sh:nd:hover:text-white sh:nd:group-hover/button:text-white disabled:bg-beige-light disabled:dark:bg-grey-light focus-visible:ring-blue-light w-24 h-24"
                                            title="Go to " href="/en/group_basin/basinp/ca070dwhwdi?matrix-page=1"><span
                                                class="icon-arrow-right z-10 inline-block text-[1rem]"
                                                aria-hidden="true"></span></a></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
</div>
</template>
<script lang='ts' setup name='YourName'>
</script>
<style scoped>
</style>