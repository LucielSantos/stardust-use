import { StardustTheme } from "luciel-stardust-react";
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends StardustTheme {}
}
