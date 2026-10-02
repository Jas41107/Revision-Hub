create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  username text unique,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists learning_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  status text default 'planned',
  due_date timestamptz,
  progress integer default 0,
  created_at timestamptz default now()
);

create table if not exists revision_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  topic text not null,
  score integer not null,
  reviewed_at timestamptz default now()
);

create table if not exists dsa_topics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  topic text not null,
  mastery integer default 0,
  updated_at timestamptz default now()
);

create table if not exists habits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  completed integer default 0,
  total integer default 7,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table learning_tasks enable row level security;
alter table revision_history enable row level security;
alter table dsa_topics enable row level security;
alter table habits enable row level security;

create policy "Users can view their own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update their own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert their own profile" on profiles for insert with check (auth.uid() = id);

create policy "Users can manage their own tasks" on learning_tasks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage their own revision history" on revision_history for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage their own DSA topics" on dsa_topics for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can manage their own habits" on habits for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
