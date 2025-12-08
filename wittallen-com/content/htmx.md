+++
title = "htmx test"
+++

<!-- A button that fetches HTML from another file and swaps it into this div -->
<button hx-get="../test-message" hx-target="#output" hx-swap="innerHTML">
  Load Message
</button>

<div id="output"></div>
