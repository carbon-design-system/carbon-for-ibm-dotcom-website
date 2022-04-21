`Core` <!-- category start --><!-- category end -->

The [[Masthead L1]] component is an optional navigational pattern for IBM.com
that allows adopters to add an additional micro navigation across a
topic/category of pages.

![image](https://user-images.githubusercontent.com/3793636/149961723-1f080e10-7224-4f9a-81a4-62f358d8cb61.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Masthead navigation]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/118448193520)

<br />
</details>

<hr width="40%" />

<br />

###### Logic

|         | condition                 | description                                                |
| :------ | :------------------------ | :--------------------------------------------------------- |
| `0.0.1` | `viewport width <= 800px` | [[Masthead L1]] is hidden, moves under [[Masthead mobile]] |

<br />

#### 1. Site name

`required` `CTA`

The site name is an optional link that links the user to a parent hierarchical structure within the IBM IA

###### Events

|         | name      | description                  |
| :------ | :-------- | :--------------------------- |
| `1.0.0` | `onClick` | Navigates to the target URL. |

<br /><br />

#### 2. Navigation

`optional` `component`

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead navigation]] for more details.
