`Core` <!-- category start --><!-- category end -->

A [[Universal banner]] is the only component allowed to show up above the [[Masthead]], and should be used exclusively for global and critical announcements (e.g. THINK global event, COVID 19 messages etc).

![universal-banner-func-spec](https://user-images.githubusercontent.com/15643582/170297987-2aa86d23-f994-41ff-bad9-0b03444315d3.png)

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png)
> There are a lot of similarities between this component and the [[Content group banner]]. Can these features be absorbed into that, or can [[Content group banner]] depend on this component or vice versa?

<hr width="40%" />

<!-- toc start open="true" depthStart="3" depthEnd="5" --><!-- toc end -->

<details open="true">
  <summary><strong>Dependencies</strong> (<!-- dependencyCount start --><!-- dependencyCount end -->)</summary><br />

- [[Image]]
- [[CTA]]
- [[Markdown utility]]

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

- r1: [Box folder](https://ibm.ent.box.com/folder/142303458357)

<br />
</details>

<hr width="40%" />

<br />

###### Logic

|         | condition         | description                                                                                    |
| :------ | :---------------- | :--------------------------------------------------------------------------------------------- |
| `0.0.1` | content overflows | If the content extends beyond the component's fixed height than the content should be cut off. |
| `0.0.2` | `@sm` `@md`       | Entire banner becomes clickable.                                                               |

<br /><br />

### 1. Image

`optional` `component`

An optional [[Image]] component at various sizes.

###### Logic

|         | condition   | description         |
| :------ | :---------- | :------------------ |
| `1.0.1` | `@sm` `@md` | [[Image]] is hidden |

###### Sizes

|         | name  | description |           |
| :------ | :---- | :---------- | :-------- |
| `1.1.1` | `@md` | 4 columns   | `default` |
| `1.1.2` | `@lg` | 8 columns   |           |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Image]] for more information.

<!--    | `1.1.3` | `sm`        | 2 columns |     |
| `1.1.4` | `xsm`   | 1 column    |           | -->

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 2. Heading

`optional` `string`

An optional String of text that indicates the main message of the banner.

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for changes.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 3. Copy

`optional` `markdown`

An optional String of text formatted using [[Markdown utility]] with a limited scope.

###### Only include

> All other options should be ignored.

|         | props             | description                                        |
| :------ | :---------------- | :------------------------------------------------- |
| `3.0.1` | `*italic*`        | The _italic_ option should be included.            |
| `3.0.2` | `**bold**`        | The **bold** option should be included.            |
| `3.0.3` | `<p>new line</p>` | The new line paragraph feature should be included. |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[Markdown utility]] for more information.

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See design specs <sup>[r1](#resources)</sup> for changes.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />

### 4. CTA

`optional` `component`

An optional [[CTA]] that helps navigate users to more information about this notice.

###### Properties and values

|         | props   | values          |
| :------ | :------ | :-------------- |
| `4.0.1` | `type`  | `local`         |
| `4.0.2` | `style` | See logic below |

###### Logic

|         | condition           | description                        |
| :------ | :------------------ | :--------------------------------- |
| `4.0.3` | `@sm` `@md`         | `CTA` style is an `icon`           |
| `4.0.4` | `@lg` `@xlg` `@max` | `CTA` style is `button` `tertiary` |

> ![callout](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)
> See [[CTA]] for more information.

<br />[Back to top](#wiki-wrapper)<br /><br /><br />
