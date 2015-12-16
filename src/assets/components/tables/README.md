SAFX
===
Tables Documentation  
Last Updated: December 16, 2015

##Tables
Tables store tabular data, which is used throughout the SAF system. Tables have a few classes—one required and two optional—to get the desired look and feel.

Tables are triggered by adding `.table` to a `<table>` element. This will give you the default, stripped table. To add hover states, add `.table-hover` to the `<table>`.

```html
<table class="table table-hover">
  <thead>
    <tr>
      <th class="table-title">Label</label></th>
      <th class="table-title">Label</label></th>
      <th class="table-title">Label</label></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td class="table-title">Inception Date</td>
      <td>$1.9B</td>
      <td>$1.9B</td>
    </tr>
    <tr>
      <td class="table-title">Target Fund Size</td>
      <td>$9.75</td>
      <td>$9.75</td>
    </tr>
    <tr>
      <td class="table-title">Term</td>
      <td>7.18%</td>
      <td>7.17%</td>
    </tr>
    <tr>
      <td class="table-title">Capital Committed</td>
      <td>$9.75</td>
      <td>$9.75</td>
    </tr>
  </tbody>
</table>
```

###Scrolling Tables
Scrolling tables can be used when the data is longer than the page width. To trigger this behavior, the `.table` element needs to be wrapped in a `.table-scrolling` container, such as a `<div>`.

```html
<div class="table-scrolling">
  <table class="table table-hover">
    <thead>
      <tr>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
        <th class="table-title">Label</label></th>
      </tr>
    </thead>
  
    <tbody>
      <tr>
        <td class="table-title">Inception Date</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
        <td>$1.9B</td>
      </tr>
      <tr>
        <td class="table-title">Target Fund Size</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
      </tr>
      <tr>
        <td class="table-title">Term</td>
        <td>7.18%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.18%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.17%</td>
        <td>7.17%</td>
      </tr>
      <tr>
        <td class="table-title">Capital Committed</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
        <td>$9.75</td>
      </tr>
    </tbody>
  </table>
</div>
```

###Utility Classes
The utility class of `.table-title` is available for table cells, which will style the text with the same styling as the table column label. All other typography utility classes are also available.