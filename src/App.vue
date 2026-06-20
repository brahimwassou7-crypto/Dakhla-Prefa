<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import Loadingpage from "./pages/Loadingpage.vue";
import { ref, onMounted } from "vue";
import Footer from '@/components/Footer.vue'

const isloading = ref(true)

onMounted(() => {
    setTimeout(() => {
        isloading.value = false
    }, 3000)
})

</script>

<template>
    <Loadingpage v-if="isloading" />
    <div v-else class="content">
        <NavigationBar />
        <router-view />
        <Footer />
    </div>
</template>

<style scoped>
html {
    scroll-behavior: smooth;
}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
