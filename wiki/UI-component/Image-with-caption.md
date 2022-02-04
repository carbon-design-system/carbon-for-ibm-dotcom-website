`Decorator` <!-- category start --><!-- category end -->

This component wraps the responsive [[Image]] component we’ve built and provides
it with a caption, and option to zoom in to see a larger and clearer version of
the image.

![component--media--embedded-image--states--design-specs](https://user-images.githubusercontent.com/3793636/128093861-49d88268-98e8-4e75-b500-74327c57fd63.jpg)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Image]]
- [[Lightbox media viewer]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/109643123498)

<br />
</details>

<hr width="40%" />

<br />

### 1. Image

`required` `component`

###### Events

|         | event              | description                                                                                                                    |
| :------ | :----------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `1.0.1` | `onClick && 4.0.2` | Launches the [[Lightbox media viewer]] <sup>[4](#4-lightbox-media-viewer)</sup> if enabled. The whole image area is clickable. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Image]] for more details

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for visual states

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Caption

`optional` `string`

A short descriptive text that lives below the image.

###### Logic

|         | condition | description                                                                                               |
| :------ | :-------- | :-------------------------------------------------------------------------------------------------------- |
| `2.0.1` | `4.0.2`   | String of text is passed to [[Lightbox media viewer]]'s' <sup>[4](#4-lightbox-media-viewer)</sup> heading |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Button icon

The button icon is displayed only if the [[Lightbox media viewer]]
<sup>[4](#4-lightbox-media-viewer)</sup> is enabled to help communicate to the
user that they can view this image with more detail.

###### Logic

|         | condition | description          |
| :------ | :-------- | :------------------- |
| `3.0.1` | `4.0.1`   | Button is hidden.    |
| `3.0.1` | `4.0.2`   | Button is displayed. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for visual states

<br />

### 4. Lightbox media viewer

`optional` `component`

![component--media--embedded-image--states--design-specs copy](https://user-images.githubusercontent.com/3793636/128093281-fc92a1e9-8992-47b6-8cf5-742bd9b8388f.jpg)

###### Logic

|         | condition | description                                                 |
| :------ | :-------- | :---------------------------------------------------------- |
| `4.0.1` | `false`   | `default` disables the the use of [[Lightbox media viewer]] |
| `4.0.2` | `true`    | Enables the the use of [[Lightbox media viewer]]            |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Lightbox media viewer]] for more details

<br />

#### 4.1 Image

`component`

The [[Image]] here mirrors the [[Image]] <sup>[1](#1-image)</sup> component from
above.

<br />

#### 4.2 Heading

`string`

This string of text mirrors the Caption <sup>[2](#2-caption)</sup> content
outlined above.

<br />

#### 4.3 Copy

`optional` `string`

An optional paragraph of text that allows the author to provide more details
around the image.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
