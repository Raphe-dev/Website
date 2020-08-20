<template>
  <section class="lighthouse">
    <div class="lighthouse__svg">
      <img src="/images/lighthouse-animate.svg" width="90%" alt="lighthouse svg animated" class="lighthouse__svg--img"/>
    </div>
    <div class="lighthouse__content">
      <div class="lighthouse__content--title">
        {{ $t('light.title') }}
      </div>

      <p class="lighthouse__content--text">
        {{ $t('light.text') }}
      </p>

      <div class="lighthouse__content--result">
        <div>
            <img src="images/lighthouse_bad_result.png" width="99%" alt="lighthouse bad results"/>
        </div>
        <span> {{ $t('light.compare') }} </span>
        <div>
            <img src="images/lighthouse_good_result.png" width="99%" alt="lighthouse perfect results"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "lighthouse-section"
}
</script>
