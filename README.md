# ModelSet — AI Model API Gateway

<div align="center">

[🇺🇸 English](README.md) · [🇨🇳 中文版](README_CN.md)

</div>

---

<div align="center">

<img src="assets/logo.jpg" alt="ModelSet Logo" width="120" />

**One API Key. All Models. Lowest Price.**

[![99.9% Uptime](https://img.shields.io/badge/uptime-99.9%25-3ea87a?style=for-the-badge&logo=statuspal)](https://modelset.top)
[![50+ Models](https://img.shields.io/badge/models-50%2B-c4755a?style=for-the-badge)](https://modelset.top)
[![100K+ Developers](https://img.shields.io/badge/developers-100K%2B-2a2a2a?style=for-the-badge)](https://modelset.top)

[🚀 Get Started](https://modelset.top/login) · [📖 Documentation](docs/quick-start.md) · [💬 Community](https://modelset.top/about) · [📄 FAQ](docs/faq.md)

</div>

---

## Our Mission

<div align="center">

### Make advanced AI models accessible to everyone at low prices — promoting model equity for all.

</div>

ModelSet exists to break down the barriers — price, complexity, and access — so every developer, student, and creator around the world can harness the power of the world's best AI models.

## What is ModelSet?

ModelSet is a **unified AI model API gateway** that aggregates global top-tier AI models — **Anthropic Claude**, **OpenAI GPT-4**, **Google Gemini**, and more — providing developers with a **single API endpoint**, stable routing, and the **lowest prices** in the industry.

Instead of managing separate accounts, billing, and integrations across multiple AI providers, ModelSet gives you **one API Key** to access 50+ models through a **single base URL** (`https://ai.modelset.top`), compatible with both **OpenAI** and **Anthropic** API formats.

- **One API Key** to access 50+ models across all major providers
- **Lowest prices** in the industry — pay only for what you use, no hidden markups
- **99.9% uptime** with multi-region redundancy and automatic failover
- **<100ms response** with intelligent global routing and edge caching
- **OpenAI / Anthropic compatible** — one config change to switch, no code rewrite needed

## Why ModelSet?

### Compared to Using Official APIs Directly

| | Official APIs | ModelSet |
|---|---|---|
| **API Keys** | One per provider | **One for everything** |
| **Billing** | Multiple accounts, different currencies | **Single balance, unified billing** |
| **Pricing** | Standard rates | **Lower rates via bulk forwarding** |
| **Integration** | Different formats per provider | **Unified OpenAI / Anthropic format** |
| **Reliability** | Single-region, no fallback | **Multi-region, automatic failover** |

### Use Cases

- **Claude Code users** — Configure `ANTHROPIC_BASE_URL` to route through ModelSet and access all Claude models at lower cost
- **AI app developers** — Switch between Claude, GPT-4, and Gemini with a single `model` parameter change
- **Students & creators** — Get free tokens via our referral program and use all models without spending a penny
- **Startups** — Reduce AI API costs by 50%+ compared to direct official API usage

## Quick Start

### Step 1: Get your API Key

Visit [modelset.top/login](https://modelset.top/login) to register and get your API Key. Free to register, no credit card required.

### Step 2: Configure environment variables

```bash
# For Anthropic-compatible clients (Claude Code, etc.)
export ANTHROPIC_BASE_URL="https://ai.modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

```bash
# For OpenAI-compatible clients (Cursor, Codex, etc.)
export OPENAI_BASE_URL="https://ai.modelset.top"
export OPENAI_API_KEY="sk-xxxx"
```

### Step 3: Start using

```bash
claude
```

That's it. For detailed setup instructions, see [docs/quick-start.md](docs/quick-start.md).

## Features

| Feature | Description |
|---------|-------------|
|  **Blazing Fast** | <100ms average response with 6 global edge nodes, intelligent model routing |
| 💰 **Lowest Price** | Industry-leading pricing via bulk official forwarding, cc-max group at only 2x rate |
| 🛡️ **Rock Solid** | 99.9% uptime with multi-link redundancy, automatic failover across regions |
| 🌍 **Global Scale** | 50+ AI models from Anthropic, OpenAI, Google, DeepSeek, Alibaba — one unified API |
|  **Dev Friendly** | Compatible with OpenAI / Anthropic API formats — drop-in replacement, no code changes |

## Our Only Campaign

<div align="center">

### 🎉 Invite New Users = Free Forever

</div>

We have **one and only one campaign**: Invite new users to register and get rewarded.

- **New users get 5,000,000 tokens** on registration
- **Every invite = another 5,000,000 tokens** for you

| You get | Friend gets |
|:-------:|:-----------:|
| **5,000,000** tokens | **5,000,000** tokens |

- Both receive tokens instantly
- **Unlimited** referrals
- **Permanent** validity
- Keep inviting = **use all full-power models for free forever**

### 💬 Official Group Redemption Codes

Join our official service group. We periodically release redemption codes that can be directly exchanged for tokens.

👉 [Join Official Group →](https://modelset.top/about)

## No Subscriptions. No Surprises.

<div align="center">

**No subscriptions. No bundles. No membership tiers. No hidden fees.**

**Pay-as-you-go. Top up as you need. Balance never expires.**

**No quota anxiety.**

</div>

| We **don't** do | We **promise** |
|:---:|:---|
| ❌ No subscriptions | ✅ Pay-as-you-go, balance never expires |
| ❌ No fixed bundles | ✅ Lowest prices, no hidden markups |
| ❌ No membership tiers | ✅ Equal access for all users |
| ❌ No hidden fees | ✅ Transparent pricing, no minimum spend |

**Full-power models only. Official forwarding. No downgrades or substitutions.**

## Supported Models

### Anthropic Claude ✅ (Available Now)

| Model | Model ID | Description |
|-------|----------|-------------|
| Claude Fable 5 | `claude-fable-5` | Creative + reasoning fusion, multimodal & long context |
| Claude Sonnet 5 | `claude-sonnet-5` | Latest coding flagship, surpasses Sonnet 4 |
| Claude Sonnet 4.6 | `claude-sonnet-4.6` | Enhanced Sonnet, coding & reasoning boost |
| Claude Sonnet 4.5 | `claude-sonnet-4.5` | Classic Sonnet, speed & quality balance |
| Claude Opus 4.8 | `claude-opus-4.8` | Top reasoning flagship, complex science & math |
| Claude Opus 4.7 | `claude-opus-4.7` | Previous-gen reasoning, deep analysis |
| Claude Opus 4.6 | `claude-opus-4.6` | Opus evolved, depth + efficiency |
| Claude Opus 4.5 | `claude-opus-4.5` | Classic Opus, deep analysis & research |
| Claude Haiku 4.5 | `claude-haiku-4.5` | Lightweight & fast, real-time responses |

### OpenAI GPT 🔄 (Coming Soon)

| Model | Model ID | Description |
|-------|----------|-------------|
| GPT-4.1 | `gpt-4.1` | Flagship multimodal, instruction following |
| o3 | `o3` | Deep reasoning, math & logic |
| GPT-4.1 Mini | `gpt-4.1-mini` | Lightweight & efficient, high throughput |
| DALL·E 3 | `dall-e-3` | Text-to-image generation |

### Google Gemini  (Coming Soon)

| Model | Model ID | Description |
|-------|----------|-------------|
| Gemini 2.5 Pro | `gemini-2.5-pro` | Ultra-long context, document understanding |
| Gemini 2.5 Flash | `gemini-2.5-flash` | Ultra-fast reasoning, low latency |

### Other Providers 🔄 (Coming Soon)

| Model | Model ID | Provider | Description |
|-------|----------|----------|-------------|
| DeepSeek V3 | `deepseek-v3` | DeepSeek | Chinese-optimized, creative & coding |
| Qwen 2.5 Max | `qwen-2.5-max` | Alibaba | Multilingual, code generation & analysis |
| Mistral Large 2 | `mistral-large-2` | Mistral | European leader, multilingual |

### Additional Providers

Midjourney · Cohere · Groq · Perplexity · Stability AI

> For the complete model list, real-time status, and pricing, visit [modelset.top](https://modelset.top).

## Pricing

- **Pay-as-you-go** — recharge as needed, balance never expires
- **Lowest prices** — no hidden markups on any model
- **Most reliable** — official forwarding, 99.9% uptime guarantee
- **Full models** — no downgraded or substituted models

### Referral Program

| You get | Friend gets |
|:-------:|:-----------:|
| **5,000,000** tokens | **5,000,000** tokens |

Both receive tokens instantly. Unlimited referrals. Permanent validity.

## API Usage Examples

### Python (OpenAI SDK)

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

### cURL

```bash
curl https://ai.modelset.top/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{"model":"claude-sonnet-5","messages":[{"role":"user","content":"Hello!"}]}'
```

> For more examples in Python, Node.js, and cURL, see [examples/](examples/).

## Documentation

- [📖 Quick Start Guide](docs/quick-start.md) — Register, configure, and make your first API call in minutes
- [📡 API Reference](docs/api-reference.md) — OpenAI & Anthropic compatible API specs with request/response examples
- [🔧 Client Setup](docs/clients.md) — Configure Claude Code, Cursor, Codex, Continue, LobeChat, NextChat
- [❓ FAQ](docs/faq.md) — Frequently asked questions about ModelSet API, pricing, and models

## Client Compatibility

ModelSet works with **any client or SDK** that supports **OpenAI** or **Anthropic** API formats:

| Client | API Format | Configuration |
|--------|-----------|---------------|
| **Claude Code** | Anthropic | Set `ANTHROPIC_BASE_URL=https://ai.modelset.top` |
| **Cursor** | OpenAI | Settings → AI → OpenAI Compatible → set base URL |
| **Codex** | OpenAI | OpenAI API settings → custom base URL |
| **OpenClaw** | OpenAI | `OPENAI_BASE_URL` environment variable |
| **Continue** (VS Code / JetBrains) | OpenAI | `config.json` → `apiBase` |
| **LobeChat** | OpenAI | Settings → Model Provider → OpenAI Compatible |
| **NextChat** (ChatGPT-Next-Web) | OpenAI | Settings → API URL + API Key |
| **Custom scripts** | OpenAI / Anthropic | Any HTTP client pointing to our base URL |

## Community

- 💬 [Official Service Group](https://modelset.top/about) — Get help, share feedback, redeem codes
- 🐛 [GitHub Issues](https://github.com/skyxiaowang/modelset/issues) — Report bugs, suggest features
- 📝 [Help Center](https://modelset.top/about) — Tutorials and guides
-  **WeChat** — Scan QR code below to join our official group

<div align="center">

<img src="assets/wechat-qr.jpg" alt="WeChat QR Code" width="260" />

</div>

## Related Searches

If you're looking for: **cheap Claude API**, **free GPT-4 API**, **AI model aggregator**, **unified AI API gateway**, **Claude proxy API**, **OpenAI compatible proxy**, **multi-model API**, **lowest price AI models**, **Claude Code cheaper alternative**, **API for all AI models**, **model routing service**, **AI API forwarding**, **cheap Anthropic API**, **Gemini API proxy** — ModelSet is built exactly for you.

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Ready to start?** [Get your free API Key →](https://modelset.top/login)

© 2026 ModelSet. All rights reserved.

</div>

