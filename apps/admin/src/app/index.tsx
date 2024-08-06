import React from "react";
import { CounterButton, Link } from "@repo/design-system";
import { css } from "@repo/styled-system/css";
import { container } from "@repo/styled-system/patterns";

function App(): JSX.Element {
  return (
    <div className={container({ padding: "10" })}>
      <h1 className={css({ fontSize: "3rem", fontWeight: "700", margin: "0" })}>
        Admin <br />
        <span
          className={css({
            display: "inline-block",
            bgGradient: "to-r",
            gradientFrom: "#3b82f6",
            gradientTo: "#ef4444",
            backgroundClip: "text",
            color: "transparent",
          })}
        >
          Armani.dev Stack
        </span>
      </h1>
      <CounterButton />
      <p className={css({ color: "#9ca3af", fontWeight: "500" })}>
        Built With{" "}
        <Link
          href="https://turbo.build/repo"
          newTab
          className={css({
            color: "#3b82f6",
            textDecoration: { base: "none", _hover: "underline" },
          })}
        >
          Turborepo
        </Link>
        {" & "}
        <Link
          href="https://vitejs.dev/"
          newTab
          className={css({
            color: "#3b82f6",
            textDecoration: { base: "none", _hover: "underline" },
          })}
        >
          Vite
        </Link>
      </p>
    </div>
  );
}

export default App;
