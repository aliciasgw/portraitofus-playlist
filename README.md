# Portrait of us.

A warm, personal, single-playlist website using the supplied vinyl artwork and the ordered Spotify playlist. It includes individual Spotify song links, an optional embedded Spotify player, a photo gallery, and one closing voice note when an audio file is available.

Built with React 19, TypeScript, TanStack Start/Router, Vite, Tailwind CSS, Radix Dialog, and Lucide icons. Deployed on Netlify; artwork is served through Netlify Image CDN.

## Local development

Use Node 22.13+ and pnpm. Install dependencies with `pnpm install`, then run `netlify dev --port 8889` for local development including Image CDN support. The deploy pipeline runs the production build automatically.

## Updating this fixed playlist

Edit `src/content/playlist.ts` for the title, introduction, message, cover, photos, and voice note. The interface has no public editing controls or accounts, in keeping with the fixed-playlist choice. Future content can be added through a code update or a follow-up site editing request.

Place photos in `public/img/`, then add entries to `photos`:

```ts
photos: [
  { src: '/img/our-photo.jpg', caption: 'An afternoon to remember.' },
],
```

Place your recording in `public/audio/`, then replace `voiceNote: null` with:

```ts
voiceNote: { src: '/audio/one-last-thing.mp3', title: 'One last thing, in my own voice.' },
```

The note appears after the songs and photos with native browser playback, seeking, and volume controls. Use a browser-supported audio format such as MP3. No recording has been supplied yet; the current page honestly displays a pending message.

The 15 songs in `src/content/tracks.ts` are a fixed snapshot of the supplied Spotify playlist in its original order. Changes on Spotify do not automatically update this list. Each track links directly to Spotify. Full playback in the embedded player depends on Spotify sign-in, account, browser, and region.

The supplied iCloud cover was downloaded into `public/img/cover.jpg`, so the site does not depend on the expiring iCloud sharing URL. The photo gallery supports click-to-enlarge viewing once photos are configured.

## Link sharing

Use the Copy link button or share the site address. The site sends no-index/no-follow/no-archive directives in HTML and HTTP headers, disallows crawlers in `robots.txt`, includes no sitemap, and suppresses referrer transmission. This is an unlisted site, not authenticated access control: anyone who knows or obtains the URL can view it, and crawler directives are advisory. No password or account is required. The Spotify playlist retains its own Spotify visibility settings.

## Verification

Files were reviewed directly during implementation. Local build, type-check, test, and dev-server commands were not run; validation is handled by the deployment pipeline.
