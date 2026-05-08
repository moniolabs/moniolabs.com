
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import coinGifUrl from "./imports/coin.gif";

  // 提前预加载 Hero GIF，让浏览器在 React 渲染前就开始下载
  const preloadLink = document.createElement("link");
  preloadLink.rel = "preload";
  preloadLink.as = "image";
  preloadLink.href = coinGifUrl;
  document.head.appendChild(preloadLink);

  createRoot(document.getElementById("root")!).render(<App />);
  