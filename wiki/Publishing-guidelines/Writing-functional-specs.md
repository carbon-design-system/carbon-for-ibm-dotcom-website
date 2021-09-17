The functional specs document is a deliverable after a functional analysis has been conducted over a full page template or all the way down to proposed component. It offers insights into how a component should be broken down, reused, named, and documents how it should function as a written agreement between design and development. Development will often take these documents and build it based on the requirements, and they will also often be used to help with content strategy from other teams, and also to QA by validate whether something is a bug or not.

<!-- toc start open="true" -->
*{{table of contents auto populates}}*
<!-- toc end -->

### Basic principles
- Reuse existing
- Avoid duplication and redundancy
- Document with consistent
- Design to scale
- Each document and component does one thing, and does that one thing very well
- Don't over engineer
- Start early, listen, and take note
- Collaborate across disciplines

### Naming components
There is a document with some basic naming strategy that we try to follow as best we can. Here is the link to our [naming strategy](https://ibm.box.com/s/xlq4romcyp50lnvwuaagyzzbmmesuxen). 

### Data model
At a low level every single one of our components starts here, and deviates as necessary. Here is a link to the [[Data model]].

<br /><br />

## Understanding the template

The functional spec template is just a set of common tools that I find commonly used across components, and compiled into a single file/template for easy reference and better consistency. All of the sections in this template do not always have to be used, and while I would ask if we could avoid it the fact that we have this template doesn't mean it's the only way or even best way to present a particular component. Use it as a jumping off point, and try your best to stay consistent with it. With all things functional specs related collaboration is important, so we can discuss changing things when reviewing if necessary.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  here is a link to the functional specs template: [[fs template]]

<br />

### Meta data

The meta data is used for organizational purposes to help the reader find what they are looking for while also providing the team with language and breakdown of how a component is formed. Some of these items are auto generated, so there is no effort on your part to update while others are manual. 

#### Table of contents
The table of contents in the template is auto generated. As long as you are using proper markdown headings it should find them just fine, and list the page outline up at the top of the page. So make sure to include the table of contents section template in your component wiki page.

#### Dependencies
The dependency list is one of the most important aspects of the functional specs. It communicates to the developer, and creates almost this written agreement between design and development what components should be used when building a component out. 

###### How to add a dependency

1. Find the dependency list in your component's template.
2. Add a new list item
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

By properly linking dependencies we will also run an automation script to collect all the dependencies and create a used by list in addition. Used by components once populated communicates to the reader where this component is used.

###### How to add a used by

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Keep dependencies up to date, and leverage used by template section in the component wiki page.

#### Backlinks
Every time a wiki document references a component other than itself it creates a back link. Those back links are listed out on that component's page as a snippet and categorized by pages. When clicked it will go to the section of the page where it was talked about, and highlight its contents. A backlink doesn't have to be used as a depency to work, and this list is automated. As long as you include it on the page it'll render its content if available.

#### Resources
The resource section is a numbered list of additional resources not included in the dependency list. For example design specs, box folders, prototypes, and maybe additional documentation are good things you could include here. Follow the numbering standard if possible to star consistent. `r` for resources, and `#` in the list. If for whatever reason we need to remove an item it's best to keep the numbers the name, and skip since there is possible cross page linking and to avoid multiple updates when a resource becomes outdated.

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

The sections on the page are just some ways I've used in the past to break content down, and provide the functional specs required for development. Ultimately the following levels use at your discretion, and discuss in review, but the following is how I tend to like to use them.

<br /><br />

#### Global
The global level is often where I'll put a visual of the component, and a high level break down of its elements and components. Every once in while I'll add a global option table or a logic conditional table to demonstrate how whole entire component's functionality can be modified. I typically won't include a markdown title to help indicate that it's apart of the highest level of the component.

#### Level 1
Level 1 tends to be the layer of elements, and usually any dependencies if there are any. Here I can identify what high level elements are `optional`, and what `type` (e.g. `string`, `component`) it might be.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `###` an `h3`.

#### Level 2

Level 2 can every once in a while will be more of the same as above, but most the time this is where component ends and there are usually one or more table options below to document the functionality here.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `####` an `h4`.

#### Level 3

Level 3 is rarely used, and only in some of the most complicated components we have. Even then if you're reaching level 3 you should be heavily considering breaking the component down.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `#####` an `h5`.

<br /><br />

#### Anatomy visual
The anatomy is often added as a high level annotated image within the global section. Often times it dictates the structure/outline of the functional specs. The annotations reference heading numbers that go into detail about a given aspect of the component. If more detail is needed we can break the component into annotated sections, and at level 2 provided a more detailed annotated anatomy image for reference. This ultimately does 2 things for the document. It provides the reader with a visual of what component they are looking at, but it also helps define the structure of the document.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  It's a little more important to keep these visuals up to date, but I've found there is no real reason to break your back over it as long as the anatomy hasn't change much. Visual specs are still the place to go for up to date visuals.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  Checkout [[Content block]] to see how it's leveraging the anatomy section.

<br />

#### Table templating options
The table templating options are a few predefined bucketed templates you can use to really get nit and gritty in detail with how the functionality of the component, or the particular aspect of the component functions.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  The title here is typically `######` an `h6`, and is not included in the table of contents generator. That can be changed by updating the `depthEnd` attribute if needed.

#### Logic

> The Logic table more or less handles conditional if/else type statements.

###### Some examples 

- Sometimes logic can be good if the component changes from `md` to `lg` breakpoint. For example if the `sameHeight` utility gets applied at larger breakpoints, but not for smaller breakpoints.
- If a certain value is present in a component, it might do something in particular, and if that value is missing it might do something else.

Logic is probably the most used table, and can be a good umbrella table to use if all else fails because it can be very flexible. Many of the other table options and given scenarios might also be capable of documenting a given scenario in a logic table. When you do this, you lose a little context. Try to use the others first, and use this to fallback on.

One thing to point out is that it might not always be necessary document the reversed condition if it can be inferred. For example if you have a line item in the logic table that says, "Show this element if true". It's possible you don't need an additional line item that says, "Hide element if false". A scenario like this can often be inferred that it was `undefined`, or `false` and hidden before we showed it upon becoming `true`.

<details>
  <summary><strong>Example</strong></summary><br />

> *An example of a [[Tabs extended]] component*

###### Logic

|         | condition   | description  |
|:--------|:------------|:-------------|
| `1.0.1` | `@sm` `@md` | Switches to [[Accordion]] layout |
| `1.0.2` | `@md` `@lg` `@xlg` `@max` | Switches to [[Carbon tabs]] layout |

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

Let's look at an `active` state as an example. When a component is not `active` it might have a click event that does a specific task while visually communicating the user that it's clickable. If the state of that component changes to indicate it is now `active` the click event could completely change or be completely removed along with a visual treatment to indicate to the user that the component is now not intractable.

In a scenario like this it can be important to callout the different states and their actions. If the visuals change between states call that out as well without getting specific. Then you can point the reader to review the design specs where they'll be able to see those types of details.

State may not always need to be used, and could be documented using logic, or events only. It's helpful to include this section if you have a lot going on, and it can help define context for functionality.

Also don't be afraid to break things down into smaller chunks, and reference a list of events, and logic if it's helpful. The last thing we want to do is repeat the documentation. Use judgement on the best way to document these things.

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

Don't be tempted to avoid including this section. If used correctly it can really help development understand the functionality we are trying to communicate.

> ![image](https://user-images.githubusercontent.com/3793636/117873919-f6faba80-b265-11eb-81a5-039bdcd822e8.png)  See the example below to see how [[Content block]] was abstracted visually

While this is primarily meant to visually show with images, this section does not need to be limited to images as examples. Just remember to prioritize the communication of it.

<details>
  <summary><strong>Example</strong></summary><br />

###### Example

> *An example using [[Content block]]*

![content-block](https://user-images.githubusercontent.com/3793636/121601206-3f46fd00-ca0b-11eb-9b38-7113fb525854.gif)

<br />
</details><br /><br />

#### References

A reference tag can either help point to another section on the page, or point out a resource number for the reader to check out that's related to the content.

Example <sup>[[r1](#resources)]</sup>

<details>
  <summary><strong>Code</strong></summary><br />

```html
Example <sup>[[r1](#resources)]</sup>
```

<br />
</details><br /><br />

#### Callouts

Callouts can be used to call attention to the reader to something important, or tangental information within the documentation they should consider. I like to use it to reference resources related directly to the content, pose questions on things maybe worth considering in the future, or callout concerns and road blocks.

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

Back to top is a link that helps the reader get to the top of the page quickly. I try to add one at the end of each Level 1 section at the least, and sometimes more often if the content is that dense. If we do our job right the functional specs should rarely become so huge that that happens.


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