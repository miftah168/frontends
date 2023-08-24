import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

function Views() {
    const { state } = useLocation();
    const item = state;

    return item ? (
        <div className="container-xxl py-5">
            <div className="container">
              <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: 600 }}
              >
                <h4 className="mb-4">Author {item.row.author}</h4>
              </div>
        
        <div className="row g-4">
         
        <div className="col-md-12 col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded overflow-hidden">
        <img
                className="img-fluid w-100"
                src={item.row.urlToImage}
                alt=""
            />
            <div className="position-relative p-4 pt-0">
            <br></br>
            <h4 className="mb-3">{item.row.title}
            </h4>
            <p>{item.row.description}</p>
            <p>
              {item.row.content}
            </p>
    
            </div>
        </div>
        </div>
     
        
              </div>
            </div>
          </div>
          ) : "No item matched/found.";
}

export default Views