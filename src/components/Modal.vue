<template>
  <ion-content class="ion-padding">
    <ion-text color="dark">
      <h2 class="_title">{{ title }}</h2>

      <ol class="_list">
        <li>
          <h5>Getting to know you</h5>
          <div>
            You will be asked to enter your Mobile Number, National ID &amp; KRA
            PIN Number, so that we can verify it's really you.
          </div>
        </li>
        <li>
          <h5>Keep your account secure</h5>
          <div>
            You'll create a Passcode and select a Security Question for your
            protection.
          </div>
        </li>
        <li>
          <h5>One-off access fee</h5>
          <div>
            You'll pay Ksh. 50/- Access Fee. This is one-off and will no be
            charged again.
          </div>
        </li>
        <li>
          <h5>Your Money in safe hands</h5>
          <div>
            This is a Unit Trust product managed by Britam Asset Managers (K)
            Ltd (BAM) as regulated by Capital Markets Authority (CMA). kava is
            an Authorised Agent (IFA) of BAM. All deposits go directly to BAM.
          </div>
        </li>
      </ol>

      <div class="_btn-container">
        <ion-button type="button" shape="round" @click="tuendelee"
          >Continue</ion-button
        >
      </div>
    </ion-text>
  </ion-content>
</template>

<script>
import { IonContent, IonButton, IonText } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Useful Information" },
  },
  data() {
    return {
      content: "Content",
    };
  },
  components: { IonContent, IonButton, IonText },
  methods: {
    tuendelee() {
      this.$emit("close");
    },
  },
});
</script>

<style scoped>
ion-content {
  align-items: center;
}
._title {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
}
._list {
  margin-top: 2rem;
  margin-bottom: 3rem;
}
._btn-container {
  text-align: center;
}
</style>