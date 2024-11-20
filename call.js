const http = require("http");

const server = http.createServer((req, res) => {
  const urlParams = new URL(req.url, `http://${req.headers.host}`);
  const url = urlParams.searchParams.get("url"); // Extract the 'url' query parameter

  res.writeHead(200, { "Content-Type": "text/xml" }); // Set Content-Type to XML
  res.end(`<?xml version="1.0" encoding="utf-8"?>
<Response>
  <Play>${url || ''}</Play>
</Response>`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
