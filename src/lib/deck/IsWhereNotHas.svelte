<script lang="ts">
  import './IsWhereNotHas.less';
  import Code from './Code.svelte';
  import IsWhereNotHasBrowser from './IsWhereNotHasBrowser.svelte';
  import Slide from './Slide.svelte';
</script>

<section class="is-has-where-not-has">
  <Slide>
    <div class="box wrapper">
      <h1>:is, :not, :where, :has</h1>
      <p>Some cool new CSS helpers to help you CSS your CSS</p>
    </div>
  </Slide>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <Slide animate transition="zoom">
    <div class="row slide-row">
      <div class="slide-box">
        <h1>:is</h1>
        <div class="fragment yellow-link-fragment">
          <p>Lets you group repetitive selectors…</p>
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
        <IsWhereNotHasBrowser />
      </div>
    </div>
  </Slide>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <Slide animate>
    <div class="row slide-row">
      <div class="slide-box">
        <div class="is-single-selector-fragment visible"></div>
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
        <IsWhereNotHasBrowser />
      </div>
    </div>
  </Slide>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <Slide animate>
    <div class="row slide-row">
      <div class="slide-box">
        <div class="is-single-selector-fragment visible"></div>
        <div class="where-override-fragment visible"></div>
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
        <IsWhereNotHasBrowser />
      </div>
    </div>
  </Slide>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <Slide animate>
    <div class="row slide-row">
      <div class="slide-box">
        <div class="is-single-selector-fragment visible"></div>
        <div class="not-fragment visible"></div>
        <div class="lime-fragment visible"></div>
        <h1>:has</h1>
        <div>
          <p>The “parent selector”</p>
          <p>Allows you to style elements<br />based on their contents</p>
        </div>
      </div>

      <div class="browser-container">
        <IsWhereNotHasBrowser />
      </div>
    </div>
  </Slide>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <Slide animate>
    <div class="row slide-row">
      <div class="slide-box">
        <div class="is-single-selector-fragment visible"></div>
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
        <IsWhereNotHasBrowser />
      </div>
    </div>
  </Slide>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <Slide animate>
    <div class="row slide-row">
      <div class="slide-box">
        <div class="is-single-selector-fragment visible"></div>
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
        <IsWhereNotHasBrowser />
      </div>
    </div>
  </Slide>
</section>

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
</style>
