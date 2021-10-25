<!-- toc start --><!-- toc end -->

Here are some tips and tricks for using the Gatsby theme.

### Linking to an anchor on the same page:

Instead of using the full URL string:

`[Related components](https://www.ibm.com/standards/carbon/patterns/lead-space#related-components-and-patterns)`

simply use the last hash-tag segment:

`[Related components](#related-components-and-patterns)`

### How to open a destination page in a new window

Instead of linking with markdown as follows:

`[link](https://ibm.box.com/s/26ze6is6ff50nohlx5v28fubkh2w2f2x)`

Link using the HTML anchor tag as follows:

`<a href="https://ibm.box.com/s/26ze6is6ff50nohlx5v28fubkh2w2f2x" target="_blank">link</a>`

<hr>

### How to create em dash with markdown

Add the `&mdash;` in between the name and the &mdash; will show up.

<hr>

### Applying grid to images and content

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

<hr>

### Adding a horizontal rule

Use the following element:

`<hr/>`

---

<!-- backlinks start open="true" --><!-- backlinks end -->
