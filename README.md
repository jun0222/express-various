## GraphQL と sqlite3 導入

```bash
yarn add express graphql express-graphql sqlite3
yarn add -D typescript ts-node @types/node @types/express @types/graphql @types/sqlite3
```

- db.ts 作成
- schema.ts 作成
- resolvers.ts 作成
- routes/index.ts 修正

yarn dev してからクエリを叩いて動作確認

```gql
{
  user(id: 1) {
    id
    name
    email
  }
}
```

## typescript 化

### 依存関係インストール

```bash
yarn add --dev typescript @types/node && yarn tsc --init && yarn add --dev ts-node && yarn add --dev @types/express && yarn add --dev @types/cookie-parser @types/morgan
```

### package.json 修正

```json
"scripts": {
"start": "ts-node routes/index.ts"
},
```

### ファイル拡張子変更

- js -> ts で拡張子変更
- ともなって内容も変更。

### 参考

- [zenn](https://zenn.dev/sungvalley/articles/4de76c12826709)

## コミットメッセージ

- build: ビルドシステムや外部依存関係の変更
- chore: 雑用。ビルドプロセスや補助ツールの変更
- ci: CI の設定やスクリプトの変更
- docs: ドキュメントのみの変更
- feat: 新機能の追加
- fix: バグ修正
- perf: パフォーマンスを向上させるコードの変更
- refactor: リファクタリング
- revert: コードの変更を取り消す
- style: コードの意味に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）
- test: テストの追加、変更、削除

## リポジトリ作成

- [公式](https://github.com/expressjs/express)を参考
