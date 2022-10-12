import React from "react";
import Preloader from "../Components/UI/Loader/Preloader";

const lazyLoadingComponent = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default lazyLoadingComponent