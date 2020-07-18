<template>
  <section class="alternate">
    <div class="alternate__item" v-for="(item, index) in items" :key="index" :class="{ '-reverse' : index % 2 === 0 }"  v-if="item.visible">
      <transition name="slide">
        <div class="alternate__item--img" :ref="`alternate-${index}`" >
          <img :src="item.img" height="100%" width="100%"/>
        </div>
      </transition>


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
import inViewport from 'in-viewport'
export default {
  name: "alternate-section",
  data: () => ({
    items: [
      { title: 'Performance', img: '/images/speed-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false},
      { title: 'Accessibility', img: '/images/responsive-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false},
      { title: 'Visibility', img: '/images/seo-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false},
      { title: 'Scalability', img: '/images/scalability-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false}
    ]
  }),
  mounted(){
    this.items.forEach((item, index) => {
      inViewport(this.$refs[`alternate-${index}`], item.visible = true)
    })
  }

}
</script>
