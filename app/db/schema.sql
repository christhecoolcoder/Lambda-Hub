DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS comments;

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(400),
  date DATE,
  github_link VARCHAR(400),
  type VARCHAR(50),
  unit VARCHAR(20)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  assignment_id integer,
  comment text,
  created_at TIMESTAMP
);
