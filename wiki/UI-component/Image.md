`Core` <!-- category start --><!-- category end -->

The [[Image]] component is a wrapper that at its base adds an image to the page.
It allows adopters to pass in multiple images it can render depending on the
various breakpoints standardizing the image data model.

![image](https://user-images.githubusercontent.com/3793636/119055904-6c196e80-b98f-11eb-98fb-0cda87182535.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- `<picture>` <sup>[r2](#resources)</sup>

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

- r1: [Box folder](https://ibm.ent.box.com/folder/94834513317)
- r2:
  [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- r3: [[Carbon 2x grid]]

<br />
</details>

<hr width="40%" />

<br />

### 1. Data model

|            | name                   | type      | description                                                             |
| :--------- | :--------------------- | :-------- | :---------------------------------------------------------------------- |
| `required` | `defaultSrc`           | `String`  | Default image URL (usually image for largest breakpoint)                |
|            | `sources[]`            | `Array`   | `Array` of image `Objects`                                              |
|            | `sources[].src`        | `Array`   | Image URL for given breakpoint                                          |
|            | `sources[].breakpoint` | `Number`  | min-width breakpoint to render the image.                               |
| `required` | `alt`                  | `String`  | Alternative text                                                        |
|            | `longDescription`      | `String`  | Additional long form text visible to screen readers, hidden from users. |
|            | `border`               | `Boolean` | Optional border                                                         |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
