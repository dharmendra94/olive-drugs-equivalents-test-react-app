import DrugEquivalentsTable from "./drug-equivalents-cost";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


const drugEquivalentsCostsUrl = `http://olive-drugs-test-express-api.us-east-1.elasticbeanstalk.com/api`;

const DrugEquivalentsCost = () => {
    const { ndc } = useParams();
    const [drugEquivalentsCost, setDrugEquivalentsCost] = useState([]);

    useEffect(() => {
        const fetchDrugsData = async () => {
            const rsp = await fetch(`${drugEquivalentsCostsUrl}/drugEquivalentsCost/${ndc}`);
            const data = await rsp.json();
            if (!data || data.length <= 0) return;
            console.log(data);
            setDrugEquivalentsCost(data[0]);
        }
        fetchDrugsData();
    }, [ndc]);

    return (
        <DrugEquivalentsTable drugEquivalentsCost={drugEquivalentsCost} />
    );
}

export default DrugEquivalentsCost;