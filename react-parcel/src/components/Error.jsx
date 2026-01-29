import { useRouteError } from "react-router-dom"

export let Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h5> you are navigating to different url path which is not specified</h5>
            <h6>
                {err.data}{err.status}{err.statusText}
            </h6>
        </div>
    );
}