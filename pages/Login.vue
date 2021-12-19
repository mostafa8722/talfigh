<template>
  <v-app>
    <v-layout class="login"
      ><span class="signup">
        <v-row>
          <v-col>
            <img class="ml-3" src="~/static/images/home.svg" alt="" />
            <a class="black--text" style="text-decoration: none" href="#"
              >ثبت نام</a
            ></v-col
          >
        </v-row></span
      >
      <v-container class="d-flex justify-center align-center">
        <v-card outlined color="transparent">
          <v-card-title>
            <span class="mx-auto" style="font-size: 3rem">ورود مدیران</span>
          </v-card-title>
          <v-card-text style="margin-top: 10%">
            <div style="width: 351px">
              <v-text-field
                label="نام کاربری"
                placeholder="نام کاربری"
                color="#F5A06F"
                v-model="username"
              >
              </v-text-field>
              <v-text-field
                label="رمز کاربری"
                placeholder="رمز کاربری"
                class="pt-0"
                color="#F5A06F"
                v-model="password"
              >
              </v-text-field>
              <v-checkbox
                class="mb-2 pt-2"
                label="من را به خاطر بسپار"
              ></v-checkbox>
              <v-btn
                @click="login()"
                color="primary"
                class="white--text"
                min-height="48px"
                block
                >ورود به پنل</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  layout: 'empty',
  data() {
    return {
      username:null,
      password:null
    }
  },
  mounted() {
      // Before loading login page, obtain csrf cookie from the server.
      this.$axios.$get('/sanctum/csrf-cookie',{baseURL:"http://localhost:8000"});
  },
  methods:{
     async login()
      {
        try
        {
           await this.$auth.loginWith('laravelSanctum', {
                data: {
                  username: this.username,
                  password: this.password,
                },
            });
        }
        catch(err)
        {
          
        }
      
      }
  },
  head: {
    title: 'صفحه ورود'
  }
}
</script>

<style scoped>
.login {
  background-image: url('/images/login.png');
  background-position: center;
}
.signup {
  font-size: 1.5rem;
  color: black;
  padding: 4% 6% 0 0;
  position: absolute;
}
</style>
