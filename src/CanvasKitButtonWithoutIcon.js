import React from "react";
import { TertiaryButton } from "@workday/canvas-kit-react/button";
import { OverflowTooltip } from "@workday/canvas-kit-react/tooltip";

export default ({ handleClick }) => (
  <OverflowTooltip>
    <TertiaryButton onClick={handleClick} size="small">
      CanvasKitButton
    </TertiaryButton>
  </OverflowTooltip>
);
