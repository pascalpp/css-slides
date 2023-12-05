<script lang="ts">
  export let id: string;
  export let value: number;
  export let min: number = 0;
  export let max: number = 1;
  export let step: number = 0.1;
  export let label: string;
  export let title: string | undefined = undefined;
  export let taborder = 0;

  let input: HTMLInputElement;
</script>

<fieldet class="slider" {title}>
  <label for={id}>{label}</label>
  <input {id} type="range" {min} {max} {step} bind:value bind:this={input} tabindex={taborder} />
</fieldet>

<style lang="less">
  .slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    label {
      margin: 0;
    }

    // input {
    // background-color: transparent;

    // &::-webkit-slider-thumb {
    //   outline: 1px solid black;
    //   border-radius: 50%;
    // }
    // &::-moz-range-thumb {
    //   outline: 1px solid black;
    //   border-radius: 50%;
    // }

    // &:active,
    // &:focus {
    //   outline: none;
    //   &::-webkit-slider-thumb {
    //     outline: 2px solid black;
    //   }
    //   &::-moz-range-thumb {
    //     outline: 2px solid black;
    //   }
    // }

    // &::-moz-range-track {
    //   background-color: steelblue;
    //   height: 4px;
    //   border-radius: 2px;
    // }
    // }

    input[type='range'] {
      --border-radius: 50%;
      --track-height: 8px;
      --track-radius: 4px;
      --track-fill-color: color-mix(in srgb, var(--color-lime) 20%, transparent);
      --track-border-color: var(--color-lime);
      --thumb-size: 24px;
      --thumb-color: #000;
      --thumb-border-color: var(--color-lime);

      background-color: transparent;
      height: unset;
      appearance: none;
      margin: 0;
      width: 100%;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        cursor: pointer;
        height: var(--track-height);
        // box-shadow: 1px 1px 1px #000000;
        background: var(--track-fill-color);
        border-radius: var(--track-radius);
        border: 1px solid var(--track-border-color);
      }
      &::-webkit-slider-thumb {
        // box-shadow: 1px 1px 1px #000000;
        border: 2px solid var(--thumb-border-color);
        width: var(--thumb-size);
        aspect-ratio: 1;
        border-radius: var(--border-radius);
        background: var(--thumb-color);
        cursor: pointer;
        appearance: none;
        transform: translateY(-9px);
      }
      &:focus::-webkit-slider-runnable-track {
        background: var(--track-fill-color);
      }

      &::-moz-range-track {
        width: 100%;
        cursor: pointer;
        height: var(--track-height);
        box-shadow: 1px 1px 1px #000000;
        background: var(--track-fill-color);
        border-radius: var(--track-radius);
        border: 1px solid #000000;
      }
      &::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000;
        border: 1px solid #000000;
        width: var(--thumb-size);
        aspect-ratio: 1;
        border-radius: var(--border-radius);
        background: var(--thumb-color);
        cursor: pointer;
      }

      &::-ms-track {
        width: 100%;
        height: var(--track-height);
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      &::-ms-fill-lower {
        background: var(--track-fill-color);
        border: 1px solid #000000;
        border-radius: 10px;
        box-shadow: 1px 1px 1px #000000;
      }
      &::-ms-fill-upper {
        background: #3071a9;
        border: 1px solid #000000;
        border-radius: 10px;
        box-shadow: 1px 1px 1px #000000;
      }
      &::-ms-thumb {
        margin-top: 1px;
        box-shadow: 1px 1px 1px #000000;
        border: 1px solid #000000;
        width: var(--thumb-size);
        aspect-ratio: 1;
        border-radius: var(--border-radius);
        background: var(--thumb-color);
        cursor: pointer;
      }
      &:focus::-ms-fill-lower {
        background: var(--track-fill-color);
      }
      &:focus::-ms-fill-upper {
        background: var(--track-fill-color);
      }
    }
  }
</style>
