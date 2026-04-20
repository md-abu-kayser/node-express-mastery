# Fundamentals of Node.js - CommonJS, ESM & Runtime Concepts

<!-- MIT License -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

<!-- Languages -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ECMAScript Spec](https://img.shields.io/badge/ECMAScript-262-7A0BC0?logo=ecmascript&logoColor=white)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

<!-- Runtime -->

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

## Plain docs links

- JavaScript (MDN) docs: [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- ECMAScript (spec, ECMA-262) docs: [https://www.ecma-international.org/publications-and-standards/standards/ecma-262/](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- Node.js docs: [https://nodejs.org/](https://nodejs.org/)

---

> A hands‑on Node.js learning repository focused on module systems, runtime concepts, and building a solid foundation for modern backend development.

---

## 🚀 Project Overview

This repository is designed as a learning playground for mastering Node.js fundamentals, with a strong emphasis on:

- **CommonJS vs ESM** (module systems)
- **Node.js runtime behavior** (event loop & async I/O)
- **Modular code organization** and reusability
- **Practical examples** that run out-of-the-box

> The code is intentionally small and focused so you can explore and extend it quickly.

---

## ✅ What You’ll Learn

- How **Node.js works internally** (event loop, single-threaded async I/O)
- Differences between **static** and **dynamic** websites
- How APIs power modern client-server architectures
- How to use **CommonJS (`require/module.exports`)** and **ESM (`import/export`)**
- How to structure modules with an index/entry point for clean imports
- How to run Node.js scripts using both module systems

---

## 📁 Project Structure

```
├── LICENSE
├── README.md
└── WEB_NODEJS.md
├── file1.js            (CommonJS example)
├── file2.js            (CommonJS export)
├── file3.js            (CommonJS export)
├── file_es1.mjs        (ESM example)
├── file_es2.mjs        (ESM export)
├── file_es3.mjs        (ESM export)
├── utils               (CommonJS utility modules)
│   ├── add.js
│   ├── subs.js
│   └── index.js
└── utils_esm           (ESM utility modules)
    ├── add.mjs
    ├── subs.mjs
    └── index.mjs
```

---

## ▶️ Run the Examples

### 1) Run the CommonJS demo

```bash
node web-nodejs/file1.js
```

### 2) Run the ESM demo

```bash
node web-nodejs/file_es1.mjs
```

> ✅ These examples demonstrate the same logic using two different module systems.

---

## 🔍 What Each Example Shows

### CommonJS (`.js`)

- Uses `require()` + `module.exports`
- Demonstrates a shared `utils` module (`add`, `subs`)
- Illustrates named imports and aliasing

### ESM (`.mjs`)

- Uses `import` / `export`
- Shows default exports (`export default`) vs named exports
- Illustrates how to structure an ESM index file for clean imports

---

## 🧠 Why This Matters

Modern JavaScript projects often mix module formats (especially during migrations). Being fluent in both CommonJS and ESM:

- Makes it easier to maintain legacy code
- Helps you work across the ecosystem (Node.js, build systems, tools)
- Allows you to choose the right module format for each project

---

## 🛠️ Extension Ideas

Want to take this project further? Consider adding:

- ✅ An **Express** server to expose the utilities via an HTTP API
- ✅ A `package.json` with npm scripts for consistent CLI commands
- ✅ Unit tests (Jest, Mocha, or AVA) and CI configuration
- ✅ TypeScript support for type-safe module boundaries
- ✅ A migration path showing how to convert an existing CommonJS codebase to ESM

---

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

---

### Contact and Maintainer

- **Name:** Md Abu Kayser
- **Project:** _nodejs-fundamentals-playground_
- **Maintainer:** [md-abu-kayser](https://github.com/md-abu-kayser)
- **GitHub:** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)
- **Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---
