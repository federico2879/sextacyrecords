import "./styles.css";
import { EVENT_IMAGES, LINKS } from "./config";
import ImageTicker from "./components/ImageTicker";
import LinkButton from "./components/LinkButton";

export default function App() {
  return (
    <main className="page">
      <div className="container">
        {/* Header */}
        <header className="header">
          <img className="logo" src="/logo.png" alt="Sextacy" />
        </header>

        {/* Image ticker */}
        <section className="tickerSection">
          <ImageTicker images={EVENT_IMAGES} speedSeconds={24} />
        </section>

        {/* Links */}
        <section className="links">
          <LinkButton href={LINKS.nextEvent} iconSrc="/icons/event.png">
            Next event
          </LinkButton>

          <LinkButton href={LINKS.whatsapp} iconSrc="/icons/whatsapp.png">
            Whatsapp community
          </LinkButton>

          <LinkButton
            href={LINKS.sextacyRecordsInstagram}
            iconSrc="/icons/instagram.png"
          >
            Sextacy Records — Instagram
          </LinkButton>

          <LinkButton href={LINKS.spotifyPlaylist} iconSrc="/icons/spotify.png">
            Spotify playlist
          </LinkButton>
        </section>

        {/* Footer */}
        <footer className="footer">
          <a
            className="igBottom"
            href={LINKS.mainInstagram}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/ig.svg" alt="" />
            <span>Instagram</span>
          </a>

          <div className="copyright">
            © {new Date().getFullYear()} — Sextacy
          </div>
        </footer>
      </div>
    </main>
  );
}
