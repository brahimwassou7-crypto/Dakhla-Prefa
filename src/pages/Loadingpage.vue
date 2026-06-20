<script setup>
import LogoImg from '@/assets/img/logo.png'
import { ref } from 'vue';
import { onMounted } from 'vue';

// give loadingCount value of 0-------------

const loadingCount = ref(0)

// loadingCount raise up to 100 when component is mounted

onMounted(() => {
    const loadingcountraiseup = () => {
        setInterval(() => {
            if (loadingCount.value < 100) {
                loadingCount.value++
            } else {
                clearInterval(loadingcountraiseup)
            }
        }, 30);
    }
    loadingcountraiseup()
})


</script>
<template>
    <section class="loading-page w-full h-screen flex items-center justify-center bg-red-700">
        <div class="content flex flex-col items-center justify-center gap-4">
            <img class="w-20 h-17" :src="LogoImg" alt="">
            <span class="text-white text-2xl ">{{ loadingCount }}%</span>
        </div>
    </section>


</template>
<style scoped></style>