DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS comments;

CREATE TABLE assignments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(400),
  date DATE,
  unit INTEGER,
  type VARCHAR(50),
  github_link VARCHAR(400) 
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  assignment_id INTEGER REFERENCES assignments (id),
  comment TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
