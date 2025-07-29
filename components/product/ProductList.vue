<template>
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3s gap-4 border">
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