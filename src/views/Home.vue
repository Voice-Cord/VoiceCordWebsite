<template>
        <div class="wrapper">
            <!-- HERO -->
            <header>
                    <!-- <img src="@/assets/img/HomePage/BGBG.jpg" class="bgbg" /> -->
                <img src="@/assets/img/HomePage/BG.png" class="background" />
                <img src="@/assets/img/HomePage/FG.png" class="foreground" />
                <div class="container">
                    <div class="row">
                        <div class="ms-5 ps-5 col-5">
                            <h1 class="title">VoiceCord </h1>
                            <hr class="white-hr">
                            <h5 class="white">Tired of typing long messages? VoiceCord is a Discord bot to send voice
                                messages on discord!</h5>
                            <div class="mt-3 row block-center">
                                <div class="col-6">
                                    <button class="btn btn-primary btn-md w-100" style="height: 60px">Invite to Server</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-primary btn-md w-100" style="height: 60px">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- CONTENT -->
            <div class="overflow">
                <section>
                    <div class="py-5 container">
                        <h1 class="center mb-3">Premium Features</h1>
                        <div class="mx-auto row" style="width: 75%!important">
                            <div class="col-4">
                                <div class="d-flex" style="justify-content: center;">
                                    <div class="card" style="width: 18rem;">
                                        <img class="card-img-top" src="@/assets/img/Microphone/GreenBlueMicrophone.jpg"
                                            alt="Card image cap">
                                        <div class="card-body">
                                            <p class="card-text" style="color: black">Some quick example text to build
                                                on
                                                the
                                                card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="d-flex" style="justify-content: center;">
                                    <div class="card" style="width: 18rem;">
                                        <img class="card-img-top" src="@/assets/img/Microphone/GreenBlueMicrophone.jpg"
                                            alt="Card image cap">
                                        <div class="card-body">
                                            <p class="card-text" style="color: black">Some quick example text to build
                                                on
                                                the
                                                card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="d-flex" style="justify-content: center;">
                                    <div class="card" style="width: 18rem;">
                                        <img class="card-img-top" src="@/assets/img/Microphone/GreenBlueMicrophone.jpg"
                                            alt="Card image cap">
                                        <div class="card-body">
                                            <p class="card-text" style="color: black">Some quick example text to build
                                                on
                                                the
                                                card title and make up
                                                the
                                                bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
</template>

<script>
import Parallax from "@/components/Parallax.vue";
import SkewBox from "@/components/SkewBox.vue";
import Footer from "@/components/Footer.vue";
import { supabase } from "@/supabase";

export default {
    components: {
        SkewBox,
        Parallax,
        Footer,
    },
    data() {
        return {
            data: "",
        };
    },
    async mounted() {
        const { data, error } = await supabase.from("test").select("data");

        if (error) {
            console.log("AYO THIS IS AN ERROR", error);
            return;
        }

        this.data = data;
    },
};
</script>

<style>
.wrapper {
    height: 100vh;
    overflow-y: visible;
    overflow-x: hidden;
    perspective: 10px;
    background-image: url('../assets/img/HomePage/BGBG.jpg');
}

header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
}

.background {
    transform: translateZ(-10px) scale(2.2);
    object-position: right;
}

.foreground {
    transform: translateZ(-5px) scale(1.5);
}

.bgbg,
.background,
.foreground {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}

.title {
    font-size: 5rem;
    color: white;
    text-shadow: 0 0 5px black;
}

section {
    height: 100%;
    width: 100%;
    background-color: #333;
    color: white;
}

.card {
    border: 0 !important;
}
</style>