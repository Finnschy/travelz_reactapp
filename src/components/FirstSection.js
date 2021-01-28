import Button from './Button'

const FirstSection = () => {

    return (
        <section className="flexSect firstSection">
            <img src="Illustration_01.svg" alt="" />
            <article>
                <h2>A new way to explore the world</h2>
                <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                <Button content="Learn more" />
            </article>
        </section>
    );
}

export default FirstSection;