<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules'
import { ref } from 'vue';
import firstSlide from '@/assets/img/uzine.jpg'
import secondSlide from '@/assets/img/uzine2.jpg'
import thirdSlide from '@/assets/img/uzine3.webp'

import "swiper/css"

const swiperInstance = ref(null)


const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

const Slides = [
    {
        img: firstSlide,
        title: "hero.title",
        desc: "hero.description"
    },
    {
        img: secondSlide,
        title: "hero.title1",
        desc: "hero.description1"
    },
    {
        img: thirdSlide,
        title: "hero.title2",
        desc: "hero.description2"
    },
]

</script>

<template>
    <!----swiper---propriete------->
    <swiper :modules="[Autoplay]" :slides-per-view="1" :loop="true" :navigation="true" @swiper="onSwiper"
        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }">
        <swiper-slide v-for="slide in Slides" :key="slide">
            <div class="contant-img relative">
                <!-- image -->
                <img class="w-full h-[90vh] object-cover" :src="slide.img" alt="">
                <!----overlay----->
                <div
                    class="overlay absolute top-0 left-0 w-full h-full inset-0 bg-black/70 flex flex-col items-center justify-center">
                    <!-- title -->
                    <h1 style="font-family: var(--font-family);" class="text-red-700 text-4xl font-bold text-center">{{
                        $t(slide.title) }}</h1>
                    <p class="text-white text-xl w-1/2 text-center">{{ $t(slide.desc) }}</p>
                </div>
            </div>

        </swiper-slide>
    </swiper>

    <!----button----->
    <div class="btns ">
        <button @click="swiperInstance?.slidePrev()"><i
                class="bi bi-arrow-left bg-red-700 p-4 text-white absolute top-1/2 left-10 cursor-pointer z-10"></i></button>
        <button @click="swiperInstance?.slideNext()"><i
                class="bi bi-arrow-right bg-red-700 p-4 text-white absolute top-1/2 right-10 cursor-pointer z-10"></i></button>
    </div>
    <!------------------------------------------->
</template>
<style scoped>
@media screen and (max-width: 500px) {
    .overlay h1 {
        font-size: large;
    }

    .overlay p {
        font-size: medium;
    }
}
</style>