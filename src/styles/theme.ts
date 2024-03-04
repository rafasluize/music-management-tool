import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  border: {
    radius: {
      none: '0px',
      small: '4px',
      medium: '8px',
      large: '12px',
      default: '16px',
      xlarge: '20px',
      pill: '100px',
      circle: '100%',
    },
    style: {
      solid: 'solid',
      dashed: 'dashed',
    },
    width: {
      none: '0px',
      thinner: '1px',
      thin: '2px',
      thick: '4px',
    },
  },
  breakpoint: {
    sm: {
      minWidth: '0px',
      maxWidth: '767px',
    },
    md: {
      minWidth: '768px',
      maxWidth: '1023px',
    },
    lg: {
      minWidth: '1024px',
      maxWidth: '1439px',
    },
    xlg: {
      minWidth: '1440px',
    },
  },
  color: {
    background: {
      brand: {
        default: '#dd2a62',
        weakest: '#fff4f4',
        weak: '#ffd6d6',
        medium: '#ff4e4c',
        strong: '#b21919',
      },
      secondary: {
        default: '#6c2c83',
        weakest: '#fff4f4',
        weak: '#ffd6d6',
        medium: '#ff4e4c',
        strong: '#b21919',
      },
      danger: {
        default: '#e72369',
        weak: '#feebf2',
        medium: '#ff337c',
        strong: '#dc185f',
      },
      neutral: {
        default: '#ffffff',
        weak: '#f4f4f5',
        strong: '#dddfe4',
        inverted: '#111111',
      },
      success: {
        default: '#0ab15f',
        weak: '#e5fff3',
        strong: '#1a7b41',
      },
    },
    text: {
      brand: {
        default: '#dd2a62',
        strong: '#b21919',
      },

      secondary: {
        default: '#6c2c83',
        strong: '#b21919',
      },
      danger: {
        default: '#e72369',
        strong: '#c91d5b',
      },
      neutral: {
        inverted: '#ffffff',
        weak: '#babec9',
        default: '#636b7e',
        strong: '#111111',
      },
      success: {
        default: '#0ab15f',
        strong: '#1a7b41',
      },
    },
    support: {
      purple: {
        weak: '#ede0ff',
        strong: '#7a5fcd',
      },
      blue: {
        weak: '#eaf6ff',
        strong: '#3c82ff',
      },
      orange: {
        weak: '#ffead6',
        strong: '#f5963d',
      },
      indigo: {
        weak: '#e0e4ff',
        strong: '#7785ff',
      },
      green: {
        weak: '#e0ffe8',
        strong: '#08c45e',
      },
    },
  },
  elevation: {
    ton1: '0px 2px 4px -2px rgba(38, 47, 74, 0.12), 0px 4px 4px -2px rgba(38, 47, 74, 0.08)',
    ton2: '0px 4px 6px -4px rgba(38, 47, 74, 0.12), 0px 8px 8px -4px rgba(38, 47, 74, 0.08)',
    ton3: '0px 6px 8px -6px rgba(38, 47, 74, 0.12), 0px 8px 16px -6px rgba(38, 47, 74, 0.08)',
    ton4: '0px 6px 12px -6px rgba(38, 47, 74, 0.12), 0px 8px 24px -4px rgba(38, 47, 74, 0.08)',
    ton5: '0px 6px 14px -6px rgba(38, 47, 74, 0.12), 0px 10px 32px -4px rgba(24, 38, 47, 0.1)',
    ton6: '0px 8px 18px -6px rgba(38, 47, 74, 0.12), 0px 12px 42px -4px rgba(38, 47, 74, 0.12)',
    ton7: '0px 8px 22px -6px rgba(38, 47, 74, 0.12), 0px 14px 64px -4px rgba(38, 47, 74, 0.12)',
    ton8: '0px 8px 28px -6px rgba(38, 47, 74, 0.12), 0px 18px 88px -4px rgba(38, 47, 74, 0.14)',
  },
  font: {
    family: {
      display: "'Open Sans', sans-serif",
      heading: "'Open Sans', sans-serif",
      body: "'Open Sans', sans-serif",
      caption: "'Open Sans', sans-serif",
    },
    spacing: {
      tighty: '-0.06em',
      tight: '-0.04em',
      cozy: '0',
      roomy: '0.02em',
      spatious: '0.04em',
    },
    lineHeight: {
      large: '1.6',
      medium: '1.5',
      small: '1.4',
      tiny: '1.3',
      micro: '1.1',
      none: '1.0',
    },
    size: {
      base: '16px',
      m1: '0.625rem',
      m2: '0.75rem',
      m3: '0.875rem',
      m4: '1rem',
      m5: '1.125rem',
      m6: '1.25rem',
      m7: '1.5rem',
      m8: '2rem',
      m9: '2.5rem',
      m10: '3rem',
      m11: '4rem',
      m12: '6rem',
    },
    weight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  grid: {
    sm: {
      gutter: '16px',
      margin: '0 24px',
      maxWidth: '100%',
      columns: '4',
    },
    md: {
      gutter: '16px',
      margin: '0 48px',
      maxWidth: '100%',
      columns: '8',
    },
    lg: {
      gutter: '24px',
      margin: '0 48px',
      maxWidth: '1182px',
      columns: '12',
    },
    xlg: {
      gutter: '24px',
      margin: '0 auto',
      maxWidth: '1182px',
      columns: '12',
    },
  },
  icon: {
    tiny: '16px',
    small: '20px',
    medium: '24px',
    large: '32px',
  },
  opacity: {
    level: {
      semitransparent: '0.08',
      light: '0.16',
      medium: '0.32',
      intense: '0.64',
      semiopaque: '0.80',
    },
  },
  padding: {
    km0: '0px',
    km1: '4px',
    km2: '8px',
    km3: '12px',
    km4: '16px',
    km5: '20px',
    km6: '24px',
  },
  spacing: {
    km0: '0px',
    km1: '4px',
    km2: '8px',
    km3: '12px',
    km4: '16px',
    km5: '20px',
    km6: '24px',
    km8: '32px',
    km10: '40px',
    km12: '48px',
    km14: '56px',
    km16: '64px',
  },
  zIndex: {
    default: 0,
    absolute: 1,
    tooltip: 40,
    modal: 1000,
    toast: 1100,
  },
};

export default theme;
