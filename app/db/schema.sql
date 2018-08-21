CREATE TABLE IF NOT EXISTS assignments (
  id SERIAL PRIMARY KEY,
  date DATE,
  github_link VARCHAR(400),
  type VARCHAR(50),
  unit VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP,
  assignment_id integer,
  comment text
);