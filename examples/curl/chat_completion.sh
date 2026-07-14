#!/usr/bin/env bash
# ModelSet API Example — cURL (OpenAI Compatible Format)
#
# Usage:
#   chmod +x chat_completion.sh
#   ./chat_completion.sh
#
# Replace sk-xxxx with your actual API Key.

API_KEY="sk-xxxx"
BASE_URL="https://ai.modelset.top"

echo "=== Simple Chat Completion ==="
curl -s "${BASE_URL}/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "claude-sonnet-5",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "What is the meaning of life in 2 sentences?"}
    ],
    "temperature": 0.7,
    "max_tokens": 256
  }' | python3 -m json.tool 2>/dev/null || cat

echo ""
echo "=== Streaming Chat Completion ==="
curl -s -N "${BASE_URL}/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -H "Accept: text/event-stream" \
  -d '{
    "model": "claude-haiku-4.5",
    "messages": [
      {"role": "user", "content": "Tell me a fun fact about programming."}
    ],
    "max_tokens": 128,
    "stream": true
  }'

echo ""
