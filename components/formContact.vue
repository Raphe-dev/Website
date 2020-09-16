<template>
  <section class="formContact">

    <div class="formContact__title">
      <div>
        {{ $t('form.title') }}
      </div>

      <button @click="showForm = !showForm" class="formContact__button">
        {{ $t('form.btn') }}
      </button>
    </div>
    <transition name="slideUp">
      <div class="formContact__modal" v-if="showForm">

      <div class="formContact__container">
        <div class="formContact__close"@click="showForm =  false">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" width="2rem" height="2rem" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
        </div>

        <div class="formContact__form--title">
          {{ $t('form.formTitle') }}
        </div>

        <div class="formContact__form">
          <label>
            {{ $t('form.name') }}
            <input type="text" v-model="form.name" />
          </label>

          <label>
            {{ $t('form.email') }}
            <input type="text" v-model="form.email" />
          </label>
          <label>
            {{ $t('form.type') }}
            <select v-model="form.type" style="padding: 0.175rem; margin-top: 0.2rem;">
              <option disabled selected default value="default"> {{ $t('form.types.default') }} </option>
              <option value="refonte">{{ $t('form.types.overhaul') }}</option>
              <option value="newWeb">{{ $t('form.types.landing') }}</option>
              <option value="newApp">{{ $t('form.types.webNew') }}</option>
              <option value="newApp">{{ $t('form.types.webApp') }}</option>
              <option value="newApp">{{ $t('form.types.eCom') }}</option>
              <option value="newApp">{{ $t('form.types.blog') }}</option>
              <option value="newApp">{{ $t('form.types.app') }}</option>
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

        <div>
          <div class="formContact__form--button">Send</div>
        </div>

      </div>
      </div>
    </transition>
    <div class="formContact__parallax">
      <img src="/images/bghandshake.jpg" alt="business handshake"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "form-contact",
  data: () => ({
    showForm: false,
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
