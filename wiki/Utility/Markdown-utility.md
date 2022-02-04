<!-- category start --><!-- category end -->

The [[Markdown utility]] is a light text formatting utility that will convert a
limited set of markdown to valid HTML markup. Each markdown conversion option
can be turned on or off. By default, this utility will use Carbon classes and
strips out extraneous `HTML` tags.

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Carbon link]]
- [[Carbon list]]

<br />
</details>

<!-- usedby start -->

_{{usedby auto populates}}_

<!-- usedby end -->

<!-- backlinks start -->

_{{backlinks auto populates}}_

<!-- backlinks end -->

<a name="resources"></a>

<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Box folder](https://ibm.ent.box.com/folder/101190012021)

<br />
</details>

<hr width="40%" />

<br />

### 1. Markdown allowed

String will be input into the utility, where it will search for particular
string patterns and convert them to the corresponding valid HTML markup.

###### logic

|       | type           | markup                                   | description                                                                                    |
| :---- | :------------- | :--------------------------------------- | :--------------------------------------------------------------------------------------------- |
| `1.1` | _italic_       | `*italic*` or `_italic_`                 | Renders content between a single `*` or `_` as _italic_. (e.g. `<em>`_text_`</em>`)            |
| `1.2` | **bold**       | `**bold**` or `__bold__`                 | Renders content between a double `*` or `_` as **bold** . (e.g. `<strong>`**text**`</strong>`) |
| `1.3` | paragraph      | `\n\n`                                   | Renders content before double new line as a paragraph (e.g. `<p>`...content...`</p>`)          |
| `1.4` | unordered list | ` - list item 1`<br />` * list item 2`   | Renders one or more lines starting with `-` or `*` as an unordered list.                       |
| `1.5` | ordered list   | ` 1. list item 1`<br />` 2. list item 2` | Renders one or more lines starting with a number `1.` or `*` as an ordered list.               |
| `1.6` | Hyperlink      | `[text](url)`                            | Renders content as an inline [[Carbon link]]                                                   |
