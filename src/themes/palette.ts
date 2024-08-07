import { alpha } from '@mui/material/styles';
import { PaletteColorOptions } from '@mui/material/styles';

// declare module
declare module '@mui/material/styles' {
  interface Palette {
    myAwesomeColor: PaletteColorOptions;
  }
  interface PaletteOptions {
    myAwesomeColor: PaletteColorOptions;
  }
  interface TypeBackground {
    default: string;
    paper: string;
    mainPrimary: string;
  }
}

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#EBF4FD',
  light: '#D1E2FC',
  main: '#0B70E1',
  mainGradient: 'linear-gradient(180deg, #0B70E1 0%, #0E73E4 71.87%)',
  dark: '#1939B7',
  darker: '#03228F',
  text: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#F27C1E',
  main: '#DD4C23',
  dark: '#B72121',
  darker: '#7A0C0C',
};

const LIGHT_BLUE = {
  main: 'rgba(11, 112, 225, 0.16)',
  dark: '#0B70E1',
};
const LIGHT_RED = {
  main: 'rgba(221, 76, 35, 0.16)',
  dark: '#DD4C23',
};
const LIGHT_GREEN = {
  main: 'rgba(84, 214, 44, 0.16)',
  dark: '#229A16',
};
const LIGHT_YELLOW = {
  main: 'rgba(255, 193, 7, 0.16)',
  dark: '#B78103',
};
const LIGHT_PURPLE = {
  main: 'rgba(130, 106, 249, 0.16)',
  dark: '#826AF9',
};

const GRADIENT_BLUE = {
  main: '#03228F',
  mainGradient: 'linear-gradient(90deg, #03228F 0%, #0E73E4 100%)',
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  lightBlue: { ...LIGHT_BLUE },
  lightGreen: { ...LIGHT_GREEN },
  lightYellow: { ...LIGHT_YELLOW },
  lightPurple: { ...LIGHT_PURPLE },
  lightRed: { ...LIGHT_RED },
  gradientBlue: { ...GRADIENT_BLUE },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { main: '#7A7A7A', line: '#E7E7E7', headline: '#061340', primary: '#061340', secondary: GREY[600], disabled: GREY[500] },
    background: {
      paper: '#FFFFFF',
      default: '#F4F6FA',
      neutral: GREY[200],
      mainPrimary: 'linear-gradient(180deg, #0B70E1 0%, #0E73E4 71.87%)',
      main: 'linear-gradient(180deg, #0B70E1 0%, #0E73E4 71.87%)',
    },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16],
      mainPrimary: 'linear-gradient(180deg, #0B70E1 0%, #0E73E4 71.87%)',
    },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
