<template>
  <div class="footer-radius animated bounceInUp">
    <div class="primary-bg div-divider"></div>
    <div class="bottom-div"></div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.footer-radius .primary-bg.div-divider {
  height: 85px;
  margin-top: -2px;
  border-bottom-left-radius: 50% 40% !important;
  border-bottom-right-radius: 50% 40% !important;
}
.footer-radius {
  position: absolute;
  bottom: -50px;
  right: 0px;
  left: 0px;
  background: #efefef;
  height: 200px;
  width: 100%;
}
</style>
