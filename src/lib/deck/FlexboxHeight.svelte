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
        <div class="pane box left height-100-pixels" data-id="left-pane">
          <ChatBox />
        </div>
        <div class="pane detail">
          <h2>Here’s a box</h2>
          <div class="fragment height-100percent-fragment">
            <p>Let’s set the height to 100%</p>
            <Code lines="2">
              {`
                .box {
                  height: 100%;
                }
              `}
            </Code>
            <p class="fragment show-chat-fragment">and show some UI in the box.</p>
            <p class="fragment theres-a-problem">But there’s a problem!</p>
            <div class="relative">
              <div class="fragment scared-rabbit-box">
                <p>
                  Our layout is broken, and Roger Rabbit has been missing some important messages from Eddie Valiant!
                </p>
                <div class="box scared-rabbit fragment"></div>
              </div>
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
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <ChatBox />
        </div>
        <div class="pane detail">
          <h2>How do we fix this?</h2>
          <p class="fragment">Add another height: 100%?</p>
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
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <div class="chat-header" data-id="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs" data-id="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert" data-id="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail">
          <div class="broken-again-pointer">Text box has been<br />pushed off the page!</div>
          <h2>But what if…</h2>
          <p>…a new element is added?</p>
          <p>
            <span class="fragment chat-header-fragment">Like a header…</span>
            <span class="fragment chat-tabs-fragment">or some tabs…</span>
            <span class="fragment chat-alert-fragment">or an alert…</span>
          </p>
          <p class="fragment broken-again-fragment">Now the layout is broken again!</p>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <span class="chat-header-fragment visible"></span>
      <span class="chat-tabs-fragment visible"></span>
      <span class="chat-alert-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <div class="chat-header" data-id="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs" data-id="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert" data-id="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail">
          <h3>There’s got to be a better way!</h3>
          <div class="box dishes-rabbit"></div>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <span class="chat-header-fragment visible"></span>
      <span class="chat-tabs-fragment visible"></span>
      <span class="chat-alert-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <div class="chat-header" data-id="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs" data-id="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert" data-id="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail spread">
          <h3>Let’s fix it with flex!</h3>
          <div>
            <p class="fragment">1. Apply flex-shrink to<br />fixed-height elements</p>
            <div class="fragment flex-shrink-fragment">
              <Code lines="4">
                {`
                  .chat-header,
                  .chat-tabs,
                  .chat-alert {
                    flex-shrink: 0;
                  }
                `}
              </Code>
            </div>
          </div>
          <div class="empty"></div>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <span class="chat-header-fragment visible"></span>
      <span class="chat-tabs-fragment visible"></span>
      <span class="chat-alert-fragment visible"></span>
      <span class="flex-shrink-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <div class="chat-header" data-id="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs" data-id="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert" data-id="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail spread">
          <h3>Let’s fix it with flex!</h3>
          <div>
            <p>2. Apply flex-grow to the chat box</p>
            <div class="fragment flex-grow-fragment">
              <Code lines="3">
                {`
                  .chat-box {
                  -  height: 100%;
                  +  flex-grow: 1;
                  }
                `}
              </Code>
              <p class="small">(and remove height: 100% while we’re at it)</p>
            </div>
          </div>
          <div class="empty"></div>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <span class="chat-header-fragment visible"></span>
      <span class="chat-tabs-fragment visible"></span>
      <span class="chat-alert-fragment visible"></span>
      <span class="flex-shrink-fragment visible"></span>
      <span class="flex-grow-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <div class="chat-header" data-id="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs" data-id="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert" data-id="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail spread">
          <h3>Let’s fix it with flex!</h3>
          <div>
            <p>3. Make the parent a flex column</p>
            <div class="fragment flex-column-fragment">
              <Code lines="2,3">
                {`
                  .box {
                    display: flex;
                    flex-direction: column;
                  }
                `}
              </Code>
            </div>
          </div>
          <div class="empty"></div>
        </div>
      </div>
    </div>
  </Browser>
</section>

<section data-auto-animate>
  <Browser title="Flexbox: the trouble with height: 100%">
    <div class="page">
      <span class="height-100percent-fragment visible"></span>
      <span class="show-chat-fragment visible"></span>
      <span class="chat-header-fragment visible"></span>
      <span class="chat-tabs-fragment visible"></span>
      <span class="chat-alert-fragment visible"></span>
      <span class="flex-shrink-fragment visible"></span>
      <span class="flex-grow-fragment visible"></span>
      <span class="flex-column-fragment visible"></span>
      <div class="panels">
        <div class="pane box left" data-id="left-pane">
          <div class="chat-header" data-id="chat-header">
            <h2>Chat</h2>
          </div>
          <div class="chat-tabs" data-id="chat-tabs">
            <div class="tab">All</div>
            <div class="tab">Following</div>
            <div class="tab">Unread</div>
          </div>
          <div class="chat-alert" data-id="chat-alert">
            <div class="chat-alert-box">
              <p>Your account is about to expire. <button>Renew now!</button></p>
            </div>
          </div>
          <ChatBox />
        </div>
        <div class="pane detail">
          <h3>That did it!</h3>
          <div class="happy-rabbit box"></div>
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
    transform: translateY(180px);
    width: 400px;
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
    gap: 1rem;
    padding: 0;
    width: 100%;
    height: 100%;

    &:has(.pane.flex-column) {
      overflow: hidden;
    }
  }

  .pane {
    position: relative;
    padding: 0;
    border-width: 4px;

    &.left {
      width: 33%;
      background-color: rgba(255 255 255 / 0.05);
      flex-shrink: 0;
    }
    &.detail {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      &.spread {
        justify-content: space-between;
        padding-top: 1rem;
      }
    }
  }

  .pane.left.height-100-pixels {
    height: 100%;
    max-height: 100px;
    transition: max-height 0.5s ease-in-out;
  }
  .page:has(.height-100percent-fragment.visible) .pane.left.height-100-pixels {
    max-height: 1000px;
  }

  .page .height-100-pixels :global(.chat) {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
  }
  .page:has(.show-chat-fragment.visible) :global(.chat) {
    max-height: 2000px;
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

  .dishes-rabbit {
    margin-top: 1rem;
    background-image: url('./dishes-rabbit.gif');
    width: 420px;
    height: 280px;
    background-size: cover;
    background-position: center;
  }

  .broken-again-pointer {
    position: absolute;
    left: 37%;
    bottom: 30px;
    color: white;
    font-size: 16px;
    transform: rotate(-15deg);
    padding: 0.25rem 0.5rem;
    background-color: var(--color-red);
    border-radius: 4px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      height: 75%;
      aspect-ratio: 1;
      transform-origin: bottom center;
      transform: translateX(-3px) translateY(0.5px) rotate(-45deg);
      background-color: var(--color-red);
      border-radius: inherit;
      z-index: -1;
    }
    display: none;
  }
  .page:has(.broken-again-fragment.visible) .broken-again-pointer {
    display: block;
    position: fixed;
  }

  .page:has(.flex-shrink-fragment.visible) {
    .chat-header,
    .chat-tabs,
    .chat-alert {
      flex-shrink: 0;
    }
  }

  .page:has(.flex-grow-fragment.visible) {
    :global(.chat) {
      flex-grow: 1;
      overflow: hidden;
    }
  }

  .page:has(.flex-column-fragment.visible) {
    --chat-height: auto;
    // TODO pick up here. getting close
    .pane.left {
      display: flex;
      flex-direction: column;
    }
  }

  .happy-rabbit {
    margin-top: 1rem;
    background-image: url('./happy-rabbit.gif');
    width: 400px;
    height: 250px;
    background-size: cover;
    background-position: center;
  }
</style>
