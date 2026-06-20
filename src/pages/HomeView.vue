<script setup>
import Hero from './Home/Hero.vue';
import AboutUs from './Home/AboutUs.vue';
import Products from './Home/Products.vue';
import Contact from './Home/Contact.vue';
import ProductRates from './Home/productrates.vue';
</script>
<template>
    <Hero />
    <div class="container max-w-[2000px] mx-auto">
        <AboutUs />
        <Products />
        <ProductRates />
        <Contact />
    </div>
</template>
<style scoped></style>