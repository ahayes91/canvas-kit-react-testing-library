import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ButtonWithTooltipAndIcon } from "../ButtonWithTooltipAndIcon";
import { ButtonWithTooltipNoIcon } from "../ButtonWithTooltipNoIcon";
import { ButtonWithIcon } from "../ButtonWithIcon";
import { ButtonWithIconWithIncorrectPosition } from "../ButtonWithIconWithIncorrectPosition";
import { ButtonWithIconWithCorrectPosition } from "../ButtonWithIconWithCorrectPosition";

test("Button with tooltip and icon fails", async () => {
  const handleClick = jest.fn();
  render(
    <ButtonWithTooltipAndIcon handleClick={handleClick} label="With icon" />
  );
  const openModalButton = screen.getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
});

test("Button with tooltip and no icon passes", async () => {
  const handleClick = jest.fn();
  render(
    <ButtonWithTooltipNoIcon handleClick={handleClick} label="Without icon" />
  );
  const openModalButton = screen.getByRole("button", { name: "Without icon" });
  expect(openModalButton).toBeInTheDocument();
});

test("Button with icon and no tooltip or position fails", async () => {
  const handleClick = jest.fn();
  render(
    <ButtonWithIcon handleClick={handleClick} label="With icon" />
  );
  const openModalButton = screen.getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
});

test("Button with icon and incorrect position and no tooltip passes", async () => {
  const handleClick = jest.fn();
  render(
    <ButtonWithIconWithIncorrectPosition handleClick={handleClick} label="With icon" />
  );
  const openModalButton = screen.getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
});

test("Button with icon and correct position and no tooltip fails", async () => {
  const handleClick = jest.fn();
  render(
    <ButtonWithIconWithCorrectPosition handleClick={handleClick} label="With icon" />
  );
  const openModalButton = screen.getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
});
