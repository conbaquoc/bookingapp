/* eslint-disable no-unused-vars */
import useFetch from '../../hooks/useFetch';
import './propertyList.css';

export const PropertyList = () => {
    const { data, loading, error } = useFetch('/hotels/countByType');
    console.log(data);
    const images = [
        'https://www.claytonhotelduesseldorf.com/wp-content/uploads/2022/11/Business-Zimmer-Clayton-Hotel-Duesseldorf-640x640.jpg',
        'https://www.hotelandy.com/wp-content/uploads/2019/07/apartment3-640x640.jpg',
        'https://i.pinimg.com/736x/d0/e0/8e/d0e08e0b7937c062732d8c7e5bd26306--boracay-resorts-ocean-photos.jpg',
        'https://bm.visa.com/dam/VCOM/regional/lac/SPA/Default/affluent/VHLC/marquee-visa-luxury-hotel-collection-640x640.jpg',
        'https://i.pinimg.com/736x/fe/16/67/fe1667db50d8f7de21c7a1c69f3647c6.jpg',
    ];
    return (
        <div className="pList">
            {loading ? (
                'loading'
            ) : (
                <>
                    {data &&
                        images.map((img, index) => (
                            <div className="pListItem" key={index}>
                                <img className="pListImg" alt="" src={img} />
                                <div className="pListTitles">
                                    <h1>{data[index]?.type}</h1>
                                    <h2>
                                        {data[index]?.count} {data[index]?.type}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};
