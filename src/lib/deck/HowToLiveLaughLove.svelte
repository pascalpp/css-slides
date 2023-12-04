<script lang="ts">
  import Slide from './Slide.svelte';
  import LiveLaughLove from './LiveLaughLove.svelte';
</script>

<Slide animate>
  <div class="row">
    <h4>or:</h4>
    <h4>How to</h4>
    <LiveLaughLove />
    <h4>in CSS</h4>
  </div>
</Slide>

<style lang="postcss">
  h4 {
    color: var(--secondary-color);
    &:first-child {
      margin-right: 1rem;
      color: white;
    }
    &:last-child {
      margin-left: -1rem;
      margin-right: 3rem;
    }
  }
</style>
