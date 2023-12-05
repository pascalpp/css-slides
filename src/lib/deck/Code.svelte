<script lang="ts">
  export let id: string | null = null;
  export let lines: string | boolean | null = null;
  export let noescape = false;
</script>

<pre data-id={id || null}>
	<code data-trim data-line-numbers={lines || null} data-noescape={noescape || null}><slot /></code>
</pre>

<style lang="less">
  pre {
    margin-block: 1rem;
    line-height: 1.5;
    width: min-content;
    code {
      padding-block: 0.25rem;
      padding-inline: 0.75rem;
      border-radius: 0.25rem;
    }
  }
</style>
