<template>
  <section class="flexcards">
    <div class="flexcards__flex">
      <div v-for="(card, index) in cards" :key="index" class="flexcards__item" >

      <div class=flexcards__wrap @mouseenter="mouseHover" @mouseleave="mouseOut">
      

        <div class="flexcards__item--img" >
          <img :src="card.img" style="width: 100%;" :alt="card.title"> 
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
    cards: [
      { title: 'Fast', img: '/images/time.svg', txt: 'lorem ipsum dolar sit amet'},
      { title: 'Responsive', img: '/images/devices.svg', txt: 'lorem ipsum dolar sit amet'},
      { title: 'Visible', img: '/images/search.svg', txt: 'lorem ipsum dolar sit amet'},
      { title: 'Secure', img: '/images/encryption.svg', txt: 'lorem ipsum dolar sit amet'}
    ]
  }),
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
