<script lang="ts">
  import { onMount } from 'svelte';
  import autosize from 'autosize';
  import { text } from '@sveltejs/kit';

  export let addMessage: (message: string) => void;

  let value = '';
  let textarea: HTMLTextAreaElement;

  function preventEnterKey(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
    }
  }

  function submit(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      addMessage(value);
      value = '';
      requestAnimationFrame(() => {
        autosize.update(textarea);
      });
    }
  }

  onMount(() => {
    if (textarea) autosize(textarea);
  });
</script>

<div class="chat-composer">
  <textarea
    bind:this={textarea}
    bind:value
    rows={1}
    placeholder="Enter your message"
    on:keydown={preventEnterKey}
    on:keyup={submit} />
</div>

<style lang="less">
  .chat-composer {
    padding: 8px;
    background-color: #eee;
    border-top: 1px solid #ddd;

    textarea {
      padding: 8px 16px;
      display: block;
      margin: 0;
      appearance: none;
      resize: none;
      width: 100%;
      max-height: 160px;
      min-height: 36px;
      border: 1px solid #ddd;
      border-radius: 20px;
    }
  }
</style>
