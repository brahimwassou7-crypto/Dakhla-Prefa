<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const form = ref({
    name: "",
    lastName: "",
    email: "",
    number: "",
    address: "",
    message: ""
})

const error = ref({
    name: false,
    lastName: false,
    email: false,
    number: false,
    address: false,
    message: false
})

const submitEmail = async () => {
    error.value = {
        name: !form.value.name,
        lastName: !form.value.lastName,
        email: !form.value.email,
        number: !form.value.number,
        address: !form.value.address,
        message: !form.value.message
    }

    if (Object.values(error.value).some((error) => error)) {
        alert("Please fill all the fields")
        return
    }


    try {
        const service_ID = "service_mq6j51i"
        const template_ID = "template_m8i2f5t"
        const public_key = "PUGHFkMa-QByySFQz"

        await emailjs.send(
            service_ID,
            template_ID,
            {
                name: form.value.name,
                lastName: form.value.lastName,
                email: form.value.email,
                number: form.value.number,
                address: form.value.address,
                message: form.value.message
            },
            public_key
        )
        alert("Message sent succfully")

        form.value = {
            name: "",
            lastName: "",
            email: "",
            number: "",
            address: "",
            message: ""
        }
    }

    catch (error) {
        console.log("ERROR", error)
        alert("Something went wrong")
    }
}




</script>
<template>
    <!-------title-section-contact------->
    <section id="contact" class="cantact-section ">
        <div
            class="contact-title text-center flex flex-col bg-linear-to-r from-red-500 to-red-900 h-100 text-white items-center justify-center gap-10">
            <h1 style="font-family: var(--font-family);" class="text-4xl ">{{ $t('contact.title') }}</h1>
            <p style="font-family: var(--font-family-2);" class=" text-2xl max-w-4xl">{{ $t('contact.description')
                }}<span class="underline">+212 6
                    26
                    38
                    38 15 / +212 6
                    61 53 57
                    45</span></p>
            <div class="contact-btns flex gap-5 ">
                <button class="bg-red-500 text-white px-7 py-4 cursor-pointer">{{ $t('contact.description1') }}</button>
                <a class="bg-red-500 text-white px-7 py-4  w-1/2 text-xl text-center cursor-pointer "
                    href="/DAKHLA-PREFA-PDF.pdf" download>
                    <button class="cursor-pointer">Telecharger
                        notre catalogue</button>
                </a>
            </div>
        </div>
    </section>
    <!-------info-section-contact------->
    <section id="destination" class="info-contact w-full mt-10 flex gap-5 bg-gray-50 p-5   ">
        <!-----------------contact-info-section---------->
        <div class="contact-info-section w-1/2 gap-5 flex flex-col ">
            <!-----------first-part------------->
            <div
                class="title-section bg-linear-to-r from-red-500 to-red-900 flex flex-col gap-3 p-3 text-white rounded-lg">
                <h1 style="font-family: var(--font-family);" class="text-2xl ">{{ $t('contact.infotitle') }}</h1>
                <h4 style="font-family: var(--font-family-2);">{{ $t('contact.infosubtitle') }}</h4>
                <p style="font-family: var(--font-family-2);" class="">{{ $t('contact.infosubdescription') }}</p>
            </div>
            <!------------second-part----------->
            <div class="info ">
                <div class="info-contact flex flex-col gap-5 ">
                    <div class="user-info-name-last-name flex gap-3 w-full">
                        <div class="user-name w-1/2">
                            <label for="name">Nom :</label>
                            <input :class="error.name ? 'border-red-500' : 'border-gray-200'"
                                class="w-full border-gray-200 border-2 h-15 bg-gray-100 outline-0" type="text"
                                v-model="form.name" name="name" placeholder="   Nome">
                        </div>
                        <div class="user-last-name w-1/2 ">
                            <label for="last-name">Prénom :</label>
                            <input :class="error.lastName ? 'border-red-500' : 'border-gray-200'"
                                class="w-full border-gray-200 border-2 h-15 bg-gray-100 outline-0" type="text"
                                v-model="form.lastName" name="last-name" placeholder="   Prenome">
                        </div>
                    </div>
                    <div class="rest-information flex flex-col gap-3">
                        <div class="user-email flex flex-col">
                            <label for="email">Email :</label>
                            <input :class="error.email ? 'border-red-500' : 'border-gray-200'"
                                class="w-full border-gray-200 border-2 h-15 bg-gray-100 outline-0" type="email"
                                v-model="form.email" name="email" placeholder="   eexample@gmail.com">
                        </div>
                        <div class="user-number flex flex-col">
                            <label for="number">Numéro :</label>
                            <input :class="error.number ? 'border-red-500' : 'border-gray-200'"
                                class="w-full border-gray-200 border-2 h-15 bg-gray-100 outline-0" type="text"
                                v-model="form.number" name="number" placeholder="   +000 00 00 00 00 00">
                        </div>
                        <div class="user-addresse flex flex-col">
                            <label for="addresse">Type de project :</label>
                            <input :class="error.address ? 'border-red-500' : 'border-gray-200'"
                                class="w-full border-gray-200 border-2 h-15 bg-gray-100 outline-0" rows="4" type="text"
                                v-model="form.address" name="addresse" placeholder="   Type de project" />
                        </div>
                    </div>
                    <div class="user-message flex flex-col">
                        <label for="message">Message :</label>
                        <textarea :class="error.message ? 'border-red-500' : 'border-gray-200'"
                            class="w-full border-gray-200 border-2 h-50 bg-gray-100 outline-0" id="message"
                            v-model="form.message" name="message" placeholder="   Message"></textarea>
                    </div>
                    <div class="contact-btns flex gap-5 w-full ">
                        <a class="bg-red-500 text-white px-7 py-4  w-1/2 text-xl text-center cursor-pointer rounded-4xl"
                            href="/DAKHLA-PREFA-PDF.pdf" download>
                            <button class="cursor-pointer">Telecharger
                                notre catalogue</button>
                        </a>
                        <button @click="submitEmail()"
                            class="bg-white text-red-700 px-7 py-4 cursor-pointer w-1/2 text-xl border-2 border-red-700 rounded-2xl "><i
                                class="bi bi-send"></i> Envoyer</button>
                    </div>
                </div>
                <!---------------location------------------>
            </div>
            <!------------------------------------------>
        </div>
        <!----location----->
        <section class="location flex flex-col w-1/2 p-7 gap-20 ">
            <!------location-information-------------->
            <!-------------------->
            <div class="content flex flex-col gap-6 w-full">
                <h1 class=""><i class="bi bi-geo-alt-fill  text-red-700"></i> DAKHLA
                    VILLE </h1>
                <p>Notre distination est destiné à dakhla ville sud de maroc </p>
                <p>HAY esslam av 30 Route de nv port-DAKHLA </p>
                <span>distination de notre uzine</span>
                <p>USINE : Route Lasarga ZI lot N° 1022 et 18-DAKHLA</p>
                <span class="font-bold text-red-700 underline ">Contact :</span>
                <a class="" href=""><i class="bi bi-telephone-fill text-red-700"></i> +212
                    06 62
                    83 92 63</a>
                <a class="" href=""><i class="bi bi-telephone-fill text-red-700"></i> +212
                    06 35
                    81 73 28</a>
            </div>
            <!---------LOCATION----------------->
            <div class="map w-full  ">
                <iframe class="w-full"
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3278.9042111208858!2d-15.989174386621082!3d23.66174848100911!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1765769322191!5m2!2sfr!2sma"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-------------------------->
        </section>
        <!-----------------contact-info-section---------->
    </section>
</template>
<style scoped>
@media screen and (max-width: 1000px) {
    .info-contact {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .contact-title p {
        font-size: small;
    }

    .title-section {
        width: 100%;
    }

    .info-contact {
        width: 100%;
    }

    .info {
        width: 100%;
    }

    .info-contact {
        width: 100%;
    }

    .contact-info-section {
        width: 100%;
    }

    .user-info-name-last-name {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .rest-information {
        width: 100%;
    }

    .user-name,
    .user-last-name,
    .user-email,
    .user-number,
    .user-addresse,
    .user-message {
        width: 100%;
    }

    .location {
        width: 100%;
    }

    .contact-btns button {
        width: 100%;
        font-size: x-small;
    }

}
</style>