<template>
  <section class="lighthouse">
    <div class="lighthouse__svg">
      <img src="/images/lighthouse-animate.svg" width="90%" alt="lighthouse svg animated"/>
    </div>
    <div class="lighthouse__content">
      <div class="lighthouse__content--title">
        title
      </div>

      <p class="lighthouse__content--text">
        Lorme ipsum dolar sit amet
      </p>

      <div class="lighthouse__content--result">
        <div>
            <img src="images/lighthouse_bad_result.png" width="99%" alt="lighthouse bad results"/>
        </div>
        <span> - or - </span>
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
