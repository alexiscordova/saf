SAFX
===
Form Elements  
Last Updated: November 16, 2015

## Form Elements
Form Elements—text inputs, checkboxes, and radio buttons—make up a good portion of the SAF user interface. All form fields are wrapped inside of a `<form>` tag.

###Text Inputs
There are quite a few variations of text inputs, with a mixture of options, states, and text. **Note**: While the markup provided is for a specific use case, *many of these options can be combined to create complex fields*. An example is provided below.

**Search**

```html
<form>
	<div class="form-group">
    	<label for="search">Search</label>
    	<div class="form-wrapper">
      	<span class="search-icon">X</span>
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
      		<input type="text" id="text-field" class="form-control" placeholder="Text" />
      		<span class="form-trigger">Clear</span>
    	</div>
	</div>
</form>
```

**Disabled**

```html
<form>
	<div class="form-group">
    	<label for="text-field-disabled">Disabled text</label>
    	<input type="text" id="text-field-disabled" class="form-control" placeholder="Disabled text" disabled />
	</div>
</form>
```

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

**Multi-line/Textarea**

```html
<form>
	<div class="form-group">
    	<label for="text-area">Multi-line input</label>
    	<textarea id="text-area" class="form-control" placeholder="Multi-line Input"></textarea>
	</div>
</form>
```

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