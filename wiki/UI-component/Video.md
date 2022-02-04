`core` <!-- category start --><!-- category end -->

The [[Video]] component utilizes the embeddable Kaltura player
<sup>[r2](#resources)</sup> to play video either on page or in
[[Lightbox media viewer]]. Video allows custom override of all content returned
by the [[Video service]] except video duration.

![video-inline](https://images.zenhubusercontent.com/5be09c3a6102900c6d16d991/f12785fc-4133-4ac0-a959-4c5fb2fdfa0b)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Video service]]
- [[Lightbox media viewer]]
- [[Image]]
- Kaltura player <sup>[r2](#resources)</sup>

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

- r1: [Box folder](https://ibm.box.com/s/9q7rdj73m32hufcw1xwl1td6nr88rghm)
- r2: [Kaltura player](http://player.kaltura.com/docs/api)

<br />
</details>

<hr width="40%" />

### 1. Caption

`optional` `string`

###### Logic

|       | Condition             | Description                                             |
| :---- | :-------------------- | :------------------------------------------------------ |
| `1.1` | `undefined (default)` | Caption prefilled by [[Video service]]'s provided name. |
| `1.2` | `String` provided     | Adding a custom caption overrides the API call.         |

> Duration is appended after string of text in parenthesis. (e.g.
> `caption string (duration)`)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Poster image

`required` `component`

###### Logic

|       | Condition             | Description                                                                                       |
| :---- | :-------------------- | :------------------------------------------------------------------------------------------------ |
| `2.1` | `undefined (default)` | Poster [[Image]] <sup>[2](#2-poster-image)</sup> prefilled by [[Video service]]'s provided image. |
| `2.1` | [[Image]]             | Adding a custom Poster [[Image]] <sup>[2](#2-poster-image)</sup> overrides the API call.          |

###### Events

|       | Events    | Description              |
| :---- | :-------- | :----------------------- |
| `2.3` | `onClick` | Plays video when clicked |

###### Properties & values

|       | Name           | Description                                                                                                                                                              |
| :---- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `2.4` | `playing-mode` | `Inline (default)` replaces Poster [[Image]] <sup>[2](#2-poster-image)</sup>.<br /> `Lightbox` opens [[Lightbox media viewer]] <sup>[3](#3-lightbox-media-viewer)</sup>. |
| `2.5` | `aspect-ratio` | `16x9 (default)`, `9x16`, `2x1`, `1x2`, `4x3`, `3x4`, `1x1`                                                                                                              |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Image]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Lightbox media viewer

`optional` `component`

<img src="https://images.zenhubusercontent.com/5be09c3a6102900c6d16d991/34415287-2c8a-486e-98e5-a2d26cc47f12" width="400px" />

#### 3.A Heading

`optional` `string`

##### Logic

|         | Condition            | Description                                                          |
| :------ | :------------------- | :------------------------------------------------------------------- |
| `3.A.2` | if `string` provided | Pass the `string` to [[Lightbox media viewer]] to override `heading` |

#### 3.B Copy

`optional` `string`

##### Logic

|         | Condition            | Description                                                       |
| :------ | :------------------- | :---------------------------------------------------------------- |
| `3.A.2` | if `string` provided | Pass the `string` to [[Lightbox media viewer]] to override `copy` |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Lightbox media viewer]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
