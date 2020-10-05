import React from 'react';

import Headline from '../components/Headline';
// import Carousel from '../components/Carousel';

function Portfolio(props) {

    return(
        <div>
            <Headline title={props.title} subTitle={props.subTitle} />
            {/* <Carousel /> */}
        </div>
    );

}

export default Portfolio;