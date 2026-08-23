# GitHub Pages 发布说明

本项目是纯静态站点，可以免费使用 GitHub Pages 发布。

## 首次发布

1. 在 GitHub 新建一个公开仓库，例如 `linear-algebra-bridge`。
2. 在本目录执行：

```powershell
git init
git add .
git commit -m "Prepare Linear Algebra Bridge for GitHub Pages"
git branch -M main
git remote add origin https://github.com/<你的用户名>/linear-algebra-bridge.git
git push -u origin main
```

3. 等待 Actions 中的 `Deploy to GitHub Pages` 完成。
4. 在仓库 Settings → Pages 中确认 Source 为 **GitHub Actions**。

网址通常是：

`https://<你的用户名>.github.io/linear-algebra-bridge/`

## 本地预览

```powershell
$env:PORT="3002"
node server.mjs
```

然后打开 <http://localhost:3002/>。
