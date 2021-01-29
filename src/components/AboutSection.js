import Button from './Button'
const AboutSection = () => {
    return ( 
        <section className="flexSect aboutSection">

            <article>
                <h2>Guides by Thousand Sunny</h2>
                <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                <Button content="Download" />
            </article>
            <img src="Illustration_02.svg" alt="" />
        </section>
     );
}
 
export default AboutSection;