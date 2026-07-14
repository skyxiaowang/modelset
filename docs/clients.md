# Client Setup Guide

Configure your favorite AI coding tool to work with ModelSet.

## Configuration Summary

All clients need two things:

| Setting | Value |
|---------|-------|
| **Base URL** | `https://ai.modelset.top` |
| **API Key** | Your ModelSet API Key |

## Claude Code

### Environment Variables

```bash
export ANTHROPIC_BASE_URL="https://ai.modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

Then simply run `claude`.

### Permanent Config

Add to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
export ANTHROPIC_BASE_URL="https://ai.modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

## Cursor

### OpenAI Compatible Provider

1. Open **Cursor Settings** (Ctrl/Cmd + Shift + J)
2. Go to **AI Providers** → **OpenAI Compatible**
3. Set **API URL**: `https://ai.modelset.top`
4. Set **API Key**: Your ModelSet API Key
5. Choose your preferred model from the dropdown

### Quick Switch

Use the model selector in the chat panel to switch between available models.

## Codex

### Configuration

1. Open Codex settings
2. Find **API Configuration**
3. Set **Base URL** to `https://ai.modelset.top`
4. Enter your **API Key**
5. Save and restart

## OpenClaw

### Environment Variables

```bash
export OPENAI_BASE_URL="https://ai.modelset.top"
export OPENAI_API_KEY="sk-xxxx"
```

### Config File

Edit your OpenClaw config:

```yaml
provider: openai-compatible
base_url: https://ai.modelset.top
api_key: sk-xxxx
model: claude-sonnet-5
```

## Continue (VS Code / JetBrains)

### Installation

1. Install the **Continue** extension from your IDE marketplace
2. Open Continue settings

### Configuration

Add to your `config.json`:

```json
{
  "models": [
    {
      "title": "ModelSet - Claude Sonnet 5",
      "provider": "openai",
      "model": "claude-sonnet-5",
      "apiBase": "https://ai.modelset.top",
      "apiKey": "sk-xxxx"
    }
  ]
}
```

## LobeChat

### Setup

1. Open **Settings** → **Model Provider**
2. Click **Add Provider** → **OpenAI Compatible**
3. Set **API Host**: `https://ai.modelset.top`
4. Set **API Key**: Your ModelSet API Key
5. Click **Check** to verify connectivity

## NextChat (ChatGPT-Next-Web)

### Setup

1. Open **Settings**
2. Set **API URL** (接口地址): `https://ai.modelset.top`
3. Set **API Key** (API Key): Your ModelSet API Key
4. Set **Model**: `claude-sonnet-5` or your preferred model

## Other Clients

ModelSet is compatible with **any client** that supports:

- OpenAI chat completions format (`/v1/chat/completions`)
- Anthropic messages format (`/v1/messages`)

For clients not listed above, use the same base URL and API key configuration pattern.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 401 Unauthorized | Double-check your API Key for typos |
| Connection timeout | Check network access to `ai.modelset.top` |
| Model not found | Verify the model name matches our [supported list](../README.md#supported-models) |
| Rate limited | Wait 60 seconds and retry |

Need more help? [Contact us](https://ai.modelset.top/about).
