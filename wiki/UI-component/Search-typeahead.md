`Decorator` <!-- category start --><!-- category end -->

[[Search typeahead]] brings together [[Carbon search]] and the
[[Search typeahead service]] to provide this reusable search component with
typeahead functionality.

![image](https://user-images.githubusercontent.com/3793636/149972679-e0422b77-395e-4c7f-b782-93a7ea598565.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Carbon search]]
- [[Search typeahead service]]
- [[Carbon dropdown]]
- [[Carbon icons]]

<br />
</details>

<!-- usedby start open="true" -->

_{{usedby auto populates}}_

<!-- usedby end -->

<!-- backlinks start open="true" -->

_{{backlinks auto populates}}_

<!-- backlinks end -->

<a name="resources"></a>

<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Box folder](https://ibm.ent.box.com/folder/137924368899)

<br />
</details>

<hr width="40%" />

<br />

###### Logic

|         | condition                  | description                                |
| :------ | :------------------------- | :----------------------------------------- |
| `0.1.0` | `scope variable found`     | Variables from page sets scope initially.  |
| `0.1.1` | `scope variable not found` | Defaults scope to all of IBM if not found. |

###### Modifiers

|         | value | type      | description                                  |
| :------ | :---- | :-------- | :------------------------------------------- |
| `0.1.2` | cta   | `boolean` | Hide `default` or shows optional CTA button. |

<br /><br />

#### 1. Carbon search

`required` `component`

###### Logic

|         | condition        | description                                                |
| :------ | :--------------- | :--------------------------------------------------------- |
| `1.0.0` | `scope selected` | Placeholder value changes to reflect selected scope state. |

###### Events

|         | name                      | description                                                                 |
| :------ | :------------------------ | :-------------------------------------------------------------------------- |
| `1.0.1` | `onRender`                | Input gets focus                                                            |
| `1.0.2` | `onEnter`                 | Navigates to search results page.                                           |
| `1.0.3` | `onKeyDown with value`    | Typeahead <sup>[2](#2-typeahead)</sup> initialized with `value` and `scope` |
| `1.0.4` | `onKeyDown without value` | Typeahead <sup>[2](#2-typeahead)</sup> closed                               |
| `1.0.5` | `onClear`                 | Typeahead <sup>[2](#2-typeahead)</sup> closed                               |
| `1.0.5` | `onBlur`                  | Typeahead <sup>[2](#2-typeahead)</sup> closed                               |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon search]]

<br />

##### 1.1 Search submit button

`optional`

###### Modifiers

|         | value   | type      | description         |           |
| :------ | :------ | :-------- | :------------------ | :-------- |
| `1.1.0` | `false` | `Boolean` | hides submit button | `default` |
| `1.1.1` | `true`  | `Boolean` | shows submit button |           |

###### Events

|         | name      | description                       |
| :------ | :-------- | :-------------------------------- |
| `1.1.2` | `onClick` | Navigates to search results page. |
| `1.1.3` | `onEnter` | Navigates to search results page. |

<br /><br />

#### 2. Typeahead

`required`

###### Events

|         | name       | description                                                                    |
| :------ | :--------- | :----------------------------------------------------------------------------- |
| `2.0.0` | `onRender` | List out typeahead suggestions returned from the [[Search typeahead service]]. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Search typeahead service]]

<br />

##### 2.1 Typeahead item

###### States

|         | name         | description                                                                |
| :------ | :----------- | :------------------------------------------------------------------------- |
| `2.1.0` | Search value | Highlight search value passed into typeahead <sup>[2](#2-typeahead)</sup>. |

###### Events

|         | name      | description                                                  |
| :------ | :-------- | :----------------------------------------------------------- |
| `2.1.1` | `onClick` | Navigates user to search results page based on search value. |
| `2.1.2` | `onEnter` | Navigates user to search results page based on search value. |

<br />

##### 2.2 Keyboard navigation

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> Copy [[Carbon dropdown]] behavior and accessibility.

<br /><br />

#### 3. Scoped filter

`optional`

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon dropdown]]

###### Logic

|         | condition           | description                                                         |
| :------ | :------------------ | :------------------------------------------------------------------ |
| `3.0.0` | `@lg` `@xlg` `@max` | Uses [[Carbon dropdown]]                                            |
| `3.0.1` | `@sm` `@md`         | `Filter` icon only instead of default text and `Chevron down` icon. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon icons]] for `Filter` icon.

###### Events

|         | name      | description                                                          |
| :------ | :-------- | :------------------------------------------------------------------- |
| `3.0.2` | `onClick` | Opens [[Carbon dropdown]] menu with list of available scope options. |

##### 3.1 Menu item

###### Events

|         | name      | description                                                                   |
| :------ | :-------- | :---------------------------------------------------------------------------- |
| `3.1.0` | `onClick` | New scope set, and Carbon search <sup>[1](#1-carbon-search)</sup> gets focus. |

> ![question](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> Where does the filtered options come from? API, adopter, or both?
