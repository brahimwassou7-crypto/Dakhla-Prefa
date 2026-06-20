<script setup>
import card1 from '@/assets/img/card1.png'
import card2 from '@/assets/img/card2.png'
import card3 from '@/assets/img/card3.png'
import infoImg from '@/assets/img/produit1.jpg'
import infoimg1 from '@/assets/img/produit2.jpg'
import infoimg3 from '@/assets/img/produit3.jpg'





</script>

<template>
    <!------------------------------------------------>
    <!----------------about section--------------->
    <section id="about" class="about-section mt-20 flex flex-col gap-30 w-full ">
        <!--about-section-title-->
        <div class="title container mx-auto flex flex-col gap-5  ">
            <h1 style="font-family: var(--font-family-1);" class="text-4xl font-bold text-center text-red-700 ">
                {{
                    $t('about.title')
                }}</h1>
            <p class="text-center text-xl">{{ $t('about.description') }}</p>
        </div>
        <!-------card-section--------------->
        <div class="container mx-auto grid grid-cols-3 gap-4 ">
            <!-------card1---------->
            <!--------------------->
            <div data-aos="fade-right" class="card flex flex-col items-center justify-center shadow-2xl h-[500px]">
                <!---IMG---->
                <div class="img w-full h-[200px] bg-gray-200 flex items-center justify-center">
                    <img class="w-22 h-20" :src="card1" alt="">
                </div>
                <!---CONT--->
                <div class="content flex flex-col text-start text-xl py-2 gap-3 p-10 mt-3">
                    <h1 style="font-family: var(--font-family-1);" class="text-red-700">{{ $t('about.cardstitle') }}
                    </h1>
                    <p class="text-start ">{{ $t('about.cardsdescription') }}</p>
                </div>
            </div>
            <!-------card2---------->
            <!--------------------->
            <div data-aos="fade-up" class="card flex flex-col items-center justify-center h-[500px]">
                <!---IMG---->
                <div class="img w-full h-[200px] bg-gray-200 flex items-center justify-center">
                    <img class="w-22 h-20" :src="card2" alt="">
                </div>
                <!---CONT--->
                <div class="content flex flex-col text-start text-xl py-2 gap-3 p-10 mt-3">
                    <h1 style="font-family: var(--font-family-1);" class="text-red-700">{{ $t('about.cardstitle1') }}
                    </h1>
                    <p class="text-start ">{{ $t('about.cardsdescription1') }}</p>
                </div>
            </div>
            <!-------card3---------->
            <!--------------------->
            <div data-aos="fade-left" class="card flex flex-col items-center justify-center  h-[500px]">
                <!---IMG---->
                <div class="img w-full h-[200px] bg-gray-200 flex items-center justify-center">
                    <img class="w-22 h-20" :src="card3" alt="">
                </div>
                <!---CONT--->
                <div class="content flex flex-col text-start text-xl py-2 gap-3 p-10 mt-3">
                    <h1 style="font-family: var(--font-family-1);" class="text-red-700">{{ $t('about.cardstitle2') }}
                    </h1>
                    <p class="text-start ">{{ $t('about.cardsdescription2') }}</p>
                </div>
            </div>
        </div>

        <!------bg-img-section------->
        <!--------------------------->

        <div class="information w-full  h-150">
            <div
                class="content w-full h-full bg-black/60 backdrop-blur-sm flex flex-col  items-center justify-center gap-5 ">
                <!---TITLE--->
                <div
                    class="title container mx-auto text-white w-1/2 pl-0 items-start justify-start text-left flex flex-col  mb-6 py-3">
                    <h1 style="font-family: var(--font-family-1);" class="text-4xl font-bold w-full text-red-500 ">{{
                        $t('service.title') }}</h1>
                    <p class="">{{ $t('service.description') }}</p>
                    <div class="w-50 border-red-700 border-b-8 text-left mt-4 "></div>
                </div>

                <!----cards---->
                <!-------------->
                <!----------------------->
                <div class="cards grid grid-cols-3 gap-5">
                    <!-------card1---------->
                    <!--------------------->
                    <div data-aos="flip-left" class="img relative ">
                        <img class="h-100 w-100" :src="infoImg" alt="">
                        <div
                            class="img-content absolute h-100 w-100 top-0 flex flex-col items-baseline-last justify-end  bg-black/70 border-red-700 hover:border-b-20 transition-all ease-in-out text-white text-center p-3 ">
                            <p>{{ $t('service.description1') }}.</p>
                            <h4 class=" text-center w-full text-red-500 underline cursor-pointer">{{
                                $t('service.Subdescription1') }}</h4>
                        </div>
                    </div>
                    <!-------card2---------->
                    <!--------------------->
                    <div data-aos="flip-right" class="img relative ">
                        <img class="h-100 w-100" :src="infoimg1" alt="">
                        <div
                            class="img-content absolute h-100 w-100 top-0 flex flex-col items-baseline-last justify-end  bg-black/70 border-red-700 border-b-20 transition-all ease-in-out text-white text-center p-3 ">
                            <p>{{ $t('service.description2') }}.</p>
                            <h4 class=" text-center w-full text-red-500 underline cursor-pointer">{{
                                $t('service.Subdescription2')
                                }}</h4>
                        </div>
                    </div>
                    <!-------card3---------->
                    <!--------------------->
                    <div data-aos="flip-right" class="img relative ">
                        <img class="h-100 w-100" :src="infoimg3" alt="">
                        <div
                            class="img-content absolute h-100 w-100 top-0 flex flex-col items-baseline-last justify-end  bg-black/70 border-red-700 hover:border-b-20 transition-all ease-in-out text-white text-center p-3 ">
                            <p>{{ $t('service.description3') }}.</p>
                            <h4 class=" text-center w-full text-red-500 underline cursor-pointer">{{
                                $t('service.Subdescription3')
                            }}</h4>
                        </div>
                    </div>
                    <!--------------------->
                    <!--------------------->
                </div>
            </div>
        </div>
        <!------------------------>
    </section>
</template>
<style scoped>
.information {
    background: url(/src/assets/img/produit5.jpg);
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@media screen and (max-width: 1000px) {
    .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .information {
        height: fit-content;

    }

}
</style>