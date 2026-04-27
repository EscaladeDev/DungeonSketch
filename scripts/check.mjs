import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"

const jsFiles = [
  "main.js",
  "app/constants.js",
  "app/dirty-flags.js",
  "app/dom.js",
  "app/history.js",
  "canvas/camera.js",
  "canvas/grid.js",
  "canvas/live-layer-cache.js",
  "canvas/prop-render.js",
  "canvas/render.js",
  "canvas/text-metrics-cache.js",
  "canvas/water-style.js",
  "model/dungeon.js",
  "ui/drawer-tabs.js",
  "utils/marching_squares.js",
  "utils/math.js",
  "utils/path-styles.js",
  "utils/snap.js"
]

const jsonFiles = [
  "manifest.webmanifest",
  "assets/props/manifest.json",
  "package.json"
]

for (const file of jsFiles) {
  execFileSync(process.execPath, ["--check", file], { stdio: "inherit" })
}

for (const file of jsonFiles) {
  JSON.parse(readFileSync(file, "utf8"))
}

console.log("DelvSketch checks passed.")
