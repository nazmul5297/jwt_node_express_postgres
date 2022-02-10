CREATE TABLE user_registration (
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