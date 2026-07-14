# API Reference — ModelSet AI Model API Gateway

ModelSet provides **REST API endpoints** compatible with both **OpenAI** and **Anthropic** API formats. Use any HTTP client, SDK, or AI coding tool that supports these formats.

## Base URL

```
https://ai.modelset.top
```

All requests go to this single endpoint. Switch models by changing the `model` parameter — no need to change base URLs.

## Authentication

All API requests require authentication via Bearer token in the `Authorization` header:

```
Authorization: Bearer sk-xxxx
```

Get your API Key from [ai.modelset.top/login](https://ai.modelset.top/login).

---

## OpenAI Compatible API

Use this endpoint with any OpenAI SDK, client, or tool.

### Endpoint

```
POST /v1/chat/completions
```

### Request Example

```bash
curl https://ai.modelset.top/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "claude-sonnet-5",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    "temperature": 0.7,
    "max_tokens": 1024,
    "stream": false
  }'
```

### Supported Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `model` | string | Model ID (e.g., `claude-sonnet-5`, `claude-opus-4.8`) |
| `messages` | array | Conversation messages with `role` and `content` |
| `temperature` | number | Sampling temperature (0.0–2.0) |
| `max_tokens` | integer | Maximum tokens in the response |
| `stream` | boolean | Set `true` for SSE streaming responses |
| `top_p` | number | Nucleus sampling parameter |
| `stop` | array/string | Stop sequences |
| `presence_penalty` | number | -2.0 to 2.0 |
| `frequency_penalty` | number | -2.0 to 2.0 |

### Response Example

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

### Streaming Responses

Set `"stream": true` to receive **Server-Sent Events (SSE)**:

```bash
curl -N https://ai.modelset.top/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "claude-haiku-4.5",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'
```

Each chunk arrives as an SSE event:
```
data: {"id":"...","choices":[{"delta":{"content":"Hello"},"finish_reason":null}]}
```

### Python Example

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-xxxx",
    base_url="https://ai.modelset.top",
)

response = client.chat.completions.create(
    model="claude-sonnet-5",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
```

### Node.js Example

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "sk-xxxx",
  baseURL: "https://ai.modelset.top",
});

const response = await client.chat.completions.create({
  model: "claude-sonnet-5",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(response.choices[0].message.content);
```

---

## Anthropic Compatible API

Use this endpoint with any Anthropic SDK, client, or tool.

### Endpoint

```
POST /v1/messages
```

### Headers

```
x-api-key: sk-xxxx
anthropic-version: 2023-06-01
content-type: application/json
```

### Request Example

```bash
curl https://ai.modelset.top/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: sk-xxxx" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-sonnet-5",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Explain quantum computing in simple terms."}
    ]
  }'
```

### Response Example

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

---

## Available Model IDs

| Model ID | Provider | Status |
|----------|----------|--------|
| `claude-fable-5` | Anthropic Claude | ✅ Available |
| `claude-sonnet-5` | Anthropic Claude | ✅ Available |
| `claude-sonnet-4.6` | Anthropic Claude | ✅ Available |
| `claude-sonnet-4.5` | Anthropic Claude | ✅ Available |
| `claude-opus-4.8` | Anthropic Claude | ✅ Available |
| `claude-opus-4.7` | Anthropic Claude | ✅ Available |
| `claude-opus-4.6` | Anthropic Claude | ✅ Available |
| `claude-opus-4.5` | Anthropic Claude | ✅ Available |
| `claude-haiku-4.5` | Anthropic Claude | ✅ Available |
| `gpt-4.1` | OpenAI | 🔄 Coming Soon |
| `o3` | OpenAI | 🔄 Coming Soon |
| `gemini-2.5-pro` | Google | 🔄 Coming Soon |
| `deepseek-v3` | DeepSeek | 🔄 Coming Soon |

---

## Error Codes

| HTTP Status | Description | Action |
|-------------|-------------|--------|
| `400` | Bad Request | Check request format and required fields |
| `401` | Unauthorized | Verify your API Key is correct, check for typos |
| `402` | Insufficient Balance | [Recharge your account](https://ai.modelset.top/login) |
| `429` | Rate Limited | Wait and retry with exponential backoff |
| `500` | Internal Server Error | Temporary issue, retry after a few seconds |
| `503` | Service Unavailable | Maintenance window, check [status page](https://ai.modelset.top) |

### Error Response Format

```json
{
  "error": {
    "message": "Insufficient balance. Please recharge your account.",
    "type": "insufficient_quota",
    "code": "insufficient_balance"
  }
}
```

## Rate Limits

| Tier | Requests/min | Notes |
|------|-------------|-------|
| Default | 60 RPM | Standard rate for all users |
| Claude Code group | 60 RPM | Model-specific limits may apply |

For custom rate limits or enterprise needs, contact us via the [Help Center](https://ai.modelset.top/about).

## Best Practices for AI API Integration

1. **Use streaming** for long responses to reduce perceived latency
2. **Set appropriate `max_tokens`** to avoid unexpected costs
3. **Handle errors gracefully** — implement retry logic with exponential backoff
4. **Cache responses** when possible to reduce API calls
5. **Monitor your usage** via the dashboard
6. **Use connection pooling** for high-throughput applications

## Need More Help?

- [Quick Start Guide](quick-start.md) — Get started in 2 minutes
- [Client Setup](clients.md) — Configure your favorite AI coding tool
- [FAQ](faq.md) — Common questions answered
- [Help Center](https://ai.modelset.top/about) — Contact support
