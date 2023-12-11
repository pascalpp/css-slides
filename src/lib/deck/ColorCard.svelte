<!-- not used -->
<script lang="ts">
  function randomHexColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function changeColor() {
    color = randomHexColor();
  }

  let color = randomHexColor();
</script>

<div class="color-card row" style="--color: {color}">
  <div class="swatch light"></div>
  <button class="swatch current" on:click={changeColor}></button>
  <div class="swatch dark"></div>
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
    color: var(--color, var(--color-red));

    .swatch {
      padding: 0;
      width: 100px;
      height: 100px;
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

      &.current {
        color: inherit;
        background-color: currentColor;
      }
      &.light {
        background-color: color-mix(in srgb, currentColor 50%, white);
      }
      &.dark {
        background-color: color-mix(in srgb, currentColor 50%, black);
      }
    }
  }
</style>
