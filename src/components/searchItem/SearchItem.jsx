import './searchItem.css';

export const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                className="siImg"
                alt=""
                src="https://cf.bstatic.com/xdata/images/hotel/square600/412599355.webp?k=608baa75c54442bd78acb94311625cb64f0c9b4b7dc12a03b8f260c8f8aef17e&o=&s=1"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio ~ 1 bathroom ~ 21m 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckBtn">See availability</button>
                </div>
            </div>
        </div>
    );
};
