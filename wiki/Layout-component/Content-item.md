`Core` <!-- category start --><!-- category end -->

The [[Content item]] component is a commonly used structure and style of content
that’s used across many patterns consisting of a heading, media, copy, and
[[CTA]]. Because of its type size and spacing it is typically used lower in a
page's hierarchy.

![content-item--static](https://user-images.githubusercontent.com/3793636/121725811-5b03df00-caaf-11eb-98fd-45fbc2c9ba3e.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Markdown utility]]
- [[Image with caption]]
- [[Video]]
- [[CTA]]

<br />
</details>

<!-- usedby start open="true" -->

_{{usedby auto populates}}_

<!-- usedby end -->

<!-- backlinks start open="true" -->

_{{backlinks auto populates}}_

<!-- backlinks end -->

<a name="resources"></a>

<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Box folder](https://ibm.ent.box.com/folder/101273188385)

<br />
</details>

<hr width="40%" />

<br />

### 1. Heading

`optional` `string`

An optional short `String` of text to indicate a more focused topic at an `H4`
level.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Media

`optional` `component`

Provides the adopter with option to use either [[Image with caption]] or
[[Video]] here.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Image with caption]] for more information.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Video]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Copy

`optional` `markdown`

An optional `String` of text formatted using the [[Markdown utility]]. It
provides the user with detailed content supporting the topic.

###### Ignored properties

> All other options should be included.

|       | props      | values                             |
| :---- | :--------- | :--------------------------------- |
| `3.1` | `**bold**` | The bold option should be ignored. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Markdown utility]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. CTA

`optional` `component`

An optional [[CTA]] that allows a user to navigate to related content.

###### Properties and values

|       | props   | values          |
| :---- | :------ | :-------------- |
| `4.1` | `type`  | All types       |
| `4.2` | `style` | `text` `button` |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[CTA]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
