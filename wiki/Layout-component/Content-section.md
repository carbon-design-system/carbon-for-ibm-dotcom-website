<!-- category start --><!-- category end -->

The [[Content section]] is a core component that can be used as a section level
wrapper. It includes a heading and optional children.

![content-section--static](https://user-images.githubusercontent.com/3793636/121749433-45eb7800-cad0-11eb-95a0-0cbe868e6489.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" -->

_{{toc auto populates}}_

<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Layout]]
- [[CTA]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/101351204820)

<br />
</details>

<hr width="40%" />

<br />

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> Should consider replacing heading, copy, and CTA with a [[Content item]].
> Issue right now is hierarchy `H2` vs `H4`?

<br />

### 1. Heading

`optional` `string`

An optional short `String` of text to be displayed as an `H2` level heading, and
indicates a change in section.

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> Is this an `H2` even when it has a child of [[Content block]] that is also an
> `H2`, or is it more of an either or situation?

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Copy

`optional` `string`

An optional short `String` of text that describes the section in a little more
detail.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. CTA

`optional` `component`

An optional section level [[CTA]] that allows a user to navigate to related
content.

###### Properties and values

|       | props   | values                |
| :---- | :------ | :-------------------- |
| `4.1` | `type`  | All except for `jump` |
| `4.2` | `style` | `text`                |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[CTA]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. Children

`optional` `container`

An optional container area that child components, and other content types can be
passed into.

> _When nesting children use with the [[Layout]] utility's `8-4` and nested
> option set to `true` for proper alignment to the [[Carbon 2x grid]]._

###### Example

![content-section](https://user-images.githubusercontent.com/3793636/121746387-6d8c1180-cacb-11eb-81e3-da65edd99019.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 5. Layout

`built-in` `component`

The [[Content Section]] uses the [[Layout]] core component to position itself
and body content in the expected column layout. Refer to [[Layout]] functional
specs for details

###### Properties and values

|       | props    | values  |
| :---- | :------- | :------ |
| `5.1` | `type`   | `4-12`  |
| `5.2` | `nested` | `false` |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Video]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
