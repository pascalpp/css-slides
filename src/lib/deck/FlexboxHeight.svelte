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
      document.querySelector('.browser:has(.scared-rabbit-box) .content')?.scrollTo({ top: 1000, behavior: 'smooth' });
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
</script>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <div class="intro">
        <h2>The trouble with height: 100%</h2>
        <p>One of the common pitfalls of CSS layout</p>
      </div>
      <div class="panels fragment">
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
  <Browser title="Flexbox: the trouble with height: 100%">
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

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <div class="panels">
        <div class="pane box left height-100" data-id="left-pane">
          <ChatBox />
        </div>
        <div class="pane detail">
          <h2>How do we fix this?</h2>
          <p class="fragment">Set the height of the UI to 100% too?</p>
          <div class="fragment chat-ui-100">
            <Code lines="2">
              {`
                .chat-box {
                  height: 100%;
                }
              `}
            </Code>
          </div>
          <p class="fragment">That sorta fixes it…</p>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <div class="panels">
        <div class="pane box left height-100" data-id="left-pane">
          <div class="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail">
          <h2>But what if…</h2>
          <p>…a new element is added?</p>
          <p>
            <span class="fragment chat-header-fragment">Like a header…</span>
            <span class="fragment chat-tabs-fragment">or some tabs…</span>
            <span class="fragment chat-alert-fragment">or an alert…</span>
          </p>
          <p class="fragment">Now the layout is broken again!</p>
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
    &:has(.panels.fragment.visible) {
      .intro {
        display: none;
      }
    }

    &:has(.chat-ui-100.visible),
    &:has(.chat-header) {
      --chat-height: 100%;
    }
  }

  .scared-rabbit-box {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-50%) translateY(180px);
    p {
      font-size: 0.9em;
    }
    .scared-rabbit {
      margin-top: 1rem;
      background-image: url('./scared-rabbit.gif');
      width: 420px;
      height: 280px;
      background-size: cover;
      background-position: center;
    }
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

  .chat-header {
    background-color: #ddd;
    border-bottom: 1px solid #ccc;
    padding: 8px;
    display: none;
    h2 {
      font-size: 18px;
      font-family: var(--font-system);
      color: black;
    }
  }
  .page:has(.chat-header-fragment.visible) .chat-header {
    display: block;
  }

  .chat-tabs {
    display: none;
    gap: 8px;
    padding: 8px;
    background-color: #eee;
    .tab {
      padding: 4px 8px;
      border-radius: 4px;
      background-color: #ddd;
      font-size: 14px;
      font-family: var(--font-system);
      color: black;
    }
  }
  .page:has(.chat-tabs-fragment.visible) .chat-tabs {
    display: flex;
  }

  .chat-alert {
    display: none;
    border-top: 1px solid #ccc;
    background-color: #eee;
    font-family: var(--font-system);
    font-size: 16px;
    padding: 4px;
    .chat-alert-box {
      background-color: color-mix(in srgb, var(--color-red) 30%, white);
      border: 1px solid color-mix(in srgb, var(--color-red) 50%, transparent);
      color: black;
      padding: 8px;
      border-radius: 4px;
      button {
        margin-top: 4px;
        font: inherit;
      }
    }
  }
  .page:has(.chat-alert-fragment.visible) .chat-alert {
    display: block;
  }
</style>
