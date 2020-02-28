
 //   Higher Order Component (HOC) -  A component (HOC) that renders another component
 //   Reuse code
 //   Rend hijacking
 //   Prop manipulation 
 //   Abstract state



import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {info}</p>
</div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isADmin && <p>This is private info. Please dont't share!</p>}
           <WrappedComponent  {...props} />
        </div>
    );
};

// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//         {props.isAuthentication ? (
//             <WrappedComponent {...props}/>
//         ) : (
//             <p>This is private info. Please dont't share!</p>
//         )}
//         </div>
//     );  
// };


const AdminInfo = withAdminWarning(Info);
// const AuthInfo = requireAuthentication(Info);



ReactDOM.render(<AdminInfo isADmin={true} info="There are the details" />, document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAuthentication={false} info="There are the details" />, document.getElementById('app'));
