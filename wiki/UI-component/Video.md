<!-- category start --><!-- category end -->

The [[Video]] component utilizes the embeddable Kaltura player <sup>[[r2](#resources)]</sup> to play video either on page or in [[Lightbox media viewer]]. Video allows custom override of all content returned by the [[Video service]] except video duration.


![video-default](https://images.zenhubusercontent.com/5be09c3a6102900c6d16d991/9d88cebd-bee8-4013-8bea-7389cd9c792d)

![video-lightbox](https://images.zenhubusercontent.com/5be09c3a6102900c6d16d991/31dbb15f-5bcd-4e5f-9628-f187335a4813)

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


### 1. Caption

##### Logic

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video name prefilled by [[Video service]]. Duration is appended after name in parenthesis. |
| Text | Adding a custom caption overrides the API call. Duration is appended after custom caption in parenthesis. |

### 2. Poster image

Poster image should always obeys aspect ratios: 16x9, 9x16, 2x1, 1x2, 4x3, 3x4, 1x1.

###### Logic

| Condition | Description |
| --------- | ----------- |
| `undefined` | Poster image prefilled by [[Video service]]. |
| Image | Adding a custom poster image overrides the API call. |

###### Events

| Events | Description |
| ------ | ----------- |
| onClick | Plays video |  


###### Properties & values

| Name | Description |
| ----- | ----- |
| `playing-mode` | Inline (default) replaces poster image. Lightbox opens LightBoxMediaViewer <sup>[[3](#3-lightbox-media-viewer)]</sup>. |  
| `aspect-ratio` | 16x9 (default), 9x16, 2x1, 1x2, 4x3, 3x4, 1x1 |


### 3. Lightbox Media Viewer

#### 3.1 Heading

##### Logic

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video name prefilled by [[Video service]]. |
| Text | Adding a custom caption overrides the API call. |


#### 3.1 Copy

##### Logic

| Condition | Description |
| --------- | ----------- |
| `undefined` | Video description prefilled by [[Video service]]. |
| Text | Adding a custom caption overrides the API call. |
