<template>
  <ion-page>
    <ion-content fullscreen scroll-y="true">
      <div class="_header">
        <div class="_logo-wrapper">
          <ion-img src="./assets/img/logo-white.png" />
        </div>
        <div class="_title-wrapper">
          <h4>Activate Profile</h4>
        </div>
      </div>

      <div>
        <div class="_form-content">
          <div class="_form-title">
            <h4>Make a payment</h4>
          </div>
          <br />

          <ion-segment mode="ios" color="primary" value="mpesa">
            <ion-segment-button mode="ios" value="mpesa">
              <ion-label>M-Pesa</ion-label>
            </ion-segment-button>
            <ion-segment-button mode="ios" value="airtel">
              <ion-label>Airtel Money</ion-label>
            </ion-segment-button>
            <ion-segment-button mode="ios" value="tkash">
              <ion-label>T-Kash</ion-label>
            </ion-segment-button>
          </ion-segment>

          <ion-item no-lines>
            <ion-label position="floating">Phone number</ion-label>
            <ion-input type="tel" placeholder="07XXXXXXXX"></ion-input>
            <ion-icon :icon="call" slot="start"></ion-icon>
          </ion-item>

          <ion-item no-lines>
            <ion-label position="floating">Amount</ion-label>
            <ion-input
              type="tel"
              placeholder="50"
              value="50"
              readonly
            ></ion-input>
            <ion-icon :icon="cash" slot="start"></ion-icon>
          </ion-item>

          <div class="_btn-wrapper">
            <ion-button
              shape="round"
              expand="block"
              type="button"
              size="default"
              @click="() => router.push('/payment-complete/')"
              class="_custom-form-btn"
              >Pay</ion-button
            >
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonImg,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/vue";
import { call, cash } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  name: "Payment",
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
  },
  setup() {
    const router = useRouter();
    return {
      router,
      call,
      cash,
    };
  },
  methods: {},
};
</script>


<style scoped>
ion-content {
  --background: #f8f8f8;
}

._header {
  background: #ff6900;
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
  border-bottom-left-radius: 100px;
}

._logo-wrapper {
  text-align: center;
}

ion-img {
  width: 110px;
  margin: 0 auto;
}

._title-wrapper {
  padding: 1.5rem;
  padding-top: 1rem;
  text-align: right;
}

._title-wrapper h4 {
  color: #ffffff;
  margin: 0;
}

form {
  padding-top: 2rem;
}

ion-segment {
  margin-bottom: 2rem;
}

._form-content {
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding: 1.5rem;
}

ion-item {
  border-radius: 20px;
  box-shadow: 1px 2px 3px #cccccc;
  margin-bottom: 1.5rem;
}

._form-title {
  text-align: center;
  margin-bottom: 1rem;
}

._text-btn-wrapper {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  text-align: right;
}

._btn-wrapper {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

._footer {
  text-align: center;
  padding-top: 2.5rem;
  padding-bottom: 1em;
}
ion-segment-button {
  --border-color: #cccccc;
  --border-width: 1px;
  --border-style: solid;
}
</style>


<style>
._custom-form-btn {
  --padding-top: 1.3rem;
  --padding-bottom: 1.3rem;
}
</style>

