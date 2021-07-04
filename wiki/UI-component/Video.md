<!-- category start --><!-- category end -->

The [[Video]] component utilizes the embeddable Kaltura player <sup>[[r2](#resources)]</sup>, as well as an initial state that includes either a poster image with corresponding meta data where the user clicks to view the video, or an inline link with meta data where the user clicks and will open a [[Lightbox media viewer]] with the embedded Kaltura player <sup>[[r2](#resources)]</sup>.

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png) Should this component be broken down, and depend on the [[video service]]?

![image](https://user-images.githubusercontent.com/3793636/119056886-12b23f00-b991-11eb-8bbc-e74e60c687e1.png)

<hr width="40%" />

<!-- toc start open="true" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

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

- r1: [Box folder](https://ibm.ent.box.com/folder/108837570522)
- r2: [Kaltura player](http://player.kaltura.com/docs/api)

<br />
</details>

<hr width="40%" />

## 1. Data & content

The video component intakes a Kaltura player <sup>[[r2](#resources)]</sup> `videoId` and fetches the following data to be rendered on page as content. All of these content can be customized except the video duration.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Check out the Kaltura player <sup>[[r2](#resources)]</sup> for more information

| Data name | Type | Allows override |
| --------- | ---- | --------------- |
| Name | Text | Yes |
| Description | Text | Yes |
| Duration | Number | No |
| Poster image | Image | Yes |

## 2. Rendering & behavior

[[Video]] is used in the following components. Depending on the visual design and content requirement of the final component rendered, the above data is used differently.

### Video

This is the default rendering of [[Video]]. It is used for embedding a Kaltura player <sup>[[r2](#resources)]</sup> directly in the page.

![video](https://user-images.githubusercontent.com/15144993/123469683-5cf69380-d5c1-11eb-844f-39e26678c961.png)

| ID  | Data name     | Field |
| --- | ------------- | ----- |
| 1   | Name   | Caption |
| 2   | Duration | appended after caption in parenthesis |
| 3   | Description | Poster image alt tag |
| 4   | Poster image | Image |

Interactions

| ID  | Element name | Event | Behavior | Notes |
| --- | ------------ | ----- | -------- | ----- |
| 1   | Poster image | On Click or On Enter key of link | Poster image will be replaced by Kaltura video player that will begin playing <br /> Alternative option to open in LightBoxMediaViewer. | Poster image obeys aspect ratios: 16x9, 9x16, 2x1, 1x2, 4x3, 3x4, 1x1 |

### CTA - Text

![CTA - Text](https://user-images.githubusercontent.com/15144993/123468111-523aff00-d5bf-11eb-8ef1-2f05c0de29c6.png)

| ID  | Data name     | Field |
| --- | ------------- | ----- |
| 1   | Name | CTA text |
| 2   | Duration | appended after CTA text in parenthesis |

Interactions

| ID  | Element name | Event | Behavior |
| --- | ------------ | ----- | -------- |
| 1   | CTA - Text | On Click or On Enter key of link | Open video in LightBoxMediaViewer. |


### CTA - Button

![CTA - Button](https://user-images.githubusercontent.com/15144993/123468110-523aff00-d5bf-11eb-9b1d-0c65f082d482.png)

###### Data
| ID  | Data name     | Field |
| --- | ------------- | ----- |
| 1   | Name | Button label |
| 2   | Duration | appended after Button label in parenthesis |

Interactions

| ID  | Element name | Event | Behavior |
| --- | ------------ | ----- | -------- |
| 1   | CTA - Button | On Click or On Enter key of button | Open video in LightBoxMediaViewer. |


### CTA - Card

![CTA - Card](https://user-images.githubusercontent.com/15144993/123468108-51a26880-d5bf-11eb-93a0-c23ef1c8216b.png)

###### Logic
| ID  | Data name     | Field |
| --- | ------------- | ----- |
| 1   | Name | Card text |
| 2   | Description | Card body copy |
| 3   | Duration | CTA text | No |
| 4   | Poster image | Image |

###### Logic

| ID  | Element name | Event | Behavior |
| --- | ------------ | ----- | -------- |
| 1   | CTA - Card   | On Click or On Enter key of card | Open video in LightBoxMediaViewer. |


### Lightbox media viewer

![Lightbox](https://user-images.githubusercontent.com/15144993/123468106-5109d200-d5bf-11eb-8556-828dc20b5ccd.png)

| ID  | Data name     | Field |
| --- | ------------- | ----- |
| 1   | Name | Lightbox headline |
| 2   | Description | Lightbox body copy |
| 3   | Poster image | Image |

Interactions

| ID  | Element name | Event | Behavior |
| --- | ------------ | ----- | -------- |
| 1   | LightboxMediaViewer | On open | Begins playing video |
| 2   | Kaltura embedded video | See [standard Kaltura Player functionality](http://player.kaltura.com/docs/main) | Contains all available functionality of the standard Kaltura Player |
| 3   | LightboxMediaViewer | On close | Stops playing video |

## 3. Metrics

The following events will need to be tracked with IBM's IDA Stats event tracking

| Event name | Event code | Description |
| --- | --- | --- |
| launched | 0 | Video launched from inline or text link state and started playing |
| paused | 1 | Video playback has been paused |
| played | 2 | Video playback has started (should trigger playerState “launched” if the currentTime is 0) |
| ended | 3 | Video playback has reached the end |

### Metrics Event Object

The following event object should be passed:

```json
{
	type: 'video',
	primaryCategory: 'VIDEO',
	eventName: [Video Title],
	eventCategoryGroup: [“inline” or “overlay”],
	executionPath: [Video ID],
	execPathReturnCode: [Event Name: “launched”, “paused”, “played”, or “ended”],
	eventVidStatus: [Event Code: 0-3],
	eventVidTimeStamp: [Current play time, in seconds. If at the beginning or end, return “start” or “end” instead]
	eventVidLength: [Video Duration, in seconds],
	eventVidPlayed: [Percent watched, format: XXX%”]
}
```
### Metrics Event trigger

The following will trigger the event in IDA Stats:

```javascript
window.ibmStats.event({…metrics data object…});
```

<br />

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See box folder <sup>[[r1](#resources)]</sup> for more details
