<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';


gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const counters = document.querySelectorAll(".rates")
    counters.forEach(counter => {
        const target = Number(counter.dataset.target)

        gsap.fromTo(
            counter, {
            innerText: 0
        },
            {
                duration: 1,
                innerText: target,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: () => {
                    counter.textContent = Math.round(counter.textContent);
                },
                scrollTrigger: {
                    trigger: counter,
                }
            }
        )

    })
})




</script>
<template>
    <section class="product-rates-section mt-5 mb-6 flex flex-col w-full">
        <!--------------------product-rates-title------------------>
        <div
            class="strategique flex flex-col gap-10 w-full border-l-8 border-red-700 rounded-2xl px-10 bg-linear-to-r from-red-100 to-red-700 p-20">
            <h1 style="font-family: var(--font-family);" class="text-2xl text-red-700">{{ $t('productrates.title') }}
            </h1>
            <p style="font-family: var(--font-family-2);" class="w-1/2">{{ $t('productrates.description') }}</p>
        </div>
        <!-------product-rates--------------->
        <section class="product-rates grid grid-cols-2  gap-10  mt-20 mb-20">
            <div class="agglos-rates flex items-center  justify-center gap-20 ">
                <span data-target="5000" class="rates flex  text-8xl font-bold text-red-700"
                    style="font-family: var(--font-family);">5000
                </span>
                <p style="font-family: var(--font-family-2);" class="">{{ $t('productrates.agglosrates') }}</p>
            </div>
            <div class="hourdis-rates flex items-center  justify-center gap-20 ">
                <span data-target="5000" class="rates text-8xl font-bold text-red-700"
                    style="font-family: var(--font-family);">5000
                </span>
                <p style="font-family: var(--font-family-2);" class="">{{ $t('productrates.hourdisrates') }}</p>
            </div>
            <div class="poutrelletes-rates flex items-center  justify-center gap-20 ">
                <span data-target="300" class="rates flex pr-13 font-bold  text-8xl text-red-700"
                    style="font-family: var(--font-family);">300 </span>
                <p style="font-family: var(--font-family-2);" class="">{{ $t('productrates.poutrelletes') }}</p>
            </div>
            <div class="pavetrates-rates flex items-center  gap-20 ">
                <span data-target="1500" class="rates text-8xl font-bold text-red-700"
                    style="font-family: var(--font-family);">1500
                </span>
                <p style="font-family: var(--font-family-2);" class="">{{ $t('productrates.pavetrates') }}
                </p>
            </div>
            <div class="bordurerates-rates flex items-center grow justify-center gap-20 ">
                <span data-target="1000" class="rates text-8xl font-bold text-red-700"
                    style="font-family: var(--font-family);">1000
                </span>
                <p style="font-family: var(--font-family-2);" class="">{{ $t('productrates.bordurerates') }}</p>
            </div>
        </section>
    </section>
</template>
<style scoped>
@media screen and (max-width: 1000px) {
    .strategique p {
        width: 100%;
        text-align: center;
    }

    .product-rates {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .agglos-rates,
    .hourdis-rates,
    .poutrelletes-rates,
    .pavetrates-rates,
    .bordurerates-rates {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .agglos-rates p,
    .hourdis-rates p,
    .poutrelletes-rates p,
    .pavetrates-rates p,
    .bordurerates-rates p {
        text-align: center;

    }

}
</style>