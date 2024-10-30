### [LIVE DEMO](https://slack-clone-ebon-phi.vercel.app/)

### [GITHUB REPO](https://github.com/lengdaxia/slack-clone)

## Intro

"Next.js で作られた Slack のようなアプリで、リアルタイムで複数人のチャットができます。シンプルなバックエンドデザインとクリーンなコード構造を使用しています。"

## App screenshot

![home-0](./screenshots/home-0.png)

## Features

- NextJS フレームワークを使用し、TailwindCSS と TypeScript（bun でパッケージ管理）
- Shadcn/ui コンポーネントで一貫した Web UI を実現
- フルスタックで、リアルタイムデータベースと Convex バックエンド API を使用
- 通常のパスワード認証や Github、Google の OAuth をサポート
- Quill Editor で Markdown の編集と表示に対応
- Auth、Workspace、Membership、Channel、Conversation の CRUD 機能
- チャンネルやメンバーの検索が可能
- 1 対 1 チャットやチャンネル内のグループチャットをサポート。画像送信、絵文字リアクション、スレッド内のメッセージへの返信が可能
- Eslint に対応し、0 エラーなっており
- Vercel にデプロイして、本番用のライブデモを提供

---

## Entity relation diagram

![schema](./screenshots/Slack-Schema.png)

## TODOs

1. 単体テストとエンドツーエンドテストのコードを追加して、テストカバレッジを向上させる
2. ダークモードをサポートする
3. モバイルと iPad 向けにレスポンシブ UI 対応
