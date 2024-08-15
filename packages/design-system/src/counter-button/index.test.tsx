import { createRoot } from "react-dom/client";
import { describe, it } from "vitest";
import { CounterButton } from ".";

describe("CounterButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<CounterButton />);
    root.unmount();
  });
});
