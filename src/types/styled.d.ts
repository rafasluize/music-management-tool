import 'styled-components';

export type BorderRadius = {
  none: string;
  small: string;
  medium: string;
  default: string;
  large: string;
  xlarge: string;
  pill: string;
  circle: string;
};

export type BorderStyle = {
  solid: string;
  dashed: string;
};

export type BorderWidth = {
  none: string;
  thinner: string;
  thin: string;
  thick: string;
};

export type GridSpec = {
  gutter: string;
  margin: string;
  maxWidth: string;
  columns: string;
};

export type Breakpoint = {
  minWidth: string;
  maxWidth?: string;
};

export type Spacing = {
  km0: string;
  km1: string;
  km2: string;
  km3: string;
  km4: string;
  km5: string;
  km6: string;
  km8: string;
  km10: string;
  km12: string;
  km14: string;
  km16: string;
};

export type OpacityLevel = {
  semitransparent: string;
  light: string;
  medium: string;
  intense: string;
  semiopaque: string;
};

export type Elevation = {
  ton1: string;
  ton2: string;
  ton3: string;
  ton4: string;
  ton5: string;
  ton6: string;
  ton7: string;
  ton8: string;
};

export type ColorVariants = {
  default?: string;
  weakest?: string;
  weak?: string;
  medium?: string;
  strong?: string;
  inverted?: string;
};

export type ColorType = {
  brand: ColorVariants;
  secondary: ColorVariants;
  danger: ColorVariants;
  neutral: ColorVariants;
  success: ColorVariants;
};

export type Colors = {
  background: ColorType;
  text: ColorType;
  support: {
    purple: ColorVariants;
    blue: ColorVariants;
    orange: ColorVariants;
    green: ColorVariants;
    indigo: ColorVariants;
  };
};

export type Icon = {
  tiny: string;
  small: string;
  medium: string;
  large: string;
};

export type FontFamily = {
  display: string;
  body: string;
  heading: string;
  caption: string;
};

export type FontSize = {
  base: string;
  m1: string;
  m2: string;
  m3: string;
  m4: string;
  m5: string;
  m6: string;
  m7: string;
  m8: string;
  m9: string;
  m10: string;
  m11: string;
  m12: string;
};

export type FontWeight = {
  regular: string;
  medium: string;
  bold: string;
};

export type FontSpacing = {
  tighty: string;
  tight: string;
  cozy: string;
  roomy: string;
  spatious: string;
};

export type FontLineHeight = {
  large: string;
  medium: string;
  small: string;
  tiny: string;
  micro: string;
  none: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: BorderRadius;
      style: BorderStyle;
      width: BorderWidth;
    };
    breakpoint: {
      sm: Breakpoint;
      md: Breakpoint;
      lg: Breakpoint;
      xlg: Breakpoint;
    };
    color: Colors;

    elevation: Elevation;
    font: {
      family: FontFamily;
      spacing: FontSpacing;
      lineHeight: FontLineHeight;
      size: FontSize;
      weight: FontWeight;
    };
    grid: {
      sm: GridSpec;
      md: GridSpec;
      lg: GridSpec;
      xlg: GridSpec;
    };
    icon: Icon;
    opacity: {
      level: OpacityLevel;
    };
    spacing: Spacing;
    padding: {
      km0: string;
      km1: string;
      km2: string;
      km3: string;
      km4: string;
      km5: string;
      km6: string;
    };
    zIndex: {
      default: number;
      absolute: number;
      tooltip: number;
      modal: number;
      toast: number;
    };
  }
}
