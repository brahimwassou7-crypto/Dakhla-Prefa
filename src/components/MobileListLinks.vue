<script setup>
import LogoImg from '@/assets/img/logo.png'


const props = defineProps({
    mobile: Boolean,
})

const emit = defineEmits(['close'])

</script>
<template>
    <!--product-nav-links-section-->
    <section v-show="mobile"
        class="product-nav-link flex flex-col absolute gap-5 top-0 right-0 left-0 bottom-0 z-50 inset-0  w-full h-fit items-center justify-center bg-red-700 text-white text-center ">
        <!---icon-close-nav-link-product-->
        <div class="icon absolute top-3 right-6 ">
            <i @click="$emit('close')" class="bi bi-x-lg text-4xl cursor-pointer"></i>
        </div>
        <!----------->
        <!-----AGGLOS----->
        <div class="product-links grid grid-cols-1 gap-5 w-full mt-20 mb-20  px-3">
            <div class="card flex flex-col ">
                <h1 style="font-family: var(--font-family);" class="text-xl border-white border-b py-2  text-left">
                    AGGLOS</h1>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start "
                    to="/agglos"><span>L'Agglo 15</span>
                    (AG15)</router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/agglos"><span>L'Agglo 20</span>
                    (AG20)</router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/agglos"><span>L'Agglo</span>
                    Chaînage / Poteau</router-link>
            </div>
            <!-----POUTRELLES----->
            <!-------------------->
            <div class="card flex flex-col ">
                <h1 style="font-family: var(--font-family);" class="text-xl border-white border-b py-2  text-left">
                    POUTRELLES</h1>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/poutrelle"><span>Poutrelles
                        à
                        treillis métallique (talon béton)</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/poutrelle"><span>Poutrelles
                        IPE / IPN</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/poutrelle"><span>Poutrelles
                        HEA / HEB (Poutrelles en H)</span></router-link>
            </div>
            <!------HOURDIS-------------->
            <!-------------------->
            <div class="card flex flex-col ">
                <h1 style="font-family: var(--font-family);" class="text-xl border-white border-b py-2  text-left ">
                    HOURDIS</h1>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis"><span>Hourdis en
                        terre cuite (Hourdis creux)</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis"><span>Hourdis en
                        béton</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis"><span>Hourdis en
                        polystyrène (PSE)</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/hourdis"><span>Hourdis en
                        fibres de ciment / composites</span></router-link>
            </div>
            <!------PAVERS-------------->
            <!-------------------->
            <div class="card flex flex-col ">
                <h1 style="font-family: var(--font-family);" class="text-xl border-white border-b py-2  text-left">
                    PAVERS</h1>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Le Pavé
                        "Double T" (ou en I)</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Le Pavé
                        Rectangulaire (Classique)</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Le Pavé
                        "Vague" ou "S" </span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Le Pavé
                        Gazon (Truffé)</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Le Pavé
                        Fès (ou Rustique) </span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Le Pavé
                        Hexagonal </span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/pave"><span>Les Pavés
                        en Béton Patiné/Texturé </span></router-link>
            </div>
            <!------LES BORDURES DES RUTES-------------->
            <!--------------------------->
            <div class="card flex flex-col ">
                <h1 style="font-family: var(--font-family);" class="text-xl border-white border-b py-2  text-left">
                    LES BORDURES DES RUTES</h1>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure"><span>Modèles T1
                        et T2</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure"><span>Modèles T3
                        et T4</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure"><span>Modèles A1
                        et A2 </span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure"><span>Modèle
                        P1</span></router-link>
                <router-link @click="$emit('close')" class="cursor-pointer hover:scale-105 transition-all ease-in duration-75 text-start"
                    to="/bordure"><span>Modèle P3
                        et P4</span></router-link>
            </div>
        </div>
        <!----->
    </section>
    <!----->


</template>
<style scoped>
.product-nav-link {
    transition: all 1s ease-in-out;
    animation: slideDown 0.5s ease-in-out;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>