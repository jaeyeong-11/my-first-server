const express = require('express');
const app = express();

app.use(express.static('public'));

// 이 부분은 이제 index.html이 대신하니까 지워도 돼!
// app.get('/', (req, res) => { ... }); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버 작동 중: http://localhost:${port}`);
});

module.exports = app;
