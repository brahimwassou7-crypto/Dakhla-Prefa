<script setup>
import agglos from '@/assets/img/agglos.webp'
import hourdis from '@/assets/img/hourdis.webp'
import poutrelle from '@/assets/img/poutrelle.webp'
</script>
<template>
    <section class="agglos flex  items-center justify-between gap-10 bg-gray-100 lg:p-30">
        <!---------------img-section-------------------->
        <div class="img-section w-1/2">
            <img class="h-150 w-200 border-red-700 border-4" :src="agglos" alt="">
        </div>
        <div class="desc-img-section w-1/2 ">
            <!-------------content-section------------------------->
            <div class="content w-1/2 flex flex-col gap-5 ">
                <h1 style="font-family: var(--font-family);" class="text-red-700 text-3xl">AGGLOS</h1>
                <h4 class="font-bold ">Size : AG 15 , AG 20 , chainage/poteaux , angle</h4>
                <p>Agglos, commonly known as concrete blocks or parpaings, are molded building blocks made from cement,
                    aggregates (gravel/sand), and water. They are widely used for construction, offering high thermal
                    inertia, durability, and a highly cost-effective framework for walls and partitions.</p>
                <span>AG 15 (15x20x50 cm) : Idéal pour les murs de clôture ou les cloisons intérieures épaisses.</span>
                <span>AG 20 (20x20x50 cm) : Standard obligatoire pour les murs porteurs, façades et habitations.</span>
                <span>Agglo d'Angle (Poteau) : Dispose d'un trou carré ou rond au centre. Il sert de coffrage perdu pour
                    couler les poteaux d'angles ou raidisseurs verticaux</span>
                <span>Agglo de Chaînage (Linteau / U) : En forme de "U", il reçoit le ferraillage horizontal en haut de
                    mur
                    pour ceinturer la structure avant de couler le béton</span>
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
                    <th>Standard Dimensions</th>
                    <th>Primary Use Case</th>
                    <th>Structural Role</th>
                </tr>
            </thead>

            <tbody>
                <tr class="border-b-2 border-red-700">
                    <td>AG 15 Block</td>
                    <td>15 x 20 x 50 cm</td>
                    <td>Fences, low walls, thick partitions</td>
                    <td>Non-bearing or light load-bearing</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>AG 20 Block</td>
                    <td>20 x 20 x 50 cm</td>
                    <td>Main house walls, retaining walls</td>
                    <td>Heavy load-bearing structure</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>Angle Block</td>
                    <td>20 x 20 x 50 cm (with cavity)</td>
                    <td>Corner reinforcement, vertical pillars</td>
                    <td>Visual guide + vertical concrete mold</td>
                </tr>

                <tr class="border-b-2 border-red-700">
                    <td>Chaînage (U-Block)</td>
                    <td>20 x 20 x 50 cm (U-shape)</td>
                    <td>Top of walls, window/door lintels</td>
                    <td>Horizontal tie-beam concrete mold</td>
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