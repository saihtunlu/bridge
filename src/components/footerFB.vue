<template>
  <div class="footer-radius-fb animated">
    <div class="bottom-div flex-center">
      <a
        href="https://facebook.com/useyourvoice2020myanmar"
        target="_blank"
        class="animated bounceInUp fbicon"
        :style="
          `animation-delay:${Math.floor(Math.random() * 600) + 1}ms !important;`
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path
            d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.footer-radius-fb {
  position: absolute;
  bottom: 80px;
  right: 0px;
  left: 0px;
  width: 100%;
  z-index: 100;
}

a.fbicon svg {
  background: #fff;
  border-radius: 100%;
  font-size: 35px;
  fill: rgb(var(--vs-primary));
  padding: 3px;
}
</style>
