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
  <div class="row" style="gap: 2em">
    <div class="left column">
      <div>
        <h1>Thank you!</h1>
        <p class="small">Use this QR code for feedback:</p>
      </div>
      <div>
        <p class="small created-with">Created with SvelteKit and reveal.js</p>
        <p class="small"><a href="https://css-slides.vercel.app">https://css-slides.vercel.app</a></p>
      </div>
    </div>
    <div class="right column">
      <img src="./qr-code.png" alt="QR code" width="400" height="400" />
    </div>
  </div>
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
