<script lang="ts">
  import ChatComposer from './ChatComposer.svelte';
  import ChatMessage from './ChatMessage.svelte';
  import ChatTimeline from './ChatTimeline.svelte';
  import type { Message } from './ChatMessage.svelte';

  export let style = 'height: 100%';

  const now = Date.now();
  let decriment = 0;

  function randomTimeInterval() {
    decriment = decriment - Math.floor(Math.random() * 24) * 60 * 60 * 1000;
    return decriment;
  }

  function getDate() {
    return new Date(now - randomTimeInterval());
  }

  let messages: Message[] = [
    {
      id: crypto.randomUUID(),
      text: 'Great. I’ll be there!',
      author: 'Bob Hoskins',
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
      author: 'Bob Hoskins',
      date: getDate(),
      type: 'received',
    },
    {
      id: crypto.randomUUID(),
      text: 'Jeepers!',
      author: 'Roger Rabbit',
      date: getDate(),
      type: 'sent',
    },
    {
      id: crypto.randomUUID(),
      text: 'Hey! Judge Doom is on his way to Toon Town! You and your friends better scram!',
      author: 'Bob Hoskins',
      date: getDate(),
      type: 'received',
    },
  ];

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

<div class="chat" {style}>
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
    border: 1px solid #ddd;
    background-color: #f8f8f8;
  }
</style>
