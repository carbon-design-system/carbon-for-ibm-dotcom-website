`Core` <!-- category start --><!-- category end -->

[[Tabs extended]] extends the [[Carbon tabs]] component by adding the accordion
to smaller breakpoints. This extension in feature allows the content to be more
accessible at smaller breakpoints and mobile users.

![tabs-extended-annotated](https://user-images.githubusercontent.com/3793636/128079806-5fad9f31-686f-444b-8224-00559e75506a.gif)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Carbon accordion]]
- [[Carbon tabs]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/133802998765)

<br />
</details>

<hr width="40%" />

<br />

### 1. Children

The children can have anything placed inside of it from content to another
component as seen in [[Tabs extended media]]. The children are shared across the
[[Carbon tabs]], and [[Carbon accordion]] across all breakpoints. Each tab item,
and related accordion item has an area for its own children.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Tabs

The tabs leverages [[Carbon tabs]] as is for the most part as a dependency, and
passes its corresponding children <sup>[1](#1-children)</sup> for that tab. The
only differences are listed below. Children <sup>[1](#1-children)</sup>, and tab
titles mirror accordion, and is only visible at larger breakpoints.

###### Logic

|         | condition        | description                                                |
| :------ | :--------------- | :--------------------------------------------------------- |
| `2.0.1` | `lg` `xlg` `max` | Any breakpoint `lg` and larger renders the [[Carbon tabs]] |
| `2.0.2` | `sm` `md`        | Any breakpoint `md` and smaller hides the [[Carbon tabs]]  |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon tabs]] for more information

<br />

#### 2.1 Item

###### Logic

|         | condition                    | description                                                                                                                          |
| :------ | :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `2.1.1` | content overflows at 2 lines | Content overflows at 2 lines instead of the components original 1 line overflow.                                                     |
| `2.1.2` | removed fixed width          | Tab width is based on content, and should not have a fixed width.                                                                    |
| `2.1.3` | `active`                     | First item active `onLoad` unless author overrides. Mirrors accordion's <sup>[3](#3-accordion)</sup> active state as user interacts. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for visual details

<br />

#### 2.2 Orientation

###### Logic

|         | condition              | description                                                                                                                                                           |
| :------ | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `2.2.1` | `horizontal (default)` | By default, or when this option is selected this component lays its tabs out in a horizontal line next to each other with children <sup>[1](#1-children)</sup> below. |
| `2.2.2` | `vertical`             | When the `vertical` option is selected the tabs are stacked on top of each other off to the side of its children <sup>[1](#1-children)</sup>.                         |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for visual details

<br />

###### Visual example

<img src="https://user-images.githubusercontent.com/3793636/127923426-f67b731c-0a6f-49a6-9179-b1710a822ae0.gif" width="300px" />

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Accordion

The accordion uses the [[Carbon accordion]] as a dependency without hardly any
changes. This is used at the smaller breakpoints to allow for better reading of
tabs on smaller devices, and mirrors the children <sup>[1](#1-children)</sup>
and active tabs within the tab <sup>[2](#2-tabs)</sup> at larger breakpoints.

###### Logic

|         | condition        | description                                                      |
| :------ | :--------------- | :--------------------------------------------------------------- |
| `3.0.1` | `lg` `xlg` `max` | Any breakpoint `lg` and larger hides the [[Carbon accordion]]    |
| `3.0.2` | `sm` `md`        | Any breakpoint `md` and smaller renders the [[Carbon accordion]] |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon accordion]] for more information

<br />

#### 3.1 Item

###### Logic

|         | condition | description                                                                                                                                               |
| :------ | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `3.1.1` | `active`  | First item active `onLoad` unless author overrides. Mirrors tabs' <sup>[2](#2-tabs)</sup> active state as user interacts. Only one active item at a time. |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
