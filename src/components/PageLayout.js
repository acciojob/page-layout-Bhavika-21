import React from 'react';

const PageLayout = (props) => {
    return (
        <div>
            {props.header}
            {props.footer}
            {props.footer.children}
        </div>
    );
}

export default PageLayout;
