create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  phone text,
  created_at timestamptz default now()
);

create table if not exists profiles (
  user_id uuid primary key references users(id) on delete cascade,
  name text,
  city text,
  loyalty_tier text default 'Bronze',
  points integer default 0
);

create table if not exists transactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  store_id text,
  amount_eur numeric(10,2) not null,
  boxes_count integer not null default 1,
  created_at timestamptz default now(),
  verified_by_admin boolean default false
);

create table if not exists rewards (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  points_cost integer not null,
  type text not null,
  value numeric(10,2),
  active boolean default true
);

create table if not exists redemptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  reward_id uuid references rewards(id),
  created_at timestamptz default now(),
  status text default 'pending'
);

create table if not exists drops (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  start_at timestamptz not null,
  end_at timestamptz not null,
  quantity_total integer not null,
  quantity_left integer not null,
  active boolean default true
);

create table if not exists referrals (
  id uuid primary key default uuid_generate_v4(),
  referrer_id uuid references users(id) on delete cascade,
  referred_id uuid references users(id) on delete cascade,
  status text default 'pending',
  created_at timestamptz default now()
);
