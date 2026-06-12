import { useEffect, useState } from "react";

export default function useJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/12WhKu41BtqcPNpoIIE63cAspg_urwHXPNaeSU7FuoQI/Jobs",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Jobs loaded:", data);

        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          console.error("Expected array, got:", data);
          setJobs([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setJobs([]);
      });
  }, []);

  return jobs;
}
