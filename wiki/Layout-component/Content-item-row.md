`Core` <!-- category start --><!-- category end -->

[[Content item row]] is a component for displaying basic text elements
and [[CTA]]s in a horizontally-distributed column layout.

![component--content-item-row](https://user-images.githubusercontent.com/3793636/138167447-f1b4b258-6d65-4e60-b4b7-087fb3107db6.jpg)

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> This component is technically not related to the core [[Content item]].

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Markdown utility]]
- [[Link list]]
- [[Image with caption]]
- [[Video]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/112262788897)

<br />
</details>

<hr width="40%" />

<br />

### 1. Eyebrow

`optional` `string`

Static text element that displays a secondary header for the pattern.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Heading

`required` `string`

Static text element that displays a primary header for the pattern.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Media

`optional` `component`

The media here is can be an [[Image with caption]] or a [[Video]].

###### Alignment modifiers

|         | values      | description                                                                                            |           |
| :------ | :---------- | :----------------------------------------------------------------------------------------------------- | :-------- |
| `3.0.1` | `right`     | Aligns the media right, and content left.                                                              | `default` |
| `3.0.2` | `left`      | Aligns media left, and content right.                                                                  |           |
| `3.0.3` | `thumbnail` | Sets the smaller size image off to the side. Hides any caption, and eyebrow <sup>[1](#1-eyebrow)</sup> |           |
| `3.0.4` | `feature`   | Media takes full width of component to grab attention.                                                 |           |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Image with caption]] and [[Video]] for more details.

<br />

###### Right / left examples

<img src="https://user-images.githubusercontent.com/3793636/138164579-8bc107d0-cab3-453d-a074-d8695a6b25ee.png" width="200px" alt="left / right example"/>

###### Thumbnail example

<img src="https://user-images.githubusercontent.com/3793636/138164784-f5da7323-26ea-4e50-8f5d-c97131fc3033.png" width="200px" alt="thumbnail example" />

###### Featured example

<img src="https://user-images.githubusercontent.com/3793636/138164960-980d1912-5d5b-482a-91aa-0f5cc722b1d4.png" width="200px" alt="featured example" />

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. Copy

`required` `markdown`

Static text element that displays body copy for the pattern using markdown.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Markdown utility]] for more details.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 5. Link list

`optional` `component`

[[Link list]] is used here to display CTAs.

###### Set modifiers

|         | name        | value      |
| :------ | :---------- | :--------- |
| `5.0.1` | `heading`   | `false`    |
| `5.0.2` | `layout`    | `vertical` |
| `5.0.3` | `columns`   | `1`        |
| `5.0.4` | `CTA style` | `text`     |

> If not explicitly stated, additional modifiers should be allowed to pass
> through at adopters discretion.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Link list]] for more details.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
