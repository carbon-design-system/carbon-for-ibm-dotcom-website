`Decorator` <!-- category start --><!-- category end -->

The [[Lightbox media viewer]] opens up a piece/series of content over the
current page for a closer/detailed look. The background is dimmed to give focus
to the content being interacted with. It's great for slideshows and galleries,
or anywhere you might not have a lot of room to see the piece of media content
in detail.

![annotated-lightbox-media-viewer](https://user-images.githubusercontent.com/3793636/127394547-ab241756-45c8-496d-846e-c69fcc1725ea.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Expressive modal]]
- [[Carousel]]
- [[Image]]
- [[Video]]
- [[Video service]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/84558325642)

<br />
</details>

<hr width="40%" />

<br />

###### Events

| event   | description                                                                                            |
| :------ | :----------------------------------------------------------------------------------------------------- |
| onOpen  | Sets the Media Viewer's initial state. Start with the first piece of media unless otherwise specified. |
| onClose | Reset state of Media Viewer. (e.g. stop playing videos)                                                |

<br /><br /><br />

### 1. Expressive Modal

`required` `component`

The [[Expressive modal]] wraps the Viewer <sup>[2](#2-viewer)</sup> or
[[Carousel]] <sup>[3](#3-carousel)</sup> content to be viewed, dims the
background, and ultimately launches the experience based on a user's
interaction.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Expressive modal]] for more information

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Viewer

The viewer contains all the details for a given media object being viewed. It
presents a large piece of media to be viewed with supporting `heading` and
`copy` to provide the user with more information about what they are looking at.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for more information

<br />

<img src="https://user-images.githubusercontent.com/3793636/127394541-5e5aebd5-200e-40c5-ba74-dcd2a6cde8f9.png" />

<br /><br />

#### 2.1 Media

`required` `component`

Renders an [[Image]] or [[Video]] depending on what the adopters passes.

###### Logic

|         | Condition      | Description                                                                                |
| :------ | :------------- | :----------------------------------------------------------------------------------------- |
| `2.1.1` | [[Image]]      | If an [[Image]] is provided, render it as the main media piece.                            |
| `2.1.2` | [[Video]] `ID` | If a [[Video]] `ID` is provided use the [[Video service]] to get [[Video]] data and render |

#### 2.2 Heading

`optional` `string`

###### Logic

|         | Condition             | Description                                                        |
| :------ | :-------------------- | :----------------------------------------------------------------- |
| `2.2.1` | `undefined (default)` | `heading` is pre-filled by [[Video service]]'s `name` if provided. |
| `2.2.2` | `String` provided     | Adding a custom `heading` overrides any API call.                  |

#### 2.3 Copy

`optional` `string`

###### Logic

|         | Condition             | Description                                                                 |
| :------ | :-------------------- | :-------------------------------------------------------------------------- |
| `2.3.1` | `undefined (default)` | `copy` here is pre-filled by [[Video service]]'s `description` if provided. |
| `2.3.2` | `String` provided     | Adding a custom `copy` overrides any API call.                              |

#### 2.4 Heading and copy

`optional` `string`

This section outlines how the combined content of `heading`
<sup>[2.2](#22-heading)</sup>, and `copy` <sup>[2.3](#23-copy)</sup> behave
together.

###### Logic

|         | Condition                                                  | Description                                                                                                                                       |
| :------ | :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `2.4.1` | `y-overflow`                                               | If content exceeds the height of the viewer area then handle the overflow of content with scrolling and a gradient above and below.               |
| `2.4.3` | `y-overflow` `sm`                                          | No overflow needed at the small breakpoint if [[Carousel]] <sup>[3](#3-carousel)</sup> isn't being used                                           |
| `2.4.2` | `y-overflow` `sm` [[Carousel]] <sup>[3](#3-carousel)</sup> | If [[Carousel]] <sup>[3](#3-carousel)</sup> is included at the smallest breakpoint then the above <sup>[2.4.1]</sup> overflow is still in effect. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for more information

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Carousel

`optional` `component`

The [[Carousel]] component can be included to help view, and navigate between
one or more pieces of media content.

###### Logic

|       | Condition                                       | Description                                                                                |
| :---- | :---------------------------------------------- | :----------------------------------------------------------------------------------------- |
| `3.1` | `2` or more `media` <sup>[2.1](#21-media)</sup> | Carousel renders wrapping multiple `viewer` <sup>[2](#2-viewer)</sup> to navigate through. |
| `3.2` | `1` or less `media` <sup>[2.1](#21-media)</sup> | Carousel does not render.                                                                  |

###### Example

![lightbox-media-viewer](https://user-images.githubusercontent.com/3793636/127399627-d851f48a-6555-4e01-8bb4-c5b05a0cb7e3.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
