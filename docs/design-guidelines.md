# x-kom visual reference

Source: [x-kom homepage](https://www.x-kom.pl/), inspected on 2026-11-05 using Playwright CLI in visible Google Chrome at a 1440 x 1000 CSS pixel viewport. This is a measured desktop reference, not an official x-kom brand manual. Token names and suggested usage interpret the observed page.

## Assets

| Asset | Local file |
|---|---|
| Design tokens | [design-tokens.json](../assets/design-tokens.json) |
| Full homepage, after scrolling to load images | [homepage.png](../assets/homepage.png) |
| Header wordmark with tagline | [logo.svg](../assets/logo.svg) |
| Favicon | [favicon.ico](../assets/favicon.ico) |
| Instrument Sans variable font | [InstrumentSans-VariableFont_wdth,wght.woff2](../assets/fonts/instrument-sans/InstrumentSans-VariableFont_wdth,wght.woff2) |

The font and favicon were fetched in the page context from the site's asset host, `assets.x-kom.pl`. The logo was extracted from the visible header SVG; inherited fill colors were resolved to make it standalone. Verify permission and license terms before using or redistributing the logo, favicon, font or screenshot.

## Colors

| Token | Value | Observed use |
|---|---|---|
| brand.primary | #222222 | Purchase/search buttons and top campaign bar |
| brand.accent | #0082fa | Blue accent in the page palette |
| brand.promotion | #b50067 | Promotional navigation accent |
| brand.success | #007d00 | Discount prices and coupon badges |
| background.default | #ffffff | Header and content surfaces |
| background.light | #f7f7f7 | Light neutral page regions |
| background.control | #f2f2f2 | Search container and neutral badges |
| background.success | #eef7ed | Coupon and savings badge fill |
| text.primary | #1a1a1a | Main text and headings |
| text.secondary | #444444 | Secondary text and icon controls |
| text.muted | #6e6e6e | Supporting labels |
| text.onDark | #ffffff | Text on dark controls and campaign bar |
| text.link | #0070cc | Blue links |
| border.default | #dddddd | Neutral separators/borders in the measured palette |
| border.subtle | #ebebeb | Lighter neutral detail |

Error and modal overlay colors were not established and remain `null`. The rotating campaign graphics have their own colors; do not treat a campaign image's palette as the general UI palette.

## Typography

Primary family: `"Instrument Sans", sans-serif`. The site supplies one normal-style variable WOFF2 face with declared weights 400-700, `font-display: swap`, and `font-variation-settings: "wdth" 100`.

Downloaded file: `assets/fonts/instrument-sans/InstrumentSans-VariableFont_wdth,wght.woff2`. Verify its license before use.

```css
/* Paths are relative to the stylesheet; adapt to the app's asset loader. */
@font-face {
  font-family: "Instrument Sans";
  src: url("../assets/fonts/instrument-sans/InstrumentSans-VariableFont_wdth,wght.woff2") format("woff2");
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
}
body {
  font-family: "Instrument Sans", sans-serif;
  font-variation-settings: "wdth" 100;
}
```

| Role | Size / line height | Weight |
|---|---|---|
| Small supporting text | 12px / 16px | 400 |
| Badge label | 13px / 16px | 400 |
| Body and product titles | 14px / 20px | 400 |
| Category navigation | 16px / 22px | 400 |
| Larger body | 18px / 24px | 400 |
| Emphasis | 20px / 26px | 400 or 600 depending on element |
| Large text | 24px / 30px | Context dependent |
| Section heading | 26px / 32px | 600 |

Also observed: 10px and 28px text. The header logo's H1 wrapper computes to 28px/700, but contains an SVG; this does not establish a page-title typography rule. Regular 400 and semibold 600 dominate; 500 was not observed.

## Spacing

Use a 4px base as a practical interpretation of recurring values, not a verified internal grid. Observed common values are 4, 8, 12, 16, 20, 24, 32 and 48px. Compact badges also use 2px-related adjustments, and individual controls have optical padding. Keep the measured component values when matching those controls.

## Border radius

| Radius | Context |
|---|---|
| 0px | Structural containers and text wrappers |
| 2px | Small details |
| 4px | Compact labels and discount badges |
| 8px | Buttons, search, compact surfaces |
| 12px | Larger rounded surfaces and cards |
| 100% | Circular elements |

The search assembly also contains asymmetric 8px corner combinations. No 16px or pill-radius token was established.

## Components

- **Header:** white, with measured 72px header element height. The rendered page additionally includes a campaign strip and category navigation. Place the logo left, broad search in the middle, and account/help/list/cart controls right.
- **Category navigation:** measured 58px high; 16px regular dark text, multiple categories across the desktop row.
- **Primary button:** the visible `Kup teraz` control uses #222222, white text, 16px regular type, 12px 24px padding, 48px height and 8px radius.
- **Icon controls:** white, #444444 icons/text, 8px radius; the observed shopping-list control is 36px high with zero padding.
- **Search:** 40px-high #f2f2f2 outer container, 8px radius. Its transparent input is 36px high with 14px/20px text and 8px 0 8px 20px padding. The search button is dark and 40px high.
- **Section headings:** 26px/32px, weight 600. Product names remain smaller, regular weight. Preserve this hierarchy in dense product grids.
- **Savings badge:** #eef7ed background, #007d00 text, 13px type, 4px radius, 20px height and 2.5px 4px 1.5px padding.
- **Campaign bar:** dark background and white text. The outline CTA uses 13px type, 5px 11px padding, 8px radius and a 1px white border at 48% opacity. Keep it as page content, distinct from a modal overlay.
- **Product sections:** white rounded panels against light gray page regions, restrained borders, dense grids, strong product photography, green promotional prices, and minimal decorative shadow.

Hover, keyboard focus, disabled/error states, mobile layout, breakpoints and dark mode were not measured. Inspect those states before treating this reference as a complete implementation specification.

## Logo usage

Use the saved full-color SVG on a white or light neutral surface. The inspected desktop header displays it at 218 x 40px, including its tagline. Preserve the SVG viewBox and aspect ratio; do not recolor or distort it. No approved inverted logo variant or minimum clear-space rule was found; obtain one before placing the wordmark on dark backgrounds.

## Visual style

The page is clean, practical and product-focused. Neutral surfaces and dark controls keep a large catalog readable, while colored accents guide attention toward offers. Rounded controls soften the dense layout without adding heavy decoration. Campaign imagery carries the expressive color and energy; everyday navigation and text remain restrained.

## Verification and limits

Optional cookies were rejected and the consent controls disappeared. No visible dialog was present before capture. The page was scrolled to trigger lazy-loaded images, returned to the top, and captured in full; the saved image was visually checked for overlays. Logo, favicon and font files were checked for valid format and nonzero size; JSON and local document links were checked separately.

The external site emitted console errors and warnings during inspection; this extraction does not certify the site's runtime health. This task only adds reference assets and documentation, without changing the running application.
