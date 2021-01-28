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
                            <li>Africa</li>
                            <li>Antarctica</li>
                            <li>Asia</li>
                            <li>Europe</li>
                            <li>America</li>
                        </ul>
                    </div>
                    <div>
                    <h4>Shop</h4>
                        <ul>
                            <li>Destination Guides</li>
                            <li>Pictorial & Gifts</li>
                            <li>Special Offers</li>
                            <li>Delivery Times</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                    <h4>Interests</h4>
                        <ul>
                            <li>Adventure Travel</li>
                            <li>Art And Culture</li>
                            <li>Wildlife And Nature</li>
                            <li>Family Holidays</li>
                            <li>Food And Drink</li>
                        </ul>
                    </div>
                </section>
                <hr />
                <section className="footerSocial">

                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                </section>
            </section>
        </footer>
    );
}

export default Footer;