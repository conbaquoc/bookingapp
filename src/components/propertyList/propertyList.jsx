import './propertyList.css';

export const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img
                    className="pListImg"
                    alt=""
                    src="https://www.claytonhotelduesseldorf.com/wp-content/uploads/2022/11/Business-Zimmer-Clayton-Hotel-Duesseldorf-640x640.jpg"
                />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    className="pListImg"
                    alt=""
                    src="https://www.hotelandy.com/wp-content/uploads/2019/07/apartment3-640x640.jpg"
                />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2331 hotel</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    className="pListImg"
                    alt=""
                    src="https://i.pinimg.com/736x/d0/e0/8e/d0e08e0b7937c062732d8c7e5bd26306--boracay-resorts-ocean-photos.jpg"
                />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>4334 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    className="pListImg"
                    alt=""
                    src="https://bm.visa.com/dam/VCOM/regional/lac/SPA/Default/affluent/VHLC/marquee-visa-luxury-hotel-collection-640x640.jpg"
                />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>2336 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img
                    className="pListImg"
                    alt=""
                    src="https://i.pinimg.com/736x/fe/16/67/fe1667db50d8f7de21c7a1c69f3647c6.jpg"
                />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>266 hotels</h2>
                </div>
            </div>
        </div>
    );
};
