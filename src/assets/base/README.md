# SAFX

Base
Last Updated: November 22, 2015

## Base

The `/base` directory contains all the base styles and systems, including color, typography, and variables—both custom and Bootstrap overrides.

### Color

TBD

### Typography

The typographic system contains three headings, paragraphs, and small text, along with a variety of utility classes. The type system leverages Bootstrap where possible.

#### Headings

Heading 1 (`<h1>`) and Heading 2 (`<h2>`) have a bottom margin of `20px`, while Heading 3 (`<h3>`) has a bottom margin of `10px`. Headings 4-6 are not defined.

To use a subheading (e.g., introduction text that follows a Heading 1), attach the `.subhead` class to a `<p>`.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h1>
<h3>Heading 3</h1>

<h1>Heading 1</h1>
<p class="subhead">Subheading</p>
```

#### Body Copy

Paragraphs (`<p>`) have a bottom margin of `10px`, except when it's the last item in a block; in that instance, the bottom margin is `0px`.

```html
<div>
  <p>This paragraph has a bottom margin of 10px.</p>
  <p>This paragraph has a bottom margin of 0px, since it is the last paragraph in the div.</p>
</div>
```

Text links take the styling of the element the link is being applied to, but have a color of `$primary-10`. The hover state for a text link adds an underline, but does not change in color.

#### Utility Classes

While all the [utility classes from Bootstrap](http://getbootstrap.com/css/#type) apply, the following are most-commonly used within this system:

- `.text-success`, which maps to Success/Positive
- `.text-danger`, which maps to Danger/Warning
- `.text-info`, which maps to Info/Neutral
- `.text-uppercase`, which transforms any text into all caps

In addition to these utility classes, the following two classes are also available:

- `.text-secondary`, which maps to Secondary text
- `.text-tertiary`, which maps to Tertiary text
