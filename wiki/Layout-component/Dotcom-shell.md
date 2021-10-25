`Decorator` <!-- category start --><!-- category end -->

The [[Dotcom shell] wraps up all of the global and required IBM.com components
into a single component for easy page creation.

![dotcom-shell--static](https://user-images.githubusercontent.com/3793636/134915325-1b68ee22-d102-45a5-96c5-fa1e0469e797.jpg)

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Masthead]]
- [[Footer]]
- [[Carbon 2x grid]]

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
  
- r1: [Box folder](https://ibm.ent.box.com/folder/146658436564)

<br />
</details>

<hr width="40%" />

<br />

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> Here are a couple components/features we should consider adding:
> [[Back to top]], [[Scroll animations]], Site feedback, Let's talk

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> Should sticky component behavior be controlled in this component to reduce its
> complexity across the system?

### 1. Masthead

`required` `component`

The masthead provides the site's main navigation along with other features, and
is required on all IBM.com pages. This component is used as is, so check out
[[Masthead]] for how to use it.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Masthead]] for more details

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Children

`optional` `container`

An optional container area that child components, and other content types can be
passed into. This section already wraps its children with a [[Carbon 2x grid]]
`.bx--grid` container.

> ![image](https://user-images.githubusercontent.com/3793636/117873641-a6835d00-b265-11eb-8433-8c9c73a2e999.png)
> The current implementation of this component's dependency on the
> [[Carbon 2x grid]] limits its ability to provide full width / bleeding layouts
> to its children.

###### Example

<img src="https://user-images.githubusercontent.com/3793636/134914808-69c968a9-0817-407f-b554-21de44a7492a.gif" alt="dotcom-shell--children" width="320px" />

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Footer

`required` `component`

The footer component provides additional links and legal requirements at the
bottom of the page, and is required on all IBM.com pages. This component is used
as is, so check out [[Footer]] for how to use it.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Footer]] for more details

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
