<script lang="ts">
  import Slide from './Slide.svelte';
  import LiveLaughLove from './LiveLaughLove.svelte';
</script>

<Slide>
  <div class="row">
    <h3>or:</h3>
    <h3>How to</h3>
    <LiveLaughLove />
    <h3>in CSS</h3>
  </div>
</Slide>

<style lang="postcss">
  .row {
    transform: scale(1.25);
  }

  h3 {
    color: var(--secondary-color);
    &:first-child {
      margin-right: 1rem;
      color: white;
      font-family: var(--font-serif);
      font-style: italic;
      transform: translateY(-1px);
      font-size: 0.8em;
    }
    &:last-child {
      margin-left: -0.5rem;
      margin-right: 3rem;
    }
  }
</style>
