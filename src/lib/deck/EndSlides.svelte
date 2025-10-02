<script lang="ts">
  import Slide from './Slide.svelte';
</script>

<Slide>
  <p><em>In conclusion,</em></p>
  <h1 class="fragment">I ❤️ CSS</h1>
  <p class="fragment"><em>and so should you!</em></p>
</Slide>

<Slide>
  <div class="box wrapper">
    <h1>Q&A</h1>
  </div>
</Slide>

<Slide>
  <h1>Thank you!</h1>
  <p class="small created-with">Created with SvelteKit and reveal.js</p>
  <p class="small"><a href="https://css-slides.pascal.com">https://css-slides.pascal.com</a></p>
</Slide>

<style lang="less">
  .row {
    align-items: stretch;
  }

  .left.column {
    padding-top: 2em;
    padding-bottom: 2em;
    justify-content: space-between;
  }
  .created-with {
    color: color-mix(in srgb, currentColor 50%, transparent);
  }

  img {
    max-width: unset;
    max-height: unset;
  }
</style>
