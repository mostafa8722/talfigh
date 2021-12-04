<template>
  <v-app>
    <v-layout class="main">
      <v-container class="d-flex justify-center align-center">
        <v-card class="transparent text-center" outlined>
          <div class="error-code">404</div>
          <div class="first-text">فکنم یه جای آدرس شما اشتباه باشه</div>
          <div class="second-text mt-6">
            لطفا برید به صفحه اصلی و بیشتر تلاش کنید
          </div>
          <v-btn class="mt-6 rounded-sm" elevation="0" color="primary">
            بازگشت به صفحه اصلی
          </v-btn>
        </v-card>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'UnauthorizedPage',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .error-code {
    font-size: 6.25rem !important;
  }
  .main {
    background-image: url('/images/phone.png') !important;
  }
  .first-text {
    font-size: 1.25rem !important;
  }
  .second-text {
    font-size: 1rem !important;
  }
}
.main {
  background-image: url('/images/pannel.png');
  background-size: cover;
}
.error-code {
  font-size: 15.6rem;
  font-family: 'Kodchasan', sans-serif !important;
  font-weight: 700;
  color: #23005c;
}
.first-text {
  font-weight: bold;
  font-size: 2.9rem;
}
.second-text {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
