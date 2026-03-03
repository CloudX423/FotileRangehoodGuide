# GitHub Desktop 部署指南

## 使用 GitHub Desktop 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 `+` 号 → `New repository`
3. 填写仓库信息：
   - **Repository name**: `fangtai-range-hood-selector`（建议使用英文名）
   - **Description**: 方太油烟机选型助手
   - **Public/Private**: 根据需要选择（Public 免费）
4. 点击 `Create repository` 按钮

### 第二步：配置 vite.config.ts

打开项目文件夹中的 `vite.config.ts`，修改为：

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fangtai-range-hood-selector/',  // ⚠️ 改为你的仓库名
  server: {
    port: 5000,
    host: '0.0.0.0',
    hmr: {
      overlay: true,
      path: '/hot/vite-hmr',
      port: 6000,
      clientPort: 443,
      timeout: 30000,
    },
  },
  preview: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
```

**重要**：`base` 的值必须是 `/你的仓库名/`（前后都要有斜杠）

### 第三步：使用 GitHub Desktop 推送代码

1. **打开 GitHub Desktop**
2. **添加本地仓库**：
   - 点击 `File` → `Add Local Repository...`
   - 选择这个项目的文件夹
   - 点击 `Add`
3. **提交更改**：
   - 在左侧的 `Changes` 标签页中，你会看到所有更改的文件
   - 在底部填写提交信息（如："Initial commit"）
   - 点击 `Commit to main`
4. **发布到 GitHub**：
   - 点击顶部菜单 `Repository` → `Publish repository...`
   - 填写仓库名（和第一步创建的一致）
   - 选择 `Private` 或 `Public`
   - 点击 `Publish repository`

### 第四步：部署到 GitHub Pages

**方法 A：使用命令行（推荐）**

1. 打开终端（Terminal）
2. 进入项目目录：
   ```bash
   cd /path/to/your/project
   ```
3. 运行部署命令：
   ```bash
   pnpm run deploy
   ```
4. 等待部署完成（可能需要几分钟）

**方法 B：使用 GitHub Desktop（手动）**

1. 在 GitHub Desktop 中，切换到 `main` 分支
2. 打开终端（菜单：`Repository` → `Open in Terminal`）
3. 运行部署命令：
   ```bash
   pnpm run deploy
   ```

### 第五步：启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 `Settings` 标签页
3. 在左侧菜单找到 `Pages`
4. 在 `Build and deployment` 部分：
   - `Source` 选择：`Deploy from a branch`
   - `Branch` 选择：
     - 分支：`gh-pages`
     - 目录：`/ (root)`
5. 点击 `Save` 按钮

### 第六步：访问你的网站

等待几分钟后（通常 1-5 分钟），访问：

```
https://你的GitHub用户名.github.io/仓库名/
```

例如：`https://zhangsan.github.io/fangtai-range-hood-selector/`

---

## 常见问题

### Q1: 提示 "command not found: pnpm"
**解决方法**：需要先安装 pnpm
```bash
npm install -g pnpm
```

### Q2: 部署后页面空白
**原因**：`vite.config.ts` 中的 `base` 配置不正确
**解决方法**：确保 `base` 的值是 `/你的仓库名/`

### Q3: 图片无法显示
**原因**：路径问题
**解决方法**：确保图片路径是 `/xxx.jpg`（以斜杠开头）

### Q4: 如何更新网站
**方法**：
1. 修改代码
2. 在 GitHub Desktop 中提交更改
3. 运行 `pnpm run deploy`
4. 等待 GitHub Pages 自动更新

### Q5: 想使用自己的域名
**方法**：
1. 在 GitHub 仓库的 `Settings` → `Pages` → `Custom domain`
2. 输入你的域名
3. 按照提示配置 DNS

---

## 快速命令参考

```bash
# 安装依赖
pnpm install

# 本地运行
pnpm run dev

# 构建项目
pnpm run build

# 部署到 GitHub Pages
pnpm run deploy

# 类型检查
pnpm run ts-check
```

---

## 其他部署平台

### Vercel（推荐，更简单）

1. 登录 [vercel.com](https://vercel.com)
2. 点击 `Add New...` → `Project`
3. 导入 GitHub 仓库
4. 点击 `Deploy`
5. 几秒钟后即可访问！

**优点**：
- ✅ 更快
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署（推送代码后自动更新）

### Netlify

1. 登录 [netlify.com](https://netlify.com)
2. 点击 `Add new site` → `Import an existing project`
3. 导入 GitHub 仓库
4. 配置构建设置：
   - Build command: `pnpm run build`
   - Publish directory: `dist`
5. 点击 `Deploy site`

---

需要帮助？查看 [GitHub Pages 官方文档](https://docs.github.com/pages)
