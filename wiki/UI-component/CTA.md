`Core` `Functional` <!-- category start --><!-- category end -->

This [[CTA]] (call to action) component allows one to quickly switch between a
couple different [[CTA]]s easily based on a given scenario. This makes it easy
to offer them all without building that logic every-time, or just as easily
limit the number of options for a specific pattern.

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Link with icon]]
- [[Feature card]]
- [[Card link]]
- [[Button group]]
- [[Card]]
- [[Lightbox media viewer]]
- [[Carbon icons]]
- [[Video service]]
- [[Smooth scrolling utility]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/101164203823)

<br />
</details>

<hr width="40%" />

<br />

### 1. Type

The [[CTA]] is made up of various types that add a consistent
functionality/behavior and iconography across the different styles
<sup>[2](#2-style)</sup> of [[CTA]]s.

<br />

#### 1.1 Local

`default`

The local link is mainly used to navigate a user to another destination within
IBM.com.

###### Logic

|         | condition                         | description                        |                                                                                                                                 |
| :------ | :-------------------------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `1.1.1` | `type === 'local'` OR `undefined` | Icon should be set to `ArrowRight` | <img src="https://user-images.githubusercontent.com/3793636/126346118-c0916d74-09ab-4745-a5de-a35b56164678.png" width="19px" /> |

<br />

#### 1.2 Jump

The jump link visually uses the down arrow to indicate to the user this link
jumps down the page.

###### Logic

|         | condition         | description                       |                                                                                                                                 |
| :------ | :---------------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `1.2.1` | `type === 'jump'` | Icon should be set to `ArrowDown` | <img src="https://user-images.githubusercontent.com/3793636/126346135-2f82db23-5d56-457c-b509-dfde1606eb3a.png" width="26px" /> |

###### Events

|         | name      | description                                                                                                                                                |
| :------ | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `1.2.2` | `onClick` | When this particular [[CTA]] link type is clicked it’ll disable the anchor link and smoothly scroll the user down the page to the provided `name` or `id`. |

<br />

#### 1.3 External

The external link provides a visual indicator that this link leaves the page,
and opens the link within a new tab so the IBM page they were looking at will
stay there.

###### Logic

|         | condition             | description                    |                                                                                                                                 |
| :------ | :-------------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `1.3.1` | `type === 'external'` | Icon should be set to `Launch` | <img src="https://user-images.githubusercontent.com/3793636/126346101-3bb9b54e-0150-4253-b536-4ed41c67283a.png" width="24px" /> |

###### Events

|         | name      | description                                                                                  |
| :------ | :-------- | :------------------------------------------------------------------------------------------- |
| `1.3.2` | `onClick` | When this particular [[CTA]] link type is clicked it should `target=“_blank”` for a new tab. |

<br />

#### 1.4 Video

The video type [[CTA]] uses the [[Video service]] to populate the [[CTA]] and
[[Lightbox media viewer]]'s content if not provided, and launches within the
[[Lightbox media viewer]] to play the [[Video]].

###### Logic

|         | condition                         | description                         |                                                                                                                                 |
| :------ | :-------------------------------- | :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `1.4.1` | `type === 'video'` AND `video.ID` | Icon should be set to `PlayOutline` | <img src="https://user-images.githubusercontent.com/3793636/126346089-ad2ca508-e55c-4af4-a87e-9d37348181e8.png" width="20px" /> |

###### Events

|         | name      | description                                                                                                         |
| :------ | :-------- | :------------------------------------------------------------------------------------------------------------------ |
| `1.4.2` | `onClick` | When this [[CTA]] link type is clicked, it should launch the [[Lightbox media viewer]] and begin playing the video. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> The [[Lightbox media viewer]]'s data model and component should be used in
> addition to the style chosen from below. See [[Lightbox media viewer]]

<br />

#### 1.5 Download

The download [[CTA]] type should be used when you have a file that needs to be
downloaded like a PDF, or Excel spreadsheet. Functionality is mostly handled by
the browser.

###### Logic

|         | condition             | description                      |                                                                                                                                 |
| :------ | :-------------------- | :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `1.4.1` | `type === 'download'` | Icon should be set to `Download` | <img src="https://user-images.githubusercontent.com/3793636/126346060-393b4222-329f-4883-a33c-2b9fd04bfbc2.png" width="23px" /> |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Style

The [[CTA]] component wraps a number of our components to allow for different
looks and hierarchy depending on the scenario and context. Each style gets the
above types <sup>[1](#1-type)</sup> that allows them to share functionality.

<br />

#### 2.1 Text

`(default)`

The default text style is just a [[Link with icon]]. This type of [[CTA]] can be
used at low levels within the page hierarchy.

###### Logic

|         | condition                         | description                                                 |
| :------ | :-------------------------------- | :---------------------------------------------------------- |
| `2.1.1` | `style === 'text'` OR `undefined` | Set the data model and component to use: [[Link with icon]] |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Link with icon]]

<br />

###### Video data logic

|         | condition          | description                                              |
| :------ | :----------------- | :------------------------------------------------------- |
| `2.1.2` | `video.id && copy` | pre-filled by [[Video service]]'s `name` if not defined. |

> Video `duration` is appended after string of text in parenthesis. (e.g.
> `copy string (duration)`)

<br />

###### Visual example

<img src="https://user-images.githubusercontent.com/3793636/126350906-337cfd80-6b22-4b01-a2ef-02a5d1c4db15.png" width="150px" />

<br /><br />

#### 2.2 Button

The button [[CTA]] style can communicate the primary and secondary action for a
given page to the user.

###### Logic

|         | condition            | description                                               |
| :------ | :------------------- | :-------------------------------------------------------- |
| `2.2.1` | `style === 'button'` | Set the data model and component to use: [[Button group]] |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Button group]]

<br />

###### Video data logic

|         | condition          | description                                              |
| :------ | :----------------- | :------------------------------------------------------- |
| `2.2.2` | `video.id && copy` | pre-filled by [[Video service]]'s `name` if not defined. |

> Video `duration` is appended after string of text in parenthesis. (e.g.
> `copy string (duration)`)

<br />

###### Visual example

<img src="https://user-images.githubusercontent.com/3793636/126350913-11c72fc8-db74-400d-aeec-2b3b35ffce92.png" width="350px" />

<br /><br />

#### 2.3 Card

The card [[CTA]] style is our generic [[Card]] that take various forms and
content models for flexible [[Card]] [[CTA]]s.

###### Logic

|         | condition          | description                                       |
| :------ | :----------------- | :------------------------------------------------ |
| `2.3.1` | `style === 'card'` | Set the data model and component to use: [[Card]] |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Card]]

<br />

###### Video data logic

|         | condition              | description                                                                                   |
| :------ | :--------------------- | :-------------------------------------------------------------------------------------------- |
| `2.3.2` | `video.id && heading`  | pre-filled by [[Video service]]'s `name` if not defined or explicitly set to `false`.         |
| `2.3.3` | `video.id && copy`     | pre-filled by [[Video service]]'s `description` if not defined or explicitly set to `false`.  |
| `2.3.4` | `video.id && cta copy` | pre-filled by [[Video service]]'s `duration` if not defined or explicitly set to `false`.     |
| `2.4.5` | `video.id && image`    | pre-filled by [[Video service]]'s `poster image` if not defined or explicitly set to `false`. |

<br />

###### Visual example

<img src="https://user-images.githubusercontent.com/3793636/126350922-f531b98a-cad3-491f-9dda-76f134f8c23c.png" height="150px" />

<br /><br />

#### 2.4 Feature

The feature [[CTA]] style is a larger version of [[Card]] with an image to
really emphasize a specific call to action. It should only be used once within a
[[Content block]].

###### Logic

|         | condition             | description                                               |
| :------ | :-------------------- | :-------------------------------------------------------- |
| `2.4.1` | `style === 'feature'` | Set the data model and component to use: [[Feature card]] |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Feature card]]

<br />

###### Video data logic

|         | condition              | description                                                                                  |
| :------ | :--------------------- | :------------------------------------------------------------------------------------------- |
| `2.4.2` | `video.id && heading`  | pre-filled by [[Video service]]'s `name` if not defined.                                     |
| `2.4.3` | `video.id && copy`     | pre-filled by [[Video service]]'s `description` if not defined or explicitly set to `false`. |
| `2.4.4` | `video.id && cta copy` | pre-filled by [[Video service]]'s `duration` if not explicitly set to `false`.               |
| `2.4.5` | `video.id && image`    | pre-filled by [[Video service]]'s `poster image` if not defined.                             |

<br />

###### Visual example

<img src="https://user-images.githubusercontent.com/3793636/126350986-fd96ba91-23f0-4145-9c3f-ae26e90f7f74.png" height="150px" />

<br /><br />

#### 2.5 Card link

The card link [[CTA]] style is a small [[Card link]] that can be used at higher
levels within the page hierarchy.

###### Logic

|         | condition             | description                                            |
| :------ | :-------------------- | :----------------------------------------------------- |
| `2.5.1` | `style === 'cardlink` | Set the data model and component to use: [[Card link]] |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Card link]]

<br />

###### Video data logic

|         | condition              | description                                                                                  |
| :------ | :--------------------- | :------------------------------------------------------------------------------------------- |
| `2.5.2` | `video.id && heading`  | pre-filled by [[Video service]]'s `name` if not defined.                                     |
| `2.5.3` | `video.id && copy`     | pre-filled by [[Video service]]'s `description` if not defined or explicitly set to `false`. |
| `2.5.4` | `video.id && cta copy` | pre-filled by [[Video service]]'s `duration` if not explicitly set to `false`.               |

<br />

###### Visual example

<img src="https://user-images.githubusercontent.com/3793636/126350953-bb9f301f-9c5a-4a12-b363-af4f69494076.png" height="150px" />

<br />

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
