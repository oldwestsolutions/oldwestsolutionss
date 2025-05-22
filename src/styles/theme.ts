import { createLightTheme, tokens, makeStyles } from '@fluentui/react-components';

const brandColors = {
  10: '#2F2F2F', // Smoke show gray
  20: '#3F3F3F',
  30: '#4F4F4F',
  40: '#5F5F5F',
  50: '#6F6F6F',
  60: '#7F7F7F',
  70: '#8F8F8F',
  80: '#9F9F9F',
  90: '#AF9F9F',
  100: '#BFBFBF',
  110: '#CFCFCF',
  120: '#DFDFDF',
  130: '#EFEFEF',
  140: '#FFFFFF',
  150: '#FFFFFF',
  160: '#FFFFFF',
};

export const theme = createLightTheme(brandColors);

export const useStyles = makeStyles({
  root: {
    backgroundColor: brandColors[10],
    color: brandColors[140],
  },
}); 