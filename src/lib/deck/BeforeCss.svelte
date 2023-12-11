<script lang="ts">
  import Browser from '$lib/components/Browser.svelte';
  import Code from './Code.svelte';
  import Slide from './Slide.svelte';
</script>

<Slide>
  <Slide>
    <h1>Life before CSS?</h1>

    <div class="row gap">
      <div class="left column">
        <p class="fragment">I got my start in web development in 1995.</p>

        <p class="fragment">Before CSS, before tables…</p>

        <p class="fragment">We had to rely on<br />the built-in appearance of html tags.</p>

        <p class="fragment">Building websites uphill, both ways.</p>
      </div>

      <div class="right column">
        <div class="old-man fragment"></div>
      </div>
    </div>
  </Slide>

  <Slide>
    <div class="row gap" style="gap: 2em">
      <div class="left column">
        <h2>A real example</h2>
        <p class="small">(with fake copy)</p>
        <div class="fragment" data-fragment-index="20">
          <Code lines>
            {`
              Ut deserunt, amet nisi. Nisi dolore
              <ul><ul><ul><ul><ul><ul><ul><ul><ul><ul>
                Duis irure sed tempor ex magna nisi.
              </ul></ul></ul></ul></ul></ul></ul></ul></ul></ul>
              pariatur nostrud sint nulla. Pariatur
              <ul><ul><ul><ul><ul><ul><ul><ul><ul><ul>
                Sed tempor ex magna. Ex magna nisi
              </ul></ul></ul></ul></ul></ul></ul></ul></ul></ul>
              nostrud sint nulla duis eiusmod dolore
              <ul><ul><ul><ul><ul><ul><ul><ul><ul><ul>
                esse velit velit dolore. Nisi, esse
              </ul></ul></ul></ul></ul></ul></ul></ul></ul></ul>
              officia. Sint nulla duis eiusmod officia.
              <ul><ul><ul><ul><ul><ul><ul><ul><ul><ul>
                velit velit dolore aliquip. Velit
              </ul></ul></ul></ul></ul></ul></ul></ul></ul></ul>
              Eiusmod dolore officia minim ex enim.
              <ul><ul><ul><ul><ul><ul><ul><ul><ul><ul>
                dolore aliquip, aliquip sint eu.
              </ul></ul></ul></ul></ul></ul></ul></ul></ul></ul>
          `}
          </Code>
        </div>
      </div>
      <div class="right column fragment" data-fragment-index="10">
        <Browser width="500px" title="Before CSS">
          <div class="layout old-school">
            <p>Ut deserunt, amet nisi. Nisi dolore</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>Duis irure sed tempor ex magna nisi.</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>pariatur nostrud sint nulla. Pariatur</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>Sed tempor ex magna. Ex magna nisi</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>nostrud sint nulla duis eiusmod dolore</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>esse velit velit dolore. Nisi, esse</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>officia. Sint nulla duis eiusmod officia.</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>velit velit dolore aliquip. Velit</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>Eiusmod dolore officia minim ex enim.</p>
            <ul>
              <ul>
                <ul><ul><ul><ul><ul><ul><ul><ul>dolore aliquip, aliquip sint eu.</ul></ul></ul></ul></ul></ul></ul></ul>
              </ul>
            </ul>
            <p>Ut deserunt, amet nisi. Nisi dolore</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>Duis irure sed tempor ex magna nisi.</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>pariatur nostrud sint nulla. Pariatur</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>Sed tempor ex magna. Ex magna nisi</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>nostrud sint nulla duis eiusmod dolore</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>esse velit velit dolore. Nisi, esse</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>officia. Sint nulla duis eiusmod officia.</p>
            <ul>
              <ul>
                <ul>
                  <ul><ul><ul><ul><ul><ul><ul>velit velit dolore aliquip. Velit</ul></ul></ul></ul></ul></ul></ul>
                </ul>
              </ul>
            </ul>
            <p>Eiusmod dolore officia minim ex enim.</p>
            <ul>
              <ul>
                <ul><ul><ul><ul><ul><ul><ul><ul>dolore aliquip, aliquip sint eu.</ul></ul></ul></ul></ul></ul></ul></ul>
              </ul>
            </ul>
          </div>
        </Browser>
      </div>
    </div>
  </Slide>
</Slide>

<style lang="less">
  .left.column {
    max-width: 35ch;
  }

  .old-man {
    width: 300px;
    height: 250px;
    background-image: url(./old.jpg);
    background-position: center;
    background-size: cover;
    border: 1px solid white;
    border-radius: 0.5rem;
  }

  .layout.old-school {
    padding: 1rem;
    text-align: left;
    font-size: 12px;
    ul {
      margin: 0.25em 0;
      margin-left: 2em;
      padding: 0;
    }

    p {
      margin: 0.25em 0;
    }
  }
</style>
