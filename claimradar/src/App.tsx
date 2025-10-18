import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">CR</div>
          </div>
          <div className="brand">
            <h1 className="brand-name">ClaimRadar</h1>
            <p className="brand-tagline">Browser extension · Agentic Misinformation Detection</p>
          </div>
        </div>
        <nav className="header-nav">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#download" className="nav-link">Download</a>
          <button className="cta-button">Add to Chrome</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Section */}
        <section className="left-section">
          <h2 className="headline">
            Catch misleading claims.<br />
            Fast.
          </h2>
          <p className="description">
            ClaimRadar wraps a powerful agentic system inside a lightweight browser extension to analyze news, tweets, articles, and more — highlighting misleading or false claims and offering evidence-backed context in real time.
          </p>
          <div className="cta-buttons">
            <button className="primary-button">Get the Extension</button>
            <button className="secondary-button">How it works</button>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">Real-time analysis</h3>
              <p className="feature-description">Scans articles and flags suspicious claims instantly.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Evidence links</h3>
              <p className="feature-description">Provides sources and confidence scores for each claim.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Privacy-first</h3>
              <p className="feature-description">All checks run locally where possible; minimal telemetry only if you opt in.</p>
            </div>
            <div className="feature-card">
              <h3 className="feature-title">Community feedback</h3>
              <p className="feature-description">Users can submit verdicts that improve the agent over time.</p>
            </div>
          </div>
        </section>

        {/* Right Section - Extension Preview */}
        <section className="right-section">
          <div className="extension-preview">
            <div className="extension-header">
              <div className="extension-logo">
                <div className="extension-logo-icon">CR</div>
              </div>
              <div className="extension-title">
                <h3>Extension Preview</h3>
                <p>Open the panel next to articles to see why claims are flagged.</p>
              </div>
            </div>
            
            <div className="misinformation-card">
              <div className="misinformation-header">
                <h4>Misinformation Details</h4>
                <button className="close-button">×</button>
              </div>
              <p className="source">Source: example-news-source.com/article/12345</p>
              
              <div className="flagged-section">
                <div className="flag-icon">⚠️</div>
                <p className="flagged-text">
                  This claim has been debunked by multiple sources. The image has been digitally altered. This is a satirical source presented as news.
                </p>
              </div>
              
              <div className="real-info-section">
                <div className="check-icon">✓</div>
                <h4 className="real-info-title">The Real Information</h4>
                <p className="real-info-text">
                  The actual event took place in a different context and the image was manipulated to support a false narrative. Several fact-checking organizations have confirmed the original source and context.
                </p>
              </div>
              
              <div className="action-buttons">
                <button className="evidence-button">View evidence</button>
                <button className="report-button">Report</button>
              </div>
              
              <div className="extension-footer">
                <ul>
                  <li>Lightweight: under 3 MB compressed</li>
                  <li>Works on Chrome, Edge, Firefox</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
