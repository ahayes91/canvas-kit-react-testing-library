import React from "react";
import { TertiaryButton } from "@workday/canvas-kit-react/button";
import { OverflowTooltip } from "@workday/canvas-kit-react/tooltip";
import { chevronUpSmallIcon } from "@workday/canvas-system-icons-web";

export default ({handleClick}) => (
  <OverflowTooltip>
    <TertiaryButton
      icon={chevronUpSmallIcon}
      iconPosition="right"
      onClick={handleClick}
      size="small"
    >
      CanvasKitButton
    </TertiaryButton>
  </OverflowTooltip>
);
