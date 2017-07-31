
\c TO_DO;

DROP DATABASE TO_DO;

CREATE DATABASE TO_DO;

\c TO_DO;
\c migrations/migration2.sql;

CREATE TABLE IF NOT EXISTS TO_DOS (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) null,
  task VARCHAR(255),
  due_date date,
  status VARCHAR(3)
);

\c seeds/seed.sql;
\c seeds/TO_DO.sql;