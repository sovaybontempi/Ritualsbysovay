# Rituals by Sovay — Site Guide

## Files

```
ritualsbysovay/
├── index.html          ← main homepage
├── styles.css          ← all site styles
├── post-styles.css     ← additional styles for post pages only
├── post-template.html  ← copy this to create each grimoire entry
├── posts/              ← create this folder, put post pages here
│   └── your-post.html  ← renamed copies of post-template.html
└── images/
    ├── hero.jpeg       ← 800 × 1000px (4:5 portrait)
    ├── about.jpeg      ← 600 × 800px (3:4 portrait)
    ├── post-1.jpeg     ← 1100 × 620px (16:9 landscape) per post
    ├── post-2.jpeg
    └── og-image.jpg    ← 1200 × 630px for social sharing
```

---

## Adding a grimoire entry

1. Create a `posts/` folder if it doesn't exist
2. Duplicate `post-template.html` into `posts/` — rename it to match the entry title, e.g. `posts/candle-spell-clarity.html`
3. Open the new file and replace every `REPLACE` with your content
4. Add a matching image to `images/` (e.g. `images/post-7.jpeg`)
5. Back in `index.html`, duplicate one of the `.grimoire-card` blocks in the grimoire section
6. Update the `href`, image `src`, date, title, and excerpt on the new card

---

## Adding an event

In `index.html`, find the `#section-events` section and duplicate an `.event-item` block. Update the month, day, name, time, location, description, and RSVP email link.

To show the "no upcoming events" placeholder instead: delete the `.event-item` blocks and uncomment the `.events-empty` div.

---

## Replacing your bio

Search for `REPLACE` in `index.html` — the bio section has three paragraph slots and four credential tiles. Fill them in directly. Remove credential tiles you don't need, or add more by duplicating a `.credential` div.

---

## Customising colors

Edit the brand tokens at the top of `styles.css`:

| Token | Current | What it controls |
|---|---|---|
| `--primary` | `#a87dd8` | Purple accent — labels, links, dates |
| `--primary-dark` | `#5c3490` | Darker purple — button fills, borders |
| `--accent` | `#c9a0e8` | Lighter lavender — pull quotes |
| `--bg` | `#09070e` | Page background |
| `--text` | `#ddd5f0` | Main text color |

---

## Email address

The contact email is currently `sovay@ritualsbysovay.com`. Search for this string across all files and replace with your actual address.
