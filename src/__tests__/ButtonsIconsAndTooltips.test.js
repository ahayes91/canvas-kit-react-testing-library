import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonWithTooltipAndIcon } from "../ButtonWithTooltipAndIcon";
import { ButtonWithTooltipNoIcon } from "../ButtonWithTooltipNoIcon";
import { ButtonWithIcon } from "../ButtonWithIcon";
import { ButtonWithIconWithIncorrectPosition } from "../ButtonWithIconWithIncorrectPosition";
import { ButtonWithIconWithCorrectPosition } from "../ButtonWithIconWithCorrectPosition";

test("Button with tooltip and icon fails", async () => {
  const { getByRole, queryByText } = render(
    <ButtonWithTooltipAndIcon handleClick={() => {}} label="With icon" />
  );
  const openModalButton = getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
  userEvent.click(openModalButton);
  await waitFor(() => {
    expect(queryByText("Whatever")).not.toBeInTheDocument();
  });
});

test("Button with tooltip and no icon passes", async () => {
  const { getByRole, queryByText } = render(
    <ButtonWithTooltipNoIcon handleClick={() => {}} label="Without icon" />
  );
  const openModalButton = getByRole("button", { name: "Without icon" });
  expect(openModalButton).toBeInTheDocument();
  userEvent.click(openModalButton);
  await waitFor(() => {
    expect(queryByText("Whatever")).not.toBeInTheDocument();
  });
});

test("Button with icon and no tooltip or position fails", async () => {
  const { getByRole, queryByText } = render(
    <ButtonWithIcon handleClick={() => {}} label="With icon" />
  );
  const openModalButton = getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
  userEvent.click(openModalButton);
  await waitFor(() => {
    expect(queryByText("Whatever")).not.toBeInTheDocument();
  });
});

test("Button with icon and incorrect position and no tooltip passes", async () => {
  const { getByRole, queryByText } = render(
    <ButtonWithIconWithIncorrectPosition handleClick={() => {}} label="With icon" />
  );
  const openModalButton = getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
  userEvent.click(openModalButton);
  await waitFor(() => {
    expect(queryByText("Whatever")).not.toBeInTheDocument();
  });
});

test("Button with icon and correct position and no tooltip fails", async () => {
  const { getByRole, queryByText } = render(
    <ButtonWithIconWithCorrectPosition handleClick={() => {}} label="With icon" />
  );
  const openModalButton = getByRole("button", { name: "With icon" }); // This fails
  expect(openModalButton).toBeInTheDocument();
  userEvent.click(openModalButton);
  await waitFor(() => {
    expect(queryByText("Whatever")).not.toBeInTheDocument();
  });
});
