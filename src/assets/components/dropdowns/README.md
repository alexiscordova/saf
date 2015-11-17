SAFX
===
Dropdowns  
Last Updated: November 16, 2015

##Dropdowns
Dropdowns, not to be confused with Select/Multi-Select menus, are menus that can appear on almost any element. More information on all the different content options can be found at [http://getbootstrap.com/javascript/#dropdowns](http://getbootstrap.com/javascript/#dropdowns).

This component is available everywhere, but currently styled for the navigation.

```html
<div class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    Dropdown <span class="caret"></span>
  </a>
  <ul class="dropdown-menu">
    <li><a href="#">Selection One</a></li>
    <li><a href="#">Selection Two</a></li>
    <li><a href="#">Selection Three</a></li>
  </ul>
</div>
```

`<span class="caret"></span>` after the display text is required for all dropdowns.