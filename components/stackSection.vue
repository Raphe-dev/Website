<template>
  <div class="stack__wrapper">
    <div class="stack__title">
      Tech stack
    </div>
    <div class="stack">
      <div v-for="(item, index) in items" class="stack__item" @click="openLink(item.link)">
        <img :src="item.img" width="100%" class="stack__item--img" :alt="item.txt"/>
        <div class="stack__item--txt">
          {{item.txt}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "stack-section",
  data: () => ({
    items: [
      { title: 'title', img: '/images/nodejs.svg', txt: 'node.js', link: 'https://nodejs.org/'},
      { title: 'title', img: '/images/vue.svg', txt: 'vue', link: 'https://vuejs.org/'},
      { title: 'title', img: '/images/nuxt.svg', txt: 'nuxt', link: 'https://nuxtjs.org/'},
      { title: 'title', img: '/images/nativescript-vue.svg', txt: 'nativescript', link: 'https://nativescript.org/vue/'},
      { title: 'title', img: '/images/sass.svg', txt: 'sass', link: 'https://sass-lang.com/'},
      { title: 'title', img: '/images/tailwindcss.svg', txt: 'tailwind', link: 'https://tailwindcss.com/'},
      { title: 'title', img: '/images/firebase.svg', txt: 'firebase', link: 'https://firebase.google.com/'},
      { title: 'title', img: '/images/mongodb.svg', txt: 'mongo db', link: 'https://www.mongodb.com/'},
    ]
  }),
  methods: {
    openLink(link) {
      window.open(link,{ target: '_blank'});
    }
  }
}
</script>
