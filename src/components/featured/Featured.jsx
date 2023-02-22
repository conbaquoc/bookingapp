import './featured.css';

export const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    className="featuredImg"
                    alt=""
                    src="https://i.pinimg.com/originals/bb/b3/d1/bbb3d1e82f05f5846df2bd16017fb59e.jpg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h1>123 properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    className="featuredImg"
                    alt=""
                    src="https://www.zastavki.com/pictures/640x960/2017World___China_Hotel_Venetian_at_night__Macau__China_113867_30.jpg"
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h1>532 properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    className="featuredImg"
                    alt=""
                    src="https://preview.redd.it/3dlelmn7ol271.jpg?width=640&crop=smart&auto=webp&s=2f4e912c01619e7b500400d8360207e5453112c5"
                />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h1>533 properties</h1>
                </div>
            </div>
        </div>
    );
};
