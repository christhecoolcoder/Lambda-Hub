DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS comments;

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  date DATE,
  github_link VARCHAR(400),
  created_at TIMESTAMP,
  type VARCHAR(50),
  unit VARCHAR(20)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  assignment_id integer,
  comment text
);
