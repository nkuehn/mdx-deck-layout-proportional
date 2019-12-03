# Exploring Fully predictable and proportionally scaling MDX-Deck Layouts

Status: Works, let's see where we can get to.

Preview: https://nkuehn.github.io/mdx-deck-layout-proportional/ (build simply committed here, only first slide available atm)

## Goal:

- Be able to work with a "real" designer to get perfect slide design, esp. for the basic building blocks (footer / title / tables etc)
- You get a pixel based design, e.g. Full HD as presented and need to implement it in a pixel-agnostic, but exact manner
- 100% predictable layout and content flow of my slides when authoring them, independent of the window size and resolution while authoring them.
- No breakpoints, no varying aspect ratio - it's a 16:9 area whatever the viewport currently is, space overage is black
- No dynamic scripting, fully CSS based

## Approach:

1.  Set the root font size on the `<html>` tag to a `vw` (relative to viewport width) unit size that exactly equals 16px on a 1920px wide screen. That "magic number" is `0.834vw`
1.  Set the Slide width to `1vw` and the height to `56.25vw`, which gives it a fixed 16:9 aspect ratio
    - hack: globally disable overflow scrollbars on any element to make the available viewport predictable.
    - hack: override MDX-deck's dynamic height (set in the `Wrapper` component) in CSS of the `Provider` (via specificity) and set it _again_ in the `Slide` component CSS. ThemeUIs `aspectRatio` would have been an option, too but pure CSS is just better.
1.  Exclusively use `rem` units in all styling and sizing of any content.
    - for convenience and to track the original design, a pixel2rem helper function can be used for that in the react and styled components code.
    - other relative units like `%` or `fr` in grids are good, too but no `px` nowhere.

# Issues:

1. For whatever dependency hell reason I cannot add gatsby as a dependency together with the gatsby-theme-mdx-deck, so it's not possible to run it based on gatsby (e.g. for the path prefix)
1. see "hacks" above, would be nice to either have control over the Wrapper have a wrapper that does no own CSS (in this case the height and width)
1. Overview Mode: Providing an own `Provider` is advertised to be able to inject own central formatting like numbering etc, but Overview and Presenter mode is _inside_ the Provider content and not around it, so the visual effect is weird and overview breaks the aspect ratio.
   - In other words: Since `Slide` cannot be centrally overriden, but only styled and I don't want to have to put a Layout wrapper into every single slide in the MDX, I use `Provider` for common layout and content. Hence - I believe - Overview and Presenter Mode should be _around_ the Provider component or there should be a documented way to provide an own `Slide` component (assuming that doesn't break all the things)

# TODO:

calculate the magic numbers in code to increase transparency.
