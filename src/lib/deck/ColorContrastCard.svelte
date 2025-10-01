<script lang="ts">
  import { onMount } from 'svelte';
  import { randomHexColor } from './helpers';

  function changeColor() {
    color = randomHexColor();
  }

  let color = randomHexColor();

  onMount(() => {
    const timer = setInterval(changeColor, 1500);
    return () => clearInterval(timer);
  });
</script>

<div class="color-card row" style="--color: {color}">
  <button class="swatch" on:click={changeColor}>Text color</button>
</div>

<style lang="less">
  .color-card {
    z-index: 100000;
    background-color: white;
    padding: 0;
    width: min-content;
    padding: 0.5rem;
    border-radius: 0.75rem;
    margin-inline: auto;
    color: var(--color);

    .swatch {
      background-color: var(--color);
      transition: all 0.5s ease-out;
      color: contrast-color(var(--color));
      padding: 0;
      display: block;
      font-size: 48px;
      line-height: 2;
      padding: 0.5rem 2rem;
      padding-top: 0;
      font-family: var(--font-serif);
      white-space: nowrap;
      border: 1px solid rgb(0 0 0 / 0.1);
      &:first-child {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-right: none;
      }
      &:last-child {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        border-left: none;
      }
    }
  }
</style>
