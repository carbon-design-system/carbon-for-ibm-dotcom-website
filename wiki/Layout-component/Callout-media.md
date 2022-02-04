`Decorator` <!-- category start --><!-- category end -->

The [[Callout media]] decorates the [[Callout]] and [[Content block simple]]. It
calls to attention the content within it with an offset and high contrast
moment.

![image](https://user-images.githubusercontent.com/3793636/134920864-1fdc9d28-b9e1-474d-a4c7-8d25ce54740f.png)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Callout]]
- [[Content block simple]]

<br />
</details>

<!-- usedby start open="false" -->

_{{usedby auto populates}}_

<!-- usedby end -->

<!-- backlinks start open="false" -->

_{{backlinks auto populates}}_

<!-- backlinks end -->

<a name="resources"></a>

<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Box folder](https://ibm.ent.box.com/folder/110327422852)

<br />
</details>

<hr width="40%" />

<br />

### 1. Callout

[[Callout]] is being used to offset the component through layout and theming.
This sets it apart from the rest of the content on the page.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Callout]] for more details.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Content block simple

[[Content block simple]] is used in high `highContrast` state and without its
[[CTA]]. This component should sit inside of the [[Callout]] children's
container.

<br />

###### Overrides

|         | name           | value  | description                     |
| :------ | :------------- | :----- | :------------------------------ |
| `2.0.1` | `highContrast` | `true` | Set value to use high contrast. |
| `2.0.2` | `CTA`          | `null` | Do not use its [[CTA]].         |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Content block simple]] for more details.

<br />

###### Example

<img src="https://user-images.githubusercontent.com/3793636/134941350-0781e75e-a881-448f-b68c-e61a0134fedf.gif" alt="callout-quote-media--build" width="320px" />

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
