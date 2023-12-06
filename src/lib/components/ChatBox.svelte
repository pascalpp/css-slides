<script lang="ts" context="module">
  let timestamp = Date.now();

  function randomTimeInterval() {
    const hours = Math.floor(Math.random() * 6);
    const minutes = Math.floor(Math.random() * 60);
    return hours * minutes * 60 * 1000;
  }

  function getDate() {
    const decriment = randomTimeInterval();
    timestamp = timestamp - decriment;
    return new Date(timestamp);
  }

  let messages: Message[] = [
    {
      id: crypto.randomUUID(),
      text: 'Roger???',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: 'Wake up, you dumb rabbit!',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: 'Roger? Do you read me?',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: 'Hey! Judge Doom is on his way to Toon Town! You and your friends better scram!',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: '8pm sharp!',
      author: 'Roger Rabbit',
      date: getDate(),
      type: 'sent',
    },
    {
      id: crypto.randomUUID(),
      text: 'What time does she go on?',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: 'Jessica says she’s going to sing a special toon, I mean tune, just for you!',
      author: 'Roger Rabbit',
      date: getDate(),
      type: 'sent',
    },
    {
      id: crypto.randomUUID(),
      text: 'Great. I’ll be there!',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: 'Yes indeedily do!',
      author: 'Roger Rabbit',
      date: getDate(),
      type: 'sent',
    },
    {
      id: crypto.randomUUID(),
      text: 'Hey Roger, is Jessica singing at the club tonight?',
      author: 'Eddie Valiant',
      date: getDate(),
      type: 'received',
    },
  ];
</script>

<script lang="ts">
  import ChatComposer from './ChatComposer.svelte';
  import ChatMessage from './ChatMessage.svelte';
  import ChatTimeline from './ChatTimeline.svelte';
  import type { Message } from './ChatMessage.svelte';

  export let style = '';
  export let fragment = false;
  export let index: string | null = null;

  function addMessage(text: string) {
    if (!text) return;
    const newMessage = {
      id: crypto.randomUUID(),
      text,
      author: 'Roger Rabbit',
      date: getDate(),
      type: 'sent',
    } as Message;
    messages = [newMessage, ...messages];
  }
</script>

<div class="chat" {style} class:fragment data-fragment-index={index} data-id="chat-box">
  <ChatTimeline>
    {#each messages as message (message.id)}
      <ChatMessage {message} />
    {/each}
  </ChatTimeline>
  <ChatComposer {addMessage} />
</div>

<style lang="less">
  .chat {
    --outline-color: steelblue;
    font-size: 14px;
    font-family: var(--font-system);
    color: black;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: var(--chat-height);
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    flex-grow: 1;

    &.fragment {
      transition: max-height 1s ease-in-out;
      &:not(.visible) {
        max-height: 0;
      }
      &:is(.visible) {
        max-height: 2000px;
      }
    }
  }
</style>
