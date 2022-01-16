// eslint-disable-next-line
import { Theme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles' {
  interface Theme {
    overrides: {
      MuiListItem: {
        root: {
          '&$selected': {
            backgroundColor: React.CSSProperties['backgroundColor'];
          };
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    overrides: {
      MuiListItem: {
        root: {
          '&$selected': {
            backgroundColor: React.CSSProperties['backgroundColor'];
          };
        };
      };
    };
  }
}
