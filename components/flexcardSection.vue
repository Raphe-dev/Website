<template>
  <section class="flexcards">
    <div class="flexcards__flex">
      <div v-for="(card, index) in cards" :key="index" class="flexcards__item">

        <div class="flexcards__item--img"> {{card.img}} </div>

        <span class="flexcards__item--title">{{ card.title }}</span>

        <div class="flexcards__item--text">
          {{ card.txt }}
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
      { title: 'title', img: 'img', txt: 'lorem ipsum dolar sit amet'},
      { title: 'title', img: 'img', txt: 'lorem ipsum dolar sit amet'},
      { title: 'title', img: 'img', txt: 'lorem ipsum dolar sit amet'},
      { title: 'title', img: 'img', txt: 'lorem ipsum dolar sit amet'}
    ]
  })
}
</script>
