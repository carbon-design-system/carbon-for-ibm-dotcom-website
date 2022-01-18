<!-- category start --><!-- category end -->

The Masthead component brings the [[Masthead L0]] and [[Masthead L1]] together into a single component for adopters to easily leverage and use consistently.

![image](https://user-images.githubusercontent.com/3793636/149961186-d7d39a7d-662d-4d2e-98f3-fb952a33a6e5.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Masthead L0]]
- [[Masthead L1]]
- [[Translation]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/126271959517)

<br />
</details>

<hr width="40%" />

<br />

###### State

|         | name              | description                                                                                                                      |
| :------ | :---------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `0.0.1` | `static`          | Static means it's scrolling with the rest of the content on the page.                                                            |
| `0.0.2` | `sticky`          | Sticky means it's fixated to the top of the page as the user is scrolling.                                                       |
| `0.0.3` | `primarySticky`   | The primary element sticking to the page is always sticky and present no matter the scroll direction.                            |
| `0.0.4` | `secondarySticky` | The secondary sticky element that only scrolls into view pushing the `primarySticky` element down to make room as you scroll up. |

###### Logic

|          | condition                           | description                                                                                          |
| :------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `0.0.5`  | `Masthead top >= scrollTop`         | State becomes `sticky`.                                                                              |
| `0.0.6`  | `Masthead top <= original position` | State becomes `static`.                                                                              |
| `0.0.7`  | `Masthead L1 === false`             | [[Masthead L0]] gets `primarySticky` state if [[Masthead L1]] is not present.                        |
| `0.0.8`  | `Masthead L1 === true`              | [[Masthead L1]] gets `primarySticky` state if present. [[Masthead L0]] gets `secondarySticky` state. |
| `0.0.9`  | `default`                           | By default all data is provided by the [[Translation]] service.                                      |
| `0.0.10` | `custom`                            | The adopter can choose to override and provide their own data.                                       |

> ![question](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> In the future we might want to callout what happens when the Masthead does not contain the lowest level of navigation? (e.g. if table of contents is present that becomes the `primarySticky` state, and then L1 would get `secondarySticky` if present, or L0 would get it if not present.)

<br />

#### 1. Masthead L0

`required` `component`

###### Logic

|         | condition     | description                                                                                   |
| :------ | :------------ | :-------------------------------------------------------------------------------------------- |
| `1.0.1` | `L1 === true` | Hide [[Masthead L0]] navigation if [[Masthead L1]] <sup>[2](#2-masthead-l1)</sup> is present. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead L0]] for more details.

<br />

##### 1.1. Masthead mobile

###### Logic

|         | condition                | description                                                                                                                                                                |
| :------ | :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.1.1` | `L1 navigation === true` | If [[Masthead L1]]'s <sup>[2](#2-masthead-l1)</sup> navigation is present use those navigation items over [[Masthead L0]] navigation items within the [[Masthead mobile]]. |

<br />

#### 2. Masthead L1

`optional` `component`

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead L1]] for more details.
