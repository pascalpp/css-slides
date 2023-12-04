<script lang="ts">
  import Slide from './Slide.svelte';
</script>

<Slide animate>
  <h1>CSS</h1>
  <h2>
    The Good, The Bad, The <span class="relative">
      <strike>Ugly</strike><span class="larger">Beautiful</span>
    </span>
  </h2>
</Slide>

<style lang="postcss">
  h1 {
    color: white;
    margin-bottom: 0;
  }
</style>
