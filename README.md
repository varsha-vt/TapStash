# TapStash

Save videos, articles, and links into categories, right from the share sheet — no downloading, no hosting, just metadata and a link.

## Structure

```
apps/
  mobile/       React Native (Expo) — iOS + Android
  web/          React web app
  extension/    Chrome extension (Manifest V3)
packages/
  shared/       Shared TypeScript types
  embed-player/ Shared HTML/JS video embed player (WebView on mobile, direct on web/extension)
  api-client/   Typed Supabase client
supabase/
  migrations/   Database schema
  functions/    Edge functions (URL metadata fetching)
```

## Status

Early scaffold. No backend wired up yet. See each app's own folder for how to run it.
