<template>
    <div>
        <header>
            <!-- 自定义布局的头部内容 -->
            <!-- <h1>My Custom Layout</h1>
            <Test /> -->
        </header>
        <main class="dd">
            <!-- 确保这里渲染了 Markdown 内容 -->
            <Content />
        </main>
        <footer>
            <!-- 自定义布局的尾部内容 -->
            <Giscus :key="page.filePath" id="comments" repo="Hidaddycn/enstar" repoId="R_kgDOPAKKgQ" category="General"
                categoryId="DIC_kwDOPAKKgc4CsCI7" mapping="pathname" reactionsEnabled="1" emitMetadata="0"
                inputPosition="bottom" :theme="isDark ? 'dark' : 'light'" lang="en" crossorigin="anonymous" />
        </footer>
    </div>
</template>
<script lang='ts' setup name='YourName'>
import Giscus from "@giscus/vue";
import { useData } from "vitepress";
// import Test from "./test.vue";
const { isDark, page } = useData();
</script>
<style scoped>
.dd img {
    width: 550px;
    border: 2px solid #ca1515;
}
</style>