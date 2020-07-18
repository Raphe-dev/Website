<template>
  <header class="header">

    <div class="header__links">
      <a href="#">link</a>
      <a href="#">link</a>
      <a href="#">link</a>
      <a href="#">link</a>
    </div>
    <div class="header__content">

        <h1 class="header__title">
          <span>Lorem Ipsum</span>
          <span class="header__title--title2">Dolar sit amet</span>
        </h1>
        <diV class="header__svg">
          <img src="/images/website-setup-animate.svg" width="100%">
        </diV>

    </div>

      <svg class="header__waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="header__waves--parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#f9f9f9" />
        </g>
      </svg>
  </header>
</template>

<script>
export default {
name: "header-section"
}
</script>

<style>

</style>
