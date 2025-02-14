import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/global.css";

import Root from "@/app";
import { base } from "@/utils/consts";

createRoot(document).render(
  <StrictMode>
    <html lang="en">
      <head>
        <title>Happy Valentine</title>
        <link rel="icon" type="image/svg" href={base + "/h.svg"} />
        {/* =============================== META =============================== */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="IamFastre" />
        <meta name="description" content="This is the closest that I can get to an actual gift!" />
      </head>
      <body>
        <Root />
      </body>
    </html>
  </StrictMode>
);
