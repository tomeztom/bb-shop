import { useEffect } from "react";
import { Link } from "react-router-dom"; // Importiere Link für die Navigation


function About() {
    useEffect(() => {
        document.body.classList.add("home");
        return () => {
            document.body.classList.remove("home");
        };
    }, []);

    return (
        <main>
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__image">
                        <img src="assets/hero-image.webp" alt="Hero Banner" />
                    </div>

                    <div className="hero__grid">
                        <div className="hero__item hero__item--title">
                            <h1 className="hero__title">Botanical Bliss</h1>
                            <h2 className="hero__subtitle">
                                Where Your Green Dreams Take Root!
                            </h2>
                        </div>
                        <div className="hero__item hero__item--button">
                            <Link
                                to="/productlist"
                                className="btn btn-primary item"
                            >
                                Get Started
                                <span className="btn-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="13"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M7.69603 0.870117L12.9993 6.17342M12.9993 6.17342L7.69603 11.4767M12.9993 6.17342L1 6.17342"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            stroke="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div className="hero__item hero__item--text">
                            <p>
                                Imagine stepping into a place where every leaf
                                tells a story and every bloom promises an
                                adventure. At Botanical Bliss, we make that
                                dream a reality!
                            </p>
                            <p>
                                Our promise to you: Every plant in our
                                collection has been lovingly selected and
                                nurtured to thrive in your home. Whether
                                you&#39;re a seasoned plant whisperer or just
                                beginning your green journey, we&#39;re here to
                                support you every step of the way.
                            </p>
                            <p>
                                Ready to make your life a little greener?{" "}
                                <strong>Let’s create</strong> your personal
                                Botanical Bliss together!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default About;
