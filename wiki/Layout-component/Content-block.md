`Core` <!-- category start --><!-- category end -->

The [[Content block]] is a reusable core component used to help you build more
complex patterns by placing them within the [[Carbon 2x grid]] or a
[[Content section]]. Many of the options available at this level are optional
providing you with more flexibility.

<!-- ![image](https://user-images.githubusercontent.com/3793636/119082616-0eebe000-b9c4-11eb-8e2a-fcabf8dad107.png) -->

![content-block-static](https://user-images.githubusercontent.com/3793636/121604082-82a36a80-ca0f-11eb-9b51-e44712b477f2.jpg)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" -->

_{{toc auto populates}}_

<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Data model]]
- [[Markdown utility]]
- [[Link list]]
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

- r1: [Box folder](https://ibm.ent.box.com/folder/99481428439)

<br />
</details>

<hr width="40%" />

<br />

### 1. Heading

`optional` `string`

An optional short `String` of text to indicate a change in topic at an `H2`
heading level.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Copy

`optional` `markdown`

An optional `String` of text formatted using the [[Markdown utility]]. It
provides the component with a high level overview of its content.

###### Only include

> All other options should be ignored.

|       | props             | description                                        |
| :---- | :---------------- | :------------------------------------------------- |
| `2.1` | `*italic*`        | The _italic_ option should be included.            |
| `2.2` | `<p>new line</p>` | The new line paragraph feature should be included. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Markdown utility]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Children

`optional` `container`

An optional container area that child components, and other content types can be
passed into.

###### Example

![content-block](https://user-images.githubusercontent.com/3793636/121601206-3f46fd00-ca0b-11eb-9b38-7113fb525854.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. CTA

`optional` `component`

An optional [[CTA]] that allows a user to navigate to related content.

###### Properties and values

|       | props   | values                       |
| :---- | :------ | :--------------------------- |
| `4.1` | `type`  | All types                    |
| `4.2` | `style` | All styles except for `card` |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[CTA]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 5. Aside

`optional` `container`

An optional secondary container for child components, and other content types.
The content provided in this container should be secondary supporting content
towards the component's main content.

###### Logic

|       | condition         | description                                                                                                    |
| :---- | :---------------- | :------------------------------------------------------------------------------------------------------------- |
| `5.1` | `aside === true`  | If aside is true and contains children then [[Layout]] <sup>[5.3](#53-layout)</sup> is used to wrap content.   |
| `5.2` | `aside === false` | If the aside is not provided or missing children than [[Layout]] <sup>[5.3](#53-layout)</sup> is NOT included. |

###### Example

![content-block-aside](https://user-images.githubusercontent.com/3793636/121902980-72c8a680-cced-11eb-8635-1531dff0b4e2.gif)

#### 5.3 Layout

`built-in` `component`

If rendered, the [[Layout]] utility helps lay the main content and the Aside
<sup>[5](#5-aside)</sup> container next to each other properly within the
[[Carbon 2x grid]].

###### Properties and values

|         | props    | values |
| :------ | :------- | :----- |
| `5.3.1` | `type`   | `8-4`  |
| `5.3.2` | `nested` | `true` |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Layout]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
