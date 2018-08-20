DROP TABLE IF EXISTS work;
DROP TABLE IF EXISTS students;

CREATE TABLE work (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  unit VARCHAR(255) NOT NULL,
  description text
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  work_id INTEGER NOT NULL REFERENCES work(work_id),
  created_at TIMESTAMP NOT NULL DEFAULT now()
);
