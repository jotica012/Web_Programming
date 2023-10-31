import './footer.css'
export function Footer () {
  return (
    <div className='footer-container'>
      <footer>
        <div className='footer-section'>
          <h1>Let's talk</h1>
          <div className='subtitle'>3levatecollective@gmail.com</div>
        </div>
        <div className='footer-section'>
          <h1>Follow Us</h1>
          <div className='subtitle'>
            <p>Behance</p>
            <p>Linkedin</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className='footer-section'>
          <h1>© All rights reserved</h1>
          <div className='subtitle'>the colective you have been looking for</div>
        </div>
      </footer>
    </div>
  )
}
