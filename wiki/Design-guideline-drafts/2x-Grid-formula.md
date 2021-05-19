
<!-- toc start --><!-- toc end -->

The 2X grid is a concept, rather than a set of pre-fixed breakpoints.

Formula to create a new 2X grid:

`Artboard width = (p * 2 + w) * c + m * 2`
- p: padding. The standard is 16px for digital screens.
- w: content width between paddings.
- c: number of columns. For large screens, typically 16. For tablet, 8, and for phone, 4.
- m: margin width. The standard is 16px for digital screens. This value is set to 0 for the standard small breakpoint.

Try different values for `w` to find the artboard width that is a multiple of the mini-unit, 8px.

---

<!-- backlinks start open="true" --><!-- backlinks end -->