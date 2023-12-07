<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import { getContext, onMount } from 'svelte';
  import Code from './Code.svelte';
  import type { Api } from 'reveal.js';

  type FragmentEvent = Event & { fragment: HTMLElement };
  let reveal: Api | null = null;
  const context = getContext('reveal') as Record<string, null | Api>;

  let width = '100%';

  function changeWidth() {
    width = width === '100%' ? '80%' : '100%';
  }

  let timer = 0;

  function onFragmentShown(event: Event) {
    const fragmentEvent = event as FragmentEvent;
    console.log('fragmentshown', event);
    if (fragmentEvent.fragment.classList.contains('grow-note')) {
      timer = setInterval(changeWidth, 1500);
    } else {
      clearInterval(timer);
      width = '100%';
    }
  }

  onMount(() => {
    setTimeout(() => {
      reveal = context?.reveal;
      reveal?.on('fragmentshown', onFragmentShown);
    }, 1000);
  });
  // $: reveal = getContext('reveal');
</script>

<section data-transition="zoom-in slide-out">
  <Browser title="Flexbox: grow and shrink" {width} on:click={changeWidth}>
    <div class="page">
      <div class="intro box wrapper">
        <h2>flex-grow & flex-shrink</h2>
        <p class="fragment" data-fragment-index="10">Control how flex children share space.</p>
        <p class="fragment" data-fragment-index="11">Let’s build a panel layout!</p>
      </div>

      <div class="box panels fragment" data-fragment-index="12">
        <div class="pane left fragment" data-fragment-index="30">
          <div class="label">
            <h4>Sidebar</h4>
          </div>
          <div class="fragment pane-style-1" data-fragment-index="50">
            <Code lines="2">
              {`
                .pane.sidebar {
                  width: 300px;
                }
              `}
            </Code>
          </div>
          <div class="fragment pane-style-2" data-fragment-index="600">
            <Code lines="3">
              {`
                .pane.sidebar {
                  width: 300px;
                  flex-shrink: 0;
                }
              `}
            </Code>
          </div>
        </div>
        <div class="pane right fragment" data-fragment-index="40">
          <div class="label">
            <h4>Detail pane</h4>
          </div>
          <div class="fragment" data-fragment-index="60">
            <Code lines="2">
              {`
                .pane.detail {
                  flex-grow: 1;
                }
              `}
            </Code>
            <div class="box wrapper fragment grow-note" data-fragment-index="70">
              <p>This pane consumes any<br />available space, even as<br />viewport changes size.</p>
            </div>
            <div class="fragment wide-content" data-fragment-index="80">
              <p>Suppose some “wide content” is added, squeezing our sidebar.</p>
              <p class="fragment small" data-fragment-index="90">We can apply flex-shrink to fix this.</p>
              <p class="fragment small" data-fragment-index="601">Now the sidebar gets the space it wants.</p>
            </div>
          </div>
        </div>
        <div class="pane flex-row-code" data-fragment-index="20">
          <div class="label">
            <h4>Parent container</h4>
          </div>
          <Code fragment index="21">
            {`
              .panes {
                display: flex;
                flex-direction: row;
              }
            `}
          </Code>
        </div>
      </div>
    </div>
  </Browser>
</section>

<style lang="less">
  .page {
    padding: 1rem;
    height: 55vh;
    position: relative;
    .intro {
      position: absolute;
      top: 50%;
      left: 50%;
      white-space: nowrap;
      transform: translateX(-50%) translateY(-50%);
    }
    &:has(.panels.visible) {
      .intro {
        display: none;
      }
    }
  }

  p.small {
    font-size: 0.8em;
  }

  .panels {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 1rem;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:has(.pane.right .fragment.visible) {
      .flex-row-code {
        display: none;
      }
    }
  }

  .pane {
    background-color: rgba(255 255 255 / 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    padding-top: 5rem;
    position: relative;
    transition: all 0.5s ease-in-out;

    .label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
    }
  }

  .pane.flex-row-code {
    background-color: transparent;
  }

  .pane.left {
    display: none;
    &:is(.visible) {
      display: flex;
    }

    &:has(.fragment.visible) {
      width: 300px;
    }
    .pane-style-2 {
      display: none;
      &:is(.visible) {
        display: block;
      }
    }

    &:has(.fragment.pane-style-2.visible) {
      flex-shrink: 0;
      .pane-style-1 {
        display: none;
      }
    }
  }

  .pane.right {
    display: none;
    &:is(.visible) {
      display: flex;
    }
    &:has(.fragment.visible) {
      flex-grow: 1;
    }

    .grow-note {
      padding: 0.75em 1em;
      margin: 0 auto;
      margin-top: 2rem;
      font-size: 0.8em;
      align-self: center;
      display: none;
      &:is(.visible) {
        display: block;
      }
    }

    &:has(.fragment.wide-content.visible) {
      .grow-note {
        display: none;
      }
    }

    .wide-content {
      height: 4em;
      &:has(.fragment.visible) {
        height: auto;
      }
      overflow: hidden;
      max-width: 0;
      padding: 1em;
      opacity: 0;
      font-size: 0.9em;
      transition: none;
      &:is(.visible) {
        transition: all 1s ease-in-out;
        opacity: 1;
        max-width: 100vw;
      }

      p + p {
        margin-top: 1rem;
      }
    }
  }
</style>
