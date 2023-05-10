import Search from '../../components/Search/Search'
import './Home.css'



const Home = () => {
    return(
        <div className="home">
            <div className="container">

                <section className="first-column">
                    <div className="img-con">
                        <img src='../img/oldBooks.jpg' alt="book here" />

                    </div>
                </section>

                <section className="second-column">
                    <div className="texts">
                        <h1>Good Authors & Wonderful Ploting</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iste delectus ab veritatis aperiam atque, quod illum culpa tempore magnam nihil!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <button>READ MORE</button>
                    </div>
                    <Search />
                </section>
            </div>
        </div>
    )
}

export default Home