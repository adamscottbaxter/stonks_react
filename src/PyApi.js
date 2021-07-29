import { Config } from "./constants";

export function apiGet(path) {
  fetch(Config + path)
      .then(res => res.json())
}

export function getPrices(sym) {
  apiGet(`/yfin/${sym}`)
}