+++
title = "htmx test"
+++


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Minimal htmx Example</title>
  <!-- htmx CDN -->
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
</head>
<body>

  <h1>HTMX Demo</h1>

  <!-- A button that fetches HTML from another file and swaps it into this div -->
  <button hx-get="test-message" hx-target="#output" hx-swap="innerHTML">
    Load Message
  </button>

  <div id="output"></div>

</body>
</html>
