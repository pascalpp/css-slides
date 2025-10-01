<script lang="ts">
  import Slider from '$lib/components/Slider.svelte';

  const justifyValues = ['flex-start', 'flex-end', 'center', 'space-between'] as const;
  type JustifyTuple = typeof justifyValues;
  type JustifyValue = JustifyTuple[number];

  const alignValues = ['stretch', 'flex-start', 'center', 'flex-end'] as const;
  type AlignTuple = typeof alignValues;
  type AlignValue = AlignTuple[number];

  let justify: JustifyValue = 'flex-start';
  let align: AlignValue = 'stretch';
  let gap = 1;

  let timer = 0;

  function setJustify(value: JustifyValue) {
    clearInterval(timer);
    justify = value;
  }

  function setAlign(value: AlignValue) {
    clearInterval(timer);
    align = value;
  }

  function startJustifyCycle() {
    clearInterval(timer);
    showNextJustifyValue();
    timer = setInterval(showNextJustifyValue, 2000);
  }

  function startAlignCycle() {
    clearInterval(timer);
    showNextAlignValue();
    timer = setInterval(showNextAlignValue, 2000);
  }

  function showNextJustifyValue() {
    const currentIndex = justifyValues.indexOf(justify);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= justifyValues.length) {
      justify = justifyValues[0];
    } else {
      justify = justifyValues[nextIndex];
    }
  }

  function showNextAlignValue() {
    const currentIndex = alignValues.indexOf(align);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= alignValues.length) {
      align = alignValues[0];
    } else {
      align = alignValues[nextIndex];
    }
  }
</script>

<section>
  <div class="page row">
    <div class="left-column">
      <div class="box wrapper">
        <h1>Fun with Flexbox</h1>
        <ul class="fragment flex-direction">
          <li>
            flex-direction: <span class="small">row | column</span>
          </li>
          <li class="fragment justify-content">
            <button on:click={startJustifyCycle}>justify-content:</button><br />
            <span class="indent nowrap small">
              {#each justifyValues as value}
                <button on:click={() => setJustify(value)} class="divided-value" class:active={justify === value}
                  >{value}</button>
              {/each}
              …
            </span>
          </li>
          <li class="fragment align-items">
            <button on:click={startAlignCycle}>align-items:</button><br />
            <span class="indent small">
              {#each alignValues as value}
                <button on:click={() => setAlign(value)} class="divided-value" class:active={align === value}
                  >{value}</button>
              {/each}
              …
            </span>
          </li>
          <li class="fragment flex-gap">
            <div class="row gap-row">
              <span>gap: <em class="small">any length</em></span>
              <span class="slider">
                <Slider id="gap" bind:value={gap} min={0} max={2} step={0.1} label="" />
              </span>
            </div>
          </li>
        </ul>
      </div>

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
    &.divided-value:not(:first-child) {
      &::before {
        content: '';
        display: inline-block;
        width: 1px;
        background-color: currentcolor;
        height: 1.25em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        text-decoration: none;
        transform: translateY(0.25em);
      }
    }
  }

  .page {
    gap: 2rem;
    align-items: flex-end;
  }

  .left-column {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-end;
  }

  ul {
    margin-left: 0;
    font-size: 0.9em;
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
    .label {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      inset: 0;
    }
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
      flex-direction: row;
      flex-wrap: nowrap;
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
          top: -2px;
          transform: translateX(-50%) translateY(-50%);
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
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
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
          .label {
            animation: left-right 5s ease-in-out -5s infinite;
          }
          .label::before {
            content: 'Content flows along primary axis';
          }
        }
      }

      .column-example {
        .arrow.vertical {
          display: block;
          .label {
            animation: up-down 5s ease-in-out -5s infinite;
          }
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

    @keyframes left-right {
      0% {
        transform: translateX(-12%);
      }
      50% {
        transform: translateX(12%);
      }
      100% {
        transform: translateX(-12%);
      }
    }

    @keyframes up-down {
      0% {
        transform: translateY(-18%);
      }
      50% {
        transform: translateY(18%);
      }
      100% {
        transform: translateY(-18%);
      }
    }
  }
</style>
