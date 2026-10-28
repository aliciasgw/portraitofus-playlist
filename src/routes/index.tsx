import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Disc3, Mic } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { playlist } from '@/content/playlist'
import { tracks } from '@/content/tracks'

export const Route = createFileRoute('/')({ component: Home })

const minutes = Math.round(tracks.reduce((sum, track) => sum + track.duration, 0) / 60000)
function time(ms: number) { return `${Math.floor(ms / 60000)}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}` }
function photo(src: string, width: number) { return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp` }

function Home() {
  const [playerOpen, setPlayerOpen] = useState(false)
  const [audioError, setAudioError] = useState(false)
  return (
    <div className="playlist-page">
      <div className="photo-band" aria-hidden="true" style={{ backgroundImage: `url("${photo(playlist.borderImage, 240)}")` }} />
      <div className="site-shell">
        <main>
          <section className="hero" aria-labelledby="playlist-title">
            <div className="sleeve-scene">
              <div className="vinyl" aria-hidden="true"><div className="vinyl-label"><span>PORTRAIT<br />OF US</span><i /></div></div>
              <div className="sleeve"><img src={photo(playlist.cover, 1000)} alt="Portrait of us vinyl cover: a pale blue seascape with white lettering" fetchPriority="high" width="900" height="888" /></div>
            </div>
            <div className="hero-copy">
              <h1 id="playlist-title">Portrait{' '}<br />of us</h1>
              <p className="intro">{playlist.introduction}</p>
              <p className="hero-message">{playlist.message}</p>
              <div className="record-details"><span>{tracks.length} songs</span><span className="dot">·</span><span>{minutes} minutes</span></div>
              <div className="hero-buttons"><button className="primary-button" onClick={() => setPlayerOpen(true)}><Disc3 size={18} /> Spotify <ArrowUpRight size={15} /></button><a className="quiet-link" href="#tracklist">Zu de Lieder <ArrowDown size={14} /></a></div>
            </div>
          </section>
          <section className="track-section" id="tracklist" aria-labelledby="track-title">
            <div className="section-heading"><div><h2 id="track-title">{playlist.trackHeading}</h2></div><a className="quiet-link spotify-all" href={playlist.spotifyUrl} target="_blank" rel="noopener noreferrer">Zu de Playlist <ArrowUpRight size={14} /></a></div>
            <div className="track-table"><div className="table-head"><span>#</span><span>SONG / ARTIST</span><span>LENGTH</span><span>LISTEN</span></div><ol>{tracks.map((track, i) => <li key={track.url}><a className="track-row" href={track.url} target="_blank" rel="noopener noreferrer" aria-label={`Listen to ${track.title} by ${track.artist} on Spotify`}><span className="track-number">{String(i + 1).padStart(2, '0')}</span><span className="track-info"><span className="track-name">{track.title}</span><span className="track-artist">{track.artist}</span></span><span className="track-duration">{time(track.duration)}</span><span className="track-open"><SpotifyMark /><span>Spotify</span><ArrowUpRight size={13} /></span></a></li>)}<li className="voice-track"><div className="track-row voice-track-row"><span className="track-number">{String(tracks.length + 1).padStart(2, '0')}</span><span className="track-name">{playlist.voiceNoteTitle}</span><Mic className="voice-track-icon" size={17} aria-hidden="true" />{playlist.voiceNote && <div className="voice-track-player"><audio aria-label={playlist.voiceNoteTitle} controls preload="metadata" src={playlist.voiceNote.src} onError={() => setAudioError(true)} />{audioError && <p role="alert">This voice note couldn’t load. Please try again later.</p>}</div>}</div></li></ol></div>
          </section>
        </main>
        <footer><span className="footer-mark">Portrait of us</span><a href="#">Back to the beginning ↑</a></footer>
        <Dialog open={playerOpen} onOpenChange={setPlayerOpen}><DialogContent className="spotify-dialog" aria-describedby={undefined}><DialogTitle>Portrait of us</DialogTitle>{playerOpen && <iframe title="Portrait of us Spotify playlist" src="https://open.spotify.com/embed/playlist/5jH4QXAFlASLirSVpilnfo?utm_source=generator&theme=0" width="100%" height="450" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />}</DialogContent></Dialog>
      </div>
    </div>
  )
}
function SpotifyMark() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="11" /><path d="M6 9c4-1.4 8-1 12 .8M7 12.4c3.5-1.1 6.8-.7 10 1M8 15.5c2.8-.7 5.1-.4 7.7.7" stroke="var(--background)" strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg> }
