const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/mcp', (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Missing query in request body' });
  }
  const result = `Echo: ${query}`;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`MCP agent running on port ${port}`);
});
