# Client Setup Guide — Configure AI Tools with ModelSet API

Configure your favorite AI coding tool, chat app, or custom script to work with ModelSet. All you need is the base URL and your API Key.

## Configuration Summary

Every client needs these two settings:

| Setting | Value |
|---------|-------|
| **Base URL** | `https://ai.modelset.top` |
| **API Key** | Your ModelSet API Key (from [dashboard](https://modelset.top/login)) |

---

## Claude Code — API Setup & Configuration

[Claude Code](https://claude.ai/code) is Anthropic's AI-powered coding assistant for the terminal.

### Method 1: Environment Variables (Quick Setup)

```bash
export ANTHROPIC_BASE_URL="https://modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

Then run `claude` as usual.

### Method 2: Permanent Configuration

Add to your shell profile (`~/.bashrc`, `~/.zshrc`, or PowerShell profile):

```bash
export ANTHROPIC_BASE_URL="https://modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

This ensures Claude Code always routes through ModelSet.

---

## Cursor — AI Provider Setup

[Cursor](https://cursor.sh) is an AI-first code editor.

### OpenAI Compatible Provider Setup

1. Open **Cursor Settings** (Ctrl/Cmd + Shift + J)
2. Go to **AI Providers** → **OpenAI Compatible**
3. Set **API URL**: `https://ai.modelset.top`
4. Set **API Key**: Your ModelSet API Key
5. Choose your preferred model from the dropdown

### Quick Model Switching

Use the model selector in the chat panel to switch between Claude, GPT-4, and other available models.

---

## Codex — OpenAI Compatible Setup

OpenAI's Codex / ChatGPT desktop client.

### Configuration

1. Open Codex settings
2. Find **API Configuration**
3. Set **Base URL** to `https://ai.modelset.top`
4. Enter your **API Key**
5. Save and restart the application

---

## OpenClaw — API Configuration

[OpenClaw](https://github.com/openclaw/openclaw) is an open-source AI agent framework.

### Environment Variables

```bash
export OPENAI_BASE_URL="https://modelset.top"
export OPENAI_API_KEY="sk-xxxx"
```

### Config File (YAML)

Edit your OpenClaw configuration:

```yaml
provider: openai-compatible
base_url: https://ai.modelset.top
api_key: sk-xxxx
model: claude-sonnet-5
```

---

## Continue — VS Code & JetBrains Extension

[Continue](https://continue.dev) is an open-source AI coding assistant for VS Code and JetBrains IDEs.

### Installation

1. Install the **Continue** extension from your IDE marketplace
2. Open Continue settings

### Configuration (config.json)

Add to your Continue `config.json`:

```json
{
  "models": [
    {
      "title": "ModelSet - Claude Sonnet 5",
      "provider": "openai",
      "model": "claude-sonnet-5",
      "apiBase": "https://modelset.top",
      "apiKey": "sk-xxxx"
    }
  ]
}
```

---

## LobeChat — Web Chat Interface

[LobeChat](https://github.com/lobehub/lobe-chat) is an open-source AI chat interface.

### Setup Steps

1. Open **Settings** → **Model Provider**
2. Click **Add Provider** → **OpenAI Compatible**
3. Set **API Host**: `https://ai.modelset.top`
4. Set **API Key**: Your ModelSet API Key
5. Click **Check** to verify connectivity
6. Select your preferred model from the available list

---

## NextChat (ChatGPT-Next-Web) — Self-Hosted Chat UI

[NextChat](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) is a popular self-hosted chat interface.

### Setup Steps

1. Open **Settings**
2. Set **API URL** (接口地址): `https://ai.modelset.top`
3. Set **API Key** (API Key): Your ModelSet API Key
4. Set **Model**: `claude-sonnet-5` or your preferred model
5. Save and test the connection

---

## Other Compatible Clients

ModelSet works with **any client** that supports OpenAI or Anthropic API formats:

| Client | Format | Base URL Setting Location |
|--------|--------|--------------------------|
| **Cherry Studio** | OpenAI | Settings → Provider → Custom |
| **LibreChat** | OpenAI | `.env` → `OPENAI_REVERSE_PROXY` |
| **Dify** | OpenAI | Settings → Model → Custom API |
| **FastGPT** | OpenAI | Config → API URL |
| **LangChain** | OpenAI | `ChatOpenAI(openai_api_base=...)` |
| **Custom scripts** | OpenAI/Anthropic | Any HTTP client with base URL config |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **401 Unauthorized** | Double-check your API Key for typos or extra spaces |
| **Connection timeout** | Check network access to `ai.modelset.top`; configure proxy if needed |
| **Model not found** | Verify the model name matches our [supported list](../README.md#supported-models) |
| **Rate limited (429)** | Wait 60 seconds and retry; implement exponential backoff |
| **Insufficient balance (402)** | [Recharge your account](https://modelset.top/login) or use referral tokens |

Need more help? [Contact us](https://modelset.top/about).
