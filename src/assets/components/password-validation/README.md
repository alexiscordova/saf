# SAFX

Password Validation Documentation
Last Updated: December 8, 2015

## Password Validation

Password validation is a live-updating component that checks the contents of a password field against a set of criteria. This is generally used when initially creating an account password or updating an account password.

The `.is-valid` style is applied to the `<li>` when the specified criteria is met. While `id`s are not supplied by default, they can be added to each `<li>` to hook into that specific criteria.

```html
<div class="password-validation">
  <p>Password must contain:</p>
  <ul class="list-unstyled">
    <li class="is-valid">One uppercase character</li>
    <li>One lowercase character</li>
    <li>At least seven characters</li>
    <li>One number</li>
  </ul>
</div>
```
