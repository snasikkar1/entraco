function getNav(activePage) {
  return `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="https://www.entracobks.com/wp-content/uploads/2018/07/entracologo_blue.png" alt="Entraco BKS" style="height:48px;width:auto">
    </a>
    <ul class="nav-links">
      <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
      <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
      <li><a href="products.html" ${activePage==='products'?'class="active"':''}>Products</a></li>
      <li><a href="careers.html" ${activePage==='careers'?'class="active"':''}>Careers</a></li>
      <li><a href="contact.html" class="nav-cta">Contact</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</nav>
<div class="mobile-menu">
  <button class="close-btn" aria-label="Close">&times;</button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="products.html">Products</a>
  <a href="careers.html">Careers</a>
  <a href="contact.html">Contact</a>
</div>`;
}

function getFooter() {
  return `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <img src="https://www.entracobks.com/wp-content/uploads/2018/07/entracologo_blue.png" alt="Entraco BKS" style="height:36px;width:auto;filter:brightness(0) invert(1);margin-bottom:0.75rem">
      <p>Entraco BKS Bus Ducts Pvt. Ltd. — An Indo-Swiss Venture. ISO 9001 certified manufacturer of premium busduct systems serving industries worldwide for over 30 years.</p>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="careers.html">Careers</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="products/lv-ip68.html">• LV IP68 Resin Cast</a></li>
        <li><a href="products/lv-ip55.html">• LV IP55 Sandwich</a></li>
        <li><a href="products/lighting.html">• Lighting Bus Duct</a></li>
        <li><a href="products/mv-ip68.html">• MV IP68 Resin Cast</a></li>
        <li><a href="products/mv-ip65.html">• MV IP65 Isolated Phase</a></li>
        <li><a href="products/air-insulated.html">• Air Insulated</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <div class="footer-contact-item">📍 A-36/2 NICE, MIDC, Satpur, Nashik-422007, Maharashtra, India</div>
      <div class="footer-contact-item">📞 <a href="tel:+912536698128" style="color:rgba(220,227,238,0.65)">+91 253 6698128 / 123</a></div>
      <div class="footer-contact-item">✉ <a href="mailto:info@entracobks.com" style="color:rgba(220,227,238,0.65)">info@entracobks.com</a></div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Entraco BKS Bus Ducts Pvt. Ltd. All rights reserved.</span>
    <span>An Indo-Swiss Venture | ISO 9001 Certified</span>
  </div>
</footer>`;
}
