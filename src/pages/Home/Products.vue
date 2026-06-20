<script setup>
import agglos from '@/assets/img/agglos.webp'
import hourdis from '@/assets/img/hourdis.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
import pavé from '@/assets/img/pavé.webp'
import bordure from '@/assets/img/produit7.jpg'

</script>
<template>
    <!---------------products-section----------->
    <section id="products" class="products flex flex-col w-full h-fit  items-center justify-center mt-20 mb-20">
        <!--------product-card------------->
        <div class="product grid grid-cols-3 gap-5   bg-gray-100 w-full ">
            <!--------card-product-agglos------------->
            <div data-aos="fade-up"
                class="card-product flex flex-col gap-3  shadow-2xl p-5 rounded-2xl w-full h-full cursor-pointer">
                <!----------------->
                <router-link to="/agglos">
                    <div class="img w-full object-contain relative">
                        <span class="absolute top-0 right-0 p-2 text-white rounded-bl-2xl bg-red-700 font-bold">+ 4
                            references</span>
                        <img class="border-3 border-red-700 h-100 w-full " :src="agglos" alt="">
                    </div>
                    <!----------------->
                    <div class="content h-1/2 flex flex-col  items-start justify-start gap-2">
                        <div class="flex w-full items-center gap-2">
                            <img class="w-15 h-15 " :src="agglos" alt="">
                            <h1 style="font-family: var(--font-family);" class="text-xl font-bold  ">AGGLOS</h1>
                        </div>
                        <h4 class="font-bold">Size : AG 15 , AG 20 , chainage/poteaux , angle</h4>
                        <p class="">{{ $t('products.agglotext') }}</p>
                        <div class="info flex w-full items-center justify-between ">
                            <div class="info-name flex flex-col  gap-4  mt-3">
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Mechanical Strength
                                    (120-250 bar) </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Thermal
                                    & Fire
                                    Insulation </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Sound
                                    Insulation
                                </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Lightweight </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Economical </span>
                            </div>
                        </div>
                        <div class="btn flex w-full items-center justify-between gap-3 mt-6">
                            <button class="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer">Contact
                                Us</button>
                            <a class="bg-red-700 text-white px-4 py-2 text-xl text-center cursor-pointer rounded-full"
                                href="/DAKHLA-PREFA-PDF.pdf" download>
                                <button class="cursor-pointer"><i class="bi bi-file-earmark-arrow-down"></i></button>
                            </a>
                        </div>
                    </div>
                </router-link>
                <!--------------------------------->
            </div>
            <!--------card-product-hourdis------------->
            <router-link to="/hourdis">
                <div data-aos="fade-up"
                    class="card-product flex flex-col  gap-3  shadow-2xl p-5 rounded-2xl w-full h-full cursor-pointer">
                    <!----------------->
                    <div class="img w-full   object-contain relative">
                        <span class="absolute top-0 right-0 p-2 text-white rounded-bl-2xl bg-red-700 font-bold">+ 4
                            references</span>
                        <img class="border-3 border-red-700 h-100 w-full" :src="hourdis" alt="">
                    </div>
                    <!----------------->
                    <div class="content h-1/2 flex flex-col items-start justify-start grow gap-2">
                        <div class="flex w-full items-center gap-2">
                            <img class="w-15 h-15" :src="hourdis" alt="">
                            <h1 style="font-family: var(--font-family);" class="text-xl font-bold  ">HOURDIS</h1>
                        </div>
                        <h4 class="font-bold grow ">Size : H 15 , H 20 , H 25 </h4>
                        <p class="grow">{{ $t('products.hourdistext') }}</p>
                        <div class="info flex  w-full items-center justify-between ">
                            <div class="info-name flex flex-col  gap-4  mt-3">
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Mechanical Strength
                                    (120-250 bar) </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Thermal
                                    & Fire
                                    Insulation </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Sound
                                    Insulation
                                </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Lightweight </span>
                                <span class="  text-red-700  "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Economical </span>
                            </div>
                        </div>
                        <div class="btn flex w-full  items-center justify-between gap-3 mt-6">
                            <button class="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer">Contact
                                Us</button>
                            <a class="bg-red-700 text-white px-4 py-2 text-xl text-center cursor-pointer rounded-full"
                                href="/DAKHLA-PREFA-PDF.pdf" download>
                                <button class="cursor-pointer"><i class="bi bi-file-earmark-arrow-down"></i></button>
                            </a>
                        </div>
                    </div>
                    <!--------------------------------->
                </div>
            </router-link>
            <!--------card-product-poutrelle------------->
            <router-link to="/poutrelle">
                <div data-aos="fade-up"
                    class="card-product flex flex-col gap-3  shadow-2xl p-5 rounded-2xl w-full h-full cursor-pointer">
                    <!----------------->
                    <div class="img w-full   object-contain relative">
                        <span class="absolute top-0 right-0 p-2 text-white rounded-bl-2xl bg-red-700 font-bold">+ 3
                            references</span>
                        <img class="border-3 border-red-700 h-100 w-full" :src="poutrelle" alt="">
                    </div>
                    <!----------------->
                    <div class="content h-1/2 flex flex-col  items-start justify-start grow gap-2">
                        <div class="flex w-full items-center gap-2">
                            <img class="w-15 h-15" :src="poutrelle" alt="">
                            <h1 style="font-family: var(--font-family);" class="text-xl font-bold  ">POUTRELLE</h1>
                        </div>
                        <h4 class="font-bold">Size : P 20 , P 25 , P30 , P 35 , P 40 , P 45 , P 50 , P 55 , P 60 </h4>
                        <p class="grow">{{ $t('products.poutrelletexte') }}</p>
                        <div class="info flex w-full items-center justify-between ">
                            <div class="info-name flex flex-col gap-4  mt-3">
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Mechanical Strength
                                    (120-250 bar) </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Thermal
                                    & Fire
                                    Insulation </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Sound
                                    Insulation
                                </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Lightweight </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Economical </span>
                            </div>
                        </div>
                        <div class="btn flex w-full items-center justify-between gap-3 mt-6">
                            <button class="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer">Contact
                                Us</button>
                            <a class="bg-red-700 text-white px-4 py-2 text-xl text-center cursor-pointer rounded-full"
                                href="/DAKHLA-PREFA-PDF.pdf" download>
                                <button class="cursor-pointer"><i class="bi bi-file-earmark-arrow-down"></i></button>
                            </a>
                        </div>
                    </div>
                    <!--------------------------------->
                </div>
            </router-link>
            <!--------card-product-pavé------------->
            <router-link to="/pave">
                <div data-aos="fade-up"
                    class="card-product flex flex-col gap-3  shadow-2xl p-5 rounded-2xl w-full h-full cursor-pointer">
                    <!----------------->
                    <div class="img w-full   object-contain relative">
                        <span class="absolute top-0 right-0 p-2 text-white rounded-bl-2xl bg-red-700 font-bold">+ 5
                            references</span>
                        <img class="border-3 border-red-700 h-100 w-full" :src="pavé" alt="">
                    </div>
                    <!----------------->
                    <div class="content h-1/2 flex flex-col  items-start justify-start gap-2 grow">
                        <div class="flex w-full items-center gap-2">
                            <img class="w-15 h-15" :src="pavé" alt="">
                            <h1 style="font-family: var(--font-family);" class="text-xl font-bold  ">PAVE</h1>
                        </div>
                        <h4 class="font-bold">les type : double T, gazon, rectangulaire .... </h4>
                        <p class="grow">{{ $t('products.pavétxte') }}</p>
                        <div class="info flex w-full items-center justify-between ">
                            <div class="info-name flex flex-col gap-4  mt-3">
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Mechanical Strength
                                    (120-250 bar) </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Thermal
                                    & Fire
                                    Insulation </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Sound
                                    Insulation
                                </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Lightweight </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Economical </span>
                            </div>
                        </div>
                        <div class="btn flex w-full items-center justify-between gap-3 mt-6">
                            <button class="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer">Contact
                                Us</button>
                            <a class="bg-red-700 text-white px-4 py-2 text-xl text-center cursor-pointer rounded-full"
                                href="/DAKHLA-PREFA-PDF.pdf" download>
                                <button class="cursor-pointer"><i class="bi bi-file-earmark-arrow-down"></i></button>
                            </a>
                        </div>
                    </div>
                    <!--------------------------------->
                </div>
            </router-link>
            <!--------card-product-bodure des rutes------------->
            <router-link to="/bordure">
                <div data-aos="fade-up"
                    class="card-product flex flex-col gap-3  shadow-2xl p-5 rounded-2xl w-full h-full cursor-pointer">
                    <!----------------->
                    <div class="img w-full   object-contain relative">
                        <span class="absolute top-0 right-0 p-2 text-white rounded-bl-2xl bg-red-700 font-bold">+ 3
                            references</span>
                        <img class="border-3 border-red-700 h-100 w-full" :src="bordure" alt="">
                    </div>
                    <!----------------->
                    <div class="content h-1/2 flex flex-col  items-start justify-start gap-2">
                        <div class="flex w-full items-center gap-2">
                            <img class="w-15 h-15" :src="bordure" alt="">
                            <h1 style="font-family: var(--font-family);" class="text-xl font-bold  ">Bordure des routes
                            </h1>
                        </div>
                        <h4 class="font-bold">les type : Américain, normal, ... </h4>
                        <p class="">{{ $t('products.borduretext') }}</p>
                        <div class="info flex w-full items-center justify-between ">
                            <div class="info-name flex flex-col gap-4  mt-3">
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Mechanical Strength
                                    (120-250 bar) </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Thermal
                                    & Fire
                                    Insulation </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Sound
                                    Insulation
                                </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Lightweight </span>
                                <span class="  text-red-700 "><i class="bi bi-plus-circle-dotted text-red-700"></i>
                                    Economical </span>
                            </div>
                        </div>
                        <div class="btn flex w-full items-center justify-between gap-3 mt-6">
                            <button class="w-full bg-red-700 text-white p-2 rounded-2xl cursor-pointer">Contact
                                Us</button>
                            <a class="bg-red-700 text-white px-4 py-2 text-xl text-center cursor-pointer rounded-full"
                                href="/DAKHLA-PREFA-PDF.pdf" download>
                                <button class="cursor-pointer"><i class="bi bi-file-earmark-arrow-down"></i></button>
                            </a>
                        </div>
                    </div>
                    <!--------------------------------->
                </div>
            </router-link>
            <!------------------->
        </div>
    </section>
</template>
<style scoped>
.product .card-product:hover {
    transform: translateY(-10px);
    transition: all 0.5s ease-in-out;
}

@media screen and (max-width: 1000px) {
    .product {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }

}

@media screen and (max-width: 500px) {
    .btn {
        font-size: smaller;

    }

}
</style>