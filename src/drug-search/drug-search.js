import { useState, Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useHistory } from "react-router-dom";

const searchUrl = `http://olive-drugs-test-express-api.us-east-1.elasticbeanstalk.com/api`;

const DrugSearch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const history = useHistory();

    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`${searchUrl}/drugSearch/${query}`)
            .then(resp => resp.json())
            .then((resp) => {
                if (!resp) return;

                const options = resp.map(m => ({
                    NDC: m.NDC,
                    DrugName: m.DrugName
                }));

                setOptions(options);
                setIsLoading(false);
            });
    }

    const onChange = (selected) => {
        if (!selected || selected.length <= 0) return;
        const ndc = selected[0].NDC;
        console.log(ndc);
        history.push(`/drugEquivalents/${ndc}`);
    }

    const filterBy = () => true;

    return (
        <AsyncTypeahead
            filterBy={filterBy}
            id="async-example"
            isLoading={isLoading}
            labelKey="DrugName"
            minLength={3}
            onSearch={handleSearch}
            options={options}
            placeholder="Search for a drug..."
            onChange={onChange}
            renderMenuItemChildren={(option, props) => (
                <Fragment>
                    <span>{option.DrugName}</span>
                    <span>{option.NDC}</span>
                </Fragment>
            )}
        />
    );
}

export default DrugSearch;