-- TerkaWeb CMS schema

-- Articles (aktuality)
create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  excerpt text,
  content text,
  published_at timestamptz,
  is_published boolean default false,
  created_at timestamptz default now()
);

-- Leads (kontaktní formulář)
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text,
  created_at timestamptz default now()
);

-- Page sections (editovatelné sekce)
create table if not exists page_sections (
  id text primary key,
  title text,
  subtitle text,
  content jsonb,
  updated_at timestamptz default now()
);

-- RLS
alter table articles enable row level security;
alter table leads enable row level security;
alter table page_sections enable row level security;

-- Public read
create policy "Public read published articles" on articles for select using (is_published = true);
create policy "Public read sections" on page_sections for select using (true);

-- Public insert leads
create policy "Public insert leads" on leads for insert with check (true);

-- Authenticated full access
create policy "Auth all articles" on articles for all using (auth.role() = 'authenticated');
create policy "Auth all sections" on page_sections for all using (auth.role() = 'authenticated');
create policy "Auth read leads" on leads for select using (auth.role() = 'authenticated');
create policy "Auth delete leads" on leads for delete using (auth.role() = 'authenticated');
