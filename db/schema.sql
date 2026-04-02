create table if not exists posts (
  id serial primary key,
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  category text not null,
  read_time text not null,
  author text not null,
  published_at date
);

create table if not exists projects (
  id serial primary key,
  title text not null,
  description text not null,
  tech text not null,
  link text,
  github text,
  image text
);

create table if not exists testimonials (
  id serial primary key,
  name text not null,
  company text,
  role text not null,
  quote text not null,
  rating integer not null default 5
);
