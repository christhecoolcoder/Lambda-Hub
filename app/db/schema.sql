DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS comments;

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  name TEXT,
  date DATE,
  unit INTEGER,
  type VARCHAR(50),
  github_link TEXT,
  content TEXT 
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  assignment_id INTEGER REFERENCES assignments (id),
  name VARCHAR(50),
  comment TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
