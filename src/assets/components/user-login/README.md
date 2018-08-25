# SAFX

User Login
Last Updated: November 17, 2015

## User Login

The user login component is a molecule consisting of typography, form elements, and a button.

All text, including the placeholder text on the email text input, can be changed to fit the use case (e.g., a user logout screen).

```html
<div class="card pad">
  <div class="row">

    <div class="col-xs-4">
      <h1>Log In</h1>
      <p class="text-danger">Please log in to view this page</p>
    </div>

    <div class="col-xs-4 col-offset-xs-4">
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" class="form-control" placeholder="me@email.com" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="form-wrapper">
            <input type="password" id="password" class="form-control" />
            <span class="form-trigger">Show</span>
          </div>
          <a class="description">Forgot your password?</a>
        </div>
      </form>

      <div class="text-center">
        <a href="#" role="button" class="btn btn-primary">
          Log In
          <span class="icon">></span>
        </a>
      </div>
    </div>
  </div>
</div>
```
