import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import CanvasKitButton from "./CanvasKitButton";
import CanvasKitButtonWithoutIcon from "./CanvasKitButtonWithoutIcon";

test("This fails with TypeError", () => {
  render(<CanvasKitButton />);
  expect(screen.getByRole("button", { name: 'CanvasKitButton' })).toBeInTheDocument();
});

test("This should pass", () => {
  render(<CanvasKitButtonWithoutIcon />);
  expect(screen.getByRole("button", { name: 'CanvasKitButton' })).toBeInTheDocument();
});
