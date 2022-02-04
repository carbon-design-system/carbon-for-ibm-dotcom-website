`Core` <!-- category start --><!-- category end -->

The Layout core component helps us to layout our different components with a
more standard approach using Carbon’s 2x grid <sup>[r2](#resources)</sup> and
pre-approved layout types.

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" -->

_{{toc auto populates}}_

<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Carbon 2x grid]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/109669699777)

<br />
</details>

<hr width="40%" />

<br />

### 1. Type

`required` `string`

The different types allows an adopter to choose an approved layout option. The
different types will layout an adopters content in different ways, and
responsively behave

|     | type   | description                                              | visual                                                                                                                                                                                                                                                                         |
| :-- | :----- | :------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | `4-12` | Full 16 column layout: 4 columns left, 12 columns right. | <a href="https://user-images.githubusercontent.com/3793636/121963487-c9ef6b00-cd2f-11eb-9845-8f8a17bb44d1.png" target="_blank"><img src="https://user-images.githubusercontent.com/3793636/121963487-c9ef6b00-cd2f-11eb-9845-8f8a17bb44d1.png" alt="4-12" width="300px" /></a> |
| 1.2 | `8-4`  | Intended to be nested within 12 columns.                 | <a href="https://user-images.githubusercontent.com/3793636/121963489-ca880180-cd2f-11eb-9ba3-ee893e03d820.png" target="_blank"><img src="https://user-images.githubusercontent.com/3793636/121963489-ca880180-cd2f-11eb-9ba3-ee893e03d820.png" alt="8-4" width="300px" /></a>  |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Children

`required` `container`

The children property allows the adopter to place their content within the
correct column to be laid out.

###### Examples

![layout](https://user-images.githubusercontent.com/3793636/122071996-d372e480-cdbc-11eb-8242-38eaee8d583f.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Nested

`optional` `boolean`

The nested option allows a given layout to sit comfortably within the
[[Carbon 2x Grid]] allowing everything to continue to line up properly.

###### Logic

|     | condition          | description                                                                                                                              |           |
| :-- | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| 3.1 | `nested === true`  | If nested is `true` do not include the `.bx—grid` so it can be nested within [[Carbon 2x Grid]]. Everything should still align properly. |           |
| 3.2 | `nested === false` | If `false` render it as a normal [[Carbon 2x Grid]] including the `.bx—grid`                                                             | `default` |

###### Example

![layout--nested](https://user-images.githubusercontent.com/3793636/122094807-2e630680-cdd2-11eb-898d-9bb8c9301b1d.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. Border

`optional` `boolean`

The optional border is displayed at the bottom of the [[Layout]] providing a
visual indicator for a change of topic. Typically used when nesting the
component.

###### Logic

|     | condition          | description                                                                  |           |
| :-- | :----------------- | :--------------------------------------------------------------------------- | :-------- |
| 3.1 | `border === true`  | If border is `true` then the component’s border at the bottom should render. |           |
| 3.2 | `border === false` | If border is `false` then the component’s border should NOT render.          | `default` |

###### Example

![layout--border](https://user-images.githubusercontent.com/3793636/122085889-c956e300-cdc8-11eb-8bc5-6d493aefd89d.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 5. Sticky

`optional` `boolean`

Optionally each column can be set to stick or be fixed to the top of the page.

###### Logic

|     | condition              | description                                                                                                          |     |
| :-- | :--------------------- | :------------------------------------------------------------------------------------------------------------------- | :-- |
| 3.1 | `[data-sticky=“true”]` | If a child’s data-sticky attribute is set to `true` then that column becomes sticky. By default it’s `false`.        |     |
| 3.2 | `stickyOffset === #`   | The stickyOffsett number will determine how far from the top of the page in pixels it will begin its sticky journey. |

```html
<Layout type="“4-12”">
  <div data-sticky="“true”">{content for column 1}</div>
  <div>{content for column 2}</div>
</Layout>
```

###### Example

![layout--sticky](https://user-images.githubusercontent.com/3793636/122078202-07043d80-cdc2-11eb-9d30-da25f952c7e3.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
