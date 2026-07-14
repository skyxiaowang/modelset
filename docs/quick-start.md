# Quick Start — Get Claude, GPT-4, Gemini API Access in Minutes

Get up and running with ModelSet — the unified AI model API gateway — in under 2 minutes.

## 1. Register & Get Your API Key

1. Visit [modelset.top/login](https://modelset.top/login)
2. Complete registration (free, no credit card required)
3. Copy your API Key from the dashboard

## 2. Configure Your Environment

### Option A: Environment Variables (Recommended for Claude Code, terminal usage)

```bash
# For Anthropic-compatible clients (Claude Code, etc.)
export ANTHROPIC_BASE_URL="https://modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

```bash
# For OpenAI-compatible clients (Cursor, Codex, etc.)
export OPENAI_BASE_URL="https://modelset.top"
export OPENAI_API_KEY="sk-xxxx"
```

### Option B: `.env` File (Recommended for project-based development)

Create a `.env` file in your project root:

```env
ANTHROPIC_BASE_URL=https://ai.modelset.top
ANTHROPIC_AUTH_TOKEN=sk-xxxx
```

### Option C: Client Settings (Recommended for GUI applications)

Most AI coding clients support custom base URL in their settings panel. Simply set:

- **Base URL**: `https://ai.modelset.top`
- **API Key**: Your ModelSet API Key

## 3. Verify Your Setup

Test with a simple curl command to confirm the API is working:

```bash
curl https://ai.modelset.top/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxx" \
  -d '{
    "model": "claude-sonnet-5",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

You should receive a valid JSON response from the Claude model.

## 4. Configure Your AI Coding Client

### Claude Code API Setup

```bash
export ANTHROPIC_BASE_URL="https://modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
claude
```

### Cursor AI Provider Setup

1. Open **Settings** → **AI** → **OpenAI Compatible**
2. Set **API URL** to `https://ai.modelset.top`
3. Enter your API Key
4. Select your preferred model (Claude, GPT-4, etc.)

### Codex Setup

Same as Cursor — configure OpenAI compatible provider with the base URL above.

### Continue (VS Code / JetBrains) Setup

1. Open Continue settings
2. Add a new provider with:
   - **URL**: `https://ai.modelset.top`
   - **API Key**: Your ModelSet API Key
   - **Model**: `claude-sonnet-5` or your preferred model

### LobeChat Setup

1. Go to **Settings** → **Model Provider**
2. Add **OpenAI Compatible** provider
3. Set API Host to `https://ai.modelset.top`
4. Enter your API Key

### NextChat (ChatGPT-Next-Web) Setup

1. Open **Settings**
2. Set **API URL** to `https://ai.modelset.top`
3. Set **API Key** to your ModelSet API Key

## Next Steps

- Read the [API Reference](api-reference.md) for full endpoint documentation
- Check [Client Setup](clients.md) for detailed configuration guides
- Browse [code examples](../examples/) in Python, Node.js, and cURL

## Need Help?

- Check the [FAQ](faq.md) for common issues
- Visit our [Help Center](https://modelset.top/about)
- Join our [Community Group](https://modelset.top/about)
