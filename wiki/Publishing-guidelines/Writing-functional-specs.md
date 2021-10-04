This functional specs document describes a component’s capabilities, appearance, and interactions. It also explains how a component should be named, broken down, and reused by other components. 

<!-- toc start open="true" -->
*{{table of contents auto populates}}*
<!-- toc end -->

### How it's used
The functional specs serve as the source of truth for all aspects of a component and operates as a written agreement between design and development.
- Design will use functional specs to communicate their design intent, and iron out edge cases.
- Development will often use the functional specs to build the component based on requirements.
- QA will use the document to validate whether something is a bug or not.
- It’s also used by other teams for content strategy planning and more.

### Basic principles

Apply these basic principles to your functional analysis and specs. These principles can be used to help guide you and your teammates to build a scalable component within a large system.

- **Start early in your team's process**: attend meetings, listen, be involved, take notes. If you start too late in the process you risk becoming a bottle neck, and revising old decisions that should have never been made.
- **Collaborate across disciplines**: Functional analysis and specs sits at the intersection of design, development, and even business. It fills a gap, and is intended to help improve the collaboration between these disciplines. In addition to that, the functional analyst should help facilitate discussions, and bring the different disciplines together into the same room to collaborate. This type of diverse thinking early on will help you find the most ideal solution for the system, and many of its edge cases earlier in the process. Do not write functional specs in a silo.
- **Reuse existing components**: Always look at what you have to build off of first before adding new components. Many times an existing component will fit your new scenario with maybe a subset of its features. Next look at changing only a couple small things in an existing component to allow for a new use case. If it just can't, it's over engineered, or doesn't make sense to fit into any existing components then consider creating a new component.
- **Avoid duplication and redundancy**: Do not write functionality out in *Component A* when *Component B* already outlines that same functionality. Otherwise we have to remember to go back and update *Component A* when we're updating that *Component B* functionality. Instead just link out to *Component B* for the reader to reference, and only outline fixed values applied to that component. If you find yourself documenting the same functionality across multiple components consider creating a new component, or utility.
- **Think about edge cases**: Edge cases are easy to neglect because they are hard to imagine sometimes. This is often because it takes a different way of thinking or new perspective to identify them. You may not catch every single nuance, but it's important to put a lot of time and thought into imagining scenarios not specifically called out in the design process, and either documenting them in the functional specs or asking design to find a solution. If we do not work to solve for this in the design, and functional spec stages then development is usually left to solve it on their own.
- **A component should do one thing very well**: A component shouldn't do too much, and neither should its functional specs. When we add too much functionality to a single component it becomes bloated. The code and documentation becomes hard to understand, performance tends to go down, and opportunity for bugs increases dramatically. If you find things are getting out of hand, and your functional spec document is becoming too long and complicated that might be a sign you need to brake it down into smaller components.
- **Don't over engineer**: To help balance the last point out we don't want to overdo it. Don't start breaking a component down before you understand what's going on. Sometimes by looking too far into the future you're creating extra work for yourself now, and in the future. Also teams often times want complicated solutions that add an extraneous amount of burden on a component unnecessarily. It's the functional analyst's job to see when we might be starting to over engineer a component's solution, and then help push back and simplify it.
- **Document with consistency**: When documenting a component it's easy to write *Component A* one way, and maybe someone else comes in to document *Component B* a different way. It's important to be as consistent as we can be in format, and language used. Start with the [naming strategy](#how-to-name-components), [data models](#data-model), [templates](#understanding-the-template) and other guidelines we have available. If something isn't working then we can have a conversation about either how to mold the documentation correctly, or how we can iterate on the guidelines to fit our needs as they grow.

### How to name components
The [Component naming standard](https://ibm.box.com/s/xlq4romcyp50lnvwuaagyzzbmmesuxen) provides guiding principles for naming components based on their anatomy, hierarchy, and appearance. Naming components in a consistent way ensures recognition and increases a component's findability by users of the system. 

### Data model
The [[Data model]] is a shared architecture of content across all of our components, and should be used as a starting point when structuring new components or updating existing components.

<br /><br />

## Understanding the template

The [[Functional spec template]] includes the sections most commonly needed to document our components. Using a common format drives consistency across our library and makes it easier for everyone to use. Use only the sections you need and if there’s a better way to present a particular component, we can review and change as necessary. 

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  here is a link to the functional specs template: [[Functional spec template]]

<br />

### Meta data

The meta data helps the reader find what they are looking for while also providing the team with the language and breakdown of how a component is formed. Some of these items are autogenerated, while others are added manually.

Categorization tagging like `layout` or `service` at the top of the document is autogenerated based on what folder the functional spec is saved to. Additional tags like `decorator` or `core` must be added manually.

#### Table of contents
The table of contents is autogenerated. Make sure the table of contents section template is included in your component wiki page. With correct markdown headings, the page outline will automatically appear where you place the template section. 

#### Dependencies
The dependency list is one of the most important aspects of the functional specs. It communicates to the developer what components should be used when building out a component. It's a key part of the written agreement between design and development about what the component is, looks like, and does.

###### How to add a dependency

1. Find the dependency list in your component's template.
2. Add a new list item.
3. Link to the component using the Wiki linking strategy.

<details>
  <summary><strong>Example</strong></summary><br />

```html
- [[Component or wiki page name 1]]
- [[Component or wiki page name 2]]
- [[Component or wiki page name 3]]
```

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Notice the double brackets with the file name `[[File name]]` in-between. This is different from a markdown link `[text](url)`.

<br />
</details><br /><br />

#### Used by

The used by components section communicates to the reader where this component is used in other components. As long as you include this section, and properly link to it in other components' [dependencies](#dependencies) then this list will create itself.

###### How to add a used by

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Keep [dependencies](#dependencies) up to date, and leverage [used by](#used-by) template section in the component wiki page.

#### Backlinks
When a wiki document references another component, it creates a back link. Back links are autogenerated and are listed by page, along with a snippet of text from the page for context. The links take you directly to the mention on the page.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Use double bracket `[[Document name]]` MediaWiki syntax to get proper link backs at this moment.

#### Resources
The resource section is a numbered list of additional resources not included in the [dependency list](#dependencies). For example design specs, box folders, prototypes, and any additional documentation that will be helpful. Follow the numbering standard to stay consistent (`r` for resources, and `#` in the list). If you need to remove an item, it's best to keep its number the same. Skipping numbers in this scenario is okay, and preferred as there could be cross page linking.

<details>
  <summary><strong>Example</strong></summary><br />

```html
- r1: [resource example](www.example.com)
- r2: [resource example](www.example.com)
- r3: [resource example](www.example.com)
- r6: [resource example](www.example.com)
- r7: [resource example](www.example.com)
```

<br />
</details><br /><br />

### Sections

The following sections provide a structure for the information required for component development. Using this same structure provides consistency across documents and ease of use for all stakeholders. If there are adjustments needed for your component, we can review and discuss the best approach. 

<br /><br />

#### Global
Use Global to include a visual of the component, and a high level break down of its elements and components. Depending on the needs of the component, it may be helpful to include one or more global [option tables](#table-options) to demonstrate how the whole component's functionality can be modified. 

#### Level 1
Level 1 typically outlines the highest layer of elements within a component, along with any dependencies. This is where you identify what pieces are `optional`, and what `type` (e.g. `string`, `component`) it might be. Use this section to break the component down further, or add functional details, as needed.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `###` an `h3`.

#### Level 2

Level 2 can be more of the same as [Level 1](#level-1) above, but most of the time this is where the breakdown ends. There are usually one or more [table options](#table-options) below to document the detailed functionality.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `####` an `h4`.

#### Level 3

Level 3 is rarely used, and if included its usually only in some of the most complicated components we have. Even then if you're reaching level 3 you should be reconsidering your approach.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `#####` an `h5`.

<br /><br />

#### Anatomy visual
The anatomy is often added as a high level annotated image within the [global section](#global). Often times it dictates the structure/outline of the functional specs. The annotations reference heading numbers that go into detail about a given aspect of the component. If more detail is needed we can break the component into annotated sections, and at [level 2](#level-2) provided a more detailed annotated anatomy image for reference. This ultimately does 2 things for the document. It provides the reader with a visual of what component they are looking at, but it also helps define the structure of the document.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  It's a little more important to keep these visuals up to date, but there is often no reason as long as the anatomy hasn't changed much. Visual specs are still the place to go for up to date visuals.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Checkout [[Content block]] to see how it's leveraging the anatomy section.

<br />

#### Table options
Thes table options below are a few predefined templates you can use to really detail the functionality and behavior of a component.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `######` an `h6`, and is not included in the table of contents generator. That can be changed by updating the `depthEnd` attribute if needed.

#### Logic

> The Logic table more or less handles conditional if/else type statements.

###### Some examples 

- Sometimes logic can be good if the component changes from `md` to `lg` breakpoint. For example if the `sameHeight` utility gets applied at larger breakpoints, but not for smaller breakpoints.
- If a certain value is present in a component, it might do something in particular, and if that value is missing it might do something else.

Logic is probably the most used table, and can be a good umbrella table to use if all else fails because it can be very flexible. Many of the other table options and given scenarios might also be capable of documenting a given scenario in a logic table. When you do this, you lose a little context. Try to use the others first, and use this to fallback on.

One thing to point out is that it might not always be necessary to document the reversed condition if it can be inferred. For example if you have a line item in the logic table that says, "Show this element if true". It's possible you don't need an additional line item that says, "Hide element if false". A scenario like this can often be inferred that it was `undefined`, or `false` and hidden before we showed it upon becoming `true`.

<details>
  <summary><strong>Example</strong></summary><br />

> *An example of a [[Tabs extended]] component*

###### Logic

|         | condition   | description  |
|:--------|:------------|:-------------|
| `1.0.1` | `@sm` `@md` | Switches to [[Accordion]] layout |
| `1.0.2` | `@lg` `@xlg` `@max` | Switches to [[Carbon tabs]] layout |

<br />
</details><br /><br />


#### Events

> An Event is something the a component might do, or something a user does to a component that triggers a single or series of behaviors and functionality.

###### Some examples 

- Most of the time you'll be dealing with most of the common events built into the browser like `onClick`, `onMouseOver`, etc.. 
- Other times the event could relate to something the component does internally (e.g. data `loads` or `updates`, component `scrolls into view`)
- Every once in a while you might need to callout a custom event that isn't standard. For the sake of an example this might be the case if you want to trigger a specific action on the page maybe every time the search component in the masthead `opens`/`closes`.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  [See a list of DOM events.](https://developer.mozilla.org/en-US/docs/Web/Events)

While the functional specs tracks events, we want to avoid redundancy and duplication. Events inherited from components we depend on don't need to be called out, and similar events built into the DOM don't always need to be called out either unless we are overriding and customizing the actions taking place. For instance a normal link on a page will navigate to the URL given. We don't need to call this out with an `onClick` because it's common knowledge based on how the browser works.

<details>
  <summary><strong>Example</strong></summary><br />

> *An example of a scrolling animation*

###### Events

|         | name   | description  |
|:--------|:------------|:-------------|
| `1.0.1` | `scrolls-into-view`   | Animates into view |
| `1.0.2` | `scrolls-out-of-view` | Resets animation   |

---

<br />
</details><br /><br />


#### State

> States indicates a given change in behavior and/or visual based on a component's current status.

###### Some examples  
- The state of a component can change based on whether the user is viewing in `dark-mode`, or `light-mode`.  
- A card that describes an event can have a few different states depending on whether it's in the `past`, `present`, `future`, or altogether `canceled`.
- The state of a component can change based on a user triggered event to indicate an item is either set to `active`, or `selected`.

Depending on the scenario, state can impact the functionality and/or visual treatment of a given component. 

Let's look at an `active` state as an example. When a component is not `active`, it might visually communicate that it does something on click. If the state of that component changes to indicate it is now `active` the click event could do something different, or it might be removed all together.

In a scenario like this it can be important to callout the different states and their actions. If the visuals change between states we can call them out without getting into specifics. Then you can point the reader to review the design specs where they'll be able to see those types of details.

<details>
  <summary><strong>Example</strong></summary><br />

> *An example of an event card*

###### States

|         | name       | description  |
|:--------|:------------|:-------------|
| `1.0.1` | `past`      | Don't render component  |
| `1.0.2` | `present`   | Enable component's [[CTA]], and adjusts visuals  |
| `1.0.2` | `future`    | Disable component's [[CTA]], and adjusts visuals  |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See visual design specs <sup>[[r1](#resources)]</sup>

<br />
</details><br /><br />

#### Modifiers

<!-- options, data, modifiers, props -->

> A modifier is something the adopter can set on/in a given component, impacting it either visually or functionally.

###### Some examples  
- A data list summarizing how a component, or an aspect of that component leverages the common data model and influences its functionality.
- A Kaltura VideoId could be passed into a video component to render the Kaltura player with the correct video.
- Showing the options not allowed. (e.g. CTA types, or styles that are limited in decorators)

While nearly every component has at least one option, it isn't always necessary to list them out in this options section. This section isn't meant to be exhaustive, so development has the opportunity to build the component the way they need to. Every once in a while we need to lock an option in place, so to make sure development includes that option as written.

Dependencies sometime have their own options, and with that we can either open it up to all options, scope it down to a limited set, or lock it into a specific option. This section can be helpful to document how we are deviating from the original dependency. If the option isn't listed then it's given that there is no change to that option, and if one value is provided than we are locking to that specific value. To indicate a scoped list of values can be done either by listing out the options still available, or in the reverse as "everything but this one value".

Depending on the needs you could use the `h6` `######` heading to indicate an option, and then each table row has the options, or you can set the `h6` `######` to "Options", and each table row gets an option. The first might be good if you need to get detailed and be a little more exhaustive, and the later might be good if you just need to quickly indicate its scope for a dependency.

<details>
  <summary><strong>Example</strong></summary><br />

> *An example using different sizing options in something like [[Lead space]]*

###### Modifiers

|            | name   | description  |
|:-----------|:---------|:-------------|
| `1.0.1`    | `size`   | options for size are: `short (default)`, `medium`, `tall`  |
| `1.0.2`    | `...`  | ...  |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See visual design specs <sup>[[r1](#resources)]</sup>

---

###### Sizes

|            | value    | description  |
|:-----------|:---------|:-------------|
| `1.0.1`    | `short (default)`  | Changes height to smallest short, and hides both `CTA` and `copy`. |
| `1.0.2`    | `medium` | Changes `size` to `medium`, adds `CTA` option, but hides `copy`.  |
| `1.0.3`    | `tall`   | Changes `size to `tall`, and adds `CTA` and `copy` option.  |

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See visual design specs <sup>[[r1](#resources)]</sup>

<br />
</details><br /><br />


#### Example

> Examples help support and illustrate a specific aspect of how a component looks or functions.

###### Some examples  
- An abstract animation to communicate how children are added to a Content block component.
- An example of how configuration might visually differ from the main image presented above. (e.g. horizontal orientation of a navigation vs. vertical).
- Snippet of code for the developer to reference and understand in detail what's expected.

One of the fears, or concerns with this section is how easily it can become outdated visually. Because of this it's good to focus more on the functionality, and abstract as much if possible. Sometimes the visuals can remain outdated as long as it still effectively communicates the functionality. Remember design specs are intended for the most up to date visual details, and you can point the reader there for more information.

Don't be tempted to avoid this section. If used correctly it can really help development understand the functionality we are trying to communicate.

While this is primarily meant to visually show with images, this section does not need to be limited to images as examples. Just remember to prioritize the communication of it.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See the example below to see how [[Content block]] was abstracted visually

<details>
  <summary><strong>Example</strong></summary><br />

###### Example

> *An example using [[Content block]]*

![content-block](https://user-images.githubusercontent.com/3793636/121601206-3f46fd00-ca0b-11eb-9b38-7113fb525854.gif)

<br />
</details><br /><br />

#### References

A reference tag can either help point to another section on the page, or point out a resource number for the reader to check out what's related to the content.

Example <sup>[[r1](#resources)]</sup>

<details>
  <summary><strong>Code</strong></summary><br />

```html
Example <sup>[[r1](#resources)]</sup>
```

<br />
</details><br /><br />

#### Callouts

Callouts can be used to call attention to the reader to something important, or tangental information within the documentation they should consider. Use it reference resources related directly to the content, pose questions on things maybe worth considering in the future, or callout concerns and road blocks.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Check something out <sup>[[r1](#resources)]</sup>

<details>
  <summary><strong>Code</strong></summary><br />

```html
> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Check something out <sup>[[r1](#resources)]</sup>
```

<br />
</details><br /><br />

> ![image](https://user-images.githubusercontent.com/3793636/117873641-a6835d00-b265-11eb-8433-8c9c73a2e999.png) Identify a blocker

<details>
  <summary><strong>Code</strong></summary><br />

```html
> ![image](https://user-images.githubusercontent.com/3793636/117873641-a6835d00-b265-11eb-8433-8c9c73a2e999.png) Identify a blocker
```

<br />
</details><br /><br />

> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png) Add a question / note

<details>
  <summary><strong>Code</strong></summary><br />

```html
> ![image](https://user-images.githubusercontent.com/3793636/117874180-493bdb80-b266-11eb-8945-dde0d95431d6.png) Add a question / note
```

<br />
</details><br /><br />

#### Back to top

Back to top is a link that helps the reader get to the top of the page quickly. Usually each [Level 1](#level-1) section should have this, and sometimes the deeper levels if its content becomes too long. If we do our job right the functional specs should rarely become so huge that that happens.


<br />[Back to top](#wiki-wrapper)<br /><br /><br />

---

### Additional terminology

- Decorators
- Component
- UI component
- Layout component
- Service
- Utility 
- Core
- Functional
- Block level
- Section level
- Sub level