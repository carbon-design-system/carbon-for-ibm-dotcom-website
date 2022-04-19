`Core` <!-- category start --><!-- category end -->

Masthead account is an optional component of the masthead. It allows users to authenticate and enables an authenticated site experience.

![image](https://user-images.githubusercontent.com/3793636/149965005-6c33486c-d053-439a-b136-a2aaaad552ff.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" -->
<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Profile service]]
- [[Translation]]
- [[Carbon icons]]

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

- r1: [[Masthead L0]]

<br />
</details>

<hr width="40%" />

<br />

###### States

|         | name        | description                  |
| :------ | :---------- | :--------------------------- |
| `0.1.0` | `loggedin`  | User has been authenticated. |
| `0.1.1` | `loggedout` | User is not authenticated.   |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> The [[Profile service]] is used to determine a user's logged state.

<br /><br />

#### 1. Login CTA

`Required` `CTA`

The login CTA allows the user to navigate to the login page and enter their credentials.

###### Logic

|         | condition                    | description                                      |
| :------ | :--------------------------- | :----------------------------------------------- |
| `1.0.0` | `loggedin` <sup>0.1.0</sup>  | Hidden with `loggedin` <sup>0.1.0</sup> state.   |
| `1.0.1` | `loggedout` <sup>0.1.1</sup> | Visible with `loggedout` <sup>0.1.1</sup> state. |

###### Events

|         | name      | description                   |
| :------ | :-------- | :---------------------------- |
| `1.0.2` | `onClick` | Load's the My IBM Login page. |

<br /><br />

#### 2. My IBM CTA

`Required` `CTA`

The My IBM CTA allows users to find their My IBM account page.

###### Logic

|         | condition                    | description |
| :------ | :--------------------------- | :---------- |
| `2.0.0` | `loggedin` <sup>0.1.0</sup>  | Visible     |
| `2.0.1` | `loggedout` <sup>0.1.1</sup> | Hidden      |
| `2.0.2` | `@sm`                        | Hidden      |
| `2.0.3` | `@md` `@lg` `@xlg` `@max`    | Visible     |

###### Events

|         | name      | description             |
| :------ | :-------- | :---------------------- |
| `2.0.4` | `onClick` | Load's the My IBM page. |

<br /><br />

#### 3. Profile

`Required` `Dropdown`

The Profile has various options to manage the user's current profile and status.

###### Logic

|         | condition                    | description |
| :------ | :--------------------------- | :---------- |
| `3.0.0` | `loggedin` <sup>0.1.0</sup>  | Visible     |
| `3.0.1` | `loggedout` <sup>0.1.1</sup> | Hidden      |

<br />

##### 3.1 Profile CTA

###### Events

|         | name      | description                               |
| :------ | :-------- | :---------------------------------------- |
| `3.1.0` | `onClick` | Reveal's a dropdown list of menu options. |

<br />

##### 3.2 Profile dropdown

###### Logic

|         | condition                 | description                                      |
| :------ | :------------------------ | :----------------------------------------------- |
| `3.2.1` | `@sm`                     | Visible My IBM CTA <sup>[2](#2-my-ibm-cta)</sup> |
| `3.2.2` | `@md` `@lg` `@xlg` `@max` | Hidden My IBM CTA <sup>[2](#2-my-ibm-cta)</sup>  |

###### Events

|         | name     | description              |
| :------ | :------- | :----------------------- |
| `3.2.3` | `onBlur` | Closes profile dropdown. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Carbon icons]] for `User` icon.

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Translation]] for content.
