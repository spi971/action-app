import App from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("App", () => {
  it("should renders Navbar component", () => {
    const {container } = render(<App />);

    screen.debug();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Navbar
        </div>
        <h1>
          Actions App
        </h1>
      </div>
    `)
  });
  it("should renders List component", () => {
    const {container } = render(<App />);

    screen.debug();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          Navbar
        </div>
        <h1>
          Actions App
        </h1>
        <div>
          List
        </div>
      </div>
    `)
  });
});
