<!-- category start --><!-- category end -->

The [[Video]] component by default uses the embeddable Kaltura player <sup>[[r2](#resources)]</sup> to play video either on page or in [[Lightbox media viewer]].

![image](https://user-images.githubusercontent.com/3793636/119056886-12b23f00-b991-11eb-8bbc-e74e60c687e1.png)

<hr width="40%" />

<!-- toc start open="true" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Video service]]
- [[Lightbox media viewer]]
- [[Image]]
- Kaltura player

<br />
</details>

<!-- usedby start open="true" -->
*{{usedby auto populates}}*
<!-- usedby end -->

<!-- backlinks start open="true" -->
*{{backlinks auto populates}}*
<!-- backlinks end -->

<a name="resources"></a>
<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Box folder](https://ibm.box.com/s/9q7rdj73m32hufcw1xwl1td6nr88rghm)
- r2: [Kaltura player](http://player.kaltura.com/docs/api)

<br />
</details>

<hr width="40%" />

## Functions

| Variants | Interaction | Functions |
| -------- | ----------- | --------- |
| Default | Clicking on `Poster image` | Poster image is replaced with Kaltura video player and video will begin playing. |  
| with lightbox media viewer | Clicking on `Poster image` | Open LightBoxMediaViewer and video will begin playing. |


## Logics

### Default variant

Video allows custom override of all content returned by the [[Video service]] except video duration.

| ID  | Field |
| --- | ----- |
| 1   | Caption |
| 2   | Poster image |
| 3   | Poster image alt tag |

##### 1. Caption

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video name prefilled by [[Video service]]. Duration is appended after name in parenthesis. |
| Text | Adding a custom caption overrides the API call. Duration is appended after custom caption in parenthesis. |

##### 2. Poster image

Poster image should always obeys aspect ratios: 16x9, 9x16, 2x1, 1x2, 4x3, 3x4, 1x1.

| Condition | Description |
| --------- | ----------- |
| `undefined` | Poster image prefilled by [[Video service]] |
| Image | Adding a custom poster image overrides the API call. |

##### 3. Poster image alt tag

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video description prefilled by [[Video service]]. |
| Text | Adding a custom alt tag description overrides the API call. |


### with Lightbox media viewer variant

| ID  | Field |
| --- | ----- |
| 4   | Heading |
| 5   | Body copy |

##### 4. Heading

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video name prefilled by [[Video service]]. |
| Text | Adding a custom heading overrides the API call. |

##### 5. Body copy

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video description prefilled by [[Video service]]. |
| Text | Adding a custom description overrides the API call. |
