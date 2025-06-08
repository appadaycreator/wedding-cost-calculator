# ウェディング費用計算機

結婚式の費用を簡単に計算できるPWA（Progressive Web App）アプリケーションです。

## 機能

- 結婚式の費用を項目ごとに計算
- オフラインでも使用可能（PWA対応）
- モバイルフレンドリーなデザイン
- レスポンシブ対応

## 技術スタック

- HTML5
- CSS3
- JavaScript
- PWA (Progressive Web App)
- Service Worker

## 開発環境のセットアップ

1. リポジトリのクローン
```bash
git clone https://github.com/appadaycreator/wedding-cost-calculator.git
cd wedding-cost-calculator
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
# ローカルサーバーを起動（例：Pythonの場合）
python -m http.server 8000
```

## デプロイ

このプロジェクトはGitHub Pagesでホストされています。
https://appadaycreator.github.io/wedding-cost-calculator/

## プロジェクト構造

```
wedding-cost-calculator/
├── index.html          # メインページ
├── manifest.json       # PWAマニフェスト
├── sw.js              # Service Worker
├── favicon.ico        # ファビコン
├── icon-192.png       # PWAアイコン（小）
├── icon-512.png       # PWAアイコン（大）
├── sitemap.xml        # サイトマップ
├── robots.txt         # 検索エンジン用設定
├── privacy.html       # プライバシーポリシー
├── disclaimer.html    # 免責事項
└── contact.html       # お問い合わせ
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

## 貢献

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## お問い合わせ

ご質問やご提案がある場合は、[お問い合わせフォーム](contact.html)からお気軽にご連絡ください。