import React from 'react';

const socialLinks = [
  { name: 'LinkedIn', handle: 'Anjali Pandey', link: 'https://www.linkedin.com/in/anjali-pandey-36b757381/', icon: '💼' },
  { name: 'GitHub', handle: 'anjali-pandey-28', link: 'https://github.com/anjali-pandey-28', icon: '🔗' },
  { name: 'Email', handle: 'Anjali pandey', link: 'mailto:pandeyanjali.2807@gmail.com&subject=Want%20to%20connect%20with%20you&body=Hey%20Anjali,%20I%20really%20like%20your%20portfolio%20and%20want%20to%20connect%20with%20you', icon: '📧' }
];

export default function Socials() {
  return (
    <section id="socials" className="socials-section">
      <h2 className="section-title">Let’s Be Friends</h2>
      <p className="social-subtitle">Feel free to reach out for collaborations or just a friendly hello!</p>
      
      <div className="socials-container">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-icon">{social.icon}</div>
            <div className="social-info">
              <span className="social-name">{social.name}</span>
              <span className="social-handle">{social.handle}</span>
            </div>
            <span className="social-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}