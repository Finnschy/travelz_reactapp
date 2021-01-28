import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <footer>
            <section className="footerSect">
                <section className="footerGrid">
                    <div>
                        <img src="/logo.svg" alt="" />
                        <p>Plan and book your perfect trip with
                        expert advice,</p>
                        <p>travel tips destination
                        information from us</p>
                        <p id="footerCopyright">©2020 Thousand Sunny. All rights reserved</p>
                    </div>
                    <div>
                        <h4>Destinations</h4>
                        <ul>
                            <a href="https://bit.ly/2Mads6s"><li>Africa</li></a>
                            <a href="https://bit.ly/39sJ5Bk"><li>Antarctica</li></a>
                            <a href="https://bit.ly/3oppiqE"><li>Asia</li></a>
                            <a href="https://bit.ly/39oxaEw"><li>Europe</li></a>
                            <a href="https://bit.ly/3t2oThb"><li>America</li></a>
                        </ul>
                    </div>
                    <div>
                    <h4>Shop</h4>
                        <ul>
                            <a href="/"><li>Destination Guides</li></a>
                            <a href="/"><li>Pictorial & Gifts</li></a>
                            <a href="/"><li>Special Offers</li></a>
                            <a href="/"><li>Delivery Times</li></a>
                            <a href="/"><li>FAQs</li></a>
                        </ul>
                    </div>
                    <div>
                    <h4>Interests</h4>
                        <ul>
                            <a href="/"><li>Adventure Travel</li></a>
                            <a href="/"><li>Art And Culture</li></a>
                            <a href="/"><li>Wildlife And Nature</li></a>
                            <a href="/"><li>Family Holidays</li></a>
                            <a href="/"><li>Food And Drink</li></a>
                    
                        </ul>
                    </div>
                </section>
                <hr />
                <section className="footerSocial">
                    <a href="twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    <a href="facebook.com"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    <a href="linkedin.com"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                    <a href="youtube.com"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                </section>
            </section>
        </footer>
    );
}

export default Footer;