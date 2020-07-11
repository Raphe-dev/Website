<template>
  <div style="display: flex; flex-direction: column">
    <header-section></header-section>

    <flexcard-section></flexcard-section>

    <quote-section></quote-section>

    <lightsail-section></lightsail-section>

    <alternate-section></alternate-section>

    <stack-section></stack-section>


    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>

  </div>
</template>

<script>
  import headerSection from '@/components/headerSection.vue'
  import FlexcardSection from "../components/flexcardSection";
  import QuoteSection from "../components/quoteSection";
  import LightsailSection from "../components/lightsailSection";
  import StackSection from "../components/stackSection";
  import alternateSection from "../components/alternateSection";
  export default {
    components: {StackSection, alternateSection, LightsailSection, QuoteSection, FlexcardSection, headerSection }
  }
</script>
