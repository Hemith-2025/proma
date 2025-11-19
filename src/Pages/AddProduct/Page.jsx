// Styles
import "./Style.css";

// Data
import Content from "../../Data/Content";

// Components
import UseWrapper from "../../Components/Common/UseWrapper";
import { GetData, SaveData } from "../../functions/Script";

// Dependencies
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function AddProduct() {
  const PROMA_USER_PRODUCTS_KEY = "proma_user_products";
  const [products, setProducts] = useState(() => {
    const data = GetData(PROMA_USER_PRODUCTS_KEY);
    return data ? data : [];
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    type: "",
    brand: "",
    model: "",
    specs: {
      ram: {
        from: {
          capacity: "",
          type: ""
        },
        to: {
          capacity: "",
          type: ""
        }
      },
      storage: {
        from: {
          capacity: "",
          type: ""
        },
        to: {
          capacity: "",
          type: ""
        }
      },
      cpu: "",
      processors: "",
      cores: "",
      os: "",
      others: ""
    }
  });
  const [productErrors, setProductErrors] = useState({});
  return (
    <main className="add-product-page">
      <form noValidate>
        <div className="form-input">
          <div className="label">Name</div>
          <input type="text" name="name" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} />
          {(productErrors.name) && <span>{productErrors.name}</span>}
        </div>
        <div className="form-input">
          <div className="label">Type</div>
          <input type="text" name="type" value={newProduct.type} onChange={(e) => setNewProduct({...newProduct, type: e.target.value})} />
          {(productErrors.type) && <span>{productErrors.type}</span>}
        </div>
        <div className="form-input">
          <div className="label">Brand</div>
          <input type="text" name="brand" value={newProduct.brand} onChange={(e) => setNewProduct({...newProduct, brand: e.target.value})} />
          {(productErrors.brand) && <span>{productErrors.brand}</span>}
        </div>
        <div className="form-input">
          <div className="label">Model</div>
          <input type="text" name="model" value={newProduct.model} onChange={(e) => setNewProduct({...newProduct, model: e.target.value})} />
          {(productErrors.model) && <span>{productErrors.model}</span>}
        </div>
        {/* We use select for the specs like ramCapacities, ramTypes, storageSizes, storageTypes, cpu, processors, cores, os */}
        <div className="form-input">
          <div className="label">
            <p>RAM</p>
          </div>
        </div>
      </form>
    </main>
  );
}
