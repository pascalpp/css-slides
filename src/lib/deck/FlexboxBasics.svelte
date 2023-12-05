<script lang="ts">
  let align: 'stretch' | 'flex-start' | 'center' | 'flex-end' = 'stretch';
  let justify: 'flex-start' | 'center' | 'space-between' | 'flex-end' = 'flex-start';
  let gap: '0em' | '1em' | '2em' = '1em';
</script>

<section>
  <div class="layout row">
    <div>
      <h1>Flexbox Basics</h1>
      <ul class="fragment">
        <li>
          flex-direction: <span class="small">row | column</span>
        </li>
        <li class="fragment">
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
        <li class="fragment">
          gap: <em class="small">any length</em>
          <span class="indent nowrap small">
            <button on:click={() => (gap = '0em')} class:active={gap === '0em'}>0em</button>
            |
            <button on:click={() => (gap = '1em')} class:active={gap === '1em'}>1em</button>
            |
            <button on:click={() => (gap = '2em')} class:active={gap === '2em'}>2em</button>
          </span>
        </li>
      </ul>

      <div class="flex-example box row-example" style="align-items: {align}; justify-content: {justify}; gap: {gap}">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>

    <div class="flex-example box column-example" style="align-items: {align}; justify-content: {justify}; gap: {gap}">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
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

  .layout {
    gap: 0rem;
    align-items: flex-end;
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

  .flex-example {
    display: flex;
    gap: 1.5rem;
    padding: 1rem;

    .box {
      margin-inline: unset;
      width: unset;
      background-color: color-mix(in srgb, var(--color-lime) 15%, transparent);
    }

    &.row-example {
      float: right;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 2rem;
      margin-right: 3rem;
      width: 500px;
      .box:nth-child(2) {
        height: 7rem;
      }
    }
    &.column-example {
      flex-direction: column;
      height: 400px;
      align-items: var(--align);
      justify-content: var(--justify);
      .box:nth-child(2) {
        width: 8rem;
      }
    }
  }
</style>
