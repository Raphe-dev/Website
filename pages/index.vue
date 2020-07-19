<template>
  <div>
    <header-section></header-section>

    <flexcard-section></flexcard-section>

    <quote-section></quote-section>

    <lighthouse-section></lighthouse-section>

    <alternate-section></alternate-section>

    <form-contact></form-contact>

    <stack-section></stack-section>

    <footer-section></footer-section>

    <div class="copyright">
      © Raphaëlle Roy 2020
    </div>
  </div>
</template>

<script>
  import headerSection from '@/components/headerSection.vue'
  import FlexcardSection from "../components/flexcardSection";
  import QuoteSection from "../components/quoteSection";
  import lighthouseSection from "../components/lighthouseSection";
  import StackSection from "../components/stackSection";
  import alternateSection from "../components/alternateSection";
  import FooterSection from "../components/footerSection";
  import FormContact from "../components/formContact";
  export default {
    components: {
      FormContact,
      FooterSection,
      StackSection, alternateSection, lighthouseSection, QuoteSection, FlexcardSection, headerSection }
  }
</script>
