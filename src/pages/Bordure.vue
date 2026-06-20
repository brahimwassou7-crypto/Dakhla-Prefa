<script setup>
import agglos from '@/assets/img/agglos.webp'
import hourdis from '@/assets/img/hourdis.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
import bordure from '@/assets/img/produit7.jpg'
</script>
<template>
    <section class="agglos flex  items-center justify-between gap-10 bg-gray-100     lg:p-30">
        <!---------------img-section-------------------->
        <div class="img-section w-1/2">
            <img class="h-150 w-200 border-red-700 border-4" :src="bordure" alt="">
        </div>
        <div class="desc-img-section w-1/2 ">
            <!-------------content-section------------------------->
            <div class="content w-1/2 flex flex-col gap-5 ">
                <h1 style="font-family: var(--font-family);" class="text-red-700 text-3xl">Bordure</h1>
                <h4 class="font-bold ">les type : Américain, normal, ... </h4>
                <p>{{ $t('products.borduretext') }}
                </p>
                <span>LModèles T1
                    et T2</span>
                <span>Modèles T3
                    et T4</span>
                <span>Modèles A1
                    et A2"</span>
                <span>Modèle
                    P1</span>
                <span>Modèle P3
                    et P4</span>
                <a class="bg-red-500 text-white px-7 py-4  w-full text-xl text-center cursor-pointer "
                    href="/DAKHLA-PREFA-PDF.pdf" download>
                    <button class="cursor-pointer">Telecharger
                        notre catalogue</button>
                </a>
            </div>
        </div>
        <!-------------------------------------------------->
    </section>

    <section class="table-info w-full flex items-start justify-start p-10 mt-10 lg:p-20">
        <table class="w-full border-collapse text-2xl">
            <thead>
                <tr class="border-b-2 border-red-700">
                    <th>Product Type</th>
                    <th>Standard Profiles</th>
                    <th>Primary Material</th>
                    <th>Structural & Performance Role</th>
                </tr>
            </thead>

            <tbody>
                <tr class="border-b-2 border-red-700">
                    <td>T Type Curbs (T1, T2, T3, T4)</td>
                    <td>High, vertical, square edge</td>
                    <td>High-strength concrete or granite</td>
                    <td>For urban streets, separates sidewalks, prevents cars from parking</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>A Type Curbs (A1, A2)</td>
                    <td>Slanted, low profile, mountable</td>
                    <td>Vibro-compressed concrete</td>
                    <td>For highways and rural roads, allows emergency vehicle mounting</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>I Type Curbs (I1, I2)</td>
                    <td>Flat, level with pavement</td>
                    <td>Concrete or natural stone</td>
                    <td>Separates different pavement zones, ensures water drainage runoff</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>CS Type Gutters (CS1, CS2, CS3)</td>
                    <td>Curved, water-channel shape</td>
                    <td>Precast concrete</td>
                    <td>Paired with T/A curbs, directs rainwater to storm drains</td>
                </tr>
            </tbody>
        </table>
    </section>
    <!-------------------------------------------------------------------------->
    <section class="other-product bg-gray-100 w-full lg:p-30 mt-30">
        <div class="products grid grid-cols-3 gap-5">
            <!--------------->
            <router-link to="/agglos" class="agglos flex flex-col gap-4 bg-gray-200 items-center justify-center p-3 cursor-pointer">
                <img class="border-red-700 border-2 h-120 w-full" :src="agglos" alt="">
                <div class="content flex flex-col gap-5">
                    <h1 style="font-family: var(--font-family);" class="text-red-700 text-3xl">AGGLOS</h1>
                    <h4 class="font-bold ">Size : AG 15 , AG 20 , chainage/poteaux , angle</h4>
                    <p>{{ $t('products.agglotext') }}</p>
                    <span class="text-2xl text-red-700 border-red-700 border-b-2 text-center cursor-pointer">avoir plus <i
                            class="bi bi-arrow-right"></i> </span>
                </div>
            </router-link>
            <!------------------------>
            <router-link to="/hourdis" class="agglos flex flex-col gap-4 bg-gray-200 items-center justify-center p-3 cursor-pointer">
                <img class="border-red-700 border-2 h-120 w-full" :src="hourdis" alt="">
                <div class="content flex flex-col gap-5">
                    <h1 style="font-family: var(--font-family);" class="text-red-700 text-3xl">HOURDIS</h1>
                    <h4 class="font-bold ">Size : H 15 , H 20 , H 25 </h4>
                    <p>{{ $t('products.hourdistext') }}</p>
                    <span class="text-2xl text-red-700 border-red-700 border-b-2 text-center cursor-pointer">avoir plus <i
                            class="bi bi-arrow-right"></i> </span>
                </div>
            </router-link>
            <!-------------------------->
            <router-link to="/poutrelle" class="agglos flex flex-col gap-4 bg-gray-200 items-center justify-center p-3 cursor-pointer">
                <img class="border-red-700 border-2 h-120 w-full" :src="poutrelle" alt="">
                <div class="content flex flex-col gap-5">
                    <h1 style="font-family: var(--font-family);" class="text-red-700 text-3xl">POUTRELLE</h1>
                    <h4 class="font-bold">Size : P 20 , P 25 , P30 , P 35 , P 40 , P 45 , P 50 , P 55 , P 60 </h4>
                    <p>{{ $t('products.poutrelletexte') }}</p>
                    <span class="text-2xl text-red-700 border-red-700 border-b-2 text-center cursor-pointer">avoir plus <i
                            class="bi bi-arrow-right"></i> </span>
                </div>
            </router-link>
            <!--------------------->
        </div>
    </section>


</template>
<style scoped>
@media screen and (max-width : 1000px) {
    .agglos {
        display: flex;
        flex-direction: column;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .img-section {
        width: 100%;
    }

    .img-section img {
        width: 100%;
    }

    .desc-img-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 10px;
    }

    .content {
        width: 100%;
    }

    .table-info {
        padding: 0;
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    }

    .table-info table {
        min-width: 1000px;
        border-collapse: collapse;
    }


}
</style>