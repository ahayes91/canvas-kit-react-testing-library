import React from "react";
import { TertiaryButton } from "@workday/canvas-kit-react/button";
import { OverflowTooltip } from "@workday/canvas-kit-react/tooltip";

export const ButtonWithTooltipNoIcon = ({ handleClick, label, ref }) => (
  <OverflowTooltip>
    <TertiaryButton onClick={handleClick} size="small" ref={ref}>
      {label}
    </TertiaryButton>
  </OverflowTooltip>
);
