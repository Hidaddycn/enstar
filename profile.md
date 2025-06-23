---
layout: page
sidebar: false  # 隐藏左侧导航栏
outline: false  # 隐藏右侧大纲（可选）
---



<script setup>
import { ref } from 'vue'
 import Profile from './components/profile.vue'
const count = ref(0)
</script>

<Profile/>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>