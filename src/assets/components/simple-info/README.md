# SAFX

Simple Information Documentation
Last Updated: December 7, 2015

## Simple Information

The simple information molecule takes two parameters: Label and Description. Each information grouping is wrapped in a `.col-xs-4` grid column.

The label (`.info-label`) refers to the corresponding description (`.info-description`). Description text are wrapped in `<p>` tags, and can take multiple declarations. While text and links are allowed, all description text will be styled the same.

```html
<div class="row">
  <div class="col-xs-4">
    <div class="simple-info">
      <p class="info-label">Sponsor Commitment</p>
      <div class="info-description">
        <p>$50-100 million anticipated</p>
      </div>
    </div>

    […]
  </div>
</div>
```
