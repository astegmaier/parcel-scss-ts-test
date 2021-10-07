export type Styles = {
  "style-with-dashes": string;
  style1: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
