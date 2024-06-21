import { Link } from 'react-router-dom'
import './index.scss'


function Card({data}) {

    console.log(data)
    
    return(

        <div className='Produtos'>

            <div className='Card'>

                <img src={data.ImgCaminho} alt='erro' className='IMGProdutos' />

                <div className='informacao'>
                        <h3>{data.Titulo}</h3>

                        
                        
                         <Link to={`/Pay/${data.id}`} className='botao'>   

                            <button>
                                Comprar Look
                            </button>
                            
                         </Link>
                            
                        

                </div>

            </div>    

        </div>          
    )
}

export default Card