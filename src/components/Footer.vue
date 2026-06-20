<script setup>
import LogoImg from '@/assets/img/logo.png'

</script>
<template>
    <!--product-nav-links-section-->
    <section
        class="product-nav-link mt-20 flex flex-col gap-10 w-full h-fit py-30 items-center justify-center bg-black text-white text-center ">
        <!---icon-close-nav-link-product-->
        <div class="icon absolute top-3 right-6 ">
        </div>
        <!----------->
        <!--introduction-section-->
        <div class="introduction w-full flex items-center justify-between">
            <div class="logo flex items-center justify-baseline gap-3 ">
                <img class="w-24 h-20" :src="LogoImg" alt="">
                <h1 style="font-family: var(--font-family);" class="text-4xl ">DAKHLA PREFA</h1>
            </div>
        </div>
        <!---products-links---->
        <!--array-of-products-->
        <!-----AGGLOS----->
        <div class="product-links grid grid-cols-5 gap-5 w-full">
            <div class="card flex flex-col gap-3.5">
                <h1 class="text-xl border-white border-b py-2 mb-6">AGGLOS</h1>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start "
                    to="/agglos">L'Agglo 15
                    (AG15)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/agglos">L'Agglo 20
                    (AG20)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/agglos">L'Agglo
                    Chaînage / Poteau</router-link>
            </div>
            <!-----POUTRELLES----->
            <!-------------------->
            <div class="card flex flex-col gap-3.5">
                <h1 class="text-xl border-white border-b py-2 mb-6">POUTRELLES</h1>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/poutrelle">Poutrelles
                    à
                    treillis métallique (talon béton)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/poutrelle">Poutrelles
                    IPE / IPN</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/poutrelle">Poutrelles
                    HEA / HEB (Poutrelles en H)</router-link>
            </div>
            <!------HOURDIS-------------->
            <!-------------------->
            <div class="card flex flex-col gap-3.5">
                <h1 class="text-xl border-white border-b py-2 mb-6">HOURDIS</h1>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis">Hourdis en
                    terre cuite (Hourdis creux)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis">Hourdis en
                    béton</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis">Hourdis en
                    polystyrène (PSE)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis">Hourdis en
                    fibres de ciment / composites</router-link>
            </div>
            <!------PAVERS-------------->
            <!-------------------->
            <div class="card flex flex-col gap-3.5">
                <h1 class="text-xl border-white border-b py-2 mb-6">PAVERS</h1>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Le Pavé
                    "Double T" (ou en I)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Le Pavé
                    Rectangulaire (Classique)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Le Pavé
                    "Vague" ou "S" </router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Le Pavé
                    Gazon (Truffé)</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Le Pavé
                    Fès (ou Rustique) </router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Le Pavé
                    Hexagonal </router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave">Les Pavés
                    en Béton Patiné/Texturé </router-link>
            </div>
            <!------LES BORDURES DES RUTES-------------->
            <!--------------------------->
            <div class="card flex flex-col gap-3.5">
                <h1 class="text-xl border-white border-b py-2 mb-6">LES BORDURES DES RUTES</h1>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure">Modèles T1
                    et T2</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure">Modèles T3
                    et T4</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure">Modèles A1
                    et A2 </router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure">Modèle
                    P1</router-link>
                <router-link class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure">Modèle P3
                    et P4</router-link>
            </div>
        </div>
        <!----->
        <!----contact-section---->
        <div class="contact-section flex flex-col gap-5 w-full items-center justify-center border-white border-t p-7">
            <div class="contact-section flex  gap-5">
                <a class="py-0.3 border-white hover:border-b " href=""><i class="bi bi-telephone-fill"></i>
                    +212 06 35 81 73
                    28</a>
                <a class="py-0.3 border-white hover:border-b " href=""><i class="bi bi-envelope-fill"></i>
                    dakhla-prefa@gmail.com</a>
                <span><i class="bi bi-geo-alt-fill"></i> DAKHLA VILLE </span>
            </div>
            <!---------social-media-icons----------->
            <div class="social-media-icons-contact flex items-center justify-center gap-5 text-2xl">
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out hover:text-red-900" href=""><i
                        class="bi bi-facebook"></i></a>
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out hover:text-red-900" href=""><i
                        class="bi bi-instagram"></i></a>
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out hover:text-red-900" href=""><i
                        class="bi bi-twitter"></i></a>
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out hover:text-red-900" href=""><i
                        class="bi bi-youtube"></i></a>
            </div>
        </div>
        <!--btn-contact----->
        <router-link to="/#contact" class="conact-btn">
            <button
                class="px-5 py-2 bg-white cursor-pointer text-black hover:bg-red-800 hover:scale-110 transform transition-all ease-in-out">CONTACTEZ-NOUS</button>
        </router-link>
    </section>
    <!----->
</template>
<style scoped>
@media screen and (max-width: 1000PX) {
    .product-nav-link {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .product-links {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .contact-section {
        display: flex;
        flex-direction: column;
    }

}
</style>