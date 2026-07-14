# Frequently Asked Questions — ModelSet AI Model API Gateway

## What is ModelSet?

ModelSet is an AI model API gateway and aggregation platform that brings together top-tier AI models from around the world, including Anthropic Claude, OpenAI GPT-4, Google Gemini, and more. We provide developers with a unified API interface for stable, high-speed, low-cost AI services.

**我们的使命**：让世界上每一个人都能低价用上最先进的模型，推进模型平权。

ModelSet 是一个 AI 模型 API 网关/中转服务平台，聚合了全球顶尖 AI 模型（包括 Anthropic Claude、OpenAI GPT-4、Google Gemini 等），通过统一的 API 接口为开发者提供稳定、高速、低成本的 AI 服务。

## How do I get started with ModelSet API?

1. Visit [modelset.top/login](https://modelset.top/login) to register (free, no credit card)
2. Get your API Key from the dashboard
3. Set `base_url` to `https://ai.modelset.top`
4. Use any OpenAI or Anthropic compatible client
5. Recharge as you go — balance never expires!

For a step-by-step guide, see our [Quick Start](quick-start.md).

## Which AI models are supported on ModelSet?

We currently support 50+ AI models across all major providers:

**Available now (Anthropic Claude):**
- Claude Fable 5 / Sonnet 5 / Sonnet 4.6 / Sonnet 4.5
- Claude Opus 4.8 / 4.7 / 4.6 / 4.5
- Claude Haiku 4.5

**Coming soon:**
- OpenAI: GPT-4.1 / GPT-4.1 Mini / o3 / DALL·E 3
- Google: Gemini 2.5 Pro / Flash
- DeepSeek V3 / Qwen 2.5 Max / Mistral Large 2

## What is the referral program? How to get free API credits?

我们只有一个活动：邀请新用户注册奖励 **500 万额度**，同时新用户使用邀请码注册也会得到 **50 万额度**。

For every new user you invite:
- **You get 5,000,000 tokens**
- **Your friend gets 500,000 tokens**

- 双方同时到账，邀请数量**无上限**
- 多邀多得，**永久有效**
- 持续邀请 = **永久免费使用所有满血模型**
- 加入官方服务群，不定时放出兑换码，可直接兑换额度使用

Keep inviting to use all models for free forever. This is the easiest way to get free Claude API, GPT-4 API, and other AI model access.

## How does billing work? Is it really pay-as-you-go?

**没有订阅、没有套餐、没有会员等级、没有乱七八糟的计费方式。**

- **No subscriptions** (不订阅) — no monthly or annual fees, no auto-deductions
- **No bundles** (不套餐) — no fixed tiers, recharge any amount freely
- **No membership tiers** (不分级) — no VIP levels, equal access for all users
- **No hidden fees** (无隐藏收费) — transparent pricing, no minimum spend

**随充随用，按量付费，用多少充多少，告别额度恐慌。**

- **Pay-as-you-go** — recharge as needed, balance never expires
- **Lowest prices** — no hidden markups on any model
- **Most reliable** — official forwarding, 99.9% uptime
- **Full models only** — 满血模型，拒绝掺假，全部官转

Also: 加入官方服务群，不定时放出兑换码，可直接兑换额度使用。

## Which AI coding clients are compatible with ModelSet?

ModelSet is compatible with **any client** that supports OpenAI or Anthropic API formats:

- **Claude Code** — Set `ANTHROPIC_BASE_URL` to our endpoint
- **Cursor** — Configure OpenAI Compatible provider
- **Codex** — Set custom base URL in settings
- **OpenClaw** — Configure `OPENAI_BASE_URL` environment variable
- **Continue** (VS Code / JetBrains) — Add to `config.json`
- **LobeChat** — Add OpenAI Compatible provider
- **NextChat** — Set API URL and Key
- **Any custom script** — Point HTTP requests to our base URL

See our [Client Setup Guide](clients.md) for detailed instructions.

## How do I switch between different AI models?

Simply change the `model` parameter in your API request:

```bash
# Use Claude Sonnet 5
curl -d '{"model": "claude-sonnet-5", ...}'

# Switch to Claude Opus 4.8
curl -d '{"model": "claude-opus-4.8", ...}'
```

No need to change base URLs, API keys, or rewrite code.

## What is the API endpoint / base URL?

```
https://ai.modelset.top
```

All API requests go to this single endpoint. Switch models by changing the `model` parameter only.

## How do I check my API usage and balance?

Log in to your dashboard at [modelset.top/login](https://modelset.top/login) to view:
- Current balance
- Usage history
- API Key management
- Referral status and earned tokens

## Is my API Key secure?

Yes. Your API Key is generated in our secure dashboard and is only visible to you. We use:
- HTTPS encryption for all API calls
- Secure token generation
- Key regeneration available if compromised

Never share your API Key publicly. If compromised, regenerate it immediately from the dashboard.

## What happens if I run out of balance?

Your API calls will return a `402 Insufficient Balance` error. Simply:
1. Recharge your account at the dashboard, or
2. Invite friends to earn free tokens via the referral program

Your balance never expires, so old tokens are always available.

## Can I get a refund for unused balance?

Contact our support team via the [Help Center](https://modelset.top/about) for refund requests.

## What are the rate limits?

| Tier | Requests/min | Notes |
|------|-------------|-------|
| Default | 60 RPM | Standard for all users |
| Claude Code group | 60 RPM | Model-specific limits may apply |

For custom rate limits or enterprise needs, contact us via the [Help Center](https://modelset.top/about).

## Does ModelSet support streaming?

Yes. Set `stream: true` in your OpenAI-compatible request or use the streaming endpoint for Anthropic format to receive real-time token responses.

## Where can I get help or report a bug?

- [Help Center](https://modelset.top/about) — Tutorials, guides, and support
- [Official Community Group](https://modelset.top/about) — Get help, share feedback
- [GitHub Issues](https://github.com/skyxiaowang/modelset/issues) — Report bugs, suggest features
- [API Reference](api-reference.md) — Full endpoint documentation
