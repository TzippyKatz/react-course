import '../css/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="social">
                <a href="https://www.instagram.com/val_thorens/" target="_blank" rel="noreferrer" title="Follow us on Instagram">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/valthorens.resort/" target="_blank" rel="noreferrer" title="Follow us on Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/Val_Tho" target="_blank" rel="noreferrer" title="Follow us on Twitter">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.tiktok.com/@val_thorens" target="_blank" rel="noreferrer" title="Follow us on TikTok">
                    <i className="fa-brands fa-tiktok"></i>
                </a>
            </div>
            <p>© created by Tzippy Katz</p>
        </footer>
    )
}

export default Footer;