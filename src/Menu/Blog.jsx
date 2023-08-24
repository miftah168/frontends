import React from "react";
import {Link} from 'react-router-dom';
class Blog extends React.Component {
  
    // Constructor
    constructor(props) {
        super(props);
  
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
  
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://newsapi.org/v2/top-headlines/sources?apiKey=64c5960e7efa4d60a3c4a3f8ebd82fb0&category=general")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
      
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h6 className="d-flex justify-content-center"> please waiting </h6> </div> ;
  
        return (
<div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-4">GENERAL</h1>
      </div>

<div className="row g-4">
  {
    items.sources.map((row,index) => ( 
 <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
 <div className="service-item rounded overflow-hidden">
   <div className="position-relative p-4 pt-0">
     <div className="service-icon">
       <i className="fa fa-lightbulb fa-3x" />
     </div>
     <h4 className="mb-3" key={index}>{ row.name }</h4>
     <p>
       {row.description}
     </p>
     <Link className="small fw-medium" to={`/itemDetail/${row.name}`}
      state={{ row }}>
      Article
      <i className="fa fa-arrow-right ms-2" />
      </Link>
   </div>
 </div>
</div>
  ))
}
       


      </div>
    </div>
  </div>
    );
}
}
  
export default Blog;