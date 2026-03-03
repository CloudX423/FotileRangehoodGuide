# 方太油烟机选型助手

基于 Vite + TypeScript 的油烟机选型问卷应用。

## 功能特点

- 智能问答引导，帮助用户选择适合的油烟机
- 支持图片和视频混排的产品展示
- 响应式设计，完美适配手机端
- 海报弹窗功能，支持多张图片轮播
- 随机宣传语展示

## 本地运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 访问 http://localhost:5000
```

## 构建和部署

### 方法一：使用 GitHub Desktop 部署到 GitHub Pages（推荐）

1. **创建 GitHub 仓库**
   - 登录 GitHub
   - 点击右上角 `+` → `New repository`
   - 填写仓库名称（如：`fangtai-range-hood-selector`）
   - 选择 `Public` 或 `Private`
   - 点击 `Create repository`

2. **配置 vite.config.ts**
   - 打开 `vite.config.ts`
   - 添加 `base` 配置：
   ```typescript
   export default defineConfig({
     base: '/fangtai-range-hood-selector/',  // 改为你的仓库名
     // ... 其他配置
   });
   ```

3. **使用 GitHub Desktop 推送代码**
   - 打开 GitHub Desktop
   - 点击 `File` → `Add Local Repository`
   - 选择项目文件夹
   - 填写提交信息（如："Initial commit"）
   - 点击 `Publish repository`
   - 选择刚才创建的 GitHub 仓库
   - 点击 `Publish`

4. **部署到 GitHub Pages**
   ```bash
   pnpm run deploy
   ```
   
   这会自动构建项目并将构建产物推送到 `gh-pages` 分支。

5. **启用 GitHub Pages**
   - 进入 GitHub 仓库
   - 点击 `Settings` → `Pages`
   - `Source` 选择 `Deploy from a branch`
   - `Branch` 选择 `gh-pages`，`/ (root)` 目录
   - 点击 `Save`
   
   等待几分钟后，访问：`https://YOUR_USERNAME.github.io/fangtai-range-hood-selector/`

### 方法二：使用 GitHub Actions（自动化）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

然后在 GitHub 仓库的 `Settings` → `Pages` → `Source` 选择 `GitHub Actions`。

### 方法三：部署到 Vercel（最简单）

1. 登录 [vercel.com](https://vercel.com)
2. 点击 `Add New...` → `Project`
3. 导入你的 GitHub 仓库
4. 点击 `Deploy`

几秒钟后即可访问：`https://your-project.vercel.app`

## 项目结构

```
.
├── src/
│   ├── main.ts        # 主逻辑
│   ├── data.ts        # 问答和产品数据
│   ├── types.ts       # 类型定义
│   └── components.ts  # UI 组件
├── public/            # 静态资源（图片、视频）
├── package.json       # 项目配置
├── vite.config.ts     # Vite 配置
└── tsconfig.json      # TypeScript 配置
```

## 技术栈

- Vite
- TypeScript 5
- Tailwind CSS 3

## 许可证

MIT
