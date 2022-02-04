`Core` <!-- category start --><!-- category end -->

The [[Content group]] is a component that can be used inside of
[[Content block]] level component. It can have 1 or more children, but generally
only one type of child should be used within this component.

![content-group--static](https://user-images.githubusercontent.com/3793636/121752904-cf9e4400-cad6-11eb-9d48-c7e3b0132749.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" -->

_{{tocauto populates}}_

<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Markdown utility]]
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

- r1: [Box folder](https://ibm.ent.box.com/folder/99478674482)

<br />
</details>

<hr width="40%" />

<br />

### 1. Heading

`required` `string`

An optional short `String` of text to indicate a change in topic at an `H3`
heading level.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Copy

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

### 3. Children

`optional` `container`

An optional container area that child components, and other content types can be
passed into.

###### Example

![content-group](https://user-images.githubusercontent.com/3793636/121752225-4b978c80-cad5-11eb-85a3-80d1e92da9ec.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. CTA

`optional` `component`

An optional [[CTA]] that allows a user to navigate to related content.

###### Properties and values

|       | props   | values     |
| :---- | :------ | :--------- |
| `4.1` | `type`  | `local`    |
| `4.2` | `style` | `cardlink` |

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> Should we open this up to allow a few more options?

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[CTA]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
