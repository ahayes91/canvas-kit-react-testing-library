import React from "react";
import { TertiaryButton } from "@workday/canvas-kit-react/button";
import { starIcon } from "@workday/canvas-system-icons-web";

export const ButtonWithIcon = ({ handleClick, label, ref }) => (
  <TertiaryButton onClick={handleClick} size="small" icon={starIcon} ref={ref}>
    {label}
  </TertiaryButton>
);
