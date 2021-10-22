`Core` `Functional` <!-- category start --><!-- category end -->

The [[Background media]] shares the same core functionality of background media across our different components.

![image](../../src/images/component/background-media/component--background-media--wiki.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Image]]
- [[Video]]
- [[Expressive modal]]
- [[Lightbox media viewer]]
- [[Carbon tooltip]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/137924469929)

<br />
</details>

<hr width="40%" />

<br />

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png) See box
> folder <sup>[[r1](#resources)]</sup> for more details

<hr width="40%" />

<br />

### 1. Gradient

`optional`

An optional gradient added over the media to make sure the background image or video do not cause accessibility issues.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

#### 1a. Gradient left to right

`optional`

A left to right gradient added over the media due to accessibility requirements.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

#### 1b. Gradient top to bottom

`optional`

A top to bottom gradient added over the media due to accessibility requirements.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

### 2. Media (image or video)

`optional`

Provides the adopter with option to use either [[Image]] or [[Video]] here.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

#### 2a. Image

`optional`

Provides the adopter with option to use [[Image]] as a cover or background image.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png) See
> [[Image]] for more information.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

#### 2b. Video

`optional`

Provides the adopter with option to use [[Video]] as a cover or background video.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png) See
> [[Video]] for more information.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

### 3. Hot stop (clickable area)

`optional`

An optional clickable `Area` to play or pause the background video, or to open a modal. It provides the user with
options to interact with the video.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

### 4. Buttons

`required`

Custom controls for media.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

#### 4a. Button to open overlay

`required`

Custom play button for the adopter to open an [Expressive modal] or [Lightbox media viewer].

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

#### 4b. Play/pause custom video controls with an optional progress outline

`required`

Custom play/pause buttons for the adopter to interact with background video when hidden video control bar. Also optional
progress outline is available.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />

### 5. Tooltip

`optional`

[Carbon tooltip] with message to play/pause the media.

<br />[Back to top](#wiki-wrapper)<br />

<br /><br />
