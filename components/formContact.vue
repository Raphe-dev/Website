<template>
  <section class="formContact">
    <div class="formContact__title">
      <div> title </div>
      <button @click="showForm = !showForm"> button </button>
    </div>
    <transition name="slide">
      <div class="formContact__container" v-if="showForm">
        <div class="formContact__close"@click="showForm =  false">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" width="2rem" height="2rem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>

        </div>
        <div class="formContact__form--title">
          Bacon ipsum sit amet
        </div>

        <div class="formContact__form">
          <label>
            Name
            <input type="text" v-model="form.name" />
          </label>

          <label>
            Email
            <input type="text" v-model="form.email" />
          </label>
          <label>
            Type of project
            <select v-model="form.type" style="padding: 0.175rem; margin-top: 0.2rem;">
              <option disabled selected default value="default">Select</option>
              <option value="refonte">overhaul</option>
              <option value="newWeb">new website</option>
              <option value="newApp">new app</option>
            </select>
          </label>

        
          <label>
            Your project in a few lines
            <textarea type="text" rows="4" v-model="form.description" style="margin-top: 0.2rem;"/>
          </label>

          <label v-if="form.type === 'refonte'">
            Current website url
            <input type="text"  v-model="form.currentWebsite" />
          </label>

          <span>
            <label for="form-checkbox">Need a design ?</label>
            <input type="checkbox" v-model="form.design" id="form-checkbox"/>
          </span>
        </div>

      </div>
    </transition>

  </section>
</template>

<script>
export default {
  name: "form-contact",
  data: () => ({
    showForm: false,
    typeOptions: [ 'refonte', 'newWeb', 'newApp' ],
    form: {
      name: '',
      email: '',
      type: 'default',
      design: false,
      currentWebsite: '',
      description: ''
    }
  }),
}
</script>
