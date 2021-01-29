import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PartnerSect = () => {
    return (
        <section className="partnerSection">
            <h2>Testimonials</h2>
            <section className="flexSect testimonialSect">

                <div>
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <FontAwesomeIcon icon="star" />
                    <p>“Quisque in lacus a urna fermentum</p>
                    <p>euismod. Integer mi nibh, dapibus ac</p>
                    <p>scelerisque eu, facilisis quis purus. Morbi</p>
                    <p>blandit sit amet turpis nec”</p>
                    <h3>Edward Newgate</h3>
                    <p>Founder Circle</p>
                </div>

                <div>
                    <img src="testimonials.png" alt="" />
                </div>
            </section>
            <div className="destinationsFlex partnerFlex">
                <h2>Featured stories</h2>
                <a href="/">View all <FontAwesomeIcon icon="chevron-right" /></a>
            </div>
            <section className="trendingStoriesGrid">
                <div>
                    <img src="trending-stories-01.png" alt="" />
                    <h3>The many benefits of taking a healing holiday</h3>
                    <p>‘Helaing holidays’ are on the rise to help maximise your health and happines...</p>
                    <a href="/">Read more</a>
                </div>
                <div>
                    <img src="trending-stories-02.png" alt="" />
                    <h3>The best Kyoto restaurant to try Japanese food</h3>
                    <p>From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...</p>
                    <a href="/">Read more</a>
                </div>
                <div>
                    <img src="trending-stories-03.png" alt="" />
                    <h3>Skip Chichen Itza and head to this remote Yucatan</h3>
                    <p>It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...</p>
                    <a href="/">Read more</a>
                </div>
                <div>
                    <img src="trending-stories-04.png" alt="" />
                    <h3>Surf’s up at these beginner spots around the world</h3>
                    <p>If learning to surf has in on your to-do list for a while, the good news is: it’s never too late...</p>
                    <a href="/">Read more</a>
                </div>
            </section>
        </section>
    );
}

export default PartnerSect;