import './featuredProperties.css';

export const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    className="fpImg"
                    alt=""
                    src="https://www.claytonhotelduesseldorf.com/wp-content/uploads/2022/11/Clayton-Hotel-Duesseldorf-Superior-Zimmer-1-640x640.jpg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    className="fpImg"
                    alt=""
                    src="https://www.claytonhotelduesseldorf.com/wp-content/uploads/2022/11/Executive-Suite-Clayton-Hotel-Dusseldorf-640x640.jpg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    className="fpImg"
                    alt=""
                    src="https://static-new.lhw.com/-/media/Images/Hotel-Experiences/Brand-RU-Stories/King-David/King-DavidJerusalem-suite-bedroom-640x640.jpg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    className="fpImg"
                    alt=""
                    src="https://i2.cdn.turner.com/money/dam/assets/150804102727-converted-hotel-tai-o-heritage-hotel-640x640.jpg"
                />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};
