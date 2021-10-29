<!-- toc start --><!-- toc end -->

For anyone interested in contributing to the Carbon for IBM.com website, we
follow a set of guidelines to ensure consistency across site content.

1. Read these production guidelines for best practices.
2. For this site, Gatsby Theme with Markdown is used. Reference this page for
   details:
   [markdown cheatsheet](https://gatsby-theme-carbon.now.sh/components/markdown/).
3. Create your content, images, etc.
4. Submit a PR to the `carbon-for-ibm-dotcom-website`.
5. View the
   [Contribution overview page](https://www.ibm.com/standards/carbon/contributions/overview)
   for contribution details.

---

# Writing content

The website is written in markdown, which makes it easy for anyone to contribute
content in a systematic way. If you are not familiar with markdown, check out
[markdown cheatsheet](https://gatsby-theme-carbon.now.sh/components/markdown/).

- Aim for a friendly and encouraging tone.
- Speak directly to the user. You can use the second person pronoun ("you").
- Use “the user” when it doesn’t have to be multiple, and “users” when the
  notion of multiple users is needed.
- Keep sentences and paragraphs short and focused.
- Be clear and concise by removing unnecessary words. The more concise the text,
  the easier it is for all users to understand.
- Use sentence case for everything, including component names, e.g.
  `Content switcher` and `Data table`.

> **Pro-tip**: Remember to use _quotation marks_ (“ ”) instead of _inch marks_
> (" ")

## Numerals versus words

In general, use numerals to represent all numbers, however large or small. For
numbers below 10, it is alternatively acceptable to use words instead of
numerals. Within a publication, be consistent in your approach. Please check out
the
[numerals versus words page](https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/numerals-versus-words.html)
to learn morme.

**Correct examples:**

- The upgrade affected 12 servers.
- The 10th message is important.
- The player has number 8 on his shirt.
- The number of files processed averages 5.4 per cycle.
- (One option) Use the 2nd method.
- (Alternative option) Use the second method.

---

# Creating images

## Sizes

We support four image sizes based on type:

| SIZE           | WIDTH  | TYPE                                                                | EXAMPLE                                                                                    |
| -------------- | ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Large/lg       | 1120px | Wide format images and larger components (Ex. Masthead)             | Masthead/ Masthead Level 0 image: https://www.ibm.com/standards/carbon/components/masthead |
| Medium/md      | 736px  | Full width image                                                    | Card/Default image: https://www.ibm.com/standards/carbon/components/card                   |
| Small/sm       | 448px  | Half width image, and cropped images                                | -                                                                                          |
| Extra small/xs | 352px  | Half width image, ex-small components. Usually a 2 up do/don't pair | Layout/2X Grid do/don't images:https://www.ibm.com/standards/carbon/guidelines/layout      |

Please export images at 2x size to support retina displays.

Images should have a white background. When presenting components on the Gray 10
theme, use a 16px white border on the image so it doesn't blend into the webpage
background. When presenting components on a white theme, use a 1px gray
(ui-03/Gray20/#e0e0e0) border around the component itself, so adopters can see
what is included in the component.

The artwork in an image does not have to fill the full image size. White space
is ok but the artwork should always be centered aligned on the image. If there
is excessive or limited white space consider using a different size.

> **Pro-tip:** Two half width images (290px) can be arranged side by side to
> give the appearance of a full image. This allows images to stack a responsive
> breakpoints without having to generate two sets of images.

## Aspect ratio

When setting up images for the website page, use a common `16:9`, `4:3`, `3:2`,
`2:1`, or `1:1` aspect ratio unless otherwise specified for a particular format.
These common aspect ratios work well with the 2x Grid foundation. They help
create a visual rhythm within everything created using IBM Design Language—from
UI components to signage, event spaces, and beyond.

## File type

The Carbon fro IBM.com website supports and hosts `JPG`, `PNG`, `SVG` and `GIF`
image formats.

### JPG/JPEG

- JPEG is a file extension that stands for Joint Photographic Experts Group,
  JEPG is defined with the additional extension as JPG.
- JPG is preferred for raster-graphics, like static images and photographs (Ex.
  Lead space).
- While the JPG format is great for color and photographs, it is also important
  to note that there is a slight loss of quality due to compression.

### PNG

- PNG is a file extension that stands for Portable Network Graphics.
- PNG is used for graphs, diagrams, and anywhere you want to display flat colors
  and lines that won’t need to scale up. They are a lossless image format, which
  means when they are compressed, they don’t lose any data. They also allow for
  alpha transparency. When you need to overlay an image on a different colored
  background, PNG files work well.
- **Note:** Text inside of a png is not accessible and therefore a PNG should
  never contain important information that cannot be accessed elsewhere on the
  page.

### SVG

- SVG is a file extension that stands for Scalable Vector Graphic.
- SVG is preferred for vector-graphics.
- Use an SVG file format when you have a flat, relatively simple asset such as
  logos, icons, basic shapes, and line art. Accessible text inside SVGs is
  possible but long strands of copy should be avoided.

### GIF

- GIF is a file extension that stands for Graphics Interchange Format.
- GIFs are the preferred animation image format used on Carbon to show motion
  and interactions examples.

## Exporting PNG and SVG

For images to render properly, export them from Sketch or Illustrator by:

- Aligning all elements to the pixel grid
- Export at 2x for PNG
- Background should be transparent

## Creating GIFs

We recommend using the image sizes above and a tool called
[GIF Brewery](http://gifbrewery.com/) for creating animated GIFs by recording
from your desktop or open browser window.

## Naming conventions

Images are named using the format:
`page name - section name - usage.file format`

**Examples:**

- `masthead-beheavor-default.png`
- `footer-variations-usecase 01.jpg`

## Accessibility

`Alt text` describes an image and is used for a variety of reasons. Include
`alt text` so on hover the browser tooltip displays the text. In cases when an
image doesn't render, the `alt text` will show in lieu of the image.
Additionally, `alt text` enables users who rely on assistive technology to know
what the image represents. In the HTML, make sure the `alt text` is in brackets
before the image URL:

`![alt text goes here](image URL goes here)`

---

# Creating content for component pages

Each component page is divided into three tabs, Code, Usage, and Style, and
differs in content given the section:

## Code tab

Define the component and include any documentation for SCSS and Javascript.

## Usage tab

Explain how to use the component, which may include best practices and
frequently asked questions. Use static images to support your content and GIFs
when explaining interactive elements.

If a component has multiple variations, include a comparison table to show the
differences between them and when to use which variation. This table can be
styled using markdown. Check out this handy
[table generator](https://www.tablesgenerator.com/markdown_tables).

## Style tab

Order applicable content by:

1. Color
1. Typography
1. Layer
1. Structure

Structure may include states, pacing, and any other component-specific
variations. Add supporting images to this section, with at least one image
showing how color is applied within the component and another showing structure
and spacing measurements. Images are accompanied by a descriptive caption below
the image and used in conjunction with the spec charts.

> **Pro-tip**: Use lowercase when referencing HEX values (`#ffffff` instead of
> `#FFFFFF`).

### Spec guidelines

All style image specs are set in
[IBM Plex Mono](https://github.com/IBM/type/blob/master/LICENSE.md). Numerical
measurements include both pixels and rems and follow the naming convention
`#px/#rem` (please note the lack of spaces between the forward slash). We
recommend using this [site](http://pxtoem.com/) for converting pixels to rems.
The increment unit `##px/##rem` only needs to for one measurement per image; the
remaining measurements can simply read `##/##`. Measurements are presented
horizontally for readability and never flipped vertically to fit smaller spaces.
Specs can be broken up into two lines if necessary.

Keep as many spec lines and measurements outside the component as possible for
easy readability.

| PROPERTY                | SPACING (PX) |
| ----------------------- | ------------ |
| Spec line & component   | 4            |
| Measurement & spec line | 2            |

![button spec lines.png](https://images.zenhubusercontent.com/5bbba771387e41362246f3dc/02952eee-5b0c-484c-a5c3-64e872298b35)

Spec lines have a 1px thickness and flat ends. To add endings to an open path in
Sketch, go to the Borders section in the right-side panel, click the gear icon
and select the flat end option for both the start and end arrow dropdown menus.

![Adding flat ends to a line in Sketch](https://media.github.ibm.com/user/525/files/de3259b6-af50-11e7-9a27-9a2499595a9c)

### Spec color usage

| ITEM                    | COLOR                 | PURPOSE                                                                                                                | PX/REM        |
| ----------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- |
| Magenta text            | #d12765               | -                                                                                                                      | Mono, 12/0.75 |
| Magenta lines           | #d12765               | Height and width measurements for a component as well as key elements within a component such as row height and icons. | 1px stroke    |
| Teal text               | #007d79               | -                                                                                                                      | Mono, 12/0.75 |
| Teal lines              | #009e9a               | -                                                                                                                      | 1px stroke    |
| Teal overlay            | #87eded @ 50% opacity | External padding/margin as well as internal spacing between component elements.                                        | -             |
| Purple blocks and lines | #8a3ffc               | Spacing of units in components.                                                                                        | -             |

![spec-example-2.png](https://images.zenhubusercontent.com/5bbba771387e41362246f3dc/561f7612-2355-4b36-ac8b-353104e9a076)

# Tips and tricks

Here are some tips and tricks for using the Gatsby theme. To learn more about
the Gatsby theme, please visit the
[Gatsby Theme Carbon website](https://gatsby-theme-carbon.now.sh/).

### How to open a destination page in a new window

Instead of linking with markdown as follows:

`[link](https://ibm.box.com/s/26ze6is6ff50nohlx5v28fubkh2w2f2x)`

Link using the HTML anchor tag as follows:

`<a href="https://ibm.box.com/s/26ze6is6ff50nohlx5v28fubkh2w2f2x" target="_blank">link</a>`

### How to create em dash with markdown

Add the `&mdash;` in between the name and the &mdash; will show up.

### How to apply grid to images and content

Use the following two React components to create rows and columns.

`<Row>` creates a row. `<Column>` creates a column.

The following example creates a column structure that spans 8 columns, leaving
the right 4 columns empty.

```
<Row>
<Column colMd={8} colLg={8}>

![Base type size change](../../images/guidelines/expressive-theme/exp-theme-research-visual.png)

</Column>
</Row>
```

### How to add a horizontal rule

Use the following element:

`<hr/>`

---

<!-- backlinks start open="true" --><!-- backlinks end -->
