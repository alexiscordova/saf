SAFX
===
Button Documentation  
Last Updated: November 10, 2015

## Buttons
Buttons come in four types—Default, Primary, Success, and Danger—and two sizes—Default (large) and small. Each button type and size can also be disabled and/or contain an icon.

Each button requires a URL, a specified button class, and copy.

###Default

```html
<a href="#" role="button" class="btn btn-default">Default</a>
```

###Primary

```html
<a href="#" role="button" class="btn btn-primary">Primary</a>
```

###Success

```html
<a href="#" role="button" class="btn btn-success">Success</a>
```

###Danger

```html
<a href="#" role="button" class="btn btn-danger">Danger</a>
```

###With Icon

```html
<a href="#" role="button" class="btn btn-primary">
  <span class="icon"><</span>
  Primary with Icon
  <span class="icon">></span>
</a>
```

**Note**: Icons can be placed before or after the button copy.

###Disabled

```html
<a href="#" role="button" class="btn btn-default" disabled>Disabled</a>
```

**Note**: Disabled states can either be applied with the `disabled` boolean attribute or the `.disabled` class.

###Small Buttons
Small buttons can be used when the layout doesn't afford the space for a default (large) button, such as a table. To make a button small, add the `.btn-sm` class.

```html
<a href="#" role="button" class="btn btn-sm btn-default">Default</a>
```