SAFX
===
List Menus
Last Updated: November 16, 2015

##List Menus
A list menu is a navigational component within a page. Menu items have a selected and unselected state and interacting with an item in the list will change content on the page. A list menu will always be within the context of a card. For the navigation, the links should be nested within `a` tags.

```html
<div class="card">
  <ul class="selectable-list-menu">
  <li class="active"><a href="#">Overview</a></li>
  <li><a href="#">Funds Terms & Fees</a></li>
  <li><a href="#">Performance</a></li>
  <li><a href="#">Documents</a></li>
  <li><a href="#">About the Firm</a></li>
  <li><a href="#">Disclaimer</a></li>
  </ul>
</div>
```