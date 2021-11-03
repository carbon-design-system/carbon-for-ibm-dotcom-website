`Decorator` <!-- category start --><!-- category end -->

[[Content block horizontal]] is a decorator block component for displaying
[[Content item horizontal]] components in the children container of the
[[Content Block]] as a list.

![component--content-block-horizontal](https://user-images.githubusercontent.com/3793636/138486851-4aaa2d46-bd57-4358-8fbf-3ef4d1cb25c2.jpg)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Content block]]
- [[Content item horizontal]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/112271053028)

<br />
</details>

<hr width="40%" />

<br />

### 1. Content block

`component`

The [[Content block]] provides us the visual consistency of our other block
level components. This decorator only uses its `heading`, and `children` options
where the [[Content item horizontal]] <sup>[2](#2-content-item-horizontal)</sup>
components will sit in.

#### 1.2 Heading

`required` `string`

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Content block]] for more details.

#### 1.2 Children

`required` `container`

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Content block]] for more details.

### 2. Content item horizontal

`required` `component`

[[Content item horizontal]] uses the component directly as is, and can display
**_one or more_** within the [[Content block]] children
<sup>[1.2](#12-children)</sup> container.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Content item horizontal]] for more details.

###### Example

<img src="https://user-images.githubusercontent.com/3793636/138485114-0f9578da-daea-4b94-99dc-d3e62b3a52ec.gif" width="400px" alt="content-block-horizontal-children" />
