<template>
  <ion-page>
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-menu-button auto-hide="false"></ion-menu-button>
      </ion-buttons>
      <ion-buttons slot="primary">
        <ion-button>
          <ion-icon
            slot="icon-only"
            :ios="ellipsisHorizontal"
            :md="ellipsisVertical"
          ></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title>Kava</ion-title>
    </ion-toolbar>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-button type="button" shape="round" @click="() => router.push('/welcome/')">Create your goal</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonButton,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonIcon,
} from "@ionic/vue";
import {
  close,
  pin,
  ellipsisHorizontal,
  ellipsisVertical,
} from "ionicons/icons";
import { useRouter } from "vue-router";

export default {
  name: "Tab1",
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonToolbar,
    IonMenuButton,
    IonButtons,
    IonTitle,
    IonIcon,
  },
  setup() {
    const router = useRouter();
    return {
      close,
      pin,
      ellipsisHorizontal,
      ellipsisVertical,
      router,
    };
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>