`Core` <!-- category start --><!-- category end -->

The Video service intakes a Kaltura player <sup>[[r1](#resources)]</sup> `videoId` and fetches the video and associated meta data from Kaltura Media Center.

> ![image](https://user-images.githubusercontent.com/3793636/117873641-a6835d00-b265-11eb-8433-8c9c73a2e999.png) WIP. Need to verify with dev.

<hr width="40%" />

<!-- toc start open="true" --><!-- toc end -->

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

### Input

| Data name | Type |
| --------- | ---- |
| `videoID` | Number |

### Output

| Data name | Type |  
| --------- | ---- |
| Name | Text |
| Description | Text |
| Duration | Number |
| Poster image | Image |

