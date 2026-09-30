# FixMyImg — Claude Code Instructions

Read `agent/AGENTS.md` first. It is the primary coding-agent rule set.

Then read the relevant docs under `docs/` before making changes.

## First task

Build the MVP in the order specified by `docs/07-IMPLEMENTATION-PLAN.md`.

Do not jump straight into visual polish before the functional state machine and compression engine are correct.

## Required first response before editing

Summarize:

- current repo state
- files you will create/change
- implementation assumptions
- tests you will run

Then implement the smallest working slice.

## Coding preferences

- TypeScript strictness
- small focused components
- explicit types
- no unnecessary abstractions
- accessible HTML
- Astro static pages for content
- client-side JS only for the actual tool

## Current stack

- Astro
- TypeScript
- Tailwind CSS v4
- browser-side image compression
- Cloudflare Pages

## Important

Do not add:

- React unless explicitly required
- a database
- API routes for images
- authentication
- payment infrastructure
- AI APIs

unless the product requirements are updated first.
