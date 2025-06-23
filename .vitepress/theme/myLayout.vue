<template>
    <div>
      <header>
        <!-- 自定义布局的头部内容 -->
        <h1>My Custom Layout</h1>
      </header>
      <main class="dd">
        <!-- 确保这里渲染了 Markdown 内容 -->
        <Content />
      </main>
      <footer>
        <!-- 自定义布局的尾部内容 -->
      </footer>
    </div>
  </template>
<script lang='ts' setup name='YourName'>
</script>
<style scoped>
.dd img{
    width: 550px;
    border:2px solid #ca1515;
}
</style>