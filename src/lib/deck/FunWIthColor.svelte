<script lang="ts">
  import './CurrentColorLayout.less';
  import Browser from '$lib/components/Browser.svelte';
  import Slide from './Slide.svelte';
  import SwatchGrid from './SwatchGrid.svelte';
  import UserIcon from './user.svg?component';
  import Code from './Code.svelte';

  let showSwatchGrid = true;
</script>

<Slide animate>
  <Slide animate>
    <div class="page row">
      <div class="left-column">
        <h1>Fun With Color</h1>
        <h3 class="fragment">Some handy tools:</h3>
        <ul>
          <li class="fragment"><code>currentColor</code></li>
          <li class="fragment"><code>--color-variables</code></li>
          <li class="fragment"><code>color-mix()</code></li>
          <li class="fragment"><code>color-contrast()</code>*</li>
        </ul>
      </div>
      <div class="right-column"><SwatchGrid /></div>
    </div>
  </Slide>

  <Slide transition="zoom">
    <div class="page row">
      <div class="left-column">
        <h2><code>currentColor</code></h2>
        <p class="small">The first “CSS variable”, equal to the text color inherited from the parent.</p>
        <p class="small fragment" data-fragment-index="19">
          Allows you to reuse the inherited color for other properties, like:
        </p>
        <ul>
          <li class="fragment border-color" data-fragment-index="20"><code>border-color</code></li>
          <li class="fragment background-color" data-fragment-index="30"><code>background-color</code></li>
          <li class="fragment svg-fill-stroke" data-fragment-index="40">svg <code>fill / stroke</code></li>
          <li class="fragment box-shadow" data-fragment-index="50"><code>box-shadow</code></li>
        </ul>
      </div>
      <div class="right-column">
        <Browser width="500px" title="currentColor example">
          <div class="layout">
            <div class="current-color-layout">
              <div class="fragment page-color" data-fragment-index="10">
                <Code>
                  {`
                    .page {
                      color: lime;
                    }
                  `}
                </Code>
              </div>

              <div class="user-card">
                <div class="title-bar"></div>
                <div class="row name-row">
                  <div class="icon">
                    <UserIcon />
                    <div class="hover-content"></div>
                  </div>
                  <p>Pascal Balthrop</p>
                </div>
              </div>

              <div class="relative">
                <div class="fragment custom exclusive" data-fragment-index="20">
                  <Code lines="2">
                    {`
                      .user-card {
                        border-color: currentColor;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="30">
                  <Code lines="2">
                    {`
                      .user-title-bar {
                        background-color: currentColor;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="40">
                  <Code>
                    {`
                      <svg stroke="currentColor">
                        <path d="..."></path>
                      </svg>
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="50">
                  <Code>
                    {`
                      .user-card {
                        border-color: currentColor;
                        box-shadow: 0 4px 4px currentColor;
                      }
                    `}
                  </Code>
                </div>
              </div>
            </div>
          </div>
        </Browser>
      </div>
    </div>
  </Slide>
</Slide>

<style lang="less">
  .page {
    gap: 4rem;
  }

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

  p.small {
    font-size: 0.8em;
  }

  .left-column {
  }
  .right-column {
  }

  ul {
    margin-left: 0;
    margin-top: 1em;
    font-size: 0.8em;
    line-height: 1.5;
    max-width: 32ch;
  }
  li + li {
    margin-top: 1rem;
  }

  .layout {
    height: 55vh;
    display: flex;
    color: var(--color-lime);
  }

  .relative {
    .fragment {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
