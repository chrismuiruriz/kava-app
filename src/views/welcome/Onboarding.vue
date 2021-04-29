<template>
  <ion-page>
    <ion-content fullscreen class="ion-padding" scroll-y="true">
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <div class="slide">
            <ion-img src="./assets/img/slide-1.png" />
            <h2>Welcome to Kava</h2>
            <p>
              The new way to save and invest towards your dreams and ambitions.
              We have done away with high minimum saving thresholds and enabled
              you to earn a return from as little as KES 1000/-.
            </p>
          </div>
        </ion-slide>
        <ion-slide>
          <ion-img src="./assets/img/slide-2.png" />
          <h2>High Returns</h2>
          <p>
            Kava gives you earnings of up to <b>8%</b> return on your savings
          </p>
        </ion-slide>
        <ion-slide>
          <ion-img src="./assets/img/slide-3.png" />
          <h2>So accessible</h2>
          <p>
            Your savings start earning interest from as low as <b>KSH 1000/-</b>
          </p>
        </ion-slide>
        <ion-slide>
          <ion-img src="./assets/img/slide-1.png" />
          <h2>Set unlimited goals</h2>
          <p>Set as many goals as your dreams and track them in-App</p>
        </ion-slide>
        <ion-slide>
          <ion-img src="./assets/img/slide-4.png" />
          <h2 class="_last-title">
            Set goals. Set targets. Grow your savings.
          </h2>
          <ion-button type="button" shape="round" class="_ion-btn" @click="setOpen(true)">
            Start Now</ion-button
          >
        </ion-slide>
      </ion-slides>
    </ion-content>
    <ion-modal
      :is-open="isOpenRef"
      css-class="my-custom-class"
      @onDidDismiss="setOpen(false)"
    >
      <Modal title="Useful information" v-on:close="getStarted" />
    </ion-modal>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonImg,
  IonButton,
  IonModal,
} from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";
import { ref } from "vue";
import Modal from "../../components/Modal.vue";
import { useRouter } from "vue-router";

export default {
  name: "Onboarding",
  components: {
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    IonImg,
    IonButton,
    IonModal,
    Modal,
  },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    const router = useRouter();
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    const getStarted = () => {
      setOpen(false);
      router.push("/login/");
    };
    return {
      ellipse,
      square,
      triangle,
      slideOpts,
      isOpenRef,
      setOpen,
      getStarted,
      router,
    };
  },
};
</script>

<style scoped>
._last-title {
  margin-bottom: 2rem;
}
</style>

<style>
ion-slides {
  height: 100%;
}

.swiper-slide {
  display: block;
  --bullet-background: #4b4f54;
  --bullet-background-active: #ff6900;
}

.swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  opacity: 0.8;
}

.swiper-slide h2 {
  margin-top: 2.8rem;
}

.swiper-slide img {
  max-height: 50%;
  max-width: 80%;
  margin: 60px 0 40px;
  pointer-events: none;
}

b {
  font-weight: 500;
}

p {
  padding: 0 40px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ion-color-step-600, #60646b);
}

p b {
  color: var(--ion-text-color, #000000);
}
</style>
