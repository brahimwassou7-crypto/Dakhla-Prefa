<script setup>
import LogoImg from '@/assets/img/logoNAV.png'
import { ref } from 'vue';
import ProductNavLinks from './ProductNavLinks.vue';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import gsap from 'gsap';
import mobilemenus from '@/components/MobileListLinks.vue'

//gsap---animation---

onMounted(() => {
    gsap.fromTo(".logo-section img", { opacity: 0, duration: 1, x: -100 }, { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" })
    gsap.fromTo(".right-section", { opacity: 0, duration: 1, x: 100 }, { opacity: 1, x: 0, duration: 1, ease: "back.out(1.7)" })
    gsap.from(".list-links li", { opacity: 0, duration: 1, y: -100, stagger: 0.2, ease: "back.out(1.7)" })

})


//function---to---open---and---close---mobile--drop--down-menu
const mobilemenu = ref(false)
const openandclosemobilemenu = () => {
    mobilemenu.value = !mobilemenu.value
}

//function---to---open---and---close---the--drop-down-menu

const showdropmenu = ref(false)
const OpenAndCloseDropMenu = () => {
    showdropmenu.value = !showdropmenu.value
}

//list--navigation--bar

const links = ref([
    { name: "navbar.QUI-SOMME-NOUS ?", path: "/#about" },
    { name: "navbar.NOTRE-DESTINATION", path: "/#destination" },
    { name: "navbar.NOS-PRODUITS", path: "#" },
    { name: "navbar.CONTACTS", path: "/#contact" },
])

//languages-----

const { locale } = useI18n()

const changelanguages = (lang) => {
    locale.value = lang.value
    localStorage.setItem("lang", lang.value)
}
onMounted(() => {
    const savedlang = localStorage.getItem("lang")
    if (savedlang) {
        locale.value = savedlang
    } else {
        locale.value = "fr"
    }
})

const languages = ref([
    { name: "fr", value: "fr" },
    { name: "en", value: "en" },
    { name: "ar", value: "ar" },
])

</script>
<template>
    <!--navigation-bar-->
    <section class="bavigation-bar flex flex-col w-full sticky top-0 z-40 bg-white">
        <!--top-contact-navigation-bar-->
        <div
            class="contact-navigation-bar flex items-center justify-between w-full px-5 h-10 bg-red-700 text-sm text-white ">
            <div class="contact-section flex  gap-5 ">
                <a class="py-0.3 border-white hover:border-b " href=""><i class="bi bi-telephone-fill"></i>
                    +212 06 35 81 73
                    28</a>
                <a class="py-0.3 border-white hover:border-b " href=""><i class="bi bi-envelope-fill"></i>
                    dakhla-prefa@gmail.com</a>
                <span><i class="bi bi-geo-alt-fill"></i> DAKHLA VILLE </span>
            </div>
            <div class="social-media-icons-contact flex items-center justify-center gap-5">
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out" href=""><i
                        class="bi bi-facebook"></i></a>
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out" href=""><i
                        class="bi bi-instagram"></i></a>
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out" href=""><i
                        class="bi bi-twitter"></i></a>
                <a class="cursor-pointer hover:rotate-360 transition-all ease-in-out" href=""><i
                        class="bi bi-youtube"></i></a>
            </div>
        </div>
        <!----------->
        <!--Main-navigation-bar---->
        <div class="main-navigation-bar flex items-center justify-around w-full px-3 shadow-2xl ">
            <!--left-section-->
            <div class="left-section flex items-center justify-center gap-10">
                <!---logo-->
                <div class="logo-section">
                    <router-link to='/'>
                        <img class="w-20 h-17" :src="LogoImg" alt="">
                    </router-link>
                </div>
                <!-------->
                <!--navigation-links-->
                <ul v-for="(link, index) in links" :key="index"
                    class="list-links flex items-center justify-center gap-2">
                    <router-link :to="link.path">
                        <li v-if="index === 2" @click="OpenAndCloseDropMenu"
                            class="cursor-pointer border-red-700 py-3 hover:border-t-2 hover:border-b-2">
                            {{ $t(link.name) }} &nbsp; <i class="bi bi-arrow-bar-down"></i>
                        </li>
                        <li v-else class="cursor-pointer border-red-700 py-3 hover:border-t-2 hover:border-b-2">
                            {{ $t(link.name) }}
                        </li>
                    </router-link>
                </ul>
            </div>
            <!------------>
            <!--right-section-->
            <div class="right-section flex items-center justify-center gap-5">
                <!---languages-->
                <div class="languages flex gap-5">
                    <ul v-for="(lang, index) in languages" :key="index">
                        <li @click="changelanguages(lang)" class="border-red-700 border-r-2 px-2  cursor-pointer">
                            {{ lang.name }}</li>
                    </ul>
                </div>
                <!---contact-btn---->
                <router-link to="/#contact" class="conact-btn">
                    <button
                        class="px-3 py-1.5 bg-red-700 cursor-pointer text-white hover:bg-red-800 hover:scale-110 transform transition-all ease-in-out">CONTACTEZ-NOUS</button>
                </router-link>
                <div @click="openandclosemobilemenu" class="dropdown-mobilelist hidden">
                    <i class="bi bi-list bg-red-700 text-white p-2 border-red-700 cursor-pointer"></i>
                </div>
            </div>
        </div>
    </section>
    <!---dropdownmenu---->
    <ProductNavLinks :isopen="showdropmenu" @close="showdropmenu = false" />
    <!---mobilemenu---->
    <mobilemenus :mobile="mobilemenu" @close="mobilemenu = false" />
</template>
<style scoped>
@media screen and (max-width: 1000px) {
    .contact-section {
        display: none;
    }

    .list-links {
        display: none;
    }

    .dropdown-mobilelist {
        display: block;
    }
}

@media screen and (max-width: 500px) {
    .main-navigation-bar {
        width: 100%;
    }

    .conact-btn {
        display: none;
    }

}
</style>