import AboutClass from "./AboutClass";
import AboutContent from "./AboutContent";

export let About = ()=>{
    return(
        <div>
            <p>About page</p>
            <AboutContent/>
            <hr></hr>
            <AboutClass/>
        </div>
    );
}