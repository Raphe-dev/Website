<template>
  <section class="alternate">
    <div class="alternate__item" v-for="(item, index) in items" :key="index" :class="{ '-reverse' : index % 2 === 0 }" >
        <div class="alternate__item--img" v-observe-visibility="{callback:  (isVisible, entry) => itemVisible(isVisible, entry, item), throttle: 300, once: true}">
          <transition :name=" index % 2 === 0 ? 'slide' : 'slide-reverse'">
            <img :src="item.img" height="100%" width="100%" v-if="item.visible"/>
          </transition>
        </div>


      <div class="alternate__item--txt" :class="{ '-reverse' : index % 2 !== 0 }" >
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
      { title: 'Performance', img: '/images/speed-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false},
      { title: 'Accessibility', img: '/images/responsive-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false},
      { title: 'Visibility', img: '/images/seo-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false},
      { title: 'Scalability', img: '/images/scalability-animate.svg', txt: 'lorem ipsum dolar sit amet', visible: false}
    ]
  }),
  mounted(){
  },
  methods: {
    itemVisible(isVisible, entry, item) {
      console.log(entry, isVisible)
      item.visible = isVisible;
    }
  }

}
</script>
