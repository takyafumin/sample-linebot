# LINE BOTで返信をするサンプル

node.jsでLINE BOTを作成するサンプルです。

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [使い方](#使い方)
  - [1. リポジトリをクローンする](#1-リポジトリをクローンする)
  - [2. パッケージをインストールする](#2-パッケージをインストールする)
  - [3. チャンネルのアクセストークンを設定する](#3-チャンネルのアクセストークンを設定する)
  - [4. ローカルサーバーを起動する](#4-ローカルサーバーを起動する)
  - [5. ngrokを起動する](#5-ngrokを起動する)
- [LINE側の設定](#line側の設定)
  - [1. LINE Developersで Messaging APIを利用する](#1-line-developersで-messaging-apiを利用する)
  - [2. チャンネルアクセストークンを発行する](#2-チャンネルアクセストークンを発行する)
  - [3. チャンネルの設定を変更する](#3-チャンネルの設定を変更する)
- [その他](#その他)
  - [LINEメッセージの送信](#lineメッセージの送信)

<!-- /code_chunk_output -->

## 使い方

### 1. リポジトリをクローンする

```bash
git clone [リポジトリのURL]
```

### 2. パッケージをインストールする

```bash
yarn install
```

### 3. チャンネルのアクセストークンを設定する

`.env.sample`をコピーして`.env`を作成し、以下を設定します。

```
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token
LINE_CHANNEL_SECRET=your_line_channel_secret
```

### 4. ローカルサーバーを起動する

```bash
$ yarn start
```

### 5. ngrokを起動する

```bash
$ ngrok http 3000 --region=ap
```

## LINE側の設定

### 1. LINE Developersで Messaging APIを利用する

- プロバイダーを作成
  - プロバイダー名：任意（後で変更不可）

### 2. チャンネルアクセストークンを発行する

- プロバイダーを選択する
- Messaging API設定 タブ
  - チャネルアクセストークンを発行する

### 3. チャンネルの設定を変更する

- Messaging API設定 タブ
  - Webhookの利用：利用する
  - Webhook URL：ngrokで起動したURL
  - 応答メッセージ
    - チャット：利用する
    - Webhook：利用する

## その他

### LINEメッセージの送信

UUID生成

```bash
uuidgen
```

メッセージ送信

```bash
curl -v -X POST https://api.line.me/v2/bot/message/push \
     -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
     -H 'X-Line-Retry-Key: {UUID}' \
     -d '{
       "to": "USER_ID",
       "messages":[
         {
           "type":"text",
           "text":"Hello, world1"
         },
         {
           "type":"text",
           "text":"Hello, world2"
         }
       ]
     }'
```
