-- Linear Algebra Bridge feedback table
-- Run this once in Supabase Dashboard -> SQL Editor.

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  display_name text not null check (char_length(btrim(display_name)) between 1 and 80),
  message text not null check (char_length(btrim(message)) between 1 and 4000),
  chapter smallint,
  section text check (section is null or char_length(section) <= 20),
  topic_slug text check (topic_slug is null or char_length(topic_slug) <= 160),
  topic_title text check (topic_title is null or char_length(topic_title) <= 200),
  page_url text not null check (char_length(page_url) between 1 and 500),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.feedback enable row level security;

revoke all on table public.feedback from anon, authenticated;
grant usage on schema public to anon;
grant insert on table public.feedback to anon;

drop policy if exists "Anyone can submit feedback" on public.feedback;
create policy "Anyone can submit feedback"
  on public.feedback
  for insert
  to anon
  with check (true);
