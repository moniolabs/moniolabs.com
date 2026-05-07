import React from 'react';
import { createBrowserRouter, Outlet, useLocation } from "react-router";

import { CookieConsent } from "./components/CookieConsent";

function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div key={location.key} className="contents">
        <Outlet />
      </div>
      <CookieConsent />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    HydrateFallback: () => <div className="min-h-screen bg-[#050505]" />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/Home").then(m => ({ Component: m.Home })),
      },
      {
        path: "products",
        lazy: () => import("./pages/Products").then(m => ({ Component: m.Products })),
      },
      {
        path: "service",
        lazy: () => import("./pages/Service").then(m => ({ Component: m.Service })),
      },
      {
        path: "showcases",
        lazy: () => import("./pages/Showcases").then(m => ({ Component: m.Showcases })),
      },
      {
        path: "newsroom",
        lazy: () => import("./pages/Newsroom").then(m => ({ Component: m.Newsroom })),
      },
      {
        path: "about",
        lazy: () => import("./pages/About").then(m => ({ Component: m.About })),
      },
      {
        path: "support",
        lazy: () => import("./pages/Support").then(m => ({ Component: m.Support })),
      },
      {
        path: "terms-privacy",
        lazy: () => import("./pages/TermsPrivacy").then(m => ({ Component: m.TermsPrivacy })),
      }
    ]
  }
]);
