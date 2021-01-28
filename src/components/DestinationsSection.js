import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DestinationsSect = () => {
    return (
        <section className="destinationsSect">
            <div className="destinationsFlex">
                <h2>Featured destinations</h2>
                <a href="/">View all <FontAwesomeIcon icon="chevron-right" /></a>
            </div>

            <div className="destinationsIMG">
                <div class="div1">
                    <img src="/destinations-img_01.png" alt="" />
                </div>
                <div class="div2">
                    <h5>Raja Ampat</h5>
                    <p>Indonesia</p>
                </div>
                <div class="div3">
                    <img src="/destinations-img_02.png" alt="" />
                </div>
                <div class="div4">
                    <h5>Fanjingshan</h5>
                    <p>China</p>
                </div>
                <div class="div5"> 
                    <img src="/destinations-img_03.png" alt=""/>
                </div>
                <div class="div6"> 
                    <h5>Vevey</h5>
                    <p>Switzerland</p>
                </div>
                <div class="div7"> 
                <img src="/destinations-img_04.png" alt=""/>
                </div>
                <div class="div8"> 
                    <h5>Skadar</h5>
                    <p>Montenegro</p>
                </div>
            </div>
        </section>
    );
}

export default DestinationsSect;