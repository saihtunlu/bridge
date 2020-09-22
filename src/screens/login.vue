<template>
  <div class="row mt-0" id="auth">
    <div class="col-12 flex-center">
      <div
        class="flex-center dialog-content login flex-column"
        style="padding: 20px;background: #fff !important;"
      >
        <img src="../../public/image/logo.png" width="220px;" style="margin:30px ;" alt />
        <form @submit.prevent="onSubmit" class="w-100">
          <vs-input v-model="username" label="Username" class="mb-5" placeholder="Enter username"></vs-input>
          <vs-input
            type="password"
            class="mb-3"
            v-model="password"
            placeholder="Enter your password"
            label="Password"
          ></vs-input>
          <vs-button
            ref="button"
            class="w-100 mt-5 mb-3"
            style="width:100% !important"
            type="submit"
          >Login</vs-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      register: {
        username: "",
        email: "",
        password: "",
        password_confirm: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const loading = this.$vs.loading({
        target: this.$refs.button,
        scale: "0.6",
        background: "primary",
        opacity: 1,
        color: "#fff",
      });
      setTimeout(() => {
        loading.close();
      }, 3000);

      this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style>
#auth {
  margin-top: 0px !important;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
div#auth .form img {
  width: 60%;
  object-fit: cover;
  border-radius: 25px;
}
/* ------------------------------------------------'mobile'------------------------------------------------ */
@media screen and (max-width: 600px) {
  #auth .form {
    background: rgb(var(--vs-light));
    border-radius: 30px;
    width: 100%;
    min-height: 60vh;
    padding: 15px;
  }
}
/* ------------------------------------------------'tablet'------------------------------------------------ */
@media screen and (min-width: 600px) and (max-width: 992px) {
  #auth .form {
    background: rgb(var(--vs-light));
    border-radius: 30px;
    width: 60%;
    min-height: 40vh;
    padding: 30px;
  }
}
/* ------------------------------------------------'desktop'------------------------------------------------ */
@media (min-width: 992px) {
  #auth .form {
    background: rgb(var(--vs-light));
    border-radius: 30px;
    width: 75%;
    min-height: 60vh;
  }
}
</style>
