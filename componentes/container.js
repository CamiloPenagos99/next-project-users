//contiene la navegación y el contenido
import Navigation from './navbar'

const Container = (props)=>{

    return (
        <div>
            <Navigation/>
            <div>{props.children}</div>

        </div>
    )
}

export default Container;