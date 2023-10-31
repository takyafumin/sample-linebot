const line = require('@line/bot-sdk');
const express = require('express');
require('dotenv').config();

const CONFIG = {
  channelAccessToken: process.env.ACCESS_TOKEN,
  channelSecret: process.env.SECRET_KEY,
};
const PORT = 3000;
const client = new line.Client(CONFIG);

express()
  .post("/webhook", line.middleware(CONFIG), (req, res) => handleBot(req, res))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const handleBot = (req, res) => {
  res.status(200).end();
  req.body.events.map((event) => {
    // console.log('event', event);
    client.replyMessage(event.replyToken, { type: 'text', text: 'Hello World!' });
  })
};

