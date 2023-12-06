<script lang="ts" context="module">
  export type Message = {
    id: string;
    text: string;
    author: string;
    date: Date;
    type: 'sent' | 'received';
  };
</script>

<script lang="ts">
  export let message: Message;
  const { text, author, date, type } = message;

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const time = dateFormatter.format(date);
</script>

<div class="message {type}">
  <div class="author">from {author}</div>
  <div class="text">{text}</div>
  <div class="time">{time}</div>
</div>

<style lang="less">
  .message {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 6px;

    .author,
    .time {
      font-size: 0.8em;
      color: #999;
    }

    .text {
      background-color: #ccc;
      padding: 8px 16px;
      border-radius: 20px;
      width: fit-content;
      white-space: pre-line;
      color: black;
      text-align: left;
    }

    &.received {
      align-self: flex-start;
      align-items: flex-start;

      .author,
      .time {
        padding-left: 16px;
      }
    }

    &.sent {
      align-self: flex-end;
      align-items: flex-end;

      .text {
        background-color: steelblue;
        color: white;
      }

      .author,
      .time {
        padding-right: 16px;
      }
    }
  }
</style>
