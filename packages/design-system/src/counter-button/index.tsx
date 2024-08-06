import { useState } from "react";
import { css } from "@repo/styled-system/css";

export function CounterButton(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div
      className={css({
        background: "rgba(0,0,0,0.05)",
        borderRadius: "lg",
        padding: "6",
        fontWeight: "medium",
      })}
    >
      <p className={css({ marginBottom: "6" })}>
        This component is from{" "}
        <code
          className={css({
            paddingY: "0.2rem",
            paddingX: "0.3rem",
            background: "rgba(0,0,0,0.1)",
            borderRadius: "sm",
          })}
        >
          ui
        </code>
      </p>
      <div>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          className={css({
            background: "black",
            color: "white",
            border: "none",
            paddingX: "4",
            paddingY: "2",
            borderRadius: "sm",
            display: "inline-block",
            cursor: "pointer",
          })}
          type="button"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}
