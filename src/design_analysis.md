# FixMyImage Design Analysis & Refinement Plan

Based on studying top image utility sites (iLoveIMG, Squoosh, TinyPNG, ResizePixel) and the project's design directives, here is the UI/UX refinement strategy for FixMyImage.

## 1. Typography & Hierarchy
**Current state:** We switched to Inter. It's clean, but the font scale needs fine-tuning to feel truly premium.
**Action:** 
- Establish a strict type scale: H1 (28px/32px for hero, 24px for pages), H2 (18px), Body (14px/15px), Small (13px), Micro (12px uppercase).
- Use `tracking-tight` for large headings and `tracking-wider` for micro-labels.
- Reduce font weights on body text, keep headings bold for contrast.

## 2. Global Layout & Spacing
**Observation from references (TinyPNG, Squoosh):** The best tools don't span the entire width of large monitors. They contain the primary workspace within a narrow, readable column.
**Action:** 
- Constrain the main workspace (`max-w-2xl` or `max-w-3xl`) for focused interaction.
- Add generous top padding (`py-12` or `py-16`) to the workspace to create breathing room below the header.
- Use an 8pt grid system for consistent gaps (`gap-2`, `gap-4`, `gap-6`).

## 3. Header & Navigation
**Observation:** Utility headers are functional. iLoveIMG uses simple text links. No oversized logos.
**Action:** 
- Ensure header is compact (`h-14` or `h-16`).
- Group tools logically.
- Refine the active state of navigation links.

## 4. Homepage Directory
**Observation:** It shouldn't look like a marketing page. It should look like a dashboard of available tools.
**Action:** 
- Refine the tool cards: simple white/elevated cards, minimal borders, subtle hover lift, crisp icons.
- Ensure the hero H1 and subtitle are direct and unadorned.

## 5. Tool Workspaces & Upload Area
**Observation:** Squoosh and TinyPNG have iconic, massive upload zones that dominate the screen.
**Action:** 
- The dropzone needs to be the focal point. Use a large dashed border, muted background, and a central call to action.
- When files are loaded, the UI should transition seamlessly to the config/processing state without massive layout jumps.
- Keep the configuration panels (like Resize/Watermark) grouped logically with subtle backgrounds (`bg-canvas-elevated` or `bg-canvas`) rather than harsh borders.

## 6. Forms & Controls
**Action:** 
- Use consistent heights for inputs, selects, and buttons (e.g., `h-10` or `h-11`).
- Ensure focus states are accessible but elegant (e.g., a solid blue or ink ring, not a blurry browser default).

## 7. Color Palette
**Action:** 
- Background: Warm off-white (`#f7f6f4`).
- Surfaces: Pure white (`#ffffff`).
- Text: Charcoal (`#1a1917`) for primary, muted gray for secondary.
- Primary Action: Deep blue or solid ink, used *only* for the main action (Upload / Process / Download).

## 8. State Transitions
**Action:** 
- Ensure the processing state feels fast. Use a clean progress bar.
- The result state should be a quiet summary (Original Size vs New Size), not an aggressive celebration.

---
**Next Steps:** I will implement these spacing, typography, and component-level refinements across `global.css`, `BaseLayout`, `index.astro`, and the dropzone components.
