<!-- toc start --><!-- toc end -->

This is a page template that you can use to style a new page to the Carbon for
IBM.com website.

## Heading & paragraph styles

```
<PageDescription>

This is the styling for the large intro paragraph at the top of the page.

</PageDescription>
```

    ## This generates an H2 heading

    ### This generates an H3 heading

    #### This generates an H4 heading.

    **This is bold text.**

    _This is italic text._

    This is a normal paragraph with a [link](http://www.link.com).

    > This is a block quote.

## Images

This generates a basic image at 12 columns:

    ![image alt text](images/name.png)

This generates images at different widths. <br/> Change the `cols=` value to
`12` for full width images that span 12 columns or `8` for paragraph width image
at 8 columns.

```
<Row>
<Column colLg={8}>

![image alt text](images/name.png)

</Column>
</Row>
```

This generates a fixed image for spec style tab images

```
<div className="image--fixed">

![image alt text](images/name.png)

</div>
```

<!--
Use this syntax for grouped images (2 in a row or 3 in a row):

	**
	![image alt text](images/name.png)
	![image alt text](images/name.png)
	**

	**
	![image alt text](images/name.png)
	![image alt text](images/name.png)
	![image alt text](images/name.png)
	**


Use this syntax for overlay images:

	_
	![image alt text](images/name.png)
	_
-->

### Caption

This generates a caption:

```
<Caption>Insert caption content here.</Caption>
```

This is how to use a caption with an image component:

```
<Row>
<Column colLg={8}>

![image alt text](images/name.png)

<Caption>Insert caption content here.</Caption>

</Column>
</Row>
```

```
<div className="image--fixed">

![image alt text](images/name.png)

</div>

<Caption>Insert caption content here.</Caption>
```

## Lists

    * This is a bulleted list
    * List item 2

- This is a bulleted list
- List item 2

## Tables

    | COL 1      | COL 2   |  COL 3     |
    |------------|---------|------------|
    | Row 1A     | Row 1B  | Row 1C     |
    | Row 2A     | Row 2B  | Row 2C     |
    | Row 3A     | Row 3B  | Row 3C     |

You can reference this
[table generator](https://www.tablesgenerator.com/markdown_tables) for easy
table creation.

## Code & syntax highlighting

We support inline code and code blocks.

    Inline `code` has `back-ticks around` it.


    ```
    Blocks of code are fenced by lines with three back-ticks

    ```

Inline `code` has `back-ticks around` it.

```
Blocks of code are fenced by lines with three back-ticks

```

---

<!-- backlinks start open="true" --><!-- backlinks end -->
