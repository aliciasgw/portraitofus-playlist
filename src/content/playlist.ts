// Fixed playlist content. Add local media under public/ and reference it here.
export const playlist = {
  title: 'Portrait of us',
  spotifyUrl: 'https://open.spotify.com/playlist/5jH4QXAFlASLirSVpilnfo',
  cover: '/img/cover.jpg',
  borderImage: '/img/photo-strip.jpg',
  wordmark: 'Für min Liebling',
  trackHeading: 'Denk ah eus <3',
  voiceNoteTitle: 'Mwah',
  introduction: 'Min allerliebste Elia,',
  message: 'Das isch e Sammlig vo Lieder wo eus verbinded, wo gloffe sind wo ich mich i Dich veliebt han und wo mich a Dich erinneret. Bis Du Din Plattespieler hesch, chasch sie da lose.\nIch lieb Dich.',
  voiceNote: null as null | { src: string; title: string },
  photos: [] as { src: string; caption: string }[],
}
