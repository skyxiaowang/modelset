# ModelSet — AI 模型 API 网关

<div align="center">

[🇺🇸 English](README.md) · [🇨🇳 中文版](README_CN.md)

</div>

---

<div align="center">

### 让世界上每一个人都能低价用上最先进的模型，推进模型平权

**一个 API Key，畅享全球顶尖 AI 模型。最低价、最稳定。**

[![99.9% 可用性](https://img.shields.io/badge/可用性-99.9%25-3ea87a?style=for-the-badge)](https://modelset.top)
[![50+ 模型](https://img.shields.io/badge/模型-50%2B-c4755a?style=for-the-badge)](https://modelset.top)
[![100K+ 开发者](https://img.shields.io/badge/开发者-100K%2B-2a2a2a?style=for-the-badge)](https://modelset.top)

[🚀 免费获取 API Key](https://modelset.top/login) · [📖 文档](docs/quick-start.md) · [💬 社区](https://modelset.top/about) · [📄 FAQ](docs/faq.md)

</div>

---

### ModelSet 是什么？

ModelSet 是一个 **AI 模型 API 网关/中转服务**，聚合全球最强 AI 模型（**Anthropic Claude**、**OpenAI GPT-4**、**Google Gemini** 等），以统一接口、最低价、最稳定的方式为开发者提供 API 服务。

- **一个 API Key** 访问 50+ 模型
- **全网最低价** — 按量付费，无隐藏加价
- **99.9% 可用性** — 多地区冗余，自动故障切换
- **<100ms 响应** — 智能全球路由 + 边缘缓存
- **兼容 OpenAI / Anthropic 格式** — 一行配置切换，无需改代码

### 为什么选择 ModelSet？

#### 与直接使用官方 API 对比

| | 官方 API | ModelSet |
|---|---|---|
| **API Key** | 每个供应商一个 | **一个全搞定** |
| **计费** | 多个账户，不同货币 | **统一余额，统一账单** |
| **价格** | 标准定价 | **批量转发，更低价格** |
| **集成** | 各供应商格式不同 | **统一 OpenAI / Anthropic 格式** |
| **稳定性** | 单地区，无故障切换 | **多地区，自动故障切换** |

### 快速入门

#### 第一步：获取 API Key

访问 [modelset.top/login](https://modelset.top/login) 注册并获取 API Key。免费注册，无需信用卡。

#### 第二步：配置环境变量

```bash
# Anthropic 兼容客户端（Claude Code 等）
export ANTHROPIC_BASE_URL="https://ai.modelset.top"
export ANTHROPIC_AUTH_TOKEN="sk-xxxx"
```

```bash
# OpenAI 兼容客户端（Cursor、Codex 等）
export OPENAI_BASE_URL="https://ai.modelset.top"
export OPENAI_API_KEY="sk-xxxx"
```

#### 第三步：开始使用

```bash
claude
```

就这么简单。详细配置指南见 [docs/quick-start.md](docs/quick-start.md)。

### 核心优势

| 优势 | 说明 |
|------|------|
| ⚡ **极致速度** | <100ms 平均响应，6 个全球边缘节点，智能模型路由 |
| 💰 **超低价格** | 批量官方转发，行业最低价，cc-max 分组仅 2 倍率 |
| 🛡️ **稳定可靠** | 99.9% 可用性，多链路冗余，跨区域自动故障切换 |
| 🌍 **全球覆盖** | 50+ AI 模型，来自 Anthropic、OpenAI、Google、DeepSeek、阿里 — 一个统一 API |
| 🔧 **开发者友好** | 兼容 OpenAI / Anthropic API 格式 — 即插即用，无需改代码 |

### 我们只有一个活动

<div align="center">

### 🎉 邀请新用户 = 永久免费用

</div>

我们**只有一个活动**：新用户注册即送 **500 万额度**，每邀请一个新用户再送 **500 万额度**。我们鼓励邀请制，这样你就可以**永久地免费使用所有模型**。

| 邀请人 | 新用户 |
|:------:|:------:|
| **5,000,000** tokens | **5,000,000** tokens |

- 双方同时到账，邀请数量**无上限**
- 多邀多得，**永久有效**
- 持续邀请 = **永久免费使用所有满血模型**

#### 💬 官方群兑换码

加入官方服务群，我们会**不定时放出兑换码**，可直接兑换额度使用。关注群消息，不错过每一次福利。

👉 [加入官方服务群 →](https://modelset.top/about)

### 没有套路

<div align="center">

**没有订阅、没有套餐、没有会员等级、没有乱七八糟的计费方式。**

**随充随用，没有隐藏收费，按量付费，用多少充多少。**

**告别额度恐慌。**

</div>

| 我们**不做** | 我们**承诺** |
|:---:|:---|
| ❌ 不订阅 | ✅ 按量付费，余额永久有效 |
| ❌ 不套餐 | ✅ 价格最低，无隐藏加价 |
| ❌ 不分级 | ✅ 所有用户同等待遇 |
| ❌ 无隐藏收费 | ✅ 明码标价，无最低消费 |

**我们只有满血模型，拒绝掺假，全部官转。**

### 支持的模型

#### Anthropic Claude ✅（已开通）

| 模型 | 模型 ID | 说明 |
|------|---------|------|
| Claude Fable 5 | `claude-fable-5` | 创意与推理融合，多模态与长上下文 |
| Claude Sonnet 5 | `claude-sonnet-5` | 最新旗舰编码模型，超越 Sonnet 4 |
| Claude Sonnet 4.6 | `claude-sonnet-4.6` | 增强版 Sonnet，编码与推理全面提升 |
| Claude Sonnet 4.5 | `claude-sonnet-4.5` | 经典 Sonnet，速度与质量平衡 |
| Claude Opus 4.8 | `claude-opus-4.8` | 最强推理旗舰，复杂科学计算与数学 |
| Claude Opus 4.7 | `claude-opus-4.7` | 上一代推理旗舰，深度分析 |
| Claude Opus 4.6 | `claude-opus-4.6` | Opus 进化版，深度与效率平衡 |
| Claude Opus 4.5 | `claude-opus-4.5` | 经典 Opus，深度分析与研究 |
| Claude Haiku 4.5 | `claude-haiku-4.5` | 极速轻量模型，实时响应 |

#### OpenAI GPT 🔄（接入中）

| 模型 | 模型 ID | 说明 |
|------|---------|------|
| GPT-4.1 | `gpt-4.1` | 旗舰多模态，指令遵循 |
| o3 | `o3` | 深度推理，数学与逻辑 |
| GPT-4.1 Mini | `gpt-4.1-mini` | 轻量高效，高吞吐 |
| DALL·E 3 | `dall-e-3` | 文生图 |

#### Google Gemini 🔄（接入中）

| 模型 | 模型 ID | 说明 |
|------|---------|------|
| Gemini 2.5 Pro | `gemini-2.5-pro` | 超长上下文，文档理解 |
| Gemini 2.5 Flash | `gemini-2.5-flash` | 极速推理，低延迟 |

#### 其他供应商 🔄（接入中）

| 模型 | 模型 ID | 供应商 | 说明 |
|------|---------|--------|------|
| DeepSeek V3 | `deepseek-v3` | DeepSeek | 中文优化，创作与编码 |
| Qwen 2.5 Max | `qwen-2.5-max` | 阿里 | 多语言，代码生成与分析 |
| Mistral Large 2 | `mistral-large-2` | Mistral | 欧洲最强，多语言 |

### 计费原则

#### 四不原则

- **不订阅** — 没有月费/年费，不用了就停，没有自动扣费
- **不套餐** — 没有固定档位，充值金额完全自由
- **不分级** — 没有会员等级，所有用户同等待遇
- **无隐藏收费** — 明码标价，无隐藏加价，无最低消费门槛

#### 四承诺

- **按量付费** — 随充随用，用多少充多少，余额永久有效
- **价格最低** — 全网最低价，不做任何隐藏加价
- **服务最稳** — 全官方转发，99.9% 可用性保障
- **满血模型** — 全部官转，拒绝掺假、缩水、替换

#### 邀请奖励

| 你获得 | 朋友获得 |
|:------:|:--------:|
| **5,000,000** tokens | **5,000,000** tokens |

双方同时到账。邀请无上限。永久有效。

### 文档

- [📖 快速入门指南](docs/quick-start.md) — 注册、配置、首次 API 调用
- [📡 API 参考](docs/api-reference.md) — OpenAI & Anthropic 兼容 API 规范
- [🔧 客户端配置](docs/clients.md) — Claude Code、Cursor、Codex、Continue 等配置
- [❓ FAQ](docs/faq.md) — 常见问题解答

### 支持的客户端

| 客户端 | API 格式 | 配置方式 |
|--------|----------|----------|
| **Claude Code** | Anthropic | 设置 `ANTHROPIC_BASE_URL=https://ai.modelset.top` |
| **Cursor** | OpenAI | 设置 → AI → OpenAI 兼容 → 设置 base URL |
| **Codex** | OpenAI | OpenAI API 设置 → 自定义 base URL |
| **OpenClaw** | OpenAI | `OPENAI_BASE_URL` 环境变量 |
| **Continue**（VS Code / JetBrains）| OpenAI | `config.json` → `apiBase` |
| **LobeChat** | OpenAI | 设置 → 模型提供商 → OpenAI 兼容 |
| **NextChat** | OpenAI | 设置 → API 地址 + API Key |

### 社区

- 💬 [官方服务群](https://modelset.top/about) — 获取帮助、分享反馈、兑换码
- 🐛 [GitHub Issues](https://github.com/skyxiaowang/modelset/issues) — 报告 Bug、建议功能
- 📝 [帮助中心](https://modelset.top/about) — 教程和指南
- 🟢 **微信** — 扫描上方二维码加入官方服务群

<div align="center">

<img src="assets/wechat-qr.jpg" alt="WeChat QR Code" width="260" />

</div>

---

<div align="center">

**准备好了吗？** [免费获取 API Key →](https://modelset.top/login)

© 2026 ModelSet. All rights reserved.

</div>
