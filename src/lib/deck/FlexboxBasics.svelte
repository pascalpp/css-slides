<script lang="ts">
  import Slider from '$lib/components/Slider.svelte';

  let align: 'stretch' | 'flex-start' | 'center' | 'flex-end' = 'stretch';
  let justify: 'flex-start' | 'center' | 'space-between' | 'flex-end' = 'flex-start';
  let gap = 1;
</script>

<section>
  <div class="page row">
    <div>
      <h1>Flexbox Basics</h1>
      <ul class="fragment flex-direction">
        <li>
          flex-direction: <span class="small">row | column</span>
        </li>
        <li class="fragment justify-content">
          justify-content:<br />
          <span class="indent nowrap small">
            <button on:click={() => (justify = 'flex-start')} class:active={justify === 'flex-start'}
              >flex-start</button>
            |
            <button on:click={() => (justify = 'flex-end')} class:active={justify === 'flex-end'}>flex-end</button>
            |
            <button on:click={() => (justify = 'center')} class:active={justify === 'center'}>center</button>
            |
            <button on:click={() => (justify = 'space-between')} class:active={justify === 'space-between'}
              >space-between</button>
            | …
          </span>
        </li>
        <li class="fragment align-items">
          align-items:<br />
          <span class="indent small">
            <button on:click={() => (align = 'stretch')} class:active={align === 'stretch'}>stretch</button>
            |
            <button on:click={() => (align = 'flex-start')} class:active={align === 'flex-start'}>flex-start</button>
            |
            <button on:click={() => (align = 'flex-end')} class:active={align === 'flex-end'}>flex-end</button>
            |
            <button on:click={() => (align = 'center')} class:active={align === 'center'}>center</button>
            | …
          </span>
        </li>
        <li class="fragment">
          <div class="row gap-row">
            <span>gap: <em class="small">any length</em></span>
            <span class="slider">
              <Slider id="gap" bind:value={gap} min={0} max={2} step={0.1} label="" />
            </span>
          </div>
        </li>
      </ul>

      <div class="flex-example box row-example" style="align-items: {align}; justify-content: {justify}; gap: {gap}em">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="arrow horizontal"><span class="label"></span></div>
        <div class="arrow vertical"><span class="label"></span></div>
      </div>
    </div>

    <div class="flex-example box column-example" style="align-items: {align}; justify-content: {justify}; gap: {gap}em">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="arrow horizontal"><span class="label"></span></div>
      <div class="arrow vertical"><span class="label"></span></div>
    </div>
  </div>
</section>

<style lang="less">
  button {
    background: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
    &.active {
      text-decoration: underline;
      text-underline-offset: 6px;
    }
  }

  .page {
    gap: 0rem;
    align-items: flex-end;
  }

  ul:hover {
    color: #666;
    li:hover {
      color: #fff;
    }
  }

  li + li {
    margin-top: 1rem;
  }

  .indent {
    margin-left: 1.5rem;
  }
  .small {
    font-size: 0.8em;
  }
  .gap-row {
    justify-content: flex-start;
    align-items: center;
    gap: 1em;

    .slider {
      transform: translateY(3px);
    }
  }

  .arrow {
    --arrow-color: var(--color-red);
    --arrow-inset: 20px;
    display: none;
    &.horizontal {
      background-image: linear-gradient(to right, var(--arrow-color) 50%, rgba(255, 255, 255, 0) 0%);
      background-position: left bottom;
      background-size: 12px 1px;
      background-repeat: repeat-x;
      position: absolute;
      inset-inline: var(--arrow-inset);
      bottom: 50%;
      height: 1px;
      // left triangle
      &::before {
        content: '';
        position: absolute;
        display: block;
        left: -14px;
        top: 0;
        width: 0;
        height: 0;
        border: 6px solid color-mix(in srgb, var(--arrow-color) 50%, transparent);
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform-origin: top left;
        transform: rotate(-45deg);
      }
      &::after {
        content: '';
        position: absolute;
        display: block;
        right: -14px;
        top: 0;
        width: 0;
        height: 0;
        border: 6px solid color-mix(in srgb, var(--arrow-color) 50%, transparent);
        border-left-color: transparent;
        border-bottom-color: transparent;
        transform-origin: top right;
        transform: rotate(45deg);
      }
    }
    &.vertical {
      background-image: linear-gradient(to bottom, var(--arrow-color) 50%, rgba(255, 255, 255, 0) 0%);
      background-position: left top;
      background-size: 1px 12px;
      background-repeat: repeat-y;
      position: absolute;
      inset-block: var(--arrow-inset);
      left: 50%;
      width: 1px;
      // left triangle
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: -14px;
        left: 0;
        width: 0;
        height: 0;
        border: 6px solid color-mix(in srgb, var(--arrow-color) 50%, transparent);
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform-origin: top left;
        transform: rotate(45deg);
      }
      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: -14px;
        left: 0;
        width: 0;
        height: 0;
        border: 6px solid color-mix(in srgb, var(--arrow-color) 50%, transparent);
        border-right-color: transparent;
        border-top-color: transparent;
        transform-origin: bottom left;
        transform: rotate(-45deg);
      }
    }
  }

  .flex-example {
    display: flex;
    gap: 1.5rem;
    padding: 1.25rem;
    position: relative;

    .box {
      margin-inline: unset;
      width: unset;
      background-color: color-mix(in srgb, var(--color-lime) 15%, transparent);
      opacity: 0;
    }

    &.row-example {
      &::before {
        content: 'Row';
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        padding-inline: 1em;
        font-family: var(--font-mono);
        color: var(--color-lime);
        font-size: 0.8em;
      }
      float: right;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 2rem;
      margin-right: 3rem;
      width: 500px;
      .box:nth-child(2) {
        height: 7rem;
      }

      .arrow.vertical {
        left: unset;
        right: 20%;

        .label::before {
          content: 'Cross axis';
          background-color: var(--r-background-color);
          font-size: 0.5em;
          font-family: var(--font-mono);
          color: var(--color-lime);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          padding: 8px;
          border-radius: 4px;
        }
      }

      .arrow.horizontal {
        .label::before {
          white-space: nowrap;
          background-color: var(--r-background-color);
          font-size: 0.5em;
          font-family: var(--font-mono);
          color: var(--color-lime);
          position: absolute;
          top: 1px;
          left: 5%;
          transform: translateY(-50%);
          padding: 8px;
          border-radius: 4px;
        }
      }
    }

    &.column-example {
      &::before {
        content: 'Column';
        position: absolute;
        left: 0;
        bottom: 100%;
        padding-block: 0.75em;
        width: 100%;
        font-family: var(--font-mono);
        color: var(--color-lime);
        font-size: 0.8em;
      }

      flex-direction: column;
      height: 400px;
      align-items: var(--align);
      justify-content: var(--justify);
      .box:nth-child(2) {
        width: 8rem;
      }

      .arrow.horizontal {
        top: unset;
        bottom: 15%;

        .label::before {
          content: 'Cross axis';
          background-color: var(--r-background-color);
          font-size: 0.5em;
          font-family: var(--font-mono);
          color: var(--color-lime);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          padding: 8px;
          border-radius: 4px;
          line-height: 1.3;
        }
      }

      .arrow.vertical {
        .label::before {
          background-color: var(--r-background-color);
          font-size: 0.5em;
          font-family: var(--font-mono);
          color: var(--color-lime);
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px;
          border-radius: 4px;
          line-height: 2;
        }
      }
    }
  }

  .page {
    &:has(.fragment.flex-direction.current-fragment) {
      .row-example {
        .arrow.horizontal {
          display: block;
          .label::before {
            content: 'Content flows along primary axis';
          }
        }
      }
      .column-example {
        .arrow.vertical {
          display: block;
          .label::before {
            content: 'Content flows along primary axis';
          }
        }
      }
    }
    &:has(.fragment.justify-content.visible) {
      .flex-example {
        .box {
          opacity: 1;
        }
      }
    }
    &:has(.fragment.align-items.current-fragment) {
      .row-example {
        .arrow.vertical {
          display: block;
        }
      }
      .column-example {
        .arrow.horizontal {
          display: block;
        }
      }
    }
    &:has(.fragment.justify-content.current-fragment) {
      .row-example {
        .arrow.horizontal {
          display: block;
        }
      }
      .column-example {
        .arrow.vertical {
          display: block;
        }
      }
    }
  }
</style>
