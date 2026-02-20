const express = require('express');
const app = express();

// Render가 주는 포트(PORT)를 쓰거나, 내 컴퓨터에서는 3000번을 씁니다.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('환영합니다! 드디어 내 진짜 웹사이트가 Render에서 돌아가고 있어요! 🚀🌍');
});

// Render는 0.0.0.0을 안 적어도 알아서 잘 처리해 줍니다!
app.listen(port, () => {
  console.log(`Render 서버가 켜졌습니다! 포트: ${port}`);
});
