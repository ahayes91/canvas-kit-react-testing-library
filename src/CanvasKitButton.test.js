import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CanvasKitButton from "./CanvasKitButton";
import CanvasKitButtonWithoutIcon from "./CanvasKitButtonWithoutIcon";

test("I'm expecting this to fail with TypeError", async () => {
  const handleClick = jest.fn();
  render(<CanvasKitButton handleClick={handleClick} />);
  const button = screen.getByRole("button", { name: 'CanvasKitButton' });
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("This should pass", async () => {
  const handleClick = jest.fn();
  render(<CanvasKitButtonWithoutIcon handleClick={handleClick} />);
  const button = screen.getByRole("button", { name: 'CanvasKitButton' });
  expect(button).toBeInTheDocument();
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
