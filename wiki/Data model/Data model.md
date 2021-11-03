`Standard` <!-- category start --><!-- category end -->

This ContentModel is a standard content structure to be used across the IBM.com
Library. It defines, and standardizes the content hierarchy in a way that allows
us to be consistent and speak the same language as we build out new components.

<hr width="40%" />

<!-- toc start -->

_{{table of contents auto populates}}_

<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Image]]
- [[Markdown utility]]
- [[CTA]]

<br />
</details>

<!-- usedby start -->

_{{usedby auto populates}}_

<!-- usedby end -->

<!-- backlinks start -->

_{{backlinks auto populates}}_

<!-- backlinks end -->

<a name="resources"></a>

<details>
  <summary><strong>Resources</strong></summary><br />

<br />
</details>

<hr width="40%" />

<br />

### 1. Data model

| data           | type                                  |
| :------------- | :------------------------------------ |
| `image`        | [[Image]]                             |
| `svg`          | SVG <sup>[2](#2-svg-data-model)</sup> |
| `eyebrow`      | `String`                              |
| `heading`      | `Object`                              |
| `heading.type` | `String`                              |
| `heading.copy` | `String`                              |
| `copy`         | [[Markdown utility]]                  |
| `children`     | `Object`                              |
| `cta`          | [[CTA]]                               |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. SVG data model

|                | data            | type                 |                                                                                         |
| :------------- | :-------------- | :------------------- | :-------------------------------------------------------------------------------------- |
| _`(required)`_ | `src`           | `String` or `Object` | `SVG`                                                                                   |
|                | `...otherProps` | `Attributes`         | Attributes like `ariaLabel`, or `aria-hidden` can be passed in and applied to the `SVG` |

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
