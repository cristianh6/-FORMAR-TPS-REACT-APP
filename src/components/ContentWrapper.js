import React from 'react';
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar';

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
				<TopBar/>
				<ContentRowTop/>
			</div>

			<footer/>
		</div>
		
    );
}

export default ContentWrapper;
