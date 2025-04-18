# Naptha-AI

A simple MCP-compatible AI agent for AutoMCP deployment.

## Setup

1. Clone: `git clone git@github.com:a941249849/Naptha-AI.git`
2. Install: `npm install`
3. Run: `npm start`

## MCP Endpoint

- **POST /mcp**: Accepts `{ "query": "text" }`, returns `{ "result": "Echo: text" }`.

Example:
```bash
curl -X POST http://localhost:3000/mcp -H "Content-Type: application/json" -d '{"query":"test"}'
