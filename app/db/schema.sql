CREATE TABLE IF NOT EXISTS assignments (
  id SERIAL PRIMARY KEY,
  date DATE,
  github_link VARCHAR(400),
  created_at TIMESTAMP,
  type VARCHAR(50),
  unit VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  assignment_id integer,
  comment text
);