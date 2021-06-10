`Core` <!-- category start --><!-- category end -->

The [[Content block]] is a core component used to help you build more complex patterns by being placed within [[Content section]].

<!-- ![image](https://user-images.githubusercontent.com/3793636/119082616-0eebe000-b9c4-11eb-8e2a-fcabf8dad107.png) -->

![content-block-static](https://user-images.githubusercontent.com/3793636/121604082-82a36a80-ca0f-11eb-9b51-e44712b477f2.jpg)

<hr width="40%" />

<!-- toc start open="true" -->
*{{toc auto populates}}*
<!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Data model]]
- [[Markdown utility]]
- [[Link list]]
- [[Layout]]
- [[CTA]]

<br />
</details>

<!-- usedby start -->
*{{usedby auto populates}}*
<!-- usedby end -->

<!-- backlinks start -->
*{{backlinks auto populates}}*
<!-- backlinks end -->

<a name="resources"></a>
<details open="true">
  <summary><strong>Resources</strong></summary><br />

- r1: [Box folder](https://ibm.ent.box.com/folder/99481428439)

<br />
</details>

<hr width="40%" />

<br />

### 1. Heading

`optional` `string`

An optional short `String` of text to indicate a change in topic. 

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Copy

`optional` `string`

An optional `String` of text formatted using the [[Markdown utility]]. It provides the component with a high level overview of its content.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See [[Markdown utility]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Children

`optional` `container`

An optional container area that child components, and other content types can be passed into.

###### Example
![content-block](https://user-images.githubusercontent.com/3793636/121601206-3f46fd00-ca0b-11eb-9b38-7113fb525854.gif)

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. CTA

`optional` `component`

An optional [[CTA]] that allows a user to navigate to related content.

###### Properties and values

|        | props      | values       |
|:-------|:-----------|:-------------|
| `4.1`  | `type`     | All types    |
| `4.2`  | `style`    | All styles   |


> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See [[CTA]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 5. Aside

`optional` `container`

An optional secondary container area that child components, and other content types can be passed into. The information provided in this container should not be supporting content to the component.

###### Logic

|        | condition         | description                                                     |
|:-------|:------------------|:----------------------------------------------------------------|
| `5.1`  | `aside === true`  | Layout <sup>[[5.3](#53-layout)]</sup> is used to wrap content.  |
| `5.2`  | `aside === false` | Layout <sup>[[5.3](#53-layout)]</sup> is NOT used.              |


###### Example
![content-block-aside](https://user-images.githubusercontent.com/3793636/121601417-88974c80-ca0b-11eb-9b6b-1e02f1596b02.gif)


#### 5.3 Layout

`component`

The Layout component helps layout the main content and the Aside <sup>[[5](#5-aside)]</sup> elements next to each other.

###### Properties and values

|          | props     | values  |
|:---------|:----------|:--------|
| `5.3.1`  | `type`    | `8-4`   |
| `5.3.2`  | `nested`  | `true`  |
| `5.3.3`  | `border`  | Border can be passed in true or false optionally set by the adopter.  |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See [[Layout]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
