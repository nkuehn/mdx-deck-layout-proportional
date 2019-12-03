import Provider from "./provider";
import components from "./components";

// This is a ThemeUI declaration https://theme-ui.com/getting-started

export default {
  Provider,
  components,
  googleFont:
    "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500|Roboto:400,400i,500,700&display=swap&subset=latin-ext",
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    monospace: "Roboto Mono, monospace"
  },
  styles: {
    Slide: {
      height:
        "56.25vw" /* fixing the aspect ratio has to be repeated here to override the hardwired flex height of mdx-deck */,
      fontFamily: "Roboto, sans-serif",
      fontSize: "3rem",
      lineHeight: 1.5,
      padding: "2rem",
      justifyContent: "left",
      alignItems: "left"
    }
  }
};
