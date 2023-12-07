<script lang="ts">
  export let id = 'code-block';
  export let lines: string | boolean | null = null;
  export let noescape = false;
  export let fragment = false;
  export let index: string | null = null;
  export let style = '';
</script>

<pre data-id={id || null} class:fragment data-fragment-index={index} {style}>
  <code data-trim data-line-numbers={lines || null} data-noescape={noescape || null}><slot /></code>
</pre>

<style lang="less">
  pre {
    margin-block: 1rem;
    line-height: 1.5;
    width: min-content;
    code {
      padding-block: 0.5rem;
      padding-inline: 1rem;
      border-radius: 8px;
      border: 1px solid hsla(0 100% 100% / 0.1);
    }
  }
</style>
