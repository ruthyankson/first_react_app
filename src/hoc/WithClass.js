import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

const withClass = (WrappedComponent, class_Name) => {
    return props => ( 
        <div className={class_Name}>
            <WrappedComponent {...props} />
        </div>
    );
}; 
export default withClass;