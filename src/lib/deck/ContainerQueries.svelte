<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';

  let narrowBrowser = false;
  let sidebarBrowser = false;

  function handleClick(event: MouseEvent) {
    if (!sidebarBrowser && !narrowBrowser) {
      narrowBrowser = true;
    } else {
      narrowBrowser = false;
      sidebarBrowser = true;
    }
  }
</script>

<section>
  <section>
    <h1>Container Queries</h1>
    <ul class="fragment">
      <li>Like media queries</li>
      <li class="fragment">But viewport-agnostic</li>
      <li class="fragment">And element-specific</li>
      <li class="fragment">
        Stop asking <span class="fragment strike highlight-red semi-fade-out">“How big is the screen?”</span>
      </li>
      <li class="fragment">
        Start asking <span class="fragment grow lime">“How big am I?”</span>
      </li>
    </ul>
  </section>
  <section data-transition="fade">
    <div class="browser-container" class:narrowBrowser class:sidebarBrowser>
      <Browser title="Container queries in action" on:click={handleClick}>
        <div class="page">
          <h3>&nbsp;</h3>
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
              <div class="card lion"></div>
            </div>
          </div>
        </div>
      </Browser>
    </div>
  </section>
</section>

<style lang="less">
  .browser-container {
    max-width: 1000px;
    transition: all 1s ease-in-out;

    h3 {
      white-space: nowrap;
    }
    h3::before {
      content: 'Wide browser';
    }
    &.narrowBrowser {
      max-width: calc(300px + 2rem);

      h3::before {
        content: 'Narrow';
      }
    }
    &.sidebarBrowser {
      h3::before {
        content: 'Wide browser with sidebar';
      }
    }
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

  .sidebarBrowser {
    .sidebar {
      flex-grow: 0;
    }
    .detail {
      display: block;
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
    }
  }

  @container container (inline-size <= 301px) {
    .cards {
      flex-direction: column;
      align-items: flex-start;
    }
    .card {
      width: 100%;
      aspect-ratio: 2/1;
    }
  }
</style>
