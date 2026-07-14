# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 项目状态

已完成 ModelSet 官网落地页的开发（单页应用）。

### 项目结构
```
ai-hub/
├── index.html          # 主页面（全部代码：HTML + CSS + JS 内联）
├── README.md           # GitHub 仓库主文档（产品推广 + 开发者文档）
├── CLAUDE.md           # 本文件
├── LICENSE             # MIT 许可证
├── SECURITY.md         # 安全政策
├── CONTRIBUTING.md     # 贡献指南
├── CODE_OF_CONDUCT.md  # 行为准则
├── .gitignore          # Git 忽略规则
├── code_20260528.html  # 旧版本备份
├── ui/                 # 参考截图
│   ├── api-super-nb-me.png
│   ├── llm-waytoagi-com.png
│   └── newapi首页.png
├── assets/             # 静态资源
│   ├── logo.svg
│   ├── badge-uptime.svg
│   └── README.md        # 截图占位说明
├── docs/               # 开发者文档
│   ├── quick-start.md   # 快速入门指南
│   ├── api-reference.md # API 参考文档
│   ├── clients.md       # 客户端配置指南
│   └── faq.md           # 常见问题
├── examples/           # 代码示例
│   ├── python/openai_compatible.py
│   ├── nodejs/openai_compatible.js
│   └── curl/chat_completion.sh
├── .github/            # GitHub 社区配置
│   ├── FUNDING.yml
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
└── index.html.bak      # 备份
```

### 项目简介

**品牌名称**：ModelSet  
**网站主题**：全球顶尖 AI 模型中转站，聚合全球最强模型（Anthropic、OpenAI、Google 等），以最低价、最稳定的方式为开发者提供 API 服务。  
**实际网址**：https://modelset.top（前端页面）  
**登录入口**：https://modelset.top/login

### 页面结构与功能区块

1. **导航栏 (Nav)** — 固定顶部，毛玻璃效果，滚动隐藏/显示动画，移动端汉堡菜单
2. **Hero 区** — 非对称双栏布局（左文案 + 右终端模拟），带 aurora 光球装饰
3. **数据统计栏 (Stats)** — 4 项关键指标：100K+ 开发者、50+ 模型、99.9% 可用性、<100ms 延迟
4. **核心优势 (Features)** — zigzag 布局：宽卡（极致速度 + 指标面板）+ 3 卡（稳定可靠、超低价格、全球覆盖、开发者友好）
5. **模型矩阵 (Models)** — 可筛选 Tab（全部/Anthropic/OpenAI/Google/国产），14 款模型卡片（已开通 vs 接入中标签），场景标签，底部厂商汇总
6. **计费原则 (Pricing)** — "四不"（不订阅、不套餐、不分级、无隐藏收费）+ "四承诺"（按量付费、价格最低、服务最稳、满血模型）
7. **邀请奖励 (Referral)** — 500 万/50 万额度分润展示卡、免费永久承诺、三步引导、官方群兑换码入口
8. **FAQ** — 5 个手风琴折叠问题
9. **底部 CTA** — 渐变背景行动号召
10. **页脚 (Footer)** — 品牌介绍、快捷链接、联系方式

### 设计系统

**色彩**：
- 主题色：Coral `#c4755a`（非传统 AI 紫色）
- 背景：白色 `#ffffff`，浅灰 `#f8f8fa`
- 文字：主 `#111111`，次 `#666666`，三级 `#999999`
- 成功色：`#3ea87a`
- 渐变：`linear-gradient(135deg, #d4956e, #c4755a)`

**背景**：白色底 + 60px 网格线 `rgba(0,0,0,0.02)` 纹理

**字体**：
- 主：Inter + Noto Sans SC（sans-serif）
- 等宽：JetBrains Mono（终端/代码区域）
- CDN：Google Fonts

**圆角**：卡片 12/16/20px 三级，按钮 12px，标签全圆角

**图标**：内联 SVG（stroke-width 统一 2 或 2.5），无外部图标库

**响应式**：三断点 — 768px（平板）、480px（手机），移动端汉堡菜单 + 单栏布局

**动画**：
- 滚动渐入（IntersectionObserver，0.6s cubic-bezier）
- Hero 光泽扫过动画（4.5s 循环）
- 导航栏滚动隐藏/显示（300ms）
- 按钮 :active 物理反馈（scale 0.98）
- Terminal 光球 + 底部辉光
- `prefers-reduced-motion` 静态回退

### 关键交互

- 终端区域 "复制" 按钮 → 复制环境变量配置 → Toast 提示
- 模型 Tab 筛选 → 按厂牌过滤显示
- FAQ 手风琴 → 同时只展开一项
- 导航栏 → 向下滚动隐藏，向上滚动显示
- 所有锚点链接 → 平滑滚动（考虑固定导航高度 72px 偏移）

### 开发/运行方式
- 直接在浏览器中打开 `index.html` 即可预览
- 无需构建工具，所有依赖通过 CDN 加载
- 单文件架构（HTML + CSS + JS 全部内联）
