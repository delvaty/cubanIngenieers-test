import { render, screen } from "@testing-library/react";
import App from "./App";

  

describe("App", () => {
  test("should show the input placeholder", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Type to add new task")).toBeDefined();
  });
});



 

  

