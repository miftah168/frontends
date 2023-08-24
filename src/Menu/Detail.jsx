import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Detail() {
  const { state } = useLocation();
  const item = state;
  const url = "https://newsapi.org/v2/top-headlines?country="+item.row.country+"&category="+item.row.category+"&apiKey=64c5960e7efa4d60a3c4a3f8ebd82fb0&pageSize=12&page=1";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  
return item ? (
<div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-4">Article {item.row.category}</h1>
      </div>

<div className="row g-4">
 
 
{data.articles?.map((row) => {
return (
<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
<div className="service-item rounded overflow-hidden">
    <div className="position-relative p-4 pt-0">
    <div className="service-icon">
        <i className="fa fa-lightbulb fa-3x" />
    </div>
    <h4 className="mb-3">{row.source.name}
    </h4>
    <p>{row.author}</p>
    <p>
        {row.title}
    </p>
    <Link className="small fw-medium" to={`/viewsDetail/${row.name ? row.name  : 'details'}`}
      state={{ row }}>
      See Detail
      <i className="fa fa-arrow-right ms-2" />
      </Link>
    </div>
</div>
</div>
);
})}

      </div>
    </div>
  </div>
  ) : "No item matched/found.";
}

export default Detail;