<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
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
              proident do. Proident, do voluptate fugiat id aliqua alem ullamco. Reprehenderit voluptate fugiat aliqua,
              ullamco lorem dolor sed.
            </p>
            <p>
              Adipiscing veniam <a href="#">labore qui aute</a> do. Labore qui aute do culpa ad et. Aute do culpa ad, et.
              Ad et incididunt, qui sunt. Qui, sunt consequat ut laboris labore amet elit. Ut laboris labore amet elit. Labore,
              amet elit ex cillum excepteur. Ex cillum excepteur labore excepteur id.
            </p>
            <p>
              <a href="#">Voluptate duis eu</a>, do est. Do est eu, veniam ut minim eiusmod commodo. Veniam ut minim,
              eiusmod commodo ullamco eiusmod anim laboris. Eiusmod ullamco eiusmod, anim laboris nulla eu magna. Anim
              laboris nulla eu, magna aliqua.
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

<style lang="less">
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
</style>
