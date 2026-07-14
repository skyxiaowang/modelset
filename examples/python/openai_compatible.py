"""
ModelSet API Example — OpenAI Compatible Format (Python)

Usage:
    pip install openai
    python openai_compatible.py
"""

import os
from openai import OpenAI

# Configuration
BASE_URL = "https://ai.modelset.top"
API_KEY = os.environ.get("ANTHROPIC_AUTH_TOKEN", "sk-xxxx")

# Initialize client (OpenAI SDK compatible)
client = OpenAI(
    api_key=API_KEY,
    base_url=BASE_URL,
)


def chat_simple():
    """Simple chat completion."""
    response = client.chat.completions.create(
        model="claude-sonnet-5",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Explain Python decorators in 3 sentences."},
        ],
        temperature=0.7,
        max_tokens=512,
    )
    print(response.choices[0].message.content)


def chat_stream():
    """Streaming chat completion."""
    stream = client.chat.completions.create(
        model="claude-sonnet-5",
        messages=[
            {"role": "user", "content": "Write a haiku about coding."},
        ],
        temperature=0.9,
        max_tokens=256,
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="", flush=True)
    print()


def chat_with_tools():
    """Chat with tool/function calling."""
    response = client.chat.completions.create(
        model="claude-sonnet-5",
        messages=[
            {"role": "user", "content": "What's the weather in Tokyo?"},
        ],
        tools=[
            {
                "type": "function",
                "function": {
                    "name": "get_weather",
                    "description": "Get current weather for a city",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "city": {
                                "type": "string",
                                "description": "City name",
                            },
                        },
                        "required": ["city"],
                    },
                },
            }
        ],
    )
    message = response.choices[0].message
    if message.tool_calls:
        for tool_call in message.tool_calls:
            print(f"Tool: {tool_call.function.name}")
            print(f"Args: {tool_call.function.arguments}")


if __name__ == "__main__":
    print("=== Simple Chat ===")
    chat_simple()

    print("\n=== Streaming Chat ===")
    chat_stream()

    print("\n=== Tool Calling ===")
    chat_with_tools()
