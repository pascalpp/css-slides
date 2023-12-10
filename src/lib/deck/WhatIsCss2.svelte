<script lang="ts">
  import Slide from './Slide.svelte';
  import Code from './Code.svelte';
</script>

<Slide>
  <div class="column">
    <h1>What is CSS?</h1>
    <p class="fragment" data-fragment-index="10">Cascading Style Sheets, duh</p>
    <p class="fragment" data-fragment-index="20">A query language for styling the DOM</p>
    <div class="grid">
      <div class="fragment" data-fragment-index="30">In SQL:</div>
      <div class="fragment" data-fragment-index="40">In CSS:</div>
      <Code fragment index="30">
        {`
          > SELECT *
            FROM users
            WHERE CountryCode="NL";
        `}
      </Code>
      <Code fragment index="40">
        {`
          table.users [data-country='NL'] {
            color: orange;
          }
        `}
      </Code>
      <Code fragment index="50">
        {`> DROP TABLE users;`}
      </Code>
      <Code fragment index="60">
        {`
          table.users {
            display: none;
          }
        `}
      </Code>
    </div>
    <p class="fragment" data-fragment-index="100">I make CSS joke. You laugh now.</p>
  </div>
</Slide>

<style lang="less">
  .grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    place-items: center;
    gap: 1rem;
    margin-block: 1rem;
    :global(pre) {
      margin: 0;
    }
  }
</style>
