# Quick Start Guide

Get up and running with ModelSet in under 2 minutes.

## 1. Register & Get Your API Key

1. Visit [ai.modelset.top/login](https://ai.modelset.top/login)
2. Complete registration
3. Copy your API Key from the dashboard

## 2. Configure Your Environment

### Option A: Environment Variables (Recommended)

```bash
# For Anthropic-compatible clients
export ANTHROPIC_BASE_URL="https://ai.modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

```bash
# For OpenAI-compatible clients
export OPENAI_BASE_URL="https://ai.modelset.top"
export OPENAI_API_KEY="sk-xxxx"
```

### Option B: `.env` File

Create a `.env` file in your project root:

```env
ANTHROPIC_BASE_URL=https://ai.modelset.top
ANTHROPIC_AUTH_TOKEN=sk-xxxx
```

### Option C: Client Settings

Most clients support custom base URL in their settings panel. Simply set:

- **Base URL**: `https://ai.modelset.top`
- **API Key**: Your ModelSet API Key

## 3. Verify Your Setup

Test with a simple curl command:

```bash
curl https://ai.modelset.top/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "claude-sonnet-5",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

You should receive a valid JSON response from the model.

## 4. Configure Your Client

### Claude Code

```bash
export ANTHROPIC_BASE_URL="https://ai.modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
claude
```

### Cursor

1. Open **Settings** → **AI** → **OpenAI Compatible**
2. Set **API URL** to `https://ai.modelset.top`
3. Enter your API Key
4. Select your preferred model

### Codex

Same as Cursor — configure OpenAI compatible provider with the base URL above.

### Continue (VS Code / JetBrains)

1. Open Continue settings
2. Add a new provider with:
   - **URL**: `https://ai.modelset.top`
   - **API Key**: Your ModelSet API Key
   - **Model**: `claude-sonnet-5` or your preferred model

### LobeChat

1. Go to **Settings** → **Model Provider**
2. Add **OpenAI Compatible** provider
3. Set API Host to `https://ai.modelset.top`
4. Enter your API Key

### NextChat

1. Open **Settings**
2. Set **API URL** to `https://ai.modelset.top`
3. Set **API Key** to your ModelSet API Key

## Need Help?

- Check the [FAQ](faq.md) for common issues
- Visit our [Help Center](https://ai.modelset.top/about)
- Join our [Community Group](https://ai.modelset.top/about)
