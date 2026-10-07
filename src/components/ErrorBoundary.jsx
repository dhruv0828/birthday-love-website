import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to console so the developer can inspect it
    console.error('[Birthday Website Error]', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#08080f',
          color: '#fdf0ec',
          fontFamily: 'Georgia, serif',
          padding: '40px 24px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>💔</div>
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 32px)', marginBottom: 12, fontStyle: 'italic' }}>
            Something went wrong
          </h1>
          <p style={{ color: 'rgba(253,240,236,0.6)', fontSize: 16, maxWidth: 480, lineHeight: 1.7, marginBottom: 28 }}>
            The page encountered an error. Check the browser console for details.
          </p>
          <details style={{ color: 'rgba(253,240,236,0.4)', fontSize: 13, maxWidth: 600, wordBreak: 'break-all' }}>
            <summary style={{ cursor: 'pointer', marginBottom: 8 }}>Error details</summary>
            <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
              {this.state.error?.toString()}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 32,
              padding: '12px 32px',
              borderRadius: 50,
              border: '1px solid rgba(196,99,122,0.4)',
              background: 'rgba(107,26,42,0.5)',
              color: '#fdf0ec',
              cursor: 'pointer',
              fontSize: 15,
            }}
          >
            Try reloading ❤️
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
