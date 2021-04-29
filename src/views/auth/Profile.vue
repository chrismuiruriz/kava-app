<template>
  <ion-page>
    <ion-content fullscreen scroll-y="true">
      <form @submit.prevent="() => router.push('/setup-complete/')">
        <div class="_form-content">
          <div class="_form-title">
            <p>STEP 2 of 3</p>
            <h4>My Profile</h4>
          </div>
          <ion-item no-lines>
            <ion-label position="floating">Full Name:</ion-label>
            <ion-input type="text" placeholder=""></ion-input>
            <ion-icon :icon="lock" slot="start"></ion-icon>
          </ion-item>
          <ion-item no-lines>
            <ion-label position="floating">ID Number:</ion-label>
            <ion-input type="tel" placeholder=""></ion-input>
            <ion-icon :icon="card" slot="start"></ion-icon>
          </ion-item>
          <ion-item no-lines>
            <ion-label position="floating">KRA PIN:</ion-label>
            <ion-input type="text" placeholder=""></ion-input>
            <ion-icon :icon="cash" slot="start"></ion-icon>
          </ion-item>
          <ion-item no-lines>
            <ion-label position="floating">Date of Birth:</ion-label>
            <ion-input type="date" placeholder=""></ion-input>
            <ion-icon :icon="calendar" slot="start"></ion-icon>
          </ion-item>
          <ion-item no-lines>
            <ion-label position="floating">Email:</ion-label>
            <ion-input
              type="email"
              placeholder=""
              autocomplete="email"
            ></ion-input>
            <ion-icon :icon="mail" slot="start"></ion-icon>
          </ion-item>

          <div class="_btn-wrapper">
            <ion-button
              shape="round"
              expand="block"
              type="submit"
              size="default"
              class="_custom-form-btn"
              >NEXT</ion-button
            >
          </div>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonPage,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { lockClosed, person, card, cash, mail, calendar } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  name: "Profile",
  components: {
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    return {
      lock: lockClosed,
      router,
      person,
      card,
      cash,
      mail,
      calendar
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
  margin-bottom: 1.5rem;
}

._form-title {
  text-align: center;
  margin-bottom: 2rem;
}

._form-title p {
  margin-bottom: 0.5rem;
}

._form-title h4 {
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

