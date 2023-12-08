<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate transition="zoom">
  <div class="row slide-row">
    <div class="slide-box">
      <h1>:is</h1>
      <div class="fragment yellow-link-fragment">
        <p>Lets you group selectors…</p>
        <Code lines="1-4">
          {`
            header a,
            aside a,
            article a,
            footer a {
              color: yellow;
            }
          `}
        </Code>
      </div>
      <div class="fragment is-single-selector-fragment">
        <p>…into a single selector:</p>
        <Code lines="1">
          {`
            :is(header, aside, article, footer) a {
              color: yellow;
            }
          `}
        </Code>
      </div>
    </div>

    <div class="browser-container">
      <Browser title=":is examples" width="400px">
        <div class="page">
          <div class="layout">
            <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
                <ul>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </header>
            <div class="panes">
              <div class="pane content row">
                <aside>
                  <ul>
                    <li>
                      <a href="#" class="current">Getting started</a>
                    </li>
                    <li>
                      <a href="#">Installation</a>
                    </li>
                    <li>
                      <a href="#">Usage</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a href="#">Advanced</a>
                    </li>
                  </ul>
                </aside>
                <article>
                  <h1>Getting started</h1>
                  <p>
                    Ea aliqua labore exercitation magna proident <a href="#">proident exercitation</a>. Magna proident
                    proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat
                    aliqua, ullamco lorem dolor sed.
                  </p>
                  <p>
                    Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad,
                    et. Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet
                    elit. Labore, amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
                  </p>
                  <p>
                    <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut
                    minim, eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu
                    magna. Anim laboris nulla eu, magna aliqua.
                  </p>
                </article>
              </div>
            </div>
            <footer>
              <nav>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
                <ul>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Browser>
    </div>
  </div>
</Slide>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate>
  <div class="row slide-row">
    <div class="slide-box">
      <div class="yellow-link-fragment visible"></div>
      <h1>:where</h1>
      <div class="fragment">
        <p>Like :is, but with 0 specificity:</p>
        <Code lines="1-4">
          {`
            :where(header, aside, article, footer) a {
              color: yellow;
            }
          `}
        </Code>
      </div>
      <div class="fragment where-override-fragment">
        <p class="small">
          …so local components can override global styles without resorting to the <code>!important</code> nuclear option.
        </p>
        <Code lines="1-4">
          {`
            aside a {
              color: white;
            }
          `}
        </Code>
      </div>
    </div>

    <div class="browser-container">
      <Browser title=":where examples">
        <div class="page">
          <div class="layout">
            <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
                <ul>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </header>
            <div class="panes">
              <div class="pane content row">
                <aside>
                  <ul>
                    <li>
                      <a href="#" class="current">Getting started</a>
                    </li>
                    <li>
                      <a href="#">Installation</a>
                    </li>
                    <li>
                      <a href="#">Usage</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a href="#">Advanced</a>
                    </li>
                  </ul>
                </aside>
                <article>
                  <h1>Getting started</h1>
                  <p>
                    Ea aliqua labore exercitation magna proident <a href="#">proident exercitation</a>. Magna proident
                    proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat
                    aliqua, ullamco lorem dolor sed.
                  </p>
                  <p>
                    Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad,
                    et. Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet
                    elit. Labore, amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
                  </p>
                  <p>
                    <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut
                    minim, eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu
                    magna. Anim laboris nulla eu, magna aliqua.
                  </p>
                </article>
              </div>
            </div>
            <footer>
              <nav>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
                <ul>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Browser>
    </div>
  </div>
</Slide>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate>
  <div class="row slide-row">
    <div class="slide-box">
      <div class="yellow-link-fragment visible"></div>
      <h1>:not</h1>
      <div class="fragment not-fragment">
        <p>Allows you to carve out exceptions:</p>
        <Code lines="1-4">
          {`
            aside a:not(.current) {
              color: white;
            }
          `}
        </Code>
      </div>
      <p class="fragment">So if the global style changes…</p>
      <div class="fragment lime-fragment">
        <Code lines="1-4">
          {`
            :where(header, aside, article, footer) a {
              color: lime;
            }
          `}
        </Code>
        <p>…the current link still inherits<br />the global color.</p>
      </div>
    </div>

    <div class="browser-container">
      <Browser title=":not examples">
        <div class="page">
          <div class="layout">
            <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
                <ul>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </header>
            <div class="panes">
              <div class="pane content row">
                <aside>
                  <ul>
                    <li>
                      <a href="#" class="current">Getting started</a>
                    </li>
                    <li>
                      <a href="#">Installation</a>
                    </li>
                    <li>
                      <a href="#">Usage</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a href="#">Advanced</a>
                    </li>
                  </ul>
                </aside>
                <article>
                  <h1>Getting started</h1>
                  <p>
                    Ea aliqua labore exercitation magna proident <a href="#">proident exercitation</a>. Magna proident
                    proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat
                    aliqua, ullamco lorem dolor sed.
                  </p>
                  <p>
                    Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad,
                    et. Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet
                    elit. Labore, amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
                  </p>
                  <p>
                    <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut
                    minim, eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu
                    magna. Anim laboris nulla eu, magna aliqua.
                  </p>
                </article>
              </div>
            </div>
            <footer>
              <nav>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
                <ul>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Browser>
    </div>
  </div>
</Slide>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate>
  <div class="row slide-row">
    <div class="slide-box">
      <div class="yellow-link-fragment visible"></div>
      <div class="not-fragment visible"></div>
      <div class="lime-fragment visible"></div>
      <h1>:has</h1>
      <div>
        <p>The “parent selector”</p>
        <p>Allows you to style elements<br />based on their contents</p>
      </div>
    </div>

    <div class="browser-container">
      <Browser title=":not examples">
        <div class="page">
          <div class="layout">
            <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
                <ul>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </header>
            <div class="panes">
              <div class="pane content row">
                <aside>
                  <ul>
                    <li>
                      <a href="#" class="current">Getting started</a>
                    </li>
                    <li>
                      <a href="#">Installation</a>
                    </li>
                    <li>
                      <a href="#">Usage</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a href="#">Advanced</a>
                    </li>
                  </ul>
                </aside>
                <article>
                  <h1>Getting started</h1>
                  <p>
                    Ea aliqua labore exercitation magna proident <a href="#">proident exercitation</a>. Magna proident
                    proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat
                    aliqua, ullamco lorem dolor sed.
                  </p>
                  <p>
                    Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad,
                    et. Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet
                    elit. Labore, amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
                  </p>
                  <p>
                    <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut
                    minim, eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu
                    magna. Anim laboris nulla eu, magna aliqua.
                  </p>
                </article>
              </div>
            </div>
            <footer>
              <nav>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
                <ul>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Browser>
    </div>
  </div>
</Slide>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate>
  <div class="row slide-row">
    <div class="slide-box">
      <div class="yellow-link-fragment visible"></div>
      <div class="not-fragment visible"></div>
      <div class="lime-fragment visible"></div>
      <h1>:has</h1>
      <p>Our side nav html…</p>
      <Code lines="1-5">
        {`
            <li>
              <a href="…" class="current">
                Getting started
              </a>
            </li>
            <li>
              <a href="…">
                Installation
              </a>
            </li>
            ...
          `}
      </Code>
      <p>…is a series of list items with anchor tags in them, with one marked <code>current</code>.</p>
    </div>

    <div class="browser-container">
      <Browser title=":not examples">
        <div class="page">
          <div class="layout">
            <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
                <ul>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </header>
            <div class="panes">
              <div class="pane content row">
                <aside>
                  <ul>
                    <li>
                      <a href="#" class="current">Getting started</a>
                    </li>
                    <li>
                      <a href="#">Installation</a>
                    </li>
                    <li>
                      <a href="#">Usage</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a href="#">Advanced</a>
                    </li>
                  </ul>
                </aside>
                <article>
                  <h1>Getting started</h1>
                  <p>
                    Ea aliqua labore exercitation magna proident <a href="#">proident exercitation</a>. Magna proident
                    proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat
                    aliqua, ullamco lorem dolor sed.
                  </p>
                  <p>
                    Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad,
                    et. Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet
                    elit. Labore, amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
                  </p>
                  <p>
                    <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut
                    minim, eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu
                    magna. Anim laboris nulla eu, magna aliqua.
                  </p>
                </article>
              </div>
            </div>
            <footer>
              <nav>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
                <ul>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Browser>
    </div>
  </div>
</Slide>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate>
  <div class="row slide-row">
    <div class="slide-box">
      <div class="yellow-link-fragment visible"></div>
      <div class="not-fragment visible"></div>
      <div class="lime-fragment visible"></div>
      <h1>:has</h1>
      <p>We can style the current <code>li</code><br />using <code>:has</code>…</p>
      <div class="fragment has-fragment">
        <Code lines="1-5">
          {`
            li:has(a.current) {
              background-color: #222;
            }
          `}
        </Code>
      </div>
      <p class="fragment">Nice!</p>
    </div>

    <div class="browser-container">
      <Browser title=":not examples">
        <div class="page">
          <div class="layout">
            <header>
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Dashboard</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
                <ul>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </header>
            <div class="panes">
              <div class="pane content row">
                <aside>
                  <ul>
                    <li>
                      <a href="#" class="current">Getting started</a>
                    </li>
                    <li>
                      <a href="#">Installation</a>
                    </li>
                    <li>
                      <a href="#">Usage</a>
                    </li>
                    <li>
                      <a href="#">API</a>
                    </li>
                    <li>
                      <a href="#">Advanced</a>
                    </li>
                  </ul>
                </aside>
                <article>
                  <h1>Getting started</h1>
                  <p>
                    Ea aliqua labore exercitation magna proident <a href="#">proident exercitation</a>. Magna proident
                    proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat
                    aliqua, ullamco lorem dolor sed.
                  </p>
                  <p>
                    Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad,
                    et. Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet
                    elit. Labore, amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
                  </p>
                  <p>
                    <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut
                    minim, eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu
                    magna. Anim laboris nulla eu, magna aliqua.
                  </p>
                </article>
              </div>
            </div>
            <footer>
              <nav>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
                <ul>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      </Browser>
    </div>
  </div>
</Slide>

<style lang="less">
  .slide-row {
    gap: 80px;

    .slide-box {
      width: 600px;
      flex-grow: 1;
      p {
        font-size: 0.9em;
      }
    }
    .browser-container {
      width: 400px;
    }
  }

  p.small {
    font-size: 0.9em;
  }

  .page {
    height: 60vh;
    display: flex;
    // overflow: hidden;
  }
  .layout {
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    flex-grow: 1;
    a {
      color: inherit;
    }

    nav {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 1em 1.5em;
      flex-shrink: 0;
      background-color: hsl(0 0% 0% / 0.2);
      font-family: var(--font-sans);
      color: white;
      font-size: 1rem;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        gap: 1.5em;
        li {
          margin: 0;
          padding: 0;
        }
      }
    }

    .panes {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }

    .pane.content {
      flex-grow: 1;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 12px;
      text-align: left;
      font-weight: 100;

      aside {
        background-color: hsl(0 0% 0% / 0.1);
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        margin-top: 4rem;
        white-space: nowrap;
        font-family: var(--font-sans);
        flex-shrink: 0;
        overflow: hidden;
        transform-origin: center left;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            margin: 0;
            padding: 1em;
            padding-right: 1.5em;
          }
        }
      }
      article {
        padding: 1rem;
        overflow: auto;

        h1 {
          color: white;
        }
      }
    }
  }

  :has(.yellow-link-fragment.visible) .layout {
    :is(header, aside, article, footer) a {
      color: var(--color-yellow);
    }
  }
  :has(.is-single-selector-fragment.current-fragment) .layout {
    :is(header, aside, article, footer) a {
      display: inline-block;
      animation: bounce 1s ease-in-out 1s infinite;
    }
  }
  :has(.where-override-fragment.visible) .layout {
    aside a {
      color: white;
    }
  }
  :has(.where-override-fragment.current-fragment) .layout {
    aside {
      animation: bounce 1s ease-in-out 1s infinite;
    }
  }
  :has(.not-fragment.visible) .layout {
    aside a:not(.current) {
      color: white;
    }
  }
  :has(.not-fragment.current-fragment) .layout {
    aside a:not(.current) {
      display: inline-block;
      animation: bounce 1s ease-in-out 1s infinite;
    }
  }
  :has(.lime-fragment.visible) .layout {
    :is(header, aside, article, footer) a {
      color: var(--color-lime);
    }
  }
  :has(.lime-fragment.current-fragment) .layout {
    aside a.current {
      display: inline-block;
      animation: bounce 1s ease-in-out 1s infinite;
    }
  }
  :has(.has-fragment.visible) .layout {
    aside li:has(a.current) {
      background-color: #222;
    }
  }
  :has(.has-fragment.current-fragment) .layout {
    aside {
      animation: bounce 1s ease-in-out 1s infinite;
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce2 {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
