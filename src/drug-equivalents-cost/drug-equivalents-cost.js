import "./drug-equivalents-cost.css";
import * as CurrencyFormat from "react-currency-format";

const DrugEquivalentsTable = ({ drugEquivalentsCost }) => {
    if (!drugEquivalentsCost) return (<p>No equivalents with cost information found</p>)
    return (
        <div className="equivalent-costs-container">
            <h5>Drug equivalents NADAC cost</h5>
            <div className="table-container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Drug</th>
                            <th>NDC</th>
                            <th>Pkg</th>
                            <th>NADAC</th>
                            <th>Pricing unit</th>
                            <th>Dosage form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drugEquivalentsCost.map(equivalent => (
                            <tr key={equivalent.NDC}>
                                <td>{equivalent.DrugName}</td>
                                <td>{equivalent.NDC}</td>
                                <td>
                                    <div>
                                        {equivalent.PkgTotalUnits} {equivalent.PkgSizeUom}
                                        {
                                            equivalent.PkgQty > 1 ?
                                                <div className="pkg-qty">
                                                    qty: {equivalent.PkgQty}
                                                </div> : ""
                                        }
                                    </div>
                                </td>
                                <td>
                                    <CurrencyFormat decimalScale={4} displayType="text" value={equivalent.NADACPrice} thousandSeparator={true} prefix={'$'} />
                                </td>
                                <td>{equivalent.PricingUnit}</td>
                                <td>{equivalent.DosageForm}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DrugEquivalentsTable;