/* eslint-disable no-unused-vars */
import './featuredProperties.css';
import useFetch from '../../hooks/useFetch';

export const FeaturedProperties = () => {
    const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

    return (
        <div className="fp">
            {loading ? (
                'Loading'
            ) : (
                <>
                    {data.map((item) => (
                        <div className="fpItem" key={item._id}>
                            <img
                                className="fpImg"
                                alt=""
                                src={item.photos[0]}
                            />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                            {item.rating && <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};
