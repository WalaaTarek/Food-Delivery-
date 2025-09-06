import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import colors from "../constant/colors";
import { Link } from "react-router-dom";

export default function Category() {
  const location = useLocation();
  const { id } = location.state || {};
  const [category, setCategory] = useState([]);
  const [load, setLoad] = useState(false);
  const getCategorybyId = async () => {
    setLoad(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/category/getItem/${id}`
      );
      const data = await response.json();
      if (data) setCategory(data);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategorybyId();
  }, []);

  if (load) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: colors.primaryColor,
          textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        {" "}
        YumRun{" "}
      </h1>
      <h2
        style={{
          fontSize: "20px",
          color: colors.secondaryColor,
          marginTop: "10px",
        }}
      >
        {" "}
        Find your favorite meals in just a few clicks{" "}
      </h2>
      {category.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {category.map((e) => {
            return (
              <Link
                key={e._id}
                to="/singleitemview"
                state={{ id: e._id, item: e }}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    textAlign: "center",
                    border: "1px solid white",
                    borderRadius: "15px",
                    padding: "10px",
                    width: "450px",
                    height: "400px",
                    backgroundColor: "white",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "left",
                      color: "white",
                      marginTop: "5px",
                      width: 70,
                      height: 35,
                      backgroundColor: colors.secondaryColor,
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "5px",
                      alignItems: "center",
                    }}
                  >
                    {e.price + "$"}
                  </h3>
                  <img
                    src={e.images[0]}
                    style={{ width: 250, height: 250, borderRadius: "5%" }}
                  />
                  <h3 style={{ color: colors.secondaryColor, marginTop: 20 }}>
                    {e.item_name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div> no item found </div>
      )}
    </div>
  );
}
