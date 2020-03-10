const Jreact = require('./Jreact');

/* const element = Jreact.createElement(
  "div",
  { id: "foo" },
  Jreact.createElement("a", null, Jreact.createElement(
    "a",
    { href: "https://www.google.com" },
    "link to google"
  )),
  Jreact.createElement("b")
) */

/** @jsx Jreact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

const container = document.querySelector("#app");
Jreact.render(element, container)