import { useState } from 'react'

function App() {
  const [view, setView] = useState('before');
  
  // Using the same favicon from public folder

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src="/resumize-logo.png" alt="Resumize Logo" width="50" height="auto" style={{objectFit: 'contain'}} />
          <div>
            <div className="logo">Resumize<span>.</span></div>
            <div className="tagline">Stand Out. Get Hired.</div>
          </div>
        </div>
        
        <div className="nav-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">My Documents</a>
          <a href="#">Job Matches</a>
          <a href="#">Settings</a>
        </div>
        
        <button className="premium-btn">
          <span>✨</span> Unlock Premium
        </button>
      </header>

      <main className="main-content">
        <div className="upload-panel">
          <h2 className="panel-title">
            <span className="panel-title-icon">📄</span>
            Upload Your Documents
          </h2>
          
          <div className="upload-zone">
            <div className="upload-icon">📄</div>
            <div className="upload-text">Drag & drop your resume or cover letter here</div>
            <div className="upload-or">OR</div>
            <button className="browse-btn">Browse Files</button>
          </div>
          
          <div className="job-desc-container">
            <label htmlFor="job-desc" className="job-desc-label">Paste Job Description:</label>
            <textarea 
              id="job-desc" 
              className="job-desc-box" 
              placeholder="Paste the job description here to optimize your resume...">
            </textarea>
          </div>

          <div className="previous-docs">
            <h3 className="docs-title">
              <span>🕒</span> Recent Documents
            </h3>
            
            <div className="doc-item">
              <span className="doc-icon">📄</span>
              <span className="doc-name">software_developer_resume_v2.pdf</span>
              <span className="doc-date">Today</span>
            </div>
            
            <div className="doc-item">
              <span className="doc-icon">📝</span>
              <span className="doc-name">frontend_dev_cover_letter.docx</span>
              <span className="doc-date">Yesterday</span>
            </div>
            
            <div className="doc-item">
              <span className="doc-icon">📄</span>
              <span className="doc-name">product_manager_resume.pdf</span>
              <span className="doc-date">3 days ago</span>
            </div>
          </div>
        </div>

        <div className="results-panel">
          <h2 className="panel-title">
            <span className="panel-title-icon">📊</span>
            Optimization Results
          </h2>
          
          <div className="ats-score">
            <div className="score-circle">
              <div className="score-value">87<span>/100</span></div>
            </div>
            <div className="score-label">ATS Compatibility Score</div>
          </div>

          <div className="recommendations">
            <h3 className="docs-title">Key Recommendations</h3>
            
            <div className="recommendation-item">
              <span className="recommendation-icon">✓</span>
              <div className="recommendation-text">Add "React" and "JavaScript" to your skills section</div>
            </div>
            
            <div className="recommendation-item" style={{borderLeft: '4px solid #f59e0b'}}>
              <span className="recommendation-icon" style={{color: '#f59e0b'}}>⚠️</span>
              <div className="recommendation-text">Quantify your impact in your work experience</div>
            </div>
            
            <div className="recommendation-item premium-item" style={{borderLeft: '4px solid #4f46e5'}}>
              <span className="recommendation-icon" style={{color: '#4f46e5'}}>⭐</span>
              <div className="recommendation-text">
                <div>Advanced phrasing suggestions for your achievements</div>
                <div className="premium-tag">Premium Feature</div>
              </div>
            </div>
            
            <div className="recommendation-item" style={{borderLeft: '4px solid #ef4444'}}>
              <span className="recommendation-icon" style={{color: '#ef4444'}}>✗</span>
              <div className="recommendation-text">Remove outdated skills: "jQuery"</div>
            </div>
          </div>

          <div className="toggle-container">
            <button 
              className={`toggle-btn ${view === 'before' ? 'active' : ''}`}
              onClick={() => setView('before')}
            >
              Original
            </button>
            <button 
              className={`toggle-btn ${view === 'after' ? 'active' : ''}`}
              onClick={() => setView('after')}
            >
              Optimized
            </button>
          </div>

          <button className="download-btn">
            <span>⬇️</span> Download Optimized Document
          </button>

          <div className="premium-features">
            <h3 className="premium-features-title">Premium Features Available</h3>
            <ul className="premium-features-list">
              <li>✨ Industry-specific phrasing tailored to job descriptions</li>
              <li>✨ Unlimited optimizations (vs. 5/month on free plan)</li>
              <li>✨ Cover letter customization for each application</li>
              <li>✨ Advanced ATS scoring with detailed feedback</li>
            </ul>
            <button className="premium-cta-btn">Get Premium for $14.99/month</button>
          </div>
        </div>
      </main>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon" style={{backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>✓</div>
          <h3 className="feature-title">ATS Optimization</h3>
          <p className="feature-desc">Your resume is now optimized for automated screening systems with 87% compatibility</p>
          <div className="feature-plan">Available in Free Plan</div>
        </div>
        
        <div className="feature-card premium-card">
          <div className="feature-icon" style={{backgroundColor: 'rgba(79, 70, 229, 0.1)'}}>🔍</div>
          <h3 className="feature-title">Keyword Matching <span className="premium-pill">Premium</span></h3>
          <p className="feature-desc">Added 6 relevant keywords from the job description to improve visibility</p>
          <div className="feature-plan premium-plan">Premium Feature</div>
        </div>
        
        <div className="feature-card premium-card">
          <div className="feature-icon" style={{backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>📝</div>
          <h3 className="feature-title">Cover Letter Assistant <span className="premium-pill">Premium</span></h3>
          <p className="feature-desc">Customized cover letter ready for review with personalized content</p>
          <div className="feature-plan premium-plan">Premium Feature</div>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon" style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>📊</div>
          <h3 className="feature-title">Job Match Score</h3>
          <p className="feature-desc">85% match to this position based on your qualifications and experience</p>
          <div className="feature-plan">Available in Free Plan</div>
        </div>
      </section>

      <footer className="usage-footer">
        <div className="usage-stats">
          <span><b>Free Plan:</b> 3/5 optimizations remaining this month</span>
          <div className="usage-meter">
            <div className="usage-meter-fill"></div>
          </div>
        </div>
        
        <div className="upgrade-prompt">
          <span>Want unlimited optimizations & full features?</span>
          <a href="#" className="pulse">Unlock Premium</a>
        </div>
      </footer>
    </div>
  );
}

export default App