import useScrollReveal from '../hooks/useScrollReveal';
import config from '../config';

export default function MemoryGallery() {
  const photos = config.PHOTOS || [];
  if (photos.length === 0) return null;

  return (
    <section style={{ padding: 'var(--section-padding) clamp(20px, 6vw, 40px)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <GalleryContent photos={photos} />
      </div>
    </section>
  );
}

function GalleryContent({ photos }) {
  const ref = useScrollReveal(0.1);
  return (
    <div ref={ref} className="fade-up">
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(10px, 2.5vw, 12px)',
        fontWeight: 500,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        opacity: 0.8,
        marginBottom: 16,
        display: 'block',
        textAlign: 'center',
      }}>
        A few favorites
      </p>
      <h3 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(24px, 6vw, 38px)',
        fontStyle: 'italic',
        color: 'var(--warm-white)',
        textAlign: 'center',
        marginBottom: 'clamp(24px, 5vw, 40px)',
      }}>
        Our Moments
      </h3>
      <div className="gallery-grid">
        {photos.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={src}
              alt={`Memory ${idx + 1}`}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<div class="gallery-placeholder">📸</div>';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
