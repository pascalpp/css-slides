<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import ChatBox from '$lib/components/ChatBox.svelte';
  import { getContext, onMount } from 'svelte';
  import Code from './Code.svelte';
  import type { Api } from 'reveal.js';

  type FragmentEvent = Event & { fragment: HTMLElement };
  let reveal: Api | null = null;
  const context = getContext('reveal') as Record<string, null | Api>;

  function onFragmentShown(event: Event) {
    const fragmentEvent = event as FragmentEvent;
    console.log('fragmentshown', event);
    if (fragmentEvent.fragment.classList.contains('scared-rabbit-box')) {
      document.querySelector('.scared-rabbit')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function onFragmentHidden(event: Event) {
    const fragmentEvent = event as FragmentEvent;
    if (fragmentEvent.fragment.classList.contains('scared-rabbit-box')) {
      document.querySelector('.browser:has(.scared-rabbit-box) .content')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onMount(() => {
    setTimeout(() => {
      reveal = context?.reveal;
      reveal?.on('fragmentshown', onFragmentShown);
      reveal?.on('fragmenthidden', onFragmentHidden);
    }, 1000);
  });

  let width = '100%';

  function changeWidth() {
    width = width === '100%' ? '80%' : '100%';
  }
</script>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%" {width} on:click={changeWidth}>
    <div class="page">
      <div class="intro">
        <h2>The trouble with height: 100%</h2>
        <p>One of the common pitfalls of CSS layout</p>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%" {width} on:click={changeWidth}>
    <div class="page">
      <div class="panels">
        <div class="pane box left" data-id="left-pane"></div>
        <div class="pane detail">
          <h2>Here’s a box</h2>
          <Code lines="1,3">
            {`
              .box {
                height: 100%;
              }
            `}
          </Code>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%" {width} on:click={changeWidth}>
    <div class="page">
      <div class="panels">
        <div class="pane box left height-100" data-id="left-pane">
          <ChatBox fragment />
        </div>
        <div class="pane detail">
          <h2>Here’s a box</h2>
          <Code lines="2">
            {`
              .box {
                height: 100%;
              }
            `}
          </Code>
          <p>We set the height to 100%</p>
          <p>and show some UI in the box.</p>
          <p class="fragment theres-a-problem">But there’s a problem!</p>
          <div class="relative">
            <div class="fragment scared-rabbit-box">
              <p>Our layout is broken, and Roger Rabbit has been missing some important messages from Eddie Valiant!</p>
              <div class="box scared-rabbit fragment"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Browser>
</section>

<style lang="less">
  .page {
    --blue: hsl(208, 80%, 30%);
    --blue-tint: hsla(208 50% 70% / 1);

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
    &:has(.panels .fragment.visible) {
      .intro {
        display: none;
      }
    }
  }

  .scared-rabbit-box {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-50%) translateY(110px);
    p {
      font-size: 0.9em;
    }
  }
  .scared-rabbit {
    margin-top: 1rem;
    background-image: url('./scared-rabbit.gif');
    width: 420px;
    height: 280px;
    background-size: cover;
    background-position: center;
    // right: 1rem;
  }

  .panels {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 1rem;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .pane {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0;
    border-width: 4px;

    &.left {
      align-self: flex-start;
      width: 33%;
      height: 100px;
      background-color: rgba(255 255 255 / 0.05);
      flex-shrink: 0;
      &.height-100 {
        height: 100%;
      }
    }
    &.detail {
      flex-grow: 1;
      justify-content: center;
      align-items: center;
    }

    &.height-100.padded {
      padding-top: 40px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 40px;
        background-color: #333;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        // striped angled background
        background-image: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          var(--color-red) 10px,
          var(--color-red) 20px
        );
        border-bottom: 1px solid var(--color-red);
        opacity: 0.3;
      }
    }
  }

  .label {
    margin: 1em;
    background-color: var(--r-background-color);
    font-size: 0.5em;
    font-family: var(--font-mono);
    color: var(--color-lime);
    padding: 8px;
    border-radius: 4px;
    position: absolute;
    left: 100%;
    width: max-content;
    display: none;
  }
</style>
