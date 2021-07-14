import "./drug-equivalents-cost.css";

const DrugEquivalentsTable = ({ drugEquivalentsCost }) => {
    console.log(drugEquivalentsCost);
    if (!drugEquivalentsCost) return (<p>No equivalents with cost information found</p>)
    return (
        <table>
            <tr>
                <td>Drug</td>
                <td>NDC</td>
                <td>NADAC</td>
                <td>Pricing unit</td>
            </tr>
            {drugEquivalentsCost.map(equivalent => (
                <tr key={equivalent.NDC}>
                    <td>{equivalent.DrugName}</td>
                    <td>{equivalent.NDC}</td>
                    <td>{equivalent.NADACPrice}</td>
                    <td>{equivalent.PricingUnit}</td>
                </tr>
            ))}
        </table>
    );
}

export default DrugEquivalentsTable;