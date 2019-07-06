import React from 'react';
import queryString from 'query-string';
import SideBar from '../components/SideBar';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            <p>{detail && 'detail: blahblah'}</p>
        </div>
    );
};

export default About;