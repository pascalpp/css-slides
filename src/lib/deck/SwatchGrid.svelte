<script lang="ts">
  import Swatch from './Swatch.svelte';

  export let swatches = new Array(36).fill(null);
</script>

<div class="swatch-grid">
  {#each swatches as _}
    <Swatch />
  {/each}
</div>

<style lang="less">
  .swatch-grid {
    width: 400px;
    touch-action: none;
    margin-block: 1rem;
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 1fr;
    user-select: none;
  }
</style>
