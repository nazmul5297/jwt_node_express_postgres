# jwt_node_express_postgres
Implement JWT with Node,Express And PostgresSql


#### This repository is simple demostration of using Json Web Token. Here we can generate a jwt token and then with this token we can bound the route. 
#### The Sql of the table is :

```
- CREATE TABLE user_registration (
    id SERIAL PRIMARY KEY,
    name text not null,
    age INT not null,
    dob date not null,
    userName text not null, 
    email text not null,
    password text not null,
    re_password text not null,
    created_by TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_by TEXT NULL,
    updated_at TIMESTAMPTZ NULL
   
);

- run the sql and store some data manually

```

### For use
1.
- clone or download the repository
- npm install 
- configure the config.json file 
- npm start
2. 
- hit the url localhost:8081/user/sigon (method post)
 
 ```
 req body in json :
 {
    "email":"your email",
    "password":"your password"
}

response :

{
    "message": "Request Successful",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJOYXptdWwiLCJpYXQiOjE2NDQ1NzE4NTMsImV4cCI6MTY0NTAwMzg1M30.Xz91mjer7fQxIxm_MXDmUuGQEGNedZVXnPyjpDh9XSk"
    }
}

```
3. 
    2nd route

  - localhost:8081/user (method get)

   for using this route please use the access token get from the first router
 

