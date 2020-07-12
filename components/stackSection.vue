<template>
  <div class="stack">
    <div v-for="(item, index) in items" class="stack__item">
      <img :src="item.img" width="100%" class="stack__item--img"/>
      <span class="stack__item--txt">
        {{item.txt}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "stack-section",
  data: () => ({
    items: [
      { title: 'title', img: '/images/nodejs.svg', txt: 'node.js'},
      { title: 'title', img: '/images/vue.svg', txt: 'vue'},
      { title: 'title', img: '/images/nuxt.svg', txt: 'nuxt'},
      { title: 'title', img: '/images/sass.svg', txt: 'sass'},
      { title: 'title', img: '/images/tailwindcss.svg', txt: 'tailwind'},
      { title: 'title', img: '/images/firebase.svg', txt: 'firebase'},
      { title: 'title', img: '/images/mongodb.svg', txt: 'mongo db'},
    ]
  })
}
</script>
