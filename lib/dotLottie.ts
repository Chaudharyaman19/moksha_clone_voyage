import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";

// The player's ~1.2 MB WASM runtime otherwise downloads from a public CDN on first use.
// Serve it from our own origin instead (public/dotlottie-player.wasm, re-copied from
// node_modules on postinstall so it always matches the installed player version).
setWasmUrl("/dotlottie-player.wasm");

export { DotLottieReact };
