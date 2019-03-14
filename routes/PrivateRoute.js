import Redirect from "umi/redirect";

export default (props) => {
    if(Math.random()>0.5){
        return <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }}/>
    }
    return (
        <div>
            {props.children}
        </div>
    )
}