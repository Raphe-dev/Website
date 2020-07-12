<template>
  <section class="alternate">
    <div class="alternate__item" v-for="(item, index) in items" :key="index" :class="{ '-reverse' : index % 2 === 0 }">
      <div class="alternate__item--img">
        <img/>
      </div>

      <div class="alternate__item--txt">
        <h3>
          {{ item.title }}
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit lacus, accumsan non pretium nec, rhoncus lobortis augue. Vivamus hendrerit facilisis molestie. Suspendisse non ligula suscipit, mattis tellus vel, placerat mi.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "alternate-section",
  data: () => ({
    items: [
      { title: 'Performance', img: '/images/time.svg', txt: 'lorem ipsum dolar sit amet'},
      { title: 'Accessibility', img: '/images/encryption.svg', txt: 'lorem ipsum dolar sit amet'},
      { title: 'Visibility', img: '/images/devices.svg', txt: 'lorem ipsum dolar sit amet'},
      { title: 'Scalability', img: '/images/search.svg', txt: 'lorem ipsum dolar sit amet'}
    ]
  }),

}
</script>

<style scoped>

</style>
