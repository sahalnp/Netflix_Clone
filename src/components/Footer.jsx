import React from 'react'

export const Footer = () => {
  return (
    <div>
          <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-section">
              <h3>Company</h3>
              <a href="#">About Netflix</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">Supported Devices</a>
              <a href="#">Accessibility</a>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Corporate Information</a>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>
          <p style={{color: '#999', marginTop: '30px'}}>
            © 2025 Netflix Clone. This is a demo project for educational purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}
