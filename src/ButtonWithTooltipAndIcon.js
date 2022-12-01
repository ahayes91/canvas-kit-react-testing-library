import React from "react";
import { TertiaryButton } from "@workday/canvas-kit-react/button";
import { OverflowTooltip } from "@workday/canvas-kit-react/tooltip";
import { starIcon } from "@workday/canvas-system-icons-web";

export const ButtonWithTooltipAndIcon = ({ handleClick, label, ref }) => (
  <OverflowTooltip>
    <TertiaryButton
      onClick={handleClick}
      size="small"
      icon={starIcon}
      ref={ref}
    >
      {label}
    </TertiaryButton>
  </OverflowTooltip>
);
