import React from 'react';

const Loader = () => (
  <div style={{
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--background)',
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    left: 0,
  }}>
    <div style={{ position: 'relative', width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Animated circle */}
      <span className="loader-spinner" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 70,
        height: 70,
        borderRadius: '50%',
        border: '4px solid var(--accent)',
        borderTop: '4px solid transparent',
        animation: 'spin-loader 1s linear infinite',
        boxSizing: 'border-box',
      }} />
      {/* SK logo */}
      <div style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--card-bg)',
        border: '2.5px solid var(--accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '1.25rem',
        color: 'var(--primary)',
        boxShadow: '0 2px 8px #a084ee33',
        letterSpacing: '0.05em',
        zIndex: 2,
      }}>
        SK
      </div>
    </div>
  </div>
);

export default Loader; 