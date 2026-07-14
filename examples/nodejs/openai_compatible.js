/**
 * ModelSet API Example — OpenAI Compatible Format (Node.js)
 *
 * Usage:
 *   npm install openai
 *   node openai_compatible.js
 */

import OpenAI from "openai";

// Configuration
const BASE_URL = "https://ai.modelset.top";
const API_KEY = process.env.ANTHROPIC_AUTH_TOKEN || "sk-xxxx";

// Initialize client (OpenAI SDK compatible)
const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: BASE_URL,
});

/**
 * Simple chat completion.
 */
async function chatSimple() {
  const response = await client.chat.completions.create({
    model: "claude-sonnet-5",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Explain async/await in 3 sentences." },
    ],
    temperature: 0.7,
    max_tokens: 512,
  });

  console.log(response.choices[0].message.content);
}

/**
 * Streaming chat completion.
 */
async function chatStream() {
  const stream = await client.chat.completions.create({
    model: "claude-sonnet-5",
    messages: [{ role: "user", content: "Write a haiku about JavaScript." }],
    temperature: 0.9,
    max_tokens: 256,
    stream: true,
  });

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) process.stdout.write(content);
  }
  console.log();
}

/**
 * Chat with tool/function calling.
 */
async function chatWithTools() {
  const response = await client.chat.completions.create({
    model: "claude-sonnet-5",
    messages: [{ role: "user", content: "What's the weather in Tokyo?" }],
    tools: [
      {
        type: "function",
        function: {
          name: "get_weather",
          description: "Get current weather for a city",
          parameters: {
            type: "object",
            properties: {
              city: {
                type: "string",
                description: "City name",
              },
            },
            required: ["city"],
          },
        },
      },
    ],
  });

  const message = response.choices[0].message;
  if (message.tool_calls) {
    for (const toolCall of message.tool_calls) {
      console.log(`Tool: ${toolCall.function.name}`);
      console.log(`Args: ${toolCall.function.arguments}`);
    }
  }
}

// Run examples
async function main() {
  console.log("=== Simple Chat ===");
  await chatSimple();

  console.log("\n=== Streaming Chat ===");
  await chatStream();

  console.log("\n=== Tool Calling ===");
  await chatWithTools();
}

main().catch(console.error);
