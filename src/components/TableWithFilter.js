import React, { useState, useEffect,useMemo } from "react";
import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const TableWithFilter = () => {
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://640b02ac65d3a01f980d7f52.mockapi.io/address")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSort = (key) => {
    setSortKey(key);

    if (sortKey === key) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortOrder("asc");
    }
  };

  const isHighlighted = (columnKey) => {
    if (sortKey === columnKey) {
      return sortOrder === "asc" ? "down" : "up";
    }
    return null;
  };

  const sortedData = useMemo(() => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      const valueA = a[sortKey]?.toUpperCase() || "";
      const valueB = b[sortKey]?.toUpperCase() || "";
      return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    return sortedData;
  }, [data, sortKey, sortOrder]);

  return (
    <div className="TableWithFilter">
      <table className="component-table">
        <thead>
          <tr>
            <th>
              SR.NO
            </th>
            <th onClick={() => handleSort("name")}>
              NAME{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("name") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("name") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
            <th onClick={() => handleSort("email")}>
              EMAIL{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("email") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("email") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
            <th onClick={() => handleSort("gender")}>
              GENDER{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("gender") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("gender") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
            <th onClick={() => handleSort("phone")}>
              PHONE{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("phone") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("phone") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
            <th onClick={() => handleSort("company")}>
              COMPANY{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("company") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("company") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
            <th onClick={() => handleSort("eyeColor")}>
              EYECOLOR{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("eyeColor") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("eyeColor") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
            <th onClick={() => handleSort("balance")}>
              BALANCE{" "}
              <span className="sort-indicator">
                <FontAwesomeIcon viewBox="0 -550 448 700"
                  icon={faAngleUp}
                  className={isHighlighted("balance") === "up" ? "highlighted" : ""}
                />
                <FontAwesomeIcon viewBox="0 -80 448 700"
                  icon={faAngleDown}
                  className={isHighlighted("balance") === "down" ? "highlighted" : ""}
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.gender}</td>
              <td>{row.phone}</td>
              <td>{row.company}</td>
              <td>{row.eyeColor}</td>
              <td>{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithFilter;


