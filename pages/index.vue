<template>
  <div style="display: flex; flex-direction: column">
    <header-section></header-section>

    <flexcard-section></flexcard-section>

    <quote-section></quote-section>

    <lighthouse-section></lighthouse-section>

    <alternate-section></alternate-section>

    <stack-section></stack-section>

    <footer-section/>
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
  export default {
    components: {
      FooterSection,
      StackSection, alternateSection, lighthouseSection, QuoteSection, FlexcardSection, headerSection }
  }
</script>
