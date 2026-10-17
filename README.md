# pomodoro-timer

A tiny Pomodoro timer for the browser: 25 minutes of focus, 5 minutes of break, repeat. Plain TypeScript compiled by `tsc`, no framework, no bundler.

## Usage

```sh
npm install
npm run build        # compiles src/main.ts -> dist/main.js
python3 -m http.server 8000   # any static server works; open http://localhost:8000
```

`index.html` loads `dist/main.js` as an ES module, so open it through a local server rather than `file://`.
