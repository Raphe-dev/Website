<template>
  <section class="flexcards">
    <div class="flexcards__flex" ref="flex_img">
      <div v-for="(card, index) in cards" :key="index" class="flexcards__item" >

        <div class=flexcards__wrap @mouseenter="mouseHover" @mouseleave="mouseOut">


          <div class="flexcards__item--img" >
            <img :src="`${card.img}.svg`" style="width: 100%;" :alt="card.title">
          </div>

          <span class="flexcards__item--title">{{ card.title }}</span>

          <div class="flexcards__item--text">
            {{ card.txt }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "flexcardSection",
  data: () => ({

  }),
  computed: {
    cards() {
      return [
        { title: this.$t('flexcard.fast.title'), img: '/images/time', txt: this.$t('flexcard.fast.text')},
        { title: this.$t('flexcard.responsive.title'), img: '/images/devices', txt: this.$t('flexcard.responsive.text')},
        { title: this.$t('flexcard.visible.title'), img: '/images/search', txt: this.$t('flexcard.visible.text')},
        { title: this.$t('flexcard.secure.title'), img: '/images/encryption', txt: this.$t('flexcard.secure.text')}
      ]
    }
  },
  methods: {
    mouseHover(e) {
      const link = String(e.target.children[0].children[0].src)
      const index = link.indexOf('.svg')
      const start = link.slice(0, index);
      const end = link.slice(index);
      e.target.children[0].children[0].src = start + '_color' + end;
    },

    mouseOut(e) {
      const link = String(e.target.children[0].children[0].src)
      const index = link.indexOf('_color')
      const start = link.slice(0, index);
      const end = link.slice(index + 6);
      e.target.children[0].children[0].src = start + end;
    }
  }
}
</script>
