<script setup>
import agglos from '@/assets/img/agglos.webp'
import hourdis from '@/assets/img/hourdis.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
</script>
<template>
    <section class="agglos flex  items-center justify-between gap-10 bg-gray-100 lg:p-30">
        <!---------------img-section-------------------->
        <div class="img-section w-1/2">
            <img class="h-150 w-200 border-red-700 border-4" :src="hourdis" alt="">
        </div>
        <div class="desc-img-section w-1/2 ">
            <!-------------content-section------------------------->
            <div class="content w-1/2 flex flex-col gap-5 ">
                <h1 style="font-family: var(--font-family);" class="text-red-700 text-3xl">HOURDIS</h1>
                <h4 class="font-bold ">Size : H 15 , H 20 , H 25</h4>
                <p>Hourdis, also known as hollow concrete blocks or hollow blocks, are lightweight, rectangular building
                    units characterized by one or more hollow cores running through their length. They are made from
                    a mixture of cement, aggregates, and water, molded into shape, and cured to achieve strength.
                </p>
                <span>Hourdis en
                    Terre cuite (Hourdis creux)</span>
                <span>Hourdis en
                    Béton</span>
                <span>Hourdis en
                    Polystyrène (PSE)</span>

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
                    <th>Standard Heights</th>
                    <th>Primary Material</th>
                    <th>Structural & Performance Role</th>
                </tr>
            </thead>

            <tbody>
                <tr class="border-b-2 border-red-700">
                    <td>Concrete Hourdis</td>
                    <td>12 cm, 15 cm, 16 cm, 20 cm</td>
                    <td>Vibro-compressed concrete</td>
                    <td>Standard low-cost floors, high mechanical strength</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>Clay Hourdis (Terre Cuite)</td>
                    <td>12 cm, 15 cm, 16 cm, 20 cm</td>
                    <td>Fired clay</td>
                    <td>Lighter than concrete, better thermal comfort</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>Polystyrene Hourdis</td>
                    <td>12 cm to 30 cm+</td>
                    <td>Expanded polystyrene (EPS)</td>
                    <td>Ultra-lightweight, maximum thermal insulati</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>Plastic / PVC Hourdis</td>
                    <td>12 cm to 16 cm</td>
                    <td>Recycled plastic</td>
                    <td>Eco-friendly, reduced transport weight, easy handling</td>
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