export interface IListing {
    items:
        [
            {
                listing_id: number,
                state: string,
                url: string,
                MainImage: {url_570xN: string},
                title: string,
                currency_code: string,
                price: string,
                quantity: number 
            }
        ]
    
}

export const Listing = ({items}: IListing) => {
    const titleLimit=50
  return (
    <div className="item-list">
        {
            items.filter(i => i.state=='active').map(item =>
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                        {
                            item.title.length > titleLimit
                            ? `${item.title.slice(0, titleLimit + 1)}…`
                            : item.title
                        }
                        </p>
                        <p className="item-price">
                        {
                            item.currency_code=='USD' ? `$${item.price}` :
                            item.currency_code=='EUR' ? `€${item.price}` : `${item.price} GBP`
                        }
                        </p>
                        <p className={`item-quantity ${item.quantity>20 ? 'level-high' : 
                    item.quantity<20 && item.quantity>10 ? 'level-medium' : 'level-low'}`}>{item.quantity} left</p>
                    </div>
                </div>
    )
    }
    </div>
  )
}
Listing.defaultProps = {
    items: [],
    };