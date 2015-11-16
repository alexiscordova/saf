SAFX
===
Form Elements  
Last Updated: November 16, 2015

## Form Elements
Form Elements—text inputs, checkboxes, and radio buttons—make up a good portion of the SAF user interface. All form fields are wrapped inside of a `<form>` tag.

###Text Inputs
There are quite a few variations of text inputs, with a mixture of options, states, and text. The markup below is the minimum required HTML for the type of field; however, `<label>`s are optional. When using a `<label>`, the `for` attribute must be used on the `<label>` and linked with the `<input>` by giving it the same value for `id`. Placeholder text can be applied by providing a text value for the `placeholder` attribute.

**Note**: Many of these options can be combined to create complex fields. For example, a standard text field can have a trigger action and descriptive text. With certain options, the markup is required to change slightly. This should be reflected in the final template.

**Search**

```html
<form>
  <div class="form-group">
      <label for="search">Search</label>
      <div class="form-wrapper">
        <span class="search-icon"></span>
        <input type="search" id="search" class="form-control" placeholder="Search…" />
    </div>
  </div>
</form>
````

**Text**

```html
<form>
  <div class="form-group">
      <label for="text-field">Text</label>
      <input type="text" id="text-field" class="form-control" placeholder="Text" />
  </div>
</form>
```

**Password**

```html
<form>
  <div class="form-group">
    <label for="password">Password</label>
      <input type="password" id="password" class="form-control" placeholder="Password" />
  </div>
</form>
```

**Text With Action**

```html
<form>
  <div class="form-group">
      <label for="text-field">Text with action</label>
      <div class="form-wrapper">
          <input type="password" id="text-field" class="form-control" placeholder="password" />
          <span class="form-trigger">Show</span>
      </div>
  </div>
</form>
```

Generally, the action (`.form-trigger`) will transform the related input. In the example above, when the trigger is clicked the password fields turns into a text field, displaying the text. The trigger text ("Show") will change to "Hide". For this variation, wrapping the `<input>` and `.form-trigger` in `.form-wrapper` is required.

**Disabled**

```html
<form>
  <div class="form-group">
      <label for="text-field-disabled">Disabled text</label>
      <input type="text" id="text-field-disabled" class="form-control" placeholder="Disabled text" disabled />
  </div>
</form>
```

Disabled states are triggered by adding the `disabled` attribute to the input.

**Input Add-on**

```html
<form>
  <div class="form-group">
      <label for="currency">Input with label (right)</label>
      <div class="input-group">
          <input type="text" id="currency" class="form-control" placeholder="Amount (in percentage)" />
          <span class="input-group-addon">%</span>
      </div>
  </div>
</form>
```

Add-ons are caps that can be on the right OR the left, with `.input-group-addon` coming before or after the input. `<input>` and `.input-group-addon` are wrapped in `.input-group`.

**Error state**

```html
<form>
  <div class="form-group has-error">
      <span class="error-msg">Error Message</span>
      <label for="text-field-error">Text with error</label>
      <input type="text" id="text-field-error" class="form-control" placeholder="Text with error" />
  </div>
</form>
```

Errors are triggered by adding `.has-error` to the `.form-group` wrapper.

**Multi-line/Textarea**

```html
<form>
  <div class="form-group">
      <label for="text-area">Multi-line input</label>
      <textarea id="text-area" class="form-control" placeholder="Multi-line Input"></textarea>
  </div>
</form>
```

Multi-line/Textarea are used when the user needs to input multiple lines of text. By default, the textarea will display three full lines of text, and is not resizable.

**Descriptive text**

```html
<form>
  <div class="form-group">
      <label for="additional-info">Input with additional text</label>
      <input type="text" id="additional-info" class="form-control" placeholder="Additional Info" />
      <small class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
  </div>
</form>
```

Descriptive text is used to describe the type of input required, or offer assistance to the user in the form of a link. While `<small>` is used in this example, any HTML element can be used (but is primarily `<small>` or `<a>`).

##Checkboxes
The custom checkboxes have four states: passive, hover, checked, and disabled. Clicking on either the checkbox or the label will activate the checkbox. As with form fields, checkboxes should be grouped in `<form>` and proper usage of the `for` and `id` attributes apply.

Disabled states do not get hover states, but can be checked by default by using the `checked` attribute on the `<input>`.

**Passive**
```html
<form>
  <div class="checkbox">
    <input type="checkbox" id="checkbox-1" />
    <label for="checkbox-1">Checkbox One</label>
  </div>
</form>
```

**Checked**
```html
<form>
  <div class="checkbox">
    <input type="checkbox" id="checkbox-1" checked />
    <label for="checkbox-1">Checkbox One</label>
  </div>
</form>
```

**Disabled**
```html
<form>
  <div class="checkbox disabled">
    <input type="checkbox" id="checkbox-disabled" disabled />
    <label for="checkbox-disabled">Checkbox Three</label>
  </div>
</form>
```

Disabled states require `.disabled` on the `.checkbox`, as well as the `disabled` attribute on the `<input>`. This gives the checkbox and the label the proper styling.


##Radio Buttons
Radio buttons are similar to checkboxes, except they represent as single choice (versus a collection of choices). While the same checkbox rules apply, radio buttons also require the `name` attribute, which refers to the grouping of radio buttons.

**Passive**
```html
<form>
  <div class="radio">
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">
    <label for="optionsRadios1">Option One</label>
  </div>
</form>
```

**Selected**
```html
<form>
  <div class="radio">
    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
    <label for="optionsRadios1">Option One</label>
  </div>
</form>
```

**Disabled**
```html
<form>
  <div class="radio disabled">
    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
    <label for="optionsRadios3">Option Three is disabled</label>
  </div>
</form>
```