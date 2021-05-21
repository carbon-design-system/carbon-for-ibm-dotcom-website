
<!-- toc start --><!-- toc end -->

# Introduction
This document is to understand and establish requirements for base type size based on our users to inform the type theming design and development.

<br/>

# IBM Customers

### Z system persona
Z systems main customers are system admins, which require years of experience. According to a survey, they start feeling comfortable in their roles after 10 years.

| Role | Age |
|:--|:--|
|Sr. systems programmer/admin| 50+|
|Mid-level systems programmer | 35+|
|Entry-level programmer | 22+|

<br/>

### Main user journey personas

The Journey System team identified the following four main user persona groups, and their age distribution is as follows.

#### 1. Biz leaders
|Role|Avg age|Ref|
|:--|:--|:--|
|CFO| 50.7 |[ref](https://www.spencerstuart.com/research-and-insight/profile-of-the-fortune-500-cfo-today-and-in-the-future)|
|CMO|52|[ref](https://www.forbes.com/sites/avidan/2017/03/26/a-new-survey-reveals-that-cmos-are-facing-the-shortest-lifespan-in-the-c-suite/#45d13ec04d02)|

#### 2. Tech leaders
|Role|Avg age|Ref|
|:--|:--|:--|
|CTO| 44|[ref](https://insights.dice.com/2017/03/13/long-take-become-cto/)|
|CIO|49.5|[ref](https://www.vell.com/cio-succession-basic-demographics)|

#### 3. Developers
|Age|Percentage|Ref|
|:--|:--|:--|
|20-39 | 17.7%|[ref](https://www.freecodecamp.org/news/2-out-of-3-developers-are-self-taught-and-other-insights-from-stack-overflow-s-2016-survey-of-50-8cf0ee5d4c21/)|
|40+| 17.4%| [ref](https://www.freecodecamp.org/news/2-out-of-3-developers-are-self-taught-and-other-insights-from-stack-overflow-s-2016-survey-of-50-8cf0ee5d4c21/)|

#### 4. Business analyst
|Role|Avg age|Ref|
|:--|:--|:--|
|Business analyst|41.3 years|[ref](https://masteringbusinessanalysis.com/wp-content/uploads/2015/05/ba_salary_survey_2010.pdf)|

<br/>

### General workforce within the industry
|Age group|Percentage|
|:--|:--|
|16-20|5%|
|21-36|35%|
|37-52|33%|
|53-71|25%|
|72+|2%|

[Ref](https://www.pewresearch.org/fact-tank/2018/04/11/millennials-largest-generation-us-labor-force/)

<br/>

# Accessibility is not just about color contrast and color blindness. It's also about age, vision, cognitive abilities.

[Dyslexia](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)
- Need to maintain minimum 16px

[Health.gov](https://health.gov/healthliteracyonline/display/section-3-3/)
- Choose minimum 16px

[design-system.service.gov.uk](https://design-system.service.gov.uk/styles/typography/)
- The default paragraph font size is 19px on large screens and 16px on small screens.

[Designing for ADHD](http://homepage.divms.uiowa.edu/~hourcade/idc2010-myw/mcknight.pdf)
- In terms of size, 12-point (= 16px) is often suggested for use on a screen

<br/>

# Base type size

### General web resources

[The Responsive Website Font Size Guidelines](https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)
- When the user taps on input field with label smaller than 14px, it zooms in.

[16 Pixels Font Size: For Body Copy. Anything Less Is A Costly Mistake](https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/)
- At age 40, only half the light gets through to the retina as it did at age 20. For 60-year-olds, it’s just 20%.
- Nearly 9% of Americans are visually impaired, meaning their vision cannot be completely corrected with lenses.

[WCAG AA](https://accessibleweb.com/knowledgebase/perceivable/1-4-distinguishable/01-04-04-resize-text-level-aa/)
- generally agreed upon size is 16px

[Designing for seniors](https://www.fonts.com/content/learning/fyti/situational-typography/designing-for-seniors)

[the best font size for the web](https://www.imarc.com/blog/best-font-size-for-any-device)
#### Desktop, 104PPI at 23 inches
| | Times | | Arial | |
|---|---|---|---|---|
| Min | 14pt | 19px | 12pt | 16px &#x1F539;  |
| Reco | 18pt | 24px | 15pt | 21px |

#### Laptop, 121PPI at 14 inches
| | Times | | Arial | |
|---|---|---|---|---|
| Min | 10pt | 14px | 9pt | 12px |
| Reco | 13pt | 17px | 11pt | 15px |

#### Phone, 167PPI at 14 inches
| | Times | | Arial | |
|---|---|---|---|---|
| Min | 14pt | 19px | 12pt | 16px &#x1F539;  |
| Reco | 18pt | 24px | 15pt | 21px |

<br/>

# Component size
- Are we okay with mixing 16px body and 14px components?

### Studies
- Body + component pairing
- URX
- Checkout
- Search

<br/>

# Questions
- is it more of the website issue?
- general type size theming

---

<!-- backlinks start open="true" --><!-- backlinks end -->