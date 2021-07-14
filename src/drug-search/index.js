// import { useEffect, useMemo, useState } from "react";
import DrugSearch from "./drug-search";

function DrugSearchComp() {
    // const [drugsData, setDrugsData] = useState([]);

    // useEffect(() => {
    //     const fetchDrugsData = async () => {
    //         const rsp = await fetch("/DrugsData.json");
    //         const data = await rsp.json();
    //         setDrugsData(data.DrugsData);
    //     }
    //     fetchDrugsData();
    // }, []);

    return (
        <DrugSearch />
    );
}

export default DrugSearchComp;