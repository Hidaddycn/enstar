<template>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard v-for="item in 10"/>
    <!-- <ProductCard1 v-for="item in 10"/> -->
</div>
</template>
<script lang='ts' setup name='YourName'>
import ProductCard from './ProductCard.vue'
import ProductCard1 from './ProductCard1.vue'
</script>
<style scoped>
</style>