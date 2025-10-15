# Shared Data Specification

This directory stores all structured content that must stay in sync between the Hugo blog and the navigation dashboard project.

## Files

- `links.yaml` — canonical list of categorized resources.
- `search-engines.yaml` — configurable search providers.
- `shortcuts.json` — keyboard shortcut mappings used by the navigation UI.

## `links.yaml` structure

```yaml
categories:
  - id: "ai-tools"            # kebab-case unique key, reused for DOM ids and shortcuts
    name: "AI 工具"            # display label
    icon: "fa-robot"          # icon slug (Font Awesome class or custom token)
    description: "可选的分类说明"
    links:
      - id: "chatgpt"         # optional explicit id; defaults to slugified name
        name: "ChatGPT"
        url: "https://chat.openai.com"
        icon: "https://chat.openai.com/favicon.ico"
        description: "AI assistant for reasoning."
        tags: ["ai", "assistant"]
        pinned: false         # optional, controls default ordering/highlight
```

Guidelines:
- Category `id` and link `id` must be unique across the file.
- Favor absolute URLs for favicons; relative paths point to assets served by the navigation project.
- Use short `tags` for filter/search suggestions. They are optional.
- `pinned` is optional and defaults to `false`.

## `search-engines.yaml` structure

```yaml
- id: "google"
  name: "Google"
  queryUrl: "https://www.google.com/search?q="
  method: "GET"               # defaults to GET
  placeholder: "Search Google"
  icon: "/icons/google.svg"   # served from navigation project's public assets
  accentColor: "#4285F4"      # optional hex used for theming buttons
```

Guidelines:
- `queryUrl` must include the trailing `?q=` (or equivalent) so front-end logic appends the encoded query.
- Future providers (e.g., SearXNG) can add extra keys such as `type: "searxng"` or `apiUrl`.
- Missing optional fields fall back to theme defaults.

## `shortcuts.json` structure

```json
{
  "focusSearch": "/",
  "openSelected": "Enter",
  "nextCategory": "ArrowRight",
  "prevCategory": "ArrowLeft",
  "categoryHotkeys": {
    "ai-tools": "1",
    "development": "2"
  }
}
```

Guidelines:
- Keys follow camelCase to align with JavaScript usage.
- `categoryHotkeys` maps category `id` to the accelerator key expected by the navigation UI.
- This file stores presentation-layer bindings only; business logic stays in the navigation project.

