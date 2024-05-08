import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { stepperStyles } from "./components/stepper";
import { badgeStyles } from "./components/badge";
import { inputStyles } from "./components/input";
import { CardComponent } from "./additions/card/Card";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";
// import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  stepperStyles,
  badgeStyles, // Badge styles
  inputStyles, // Input styles
  CardComponent, // Card component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
);
