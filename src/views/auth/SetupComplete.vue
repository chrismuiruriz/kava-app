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
            <p>STEP 3 of 3</p>
            <h4>Activate your profile</h4>
            <p>
              Your profile is now set up. Activate your account by paying the
              one-off Platform Access fee of KSH. 50/-
            </p>
          </div>
          <br />

          <div class="_btn-wrapper">
            <ion-button
              shape="round"
              expand="block"
              type="button"
              size="default"
              @click="() => router.push('/payment/')"
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
import { IonContent, IonPage, IonImg, IonButton } from "@ionic/vue";
import { lockClosed } from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  name: "SetupComplete",
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonButton,
  },
  setup() {
    const router = useRouter();
    return {
      lock: lockClosed,
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

