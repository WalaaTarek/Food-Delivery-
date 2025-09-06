import { useState, useEffect } from "react";
import colors from "../constant/colors";
import { Link } from "react-router-dom";

export default function Menu() {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [s, setS] = useState([]);

  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/item/");
      const data = await response.json();
      if (data) {
        setItem(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getItem();
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/category/`);
      const data = await response.json();
      if (data) {
        setCategory(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const search = async (s) => {
    if (!s) {
      setSearchItems([]);
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/item/search/${s}`);
      const data = await res.json();
      if (data) {
        setSearchItems(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    search(s);
    filterByPrice();
  }, [s]);

  const filterByPrice = async (price) => {
    if (!price) {
      setSearchItems([]);
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/item/filter/${price}`
      );
      const data = await response.json();
      if (data) {
        setSearchItems(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: colors.backgroundColor,
        padding: 1,
      }}
    >
      <h1 style={{ color: colors.primaryColor, paddingTop: "10px" }}> Menu </h1>
      <div>
        <section>
          <input
            type="text"
            value={s}
            onChange={(e) => setS(e.target.value)}
            style={{
              width: 500,
              height: 50,
              border: "1px solid white",
              borderRadius: "5px",
              color: colors.secondaryColor,
              marginBottom: 20,
              paddingLeft: 10,
              marginLeft: 0,
              display: "flex",
            }}
            placeholder="search"
          />
        </section>
        <section></section>
        {category.length > 0 ? (
          <>
            <h2 style={{ color: colors.secondaryColor }}> Category </h2>
            <div
              style={{
                display: "flex",
                overflowY: "auto",
                height: "250px",
                padding: 10,
                margin: 10,
                gap: "20px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {category.map((c) => (
                <Link
                  key={c._id}
                  to="/category"
                  state={{ id: c._id }}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    key={c._id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                      textAlign: "center",
                      minWidth: 190,
                      width: "100%",
                      height: 195,
                      border: "1px solid white",
                      backgroundColor: "white",
                      borderRadius: 15,
                    }}
                  >
                    <img
                      src={c.image}
                      style={{
                        width: 120,
                        height: 120,
                      }}
                    />
                    <h3
                      style={{
                        marginTop: "8px",
                        fontSize: "16px",
                        color: colors.darkColor,
                      }}
                    >
                      {c.category_name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div> no item found </div>
        )}
      </div>

      {searchItems.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {searchItems.map((e) => (
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
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {item.map((e) => (
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
          ))}
        </div>
      )}
    </div>
  );
}
