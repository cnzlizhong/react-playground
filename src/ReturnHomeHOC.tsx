/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */

import { Link } from 'react-router-dom';

const CanReturnHome = (Demo: (props: any) => JSX.Element) => (props: any) => {
    return (
        <div className="flex flex-col p-4">
            <Link to="/">
                <button type="button" className="mb-2 btnPrimary">
                    Back to Home
                </button>
            </Link>
            <Demo {...props} />
        </div>
    );
};

export default CanReturnHome;
