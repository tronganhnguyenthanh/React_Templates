import React, {useEffect, useState} from "react"
function LeftSidebarHook(){
  const [category, setCategory] = useState([])
  useEffect(() => {
    getProductCategories()
  }, []);
  const getProductCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
     .then((res)  => res.json())
     .then((data) => setCategory(data))
  }
  return (
    <>
      <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Category</h2>
          <div className="panel-group category-products" id="accordian">
            {category.map((cate, index) => {
              return (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a>{cate}</a>
                    </h4>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="brands_products">
            <h2>Brands</h2>
            <div className="brands-name">
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(50)</span>Acne
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(56)</span>Grüne Erde
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(27)</span>Albiro
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(32)</span>Ronhill
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(5)</span>Oddmolly
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(9)</span>Boudestijn
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <span className="pull-right">(4)</span>Rösch creative
                    culture
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="price-range">
            <h2>Price Range</h2>
            <div className="well text-center">
              <input
                type="text"
                className="span2"
                value=""
                data-slider-min="0"
                data-slider-max="600"
                data-slider-step="5"
                data-slider-value="[250,450]"
                id="sl2"
              />
              <br />
              <b className="pull-left">$ 0</b>{" "}
              <b className="pull-right">$ 600</b>
            </div>
          </div>
          <div className="shipping text-center">
            <img src="images/home/shipping.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default LeftSidebarHook
