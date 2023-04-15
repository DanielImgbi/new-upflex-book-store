import './/Home.css'
import { BsSearch } from 'react-icons/bs'


const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <section className="first-column">
                    <div className="img-con">
                        <img src='../img/oldBooks.jpg' alt="book here" />

                    </div>

                    {/* <div className="img-con2">
                        <img src="#" alt="book here" />
                    </div> */}
                </section>

                <section className="second-column">
                    <div className="texts">
                        <h1>Good Author & Wonderful Ploting</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iste delectus ab veritatis aperiam atque, quod illum culpa tempore magnam nihil!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <button>READ MORE</button>
                    </div>
                    <div className="search-div">
                        <input type="text" placeholder="Type in search product and hit enter" id='search'/>
                        <div className="search-category">
                            <select name="search-category" id="">
                                <option value="all">All</option>
                                <option value="Romance">Romance</option>
                                <option value="Epic">Epic</option>
                                <option value="Fantassy">Fantassy</option>
                                <option value="action">Action</option>
                                <option value="horror">Horror</option>
                                <option value="sci-fi">Sci-fi</option>
                            </select>
                        </div>
                        <span>
                            <BsSearch/>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home