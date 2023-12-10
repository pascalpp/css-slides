<script lang="ts">
  import './CurrentColorLayout.less';
  import Browser from '$lib/components/Browser.svelte';
  import Slide from './Slide.svelte';
  import SwatchGrid from './SwatchGrid.svelte';
  import UserIcon from './user.svg?component';
  import Code from './Code.svelte';
</script>

<Slide animate>
  <Slide animate>
    <div class="page row">
      <div class="left-column">
        <h1>Fun With Color</h1>
        <p class="fragment">Some handy tools<br />you might not know about:</p>
        <ul>
          <li class="fragment"><code>currentcolor</code></li>
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
        <h2><code>currentcolor</code></h2>
        <p class="small fragment" data-fragment-index="1">
          The first “CSS variable”, equal to the text color inherited from the parent.
        </p>
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
        <Browser width="500px" title="currentcolor example">
          <div class="layout">
            <div class="current-color-layout">
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

              <div class="relative bottom">
                <div class="fragment page-color" data-fragment-index="10">
                  <Code>
                    {`
                      .page {
                        color: lime;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="20">
                  <Code lines="2">
                    {`
                      .user-card {
                        border-color: currentcolor;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="30">
                  <Code lines="2">
                    {`
                      .user-card {
                        .title-bar {
                          background-color: currentcolor;
                        }
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="40">
                  <Code lines="1">
                    {`
                      <svg stroke="currentcolor">
                        <path d="..."></path>
                      </svg>
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="50">
                  <Code lines="3">
                    {`
                      .user-card {
                        border-color: currentcolor;
                        box-shadow: 0 2px 20px currentcolor;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive page-color-gold" data-fragment-index="60">
                  <Code>
                    {`
                      .page {
                        color: gold;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive page-color-violet" data-fragment-index="70">
                  <Code>
                    {`
                      .page {
                        color: violet;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive page-color-blue" data-fragment-index="80">
                  <Code>
                    {`
                      .page {
                        color: lightblue;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive page-color-orange" data-fragment-index="90">
                  <Code>
                    {`
                      .page {
                        color: orange;
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive page-color-lime" data-fragment-index="100">
                  <Code>
                    {`
                      .page {
                        color: lime;
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

  p.small {
    font-size: 0.8em;
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
    justify-content: center;
    align-items: center;
  }

  .relative {
    .fragment {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &.bottom {
      .fragment {
        top: 0;
      }
    }
  }
</style>
