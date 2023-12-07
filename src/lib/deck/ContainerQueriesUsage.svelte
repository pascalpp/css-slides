<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import Code from './Code.svelte';
</script>

<section data-transition="zoom">
  <div class="browser-container">
    <Browser title="Container queries in action">
      <div class="page">
        <h3>
          &nbsp;
          <span class="fragment wide-browser">Wide context</span>
          <span class="fragment narrow-browser">Narrow</span>
          <span class="fragment sidebar-browser">Sidebar in a wide context</span>
          &nbsp;
        </h3>
        <div class="panels">
          <div class="sidebar">
            <div class="container">
              <div class="cards">
                <div class="card tabby"></div>
                <div class="card crowd"></div>
                <div class="card cup"></div>
              </div>
            </div>
          </div>
          <div class="detail">
            <div class="card lion">
              <div class="usage">
                <div class="fragment custom exclusive">
                  <h2>Re-use mobile layout</h2>
                  <p>in any ‘narrow’ context</p>
                </div>
                <div class="fragment custom exclusive">
                  <h3>Usage</h3>
                  <p>1. Wrap your node in a container</p>
                  <Code lines="1,3">
                    {`
                      <div class="container">
                        <div class="cards">…</div>
                      </div>
                    `}
                  </Code>
                  <p class="small">Or use the :host element of your Angular component.*</p>
                </div>
                <div class="fragment custom exclusive">
                  <h3>Usage</h3>
                  <p>2. Apply container styles</p>
                  <Code id="container-css" lines="1-4">
                    {`
                      .container {
                        container-name: kittens;
                        container-type: inline-size;
                      }

                      @container kittens (inline-size <= 640px) {
                        .cards {
                          flex-direction: column;
                        }
                      }
                    `}
                  </Code>
                </div>
                <div class="fragment custom exclusive">
                  <h3>Usage</h3>
                  <p>2. Apply container styles</p>
                  <Code id="container-css" lines="2">
                    {`
                      .container {
                        container-name: kittens;
                        container-type: inline-size;
                      }

                      @container kittens (inline-size <= 640px) {
                        .cards {
                          flex-direction: column;
                        }
                      }
                    `}
                  </Code>
                  <p class="small">
                    Use a unique, descriptive <code>container-name</code>.
                  </p>
                </div>
                <div class="fragment custom exclusive">
                  <h3>Usage</h3>
                  <p>2. Apply container styles</p>
                  <Code id="container-css" lines="3">
                    {`
                      .container {
                        container-name: kittens;
                        container-type: inline-size;
                      }

                      @container kittens (inline-size <= 640px) {
                        .cards {
                          flex-direction: column;
                        }
                      }
                    `}
                  </Code>
                  <p class="small custom exclusive">
                    Use <code>inline-size</code> to query container width.
                  </p>
                </div>
                <div class="fragment custom exclusive">
                  <h3>Usage</h3>
                  <p>3. Apply container query</p>
                  <Code id="container-css" lines="6-10">
                    {`
                      .container {
                        container-name: kittens;
                        container-type: inline-size;
                      }

                      @container kittens (inline-size <= 640px) {
                        .cards {
                          flex-direction: column;
                        }
                      }
                    `}
                  </Code>
                  <p class="fragment small">Cards switch to a column when the container is narrow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Browser>
  </div>
  <div class="card narrow-notes">
    <h3>The old way</h3>
    <Code lines="true"
      >{`@media screen and (max-width: 640px) {
  .cards {
    flex-direction: column;
  }
}`}</Code>
  </div>
</section>

<style lang="less">
  .browser-container {
    margin-top: -1rem;
    max-width: 1000px;
    transition: all 1s ease-in-out;

    h3 {
      white-space: nowrap;
      span {
        display: inline-block;
        &:not(.current-fragment) {
          &:nth-child(1),
          &:nth-child(2) {
            display: none;
          }
        }
        &:not(.visible) {
          display: none;
        }
      }
    }

    &:has(.fragment.narrow-browser.current-fragment) {
      max-width: calc(300px + 2rem);

      + .card.narrow-notes {
        opacity: 1;
        transition: opacity 1s ease-in-out 1s;
      }
    }
    &:has(.fragment.sidebar-browser.visible) {
      .sidebar {
        flex-grow: 0;
      }
      .detail {
        display: block;
      }
    }
  }

  .card.narrow-notes {
    width: 550px;
    height: auto;
    aspect-ratio: unset;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 2rem;
    opacity: 0;
  }

  .page {
    min-height: 60vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .panels {
    display: flex;
    align-items: stretch;
    width: 100%;
    flex-grow: 1;
    gap: 1rem;

    .sidebar {
      flex-grow: 1;
      flex-shrink: 0;
      min-width: 300px;
      display: flex;
      flex-direction: column;
    }

    .detail {
      flex-grow: 1;
      display: none;
    }
  }

  .container {
    container-name: container;
    container-type: inline-size;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .cards {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 2rem;
  }

  .card {
    border: 3px solid var(--color-lime);
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 4/3;
    background-size: cover;
    background-position: center;
    &.tabby {
      background-image: url('./tabby.jpg');
    }
    &.crowd {
      background-image: url('./crowd.jpg');
    }
    &.cup {
      background-image: url('./cup.jpg');
    }
    &.lion {
      background-image: url('./lion.jpg');
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @container container (inline-size <= 301px) {
    .cards {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 0;
    }
    .card {
      width: 100%;
      aspect-ratio: 2/1;
    }
  }

  .usage {
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: opacity 0.25s ease-in-out;

    &:has(.fragment.current-fragment) {
      opacity: 1;
    }
    &:has(.fragment.visible:nth-child(3)) {
      justify-content: flex-start;
    }

    h3 {
      margin-bottom: 0;
    }
    p {
      margin: 0;
    }

    p.small {
      margin: 0;
    }
  }
</style>
