import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      darkerBackground: string,
      text: string,
      blue: string,
      darkerBlue: string,
      green: string
      red: string,
    };
  }
}