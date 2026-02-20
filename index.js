const express = require('express');
const path = require('path'); // 1. path 모듈 불러오기 (기본 내장이라 설치 필요 없음)
const app = express();

// 2. 더 강력한 방법으로 public 폴더 연결하기
// __dirname은 현재 파일이 있는 폴더의 절대 주소를 뜻해!
app.use(express.static(path.join(__dirname, 'public')));

// 만약 위 코드로도 안 된다면, 강제로 index.html을 보내주는 코드를 추가해 보자
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버 작동 중: http://localhost:${port}`);
});

module.exports = app;

