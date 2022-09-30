import React,{Fragment} from 'react'
import "../css/footer.css"

import footer from "../img/footer.png"
import footer_diplomado from "../img/footer diplomado.jpg"


const Footer = () => {
    return ( 
        
        <Fragment>
            
     {/*        <div className='diplomado'>
                <img src={footer_diplomado}/>
            </div> */}
            
            <div className='footer'>
                <img src={footer}/>
            </div>

        </Fragment>

     );
}
 
export default Footer;