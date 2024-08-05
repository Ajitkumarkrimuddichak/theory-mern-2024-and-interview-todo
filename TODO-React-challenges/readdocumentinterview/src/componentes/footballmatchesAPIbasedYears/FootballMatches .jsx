import "./style.css";
import { useState, useEffect } from "react";

const FootballMatch = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`
    )
      .then((res) => res.json())
      .then((data) => setMatches(data.data));
  }, [selectedYear]);

  const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
  return (
    <div className="container">
      <div>
        <div>Select Year</div>
        <ul className="sidebar">
          {years.map((year) => (
            <li onClick={() => setSelectedYear(year)} key={year}>
              {year}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {matches.length > 0 ? (
          <>
            <div>Total Matches: {matches.length}</div>
            <ul>
              {matches?.map((match) => (
                <li>
                  Match {match.name} won by {match.winner}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div>No Matches Found</div>
        )}
      </div>
    </div>
  );
};

export default FootballMatch;
