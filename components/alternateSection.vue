<template>
  <section class="alternate">
    <div class="alternate__item" v-for="(item, index) in items" :key="index" :class="{ '-reverse' : index % 2 === 0 }" >
        <div class="alternate__item--img" v-observe-visibility="{callback:  (isVisible, entry) => itemVisible(isVisible, entry, item), throttle: 300, once: true}">
          <transition :name=" index % 2 === 0 ? 'slide' : 'slide-reverse'">
            <img :src="item.img" height="100%" width="100%" v-if="item.visible" :alt="item.title"/>
          </transition>
        </div>


      <div class="alternate__item--txt" :class="{ '-reverse' : index % 2 !== 0 }" >
        <span>
          {{ $t(`alternate.${item.title}.title`) }}
        </span>
        <p>
          {{ $t(`alternate.${item.title}.text`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "alternate-section",
  data: () => ({
    items: [
      { title: 'performance', img: '/images/speed-animate.svg', visible: false},
      { title: 'accessibility', img: '/images/responsive-animate.svg', visible: false},
      { title: 'visibility', img: '/images/seo-animate.svg', visible: false},
      { title: 'scalability', img: '/images/scalability-animate.svg', visible: false},
      { title: 'serverless', img: '', visible: false},
    ]
  }),
  methods: {
    itemVisible(isVisible, entry, item) {
      item.visible = isVisible;
    }
  }

}
</script>
