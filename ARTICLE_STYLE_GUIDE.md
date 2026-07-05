# Article Style Guide

This guide documents the current style used by the REST vs gRPC article. Follow it for future article pages so the site stays consistent.

## Identity

Site name: Protocol Field Notes

Tone: precise, practical, engineering first. The writing should feel like a field note from someone who has built and debugged backend systems.

## Typography

Use the shared font imports in `public/assets/styles.css`.

Display headings use `Newsreader`.

Article body text uses `Source Serif 4`.

Navigation, labels, cards, metadata, and UI text use `IBM Plex Sans`.

Code blocks use `JetBrains Mono`.

Recommended scale:

Hero title: `clamp(1.9rem, 3.7vw, 2.75rem)`

Section title: `clamp(1.42rem, 2vw, 1.82rem)`

Article paragraph: `1.01rem` with `1.82` line height

Metadata and labels: `0.72rem` to `0.95rem`

## Color

Base surface is AMOLED black: `#000000`.

Primary text: `#f4f1ea`.

Secondary text: `#c9c4ba`.

Muted text: `#8f887d`.

Primary accent: muted brass `#c9a46a`.

Secondary accent: slate `#91a0b6`.

Borders: `#282724`.

Avoid neon green and bright synthetic gradients. Accents should feel muted, technical, and editorial.

## Layout

Article pages use a narrow reading column.

Main article width: `780px`.

Use a sticky header with a simple brand and an Articles link only.

Use visible chunks:

Hero

Metadata row

Quick take grid

Table of contents

Numbered sections

Callouts

Diagrams or flow blocks

Code blocks

Footnote

## Components

Quick take cards summarize the decision before the article begins. Keep them short and practical.

Callouts emphasize decision rules or constraints. Use muted background fills and a thin left border.

Code blocks should be dark, scroll horizontally on mobile, and use syntax colors sparingly.

Flow diagrams use small bordered nodes. Keep labels short enough to wrap on mobile.

Comparison cards should be used for protocol tradeoffs and communication patterns.

## Writing Rules

No public GitHub link in the site navigation.

Do not use dash characters in visible article prose.

Avoid hyphen, en dash, and em dash in article prose.

Use commas, colons, or separate sentences instead.

Keep paragraphs short.

Lead each section with the practical reason the section matters.

Prefer tradeoffs over hype.

Use terms consistently. Write `gRPC Web`, not the hyphenated spelling.

Check desktop and mobile before publishing.

## File Pattern

Create articles under `public/articles/`.

Use the shared stylesheet at `../assets/styles.css`.

Keep article specific content inside:

`<div class="article">`

Use section IDs for table of contents links.

Example section:

```html
<div class="section" id="s1">
  <div class="section-label">Part 1</div>
  <h2>Section title</h2>
  <p>Short paragraph with one clear idea.</p>
</div>
```
