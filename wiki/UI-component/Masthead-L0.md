`Core` <!-- category start --><!-- category end -->

The [[Masthead L0]] component is a required navigational pattern for IBM.com
that displays consistently at the top of each page. It also includes search and
profile services for IBM.com.

![image](https://user-images.githubusercontent.com/3793636/149963869-8d14c5c1-6e71-4388-96b7-ad02bf8e4041.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Masthead navigation]]
- [[Search typeahead]]
- [[Masthead account]]
- [[Masthead mobile]]
- [[Carbon tooltip]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/59063660753)

<br />
</details>

<hr width="40%" />

<br />

#### 1. Logo

`required` `SVG`

Logo CTA that displays the logo of the organization and allows the user to navigate back to the site’s homepage.

###### Modifiers

|         | name      | description                                                  |
| :------ | :-------- | :----------------------------------------------------------- |
| `1.0.0` | `default` | The default IBM logo is used.                                |
| `1.0.1` | `custom`  | A custom logo overrides default if provided by data/adopter. |

###### Logic

|         | name           | description                                                                     |
| :------ | :------------- | :------------------------------------------------------------------------------ |
| `1.0.2` | `startDate`    | `startDate` determines when a custom logo, and tooltip should start displaying. |
| `1.0.3` | `custom`       | `endDate` determines when a custom logo, and tooltip should be removed/hidden.  |
| `1.0.4` | `logo-divider` | Only display divider if Navigation <sup>[3](#3-navigation)</sup> is provided.   |

> This allows for planning and releasing in advance.

###### Events

|         | name      | description                              |
| :------ | :-------- | :--------------------------------------- |
| `1.0.5` | `onClick` | Navigates back to the homepage.          |
| `1.0.6` | `hover`   | Displays tooltip if content is provided. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon tooltip]] for more details.

<br /><br />

#### 2. Platform label

`optional` `CTA`

Text CTA that displays the name of a platform and allows users to navigate to the platform’s landing page.

###### Events

|         | name      | description                  |
| :------ | :-------- | :--------------------------- |
| `2.0.0` | `onClick` | Navigates to the target URL. |

###### Logic

|         | condition                 | description                                                           |
| :------ | :------------------------ | :-------------------------------------------------------------------- |
| `2.0.1` | `Navigation === true`     | Only display if Navigation <sup>[3](#3-navigation)</sup> is provided. |
| `2.0.2` | `viewport width <= 800px` | Platform name is hidden, moves to [[Masthead mobile]]                 |

<br /><br />

#### 3. Navigation

`optional` `component`

###### Logic

|         | condition                 | description                                        |
| :------ | :------------------------ | :------------------------------------------------- |
| `3.0.0` | `true`                    | Visible by `default`                               |
| `3.0.1` | `false`                   | Hidden if set to explicitly `false`                |
| `3.0.2` | `viewport width <= 800px` | Navigation is hidden, moves to [[Masthead mobile]] |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead navigation]] for more details.

<br /><br />

#### 4. Mobile navigation

`optional` `component`

###### Logic

|         | condition                | description                                                          |
| :------ | :----------------------- | :------------------------------------------------------------------- |
| `4.0.0` | `true`                   | Visible by `default`                                                 |
| `4.0.1` | `false`                  | Hidden if set to explicitly `false`                                  |
| `4.0.2` | `viewport width > 800px` | Mobile navigation is hidden, use to [[Masthead navigation]] instead. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead mobile]] for more details.

<br /><br />

#### 5. Search

`optional` `component`

###### Logic

|         | condition               | description                                |
| :------ | :---------------------- | :----------------------------------------- |
| `5.0.0` | `open = true`           | Visible by `default`.                      |
| `5.0.1` | `open = false`          | Hidden if set to explicitly `false`        |
| `5.0.1` | `open = true && onLoad` | Value is fixed and search can't be closed. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Search typeahead]] for more details.

#### 5.1 Clear CTA

###### Events

|         | name    | description         |
| :------ | :------ | :------------------ |
| `5.1.1` | `click` | Clear search value. |

###### Logic

|         | condition               | description                                      |
| :------ | :---------------------- | :----------------------------------------------- |
| `5.1.2` | `click && open = false` | Search input is collapsed and hidden `onClick`.  |
| `5.1.3` | `click && open = true`  | Search input remains open and visible `onClick`. |

#### 5.2 Submit CTA

###### Modifiers

|         | name  | value  | description                                   |
| :------ | :---- | :----- | :-------------------------------------------- |
| `5.0.2` | `cta` | `true` | Fixes prop to include cta in masthead search. |

###### Logic

|         | condition               | description                                                              |
| :------ | :---------------------- | :----------------------------------------------------------------------- |
| `#.#.#` | `click && open = false` | Sets search open state to `true`.                                        |
| `#.#.#` | `click && open = true`  | Submits search query and navigates to search page if valid search query. |

###### Example

<a href="https://user-images.githubusercontent.com/3793636/149965553-60ab7a09-cc47-4868-865d-d655d30503e6.png" target="_blank"><img src="https://user-images.githubusercontent.com/3793636/149965553-60ab7a09-cc47-4868-865d-d655d30503e6.png" width="320px" /></a>

<br /><br />

#### 6. Account

`optional` `component`

###### Logic

|         | condition | description                         |
| :------ | :-------- | :---------------------------------- |
| `6.0.0` | `true`    | Visible by `default`                |
| `6.0.1` | `false`   | Hidden if set to explicitly `false` |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead account]] for more details.
