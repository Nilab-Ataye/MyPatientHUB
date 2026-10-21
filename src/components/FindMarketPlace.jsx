import "./FindMarketPlace.css";
import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import products from "../data/product";



function FindMarketPlace({ searchQuery="",
  setSearchQuery
}){
    const cards=searchQuery.trim()
    ?[]
    :products.slice(0, 4)

    const [currentPage, setCurrentPage]=useState(1);
    const [message, setMessage]=
    useState("");
    const itemsPerPage=3;
    const filteredProducts =
    products.filter((p)=>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())||
 p.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const otherProducts= searchQuery.trim()
    ? filteredProducts
    : products.slice(4);
  const totalPages=
  Math.ceil (otherProducts.length/itemsPerPage);

  const startIndex=(currentPage - 1) 
  *itemsPerPage;

  const currentProducts=
  otherProducts.slice(
    startIndex,
    startIndex+ itemsPerPage
  );
    return (
        <div className="marketplace">
            <Header pageName="MarketPlace"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>
    {message && 
  <div className="success-message">{message}
  </div>
}
            <div className="marketplace-content">
            <h1>
                MarketPlace
            </h1>
            <p>
                Search Market Places and order what you need </p>
           <div className="mk-cards">
  {cards.map((p) => (
    <div className="mk-card" key={p.id}>
      <div className="mk-card-image">
        <img src={p.image} />
      </div>

      <div className="mk-card-meta">
        <span>{p.category}</span>
        <span className="price">{p.price} AFN</span>
      </div>

      <h3>{p.name}</h3>
      <p>{p.company}</p>
      <p>{p.description}</p>
      <button
      type="button"
      onClick={()=>{
        setMessage("The Product bought Successfully!");
        setTimeout(()=>setMessage(""),
        3000);
      }}>
        Buy Now
      </button>
    </div>
  ))}
</div>
<section className="other-results">

  <div className="other-results-header">
    <h2>Other search results</h2>

    <div className="results-controls">
      <span>7 entries per page</span>

      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e)=>
          {setSearchQuery(e.target.value);
          setCurrentPage(1);
        }}
      />
    </div>
  </div>

  <div className="results-table-wrapper">
    <table className="results-table">

      <thead>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>CATEGORY</th>
          <th>PRICE</th>
          <th>DISCOUNT</th>
          <th>COMPANY</th>
          <th>SERVICE</th>
          <th>ID</th>
        </tr>
      </thead>

<tbody>
  {currentProducts.map((p) => (
    <tr key={p.id}>
      <td>
        <img src={p.image} alt={p.name} className="result-image" />
      </td>

      <td>{p.name}</td>
      <td>{p.category}</td>
      <td>{p.price} AFN</td>
      <td>{p.discount || "0%"}</td>
      <td>{p.company}</td>
      <td>{p.service || "Available"}</td>
      <td>{p.id}</td>
    </tr>
  ))}
</tbody>
    </table>
    <div className="pagination">
      <button 
      onClick={()=>
        setCurrentPage(currentPage - 1)
      }
      disabled={currentPage===1}>
        Previous
      </button>
      <button 
      onClick={()=>
        setCurrentPage(currentPage +1)
      }
      disabled={currentPage=== totalPages}>
        Next
      </button>
      {Array.from({length:
        totalPages}, (_, index)=>(
          <button 
          key={index + 1}
          onClick={()=>
            setCurrentPage(index + 1)}
            className={currentPage===index + 1? "active":""}>
              
              {index + 1}
            </button>
      ))}
    </div>
  </div>

</section>
            </div>
            <Footer />
        </div>
    );
}
export default FindMarketPlace;
