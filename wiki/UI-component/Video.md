<!-- category start --><!-- category end -->

The [[Video]] component utilizes the embeddable Kaltura player <sup>[[r2](#resources)]</sup>, as well as an initial state that includes either a poster image with corresponding meta data where the user clicks to view the video, or an inline link with meta data where the user clicks and will open a [[Lightbox media viewer]] with the embedded Kaltura player <sup>[[r2](#resources)]</sup>.

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png) Should this component be broken down, and depend on the [[video service]]?

![image](https://user-images.githubusercontent.com/3793636/119056886-12b23f00-b991-11eb-8bbc-e74e60c687e1.png)

<hr width="40%" />

<!-- toc start open="true" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Lightbox media viewer]]
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

- r1: [Box folder](https://ibm.ent.box.com/folder/108837570522)
- r2: [Kaltura player](http://player.kaltura.com/docs/api)

<br />
</details>

<hr width="40%" />

## Data & content

The video component intakes a Kaltura `videoId` and fetches the following data to be rendered on page as content. All of these content can be customized except the video duration.

See more details at [Kaltura Player API](http://player.kaltura.com/docs/api).

| Data name | Type | Allows override |
| --------- | ---- | --------------- |
| Video title | Text | Yes |
| Description | Text | Yes |
| Duration | Number | No |
| Poster image | Image | Yes |

## Rendering & behavior

Video is used in the following components. Depending on the visual design and content requirement of the final component rendered, the above data is used differently.

### Video

This is the default rendering of video. It is used for embedding a video directly on page or inline.



| Data name     | Field |
| ------------- | ----- |
| Video title   | Caption |
| Duration | appended after caption in parenthesis |
| Description | Poster image alt tag |
| Poster image | Image |


### CTA - Text

Data

| Data name     | Field |
| ------------- | ----- |
| Video title | CTA text |
| Duration | appended after CTA text in parenthesis |

### CTA - Card

Data

| Data name     | Field |
| ------------- | ----- |
| Video title | Card text |
| Duration | CTA text | No |
| Description | Card body copy |
| Poster image | Image |

### CTA - Button

Data

| Data name     | Field |
| ------------- | ----- |
| Video title | Button label |
| Duration | appended after Button label in parenthesis |

### Lightbox media viewer

Data

| Data name     | Field |
| ------------- | ----- |
| Video title | Lightbox headline |
| Description | Lightbox body copy |
| Poster image | Image |


## 3. Metrics

The following events will need to be tracked with IBM's IDA Stats event tracking

| Event name | Event code | Description |
| --- | --- | --- |
| launched | 0 | Video launched from inline or text link state and started playing |
| paused | 1 | Video playback has been paused |
| played | 2 | Video playback has started (should trigger playerState “launched” if the currentTime is 0) |
| ended | 3 | Video playback has reached the end |


<br />

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See box folder <sup>[[r1](#resources)]</sup> for more details
