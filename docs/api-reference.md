# API Reference

ModelSet provides API endpoints compatible with both **OpenAI** and **Anthropic** formats.

## Base URL

```
https://ai.modelset.top
```

## Authentication

All API requests require authentication via Bearer token:

```
Authorization: Bearer sk-xxxx
```

## OpenAI Compatible API

### Endpoint

```
POST /v1/chat/completions
```

### Request

```json
{
  "model": "claude-sonnet-5",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Explain quantum computing in simple terms."
    }
  ],
  "temperature": 0.7,
  "max_tokens": 1024,
  "stream": false
}
```

### Response

```json
{
  "id": "chatcmpl-xxxx",
  "object": "chat.completion",
  "created": 1716000000,
  "model": "claude-sonnet-5",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Quantum computing uses quantum bits (qubits)..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 28,
    "completion_tokens": 156,
    "total_tokens": 184
  }
}
```

### Streaming

Set `"stream": true` to receive Server-Sent Events (SSE):

```json
{
  "model": "claude-sonnet-5",
  "messages": [{"role": "user", "content": "Hello!"}],
  "stream": true
}
```

## Anthropic Compatible API

### Endpoint

```
POST /v1/messages
```

### Request

```json
{
  "model": "claude-sonnet-5",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Explain quantum computing in simple terms."
    }
  ]
}
```

### Response

```json
{
  "id": "msg_xxxx",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Quantum computing uses quantum bits (qubits)..."
    }
  ],
  "model": "claude-sonnet-5",
  "usage": {
    "input_tokens": 24,
    "output_tokens": 156
  }
}
```

## Error Codes

| HTTP Status | Description | Action |
|-------------|-------------|--------|
| `400` | Bad Request | Check request format and required fields |
| `401` | Unauthorized | Verify your API Key is correct |
| `402` | Insufficient Balance | [Recharge your account](https://ai.modelset.top/login) |
| `429` | Rate Limited | Wait and retry, check rate limits |
| `500` | Internal Server Error | Temporary issue, retry with backoff |
| `503` | Service Unavailable | Maintenance window, check status page |

## Rate Limits

| Tier | Requests/min | Tokens/min |
|------|-------------|------------|
| Default | 60 | 100,000 |
| Claude Code group | 60 | Model-specific |

For custom rate limits, contact us via the [Help Center](https://ai.modelset.top/about).

## Supported Models

| Model ID | Provider | Status |
|----------|----------|--------|
| `claude-fable-5` | Anthropic | ✅ Available |
| `claude-sonnet-5` | Anthropic | ✅ Available |
| `claude-sonnet-4.6` | Anthropic | ✅ Available |
| `claude-sonnet-4.5` | Anthropic | ✅ Available |
| `claude-opus-4.8` | Anthropic | ✅ Available |
| `claude-opus-4.7` | Anthropic | ✅ Available |
| `claude-opus-4.6` | Anthropic | ✅ Available |
| `claude-opus-4.5` | Anthropic | ✅ Available |
| `claude-haiku-4.5` | Anthropic | ✅ Available |
| `gpt-4.1` | OpenAI | 🔄 Coming Soon |
| `o3` | OpenAI | 🔄 Coming Soon |
| `gemini-2.5-pro` | Google | 🔄 Coming Soon |
| `deepseek-v3` | DeepSeek | 🔄 Coming Soon |

## Best Practices

1. **Use streaming** for long responses to reduce perceived latency
2. **Set appropriate `max_tokens`** to avoid unexpected costs
3. **Handle errors gracefully** — implement retry logic with exponential backoff
4. **Cache responses** when possible to reduce API calls
5. **Monitor your usage** via the dashboard
