<script lang="ts">
  import { onMount } from 'svelte';
  import { randomHexColor } from './helpers';

  let swatch: HTMLDivElement;
  let color = randomHexColor();
  let animating = false;

  function startAnimating() {
    if (animating) return;
    swatch.addEventListener('animationend', stopAnimating, { once: true });
    animating = true;
  }

  function stopAnimating() {
    animating = false;
  }

  function changeColor() {
    if (animating) return;
    color = randomHexColor();
    const randomNumberFrom1To10 = Math.ceil(Math.random() * 10);
    if (randomNumberFrom1To10 === 1) {
      startAnimating();
    }
  }

  let interval = Math.ceil(Math.random() * 26);

  onMount(() => {
    const timer = setInterval(changeColor, interval * 200);
    return () => clearInterval(timer);
  });
</script>

<div
  bind:this={swatch}
  class="swatch"
  style="--color: {color}"
  on:mouseenter={startAnimating}
  on:click={startAnimating}
  on:touchstart={startAnimating}
  on:touchmove={startAnimating}
  on:touchend={startAnimating}
  on:keypress={startAnimating}
  class:animating
  role="button"
  tabindex="0">
</div>

<style lang="less">
  .swatch {
    touch-action: none;
    background-color: var(--color);
    transition: background-color 2s ease-out;
    border: 1px solid rgba(0 0 0 / 0.2);
    border-radius: 4px;
    aspect-ratio: 1;
    &.animating {
      pointer-events: none;
      animation: bloom 2s ease-out forwards;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow:
      1px 1px 1px rgba(0 0 0 / 1),
      0px 0px 1px rgba(0 0 0 / 1);
    font-family: var(--font-sans);
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }

  @keyframes bloom {
    0% {
      scale: 1;
      opacity: 1;
    }
    90% {
      scale: 3;
      opacity: 0.1;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
</style>
