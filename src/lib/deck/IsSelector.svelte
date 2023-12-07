<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->

<Slide animate transition="zoom">
  <Browser title=":is examples">
    <div class="layout">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Summary</a></li>
          </ul>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </header>
      <div class="panes">
        <div class="pane left"></div>
        <div class="pane content column">
          <h2>:is</h2>
          <p>Lets you group selectors…</p>
          <Code lines="1-4" id="code-1">
            {`
              header a,
              aside a,
              article a,
              footer a {
                color: purple;
                font-weight: bold;
              }
            `}
          </Code>
        </div>
        <div class="pane right"></div>
      </div>
      <footer>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
          <ul>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  </Browser>
</Slide>

<!-- svelte-ignore a11y-invalid-attribute -->
<Slide animate>
  <Browser title=":is examples">
    <div class="layout purple">
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Summary</a></li>
          </ul>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </nav>
      </header>
      <div class="panes">
        <div class="pane left"></div>
        <div class="pane content column">
          <h2>:is</h2>
          <p>…into a single selector:</p>
          <Code lines="1" id="code-2">
            {`
              :is(header, aside, article, footer) a {
                color: purple;
                font-weight: bold;
              }
            `}
          </Code>
        </div>
        <div class="pane right"></div>
      </div>
      <footer>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
          <ul>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  </Browser>
</Slide>

<style lang="less">
  .layout {
    min-height: 60vh;
    display: flex;
    flex-direction: column;

    nav {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 1em 1.5em;
      flex-shrink: 0;
      background-color: gold;
      font-family: var(--font-system);
      color: black;
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
          a {
            color: inherit;
          }
        }
      }
    }

    .panes {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    .pane.left {
      background-color: rgba(255 255 255 / 0.05);
      width: 200px;
      flex-shrink: 0;
      display: none;
    }
    .pane.right {
      background-color: rgba(255 255 255 / 0.05);
      width: 100px;
      flex-shrink: 0;
      display: none;
    }

    .pane.content {
      padding: 1rem;
      flex-grow: 1;
      justify-content: flex-start;
    }

    &.purple a {
      color: purple;
      font-weight: bold;
    }
  }
</style>
