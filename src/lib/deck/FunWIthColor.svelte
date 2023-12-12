<script lang="ts">
  import './CurrentColorLayout.less';
  import Browser from '$lib/components/Browser.svelte';
  import Slide from './Slide.svelte';
  import SwatchGrid from './SwatchGrid.svelte';
  import UserIcon from './user.svg?component';
  import Code from './Code.svelte';
  import ColorContrastCard from './ColorContrastCard.svelte';
</script>

<Slide animate>
  <Slide animate>
    <div class="page row">
      <div class="left-column">
        <h1>Fun with Color</h1>
        <p class="fragment">Some handy color tools:</p>
        <ul>
          <li class="fragment"><code>currentcolor</code></li>
          <li class="fragment"><code>color-mix()</code></li>
          <li class="fragment"><code>color-contrast()</code>*</li>
        </ul>
      </div>
      <div class="right-column"><SwatchGrid /></div>
    </div>
  </Slide>

  <Slide transition="zoom-in slide-out">
    <div class="page row">
      <div class="left-column">
        <h2><code>currentcolor</code></h2>
        <p class="small fragment" data-fragment-index="1">
          The first “CSS variable<span style="letter-spacing: -0.2em; margin-right: 0.2em">,”</span> equal to the text color
          inherited from the parent.
        </p>
        <p class="small fragment" data-fragment-index="19">
          Allows us to reuse the inherited color for other properties, like:
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

  <Slide>
    <div class="page row color-mix-slide">
      <div class="left-column">
        <div class="page-color visible" />
        <div class="border-color visible" />
        <div class="background-color visible" />
        <div class="svg-fill-stroke visible" />
        <div class="box-shadow visible" />
        <h2><code>color-mix()</code></h2>
        <p class="small fragment" data-fragment-index="1">
          Mix colors in the browser<span class="small fragment" data-fragment-index="2">, </span><span
            class="small fragment"
            data-fragment-index="2">no LESS or SASS required.</span>
        </p>
        <div class="box wrapper fragment caution-box" data-fragment-index="200">
          <h3>Caution:</h3>
          <p class="small fragment" data-fragment-index="201">Handle with care.</p>
          <p class="small fragment" data-fragment-index="202">Consult your local designer.</p>
          <p class="small fragment" data-fragment-index="203">Use as directed.</p>
        </div>
      </div>
      <div class="right-column">
        <Browser width="500px" title="color-mix() example">
          <div class="layout">
            <div class="current-color-layout color-mix-layout">
              <div class="user-card">
                <div class="title-bar"></div>
                <div class="row name-row">
                  <div class="icon">
                    <UserIcon />
                  </div>
                  <p>Pascal Balthrop</p>
                </div>
              </div>

              <div class="relative bottom">
                <div class="fragment custom exclusive" data-fragment-index="10">
                  <div class="fragment card-white" data-fragment-index="11">
                    <Code lines="2">
                      {`
                      .user-card {
                        background-color: white;
                      }
                    `}
                    </Code>
                  </div>
                  <p class="small white">Suppose we want to make the card white.</p>
                  <p class="small white fragment" data-fragment-index="12">Now our text is hard to read.</p>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="20">
                  <div class="fragment card-color" data-fragment-index="21">
                    <Code lines="3-7">
                      {`
                      .user-card {
                        background-color: white;
                        color: color-mix(
                          in srgb,
                          currentcolor 60%,
                          black 40%
                        );
                      }
                    `}
                    </Code>
                  </div>
                  <p class="small white">We can use <code>color-mix</code> to make a shade of the text color.</p>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="25">
                  <Code lines="4-6">
                    {`
                      .user-card {
                        background-color: white;
                        color: color-mix(
                          in srgb,
                          currentcolor 60%,
                          black 40%
                        );
                      }
                    `}
                  </Code>
                  <p class="small white"><code>color-mix</code> takes three arguments:</p>
                </div>
                <div class="fragment custom exclusive color-mix-in-srgb" data-fragment-index="30">
                  <Code lines="4">
                    {`
                      .user-card {
                        background-color: white;
                        color: color-mix(
                          in srgb,
                          currentcolor 60%,
                          black 40%
                        );
                      }
                    `}
                  </Code>
                  <p class="small white"><code>in <em>colorspace</em></code></p>
                  <p class="small white">(tldr: just use <code>in srgb</code>)</p>
                </div>
                <div class="fragment custom exclusive color-mix-color-1" data-fragment-index="40">
                  <Code lines="5">
                    {`
                      .user-card {
                        background-color: white;
                        color: color-mix(
                          in srgb,
                          currentcolor 60%,
                          black 40%
                        );
                      }
                    `}
                  </Code>
                  <p class="small white">followed by the first color<br />and a percentage value…</p>
                </div>
                <div class="fragment custom exclusive color-mix-color-1" data-fragment-index="50">
                  <Code lines="6">
                    {`
                      .user-card {
                        background-color: white;
                        color: color-mix(
                          in srgb,
                          currentcolor 60%,
                          black 40%
                        );
                      }
                    `}
                  </Code>
                  <p class="small white">and then the second color and percentage.</p>
                </div>
                <div class="fragment custom exclusive color-mix-color-1" data-fragment-index="60">
                  <Code lines="6">
                    {`
                      .user-card {
                        background-color: white;
                        color: color-mix(
                          in srgb,
                          currentcolor 60%,
                          black
                        );
                      }
                    `}
                  </Code>
                  <p class="small white">The second percentage can be omitted<br />and will be inferred.</p>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="70">
                  <div class="fragment lighter-title-bar" data-fragment-index="71">
                    <Code lines="3-7">
                      {`
                      .user-card {
                        .title-bar {
                          background-color: color-mix(
                            in srgb,
                            currentcolor 30%,
                            white
                          );
                        }
                      }
                    `}
                    </Code>
                  </div>
                  <p class="small white">We can also mix with white to make a tint.</p>
                </div>
                <div class="fragment custom exclusive" data-fragment-index="80">
                  <div class="fragment box-shadow-transparent" data-fragment-index="81">
                    <Code lines="2-6">
                      {`
                      .user-card {
                        box-shadow: 0 2px 20px color-mix(
                          in srgb,
                          currentcolor 50%,
                          tranparent
                        );
                      }
                    `}
                    </Code>
                  </div>
                  <p class="small white">And mix with <code>transparent</code> to make translucent colors.</p>
                </div>
              </div>
            </div>
          </div>
        </Browser>
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="page row color-contrast-slide">
      <div class="left-column">
        <h3><code>color-contrast()</code>*</h3>
        <p class="small fragment" data-fragment-index="10">
          Automatically select the color with the highest contrast ratio.
        </p>
        <h3 class="small fragment" data-fragment-index="30">* Caveat</h3>
        <p class="small fragment" data-fragment-index="40">
          This feature has been supported in Safari since 2021, but it’s still behind a feature flag.
        </p>
        <p class="small fragment" data-fragment-index="50">
          Still waiting on support from Chrome, Firefox, and Edge. 🤔
        </p>
      </div>
      <div class="right-column">
        <Browser width="500px" title="color-contrast() example">
          <div class="layout column">
            <ColorContrastCard />
            <div class="fragment" data-fragment-index="20">
              <Code lines="2-5">
                {`
                  .color-contrast-card {
                    background-color: var(--color);
                    color: color-contrast(
                      var(--color) vs black, white
                    );
                  }
                `}
              </Code>
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

  p.small.white {
    color: white;
    font-size: 0.7em;
    width: max-content;
    max-width: 35ch;
    margin-inline: auto;
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
    .fragment.custom {
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

  .caution-box {
    padding: 1rem;
    margin-top: 2rem;
  }

  .color-contrast-slide {
    h3 {
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
</style>
