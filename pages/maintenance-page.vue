<template>
  <v-app>
    <v-layout class="main">
      <v-container class="d-flex justify-center align-center">
        <v-card class="transparent text-center" outlined>
          <div class="first-text">سایت درحال بروز رسانی هست.</div>
          <div class="second-text mt-4 mt-md-6">
            لطفا کمی شکیبا باشید
            <span class="green-text d-none d-md-block">
              ما همیشه کنار شما هستیم.
            </span>
          </div>
          <div class="green-text d-md-none mt-4">ما همیشه کنار شما هستیم.</div>
        </v-card>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'UnauthorizedPage',
  layout: 'empty',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .main {
    background-image: url('/images/phone-main.png') !important;
  }
  .first-text {
    font-size: 1.25rem !important;
  }
  .second-text {
    font-size: 1rem !important;
  }
}
.main {
  background-image: url('/images/main.png');
  background-size: cover;
}
.first-text {
  font-weight: bold;
  font-size: 2.9rem;
}
.second-text {
  font-weight: bold;
  font-size: 1.2rem;
}
.green-text {
  color: #009d4c;
}
</style>
