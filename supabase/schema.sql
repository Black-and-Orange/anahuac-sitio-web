-- BnO Review — esquema fase 2a. Correr una vez en el SQL Editor de Supabase.
create extension if not exists pgcrypto;

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  page text not null,
  selector text,
  fingerprint jsonb,
  name text not null,
  comment text not null,
  status text not null default 'pendiente'
    check (status in ('pendiente','en-proceso','resuelto')),
  replies jsonb not null default '[]'::jsonb,
  clickup_task_id text,   -- fase 2b
  clickup_url text,       -- fase 2b
  created_at timestamptz not null default now()
);

create index if not exists comments_project_page_idx
  on public.comments (project_id, page);

alter table public.comments enable row level security;

-- Cliente anónimo (publishable key): crear y ver, nada más.
drop policy if exists "anon can insert" on public.comments;
create policy "anon can insert" on public.comments
  for insert to anon with check (true);

drop policy if exists "anon can select" on public.comments;
create policy "anon can select" on public.comments
  for select to anon using (true);

-- Equipo autenticado (Supabase Auth): acceso total.
drop policy if exists "authenticated full access" on public.comments;
create policy "authenticated full access" on public.comments
  for all to authenticated using (true) with check (true);
