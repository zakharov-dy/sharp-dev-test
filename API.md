BASE URL: http://193.124.114.46:3001/

#### Create/Register a user

POST `/users`

body:
```
{username, password, email}
```

returns:
```
{id_token}
```

errors:
* 400: A user with that email already exists
* 400: You must send username and password

example:
```
{"username":"John Doo","password":"johnpwd","email":"john@doo.foo"}

{"id_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkFuaW1hbCBQbGFuZXQgVXNlciIsImVtYWlsIjoiMUAxLjEiLCJpZCI6MywiYmFsYW5jZSI6NTAwLCJpYXQiOjE0ODE1ODQ4ODksImV4cCI6MTQ4MTYwMjg4OX0.h4CzCxTOMRk6S8juxM0tRc5pql99XkXlR09pUzVMH9I"}
```

#### Login

POST `/sessions/create`

body:
```
{email, password}
```

returns:
```
{id_token}
```

errors:
* 400: You must send email and password.
* 401: Invalid email or password.

#### List of logged user transactions

GET `/api/protected/transactions`

authentication: bearer

body:

returns:

```
{trans_token:[{id, date, username, amount, balance}]}
```

errors:
* 401: UnauthorizedError
* 401: Invalid user

#### Create a transaction

Sender: logged user

Recipient: name in a body

POST `/api/protected/transactions`

authentication: bearer

body:
```
{name, amount}
```

returns:

```
{trans_token:{id, date, username, amount, balance}}
```

errors:
* 400: user not found
* 400: balance exceeded
* 401: UnauthorizedError
* 401: Invalid user


#### Logged user info

GET `/api/protected/user-info`

authentication: bearer

body:
```
returns: {id, name, email, balance}
```

errors:
* 400: user not found
* 401: UnauthorizedError
* 401: Invalid user


#### Filtered User list

POST `/api/protected/users/list`

authentication: bearer

body:
```
{filter}
```

returns:
```
[{id, name}]
```

errors:
* 401: UnauthorizedError
* 401: Invalid user
* 401: No search string