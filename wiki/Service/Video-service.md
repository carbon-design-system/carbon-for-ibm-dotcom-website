`Core` <!-- category start --><!-- category end -->

The Video service intakes a Kaltura player <sup>[r1](#resources)</sup> `videoId`
and fetches the video's' associated meta data from Kaltura Media Center.

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- Kaltura API <sup>[[r1](#resources)]</sup>

<br />
</details>

<!-- usedby start --><!-- usedby end -->

<!-- backlinks start --><!-- backlinks end -->

<a name="resources"></a>

<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Kaltura API](http://player.kaltura.com/docs/api)

<br />
</details>

<hr width="40%" />

### 1. Embed video

Embeds the video player on the page where adopter chooses.

###### Props

|         | name        | description                                              |
| :------ | :---------- | :------------------------------------------------------- |
| `1.1.1` | `videoId`   | The Kaltura <sup>[r1](#resources)</sup> video id.        |
| `1.1.2` | `target`    | ID of HTML element placeholder.                          |
| `1.1.3` | `overrides` | Offers the ability to override any of the video options. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See Kaltura API <sup>[r1](#resources)</sup> for what options are available.

###### Events

|         | name    | description                                                       |
| :------ | :------ | :---------------------------------------------------------------- |
| `1.2.1` | `play`  | Records event in Google analytics (GA) when video starts playing. |
| `1.2.2` | `pause` | Records event in GA when video is paused.                         |
| `1.2.3` | `end`   | Records event in GA when video is over.                           |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Video data

Allows the adopter to get the raw video data from the Kaltura API
<sup>[r1](#resources)</sup>.

###### Props

|         | name      | description                                       |
| :------ | :-------- | :------------------------------------------------ |
| `2.1.1` | `videoId` | The Kaltura <sup>[r1](#resources)</sup> video id. |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See Kaltura API <sup>[r1](#resources)</sup> for more information on what data
> is returned.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Format poster URL

Provides the adopter the ability to retrieve a poster image at a specific size
for any valid video.

###### Props

|         | name      | description                                       |
| :------ | :-------- | :------------------------------------------------ |
| `3.1.1` | `videoId` | The Kaltura <sup>[r1](#resources)</sup> video id. |
| `3.1.2` | `width`   | The desired poster image width.                   |
| `3.1.3` | `height`  | The desired poster image height.                  |

###### Example

https://cdnsecakmi.kaltura.com/p/1773841/thumbnail/entry_id/1_9h94wo6b/width/320

![image example](https://cdnsecakmi.kaltura.com/p/1773841/thumbnail/entry_id/1_9h94wo6b/width/200)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. Format duration

The format duration method takes in a duration in either milliseconds or
seconds, and formats it to `hh:mm:ss` or `01:25:49`.

###### Props

|         | name     | description                         |
| :------ | :------- | :---------------------------------- |
| `4.0.1` | duration | Duration in seconds or milliseconds |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
