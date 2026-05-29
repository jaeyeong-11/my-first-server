const express = require('express');
const path = require('path'); 
const fs = require('fs');       // 1. 인증서 파일을 읽기 위해 fs 모듈 추가
const https = require('https');   // 2. HTTPS 서버 설정을 위해 https 모듈 추가
const app = express();

// 3. 발급받은 SSL 인증서 파일 불러오기 (절대 경로)
const sslOptions = {
  key: fs.readFileSync('/home/ubuntu/ssl-certs/leninna.kro.kr.key'),
  cert: fs.readFileSync('/home/ubuntu/ssl-certs/fullchain.cer')
};

// public 폴더 연결
app.use(express.static(path.join(__dirname, 'public')));

// 강제로 index.html을 보내주는 라우터
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 4. 기존 포트 대신 HTTPS 기본 포트인 443번 포트로 서버 실행
const port = 443;
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`서버 작동 중: https://leninna.kro.kr`);
});

module.exports = app;
