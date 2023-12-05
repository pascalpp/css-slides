<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
</script>

<section data-transition="slide">
  <div class="browser-container">
    <Browser title="The trouble with height: 100%">
      <div class="page"></div>
    </Browser>
  </div>
</section>

<style lang="less">
  .page {
    padding: 1rem;
    height: 60vh;
  }
</style>
