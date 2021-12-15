//contiene la navegación y el contenido
import Navigation from './navbar'
import Head from 'next/head'

const Container = (props)=>{

    return (
        <div>
            <Head>
                <title>Next.JS {props.name}</title>
                <link rel="StyleSheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css" type="text/css"  />
            </Head>
            <Navigation/>
            <div>{props.children}</div>

        </div>
    )
}

export default Container;