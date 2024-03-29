// import { CodeSurfer } from "mdx-deck-code-surfer"; // issues with dependencies.
import styled from "@emotion/styled";

const ul = styled.ul({
  marginLeft: "1rem"
});

const li = styled.li({
  listStylePosition: "inside"
});

const code = styled.code({
  fontFamily: "Roboto Mono, monospace"
});

const Aside = styled.aside({
  position: "absolute",
  right: "1rem",
  top: "1rem",
  background: "yellow"
});

export default {
  // CodeSurfer,
  Aside,
  code,
  li,
  ul
};
