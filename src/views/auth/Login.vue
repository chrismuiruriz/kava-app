<template>
  <ion-page>
    <ion-content fullscreen scroll-y="true">
      <div class="_header">
        <div class="_logo-wrapper">
          <ion-img src="./assets/img/logo-white.png" />
        </div>
        <div class="_title-wrapper">
          <h4>Login</h4>
        </div>
      </div>

      <form @submit.prevent="() => router.push('/verify/')">
        <div class="_form-content">
          <div class="_form-title">
            <h3>Verify your phone number</h3>
            <p>We will send you a one-time verification code.</p>
          </div>
          <ion-item no-lines>
            <ion-label position="floating">Phone number</ion-label>
            <ion-input type="tel" placeholder="07XXXXXXXX"></ion-input>
            <ion-icon :icon="call" slot="start"></ion-icon>
          </ion-item>

          <div class="_text-btn-wrapper">
            <ion-button
              href="#"
              type="button"
              fill="clear"
              size="small"
              color="dark"
              >Forgot Password?</ion-button
            >
          </div>

          <div class="_btn-wrapper">
            <ion-button
              shape="round"
              expand="block"
              type="submit"
              size="default"
              class="_custom-form-btn"
              >LOGIN</ion-button
            >
          </div>
        </div>
      </form>

      <div class="_footer">
        <ion-button type="button" fill="clear" size="small" color="dark">
          <ion-text color="dark">Messages and data rates may apply!</ion-text>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonImg,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonIcon,
} from "@ionic/vue";
import { call } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    return {
      call,
      router,
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

._form-content {
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding: 1.5rem;
}

ion-item {
  border-radius: 20px;
  box-shadow: 1px 2px 3px #cccccc;
}

._form-title {
  text-align: center;
  margin-bottom: 2rem;
}

._form-title h4 {
  margin-bottom: 0.5rem;
}

._form-title p {
  margin-top: 0;
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
</style>


<style>
._custom-form-btn {
  --padding-top: 1.3rem;
  --padding-bottom: 1.3rem;
}
</style>

