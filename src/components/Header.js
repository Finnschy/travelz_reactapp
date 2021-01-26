import Button from "./Button"
import { Component } from 'react';
class Header extends Component {
    state = {}
    render() {
        return (
            <header>
                <section className="headerSect">
                    <div className="headerHL">
                        <h1>Explore and</h1>
                        <h2 className="likeH1">Travel</h2>
                    </div>
                    <h3>Holiday finder</h3>
                    <hr />

                    <section className="selectOptions">
                        <select name="locations" id="locations">
                            <option value="location">Location</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="australia">Australia</option>
                        </select>
                        <select name="activity" id="activity">
                            <option value="activity">Activity</option>
                            <option value="hiking">Hiking</option>
                            <option value="swimming">Swimming</option>
                            <option value="snorkel">Snorkel</option>
                        </select>
                        <select name="grade" id="grade">
                            <option value="grade">Grade</option>
                            <option value="lorem">Lorem</option>
                            <option value="ipsum">Ipsum</option>
                            <option value="dolor">Dolor</option>
                        </select>
                        <select name="date" id="date">
                            <option value="date">Date</option>
                            <option value="now">Now</option>
                            <option value="tomorrow">Tomorrow</option>
                            <option value="never">Never</option>
                        </select>
                    </section>
                    <Button content="Explore" />
                </section>


            </header>
        );
    }
}

export default Header;