import React from 'react';

type CardListProps = {
  data: any[];
  loading: boolean;
};

const CardList: React.FC<CardListProps> = ({ data, loading }) => {
  const placeholderImageUrl = 'https://via.placeholder.com/150';

  return (
    <div className="row" style={{ backgroundColor: 'lightseagreen' }}>
      {data.map((item: any, index: number) => (
        <div key={index} className="col-12 mb-4">
          <div className="card h-100 custom-shadow custom-border">
            <img
              src={item.image}
              className="card-img-top"
              alt={item.wine || item.title}
              style={{ objectFit: 'contain', height: '300px' }}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = placeholderImageUrl;
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.wine || item.title}</h5>
              {item.winery && <p className="card-text">{`Winery: ${item.winery}`}</p>}
              {item.location && <p className="card-text">{`Location: ${item.location}`}</p>}
              {item.rating?.average && item.rating?.reviews && (
                <p className="card-text">{`Rating: ${item.rating.average} - ${item.rating.reviews}`}</p>
              )}
              {item.description && <p className="card-text">{item.description}</p>}
              {item.ingredients && <p className="card-text">{`Ingredients: ${item.ingredients.join(", ")}`}</p>}
            </div>
          </div>
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default CardList;
