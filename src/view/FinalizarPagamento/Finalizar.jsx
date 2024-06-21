import './index.scss'
import Header from "../../Componentes/Header/Header"
import FormaPagamento from '../../Componentes/FormaPagamento/FormaPagamento'
import { useParams } from 'react-router-dom'


function Finalizar( {data} ) {

    const { FinalizarId } = useParams()

    const selecaoProdutos = data.find( (produto) => produto.id == FinalizarId)

    
    
    return(

        <div>

            <Header />


            <FormaPagamento data={selecaoProdutos} />



        </div>
    )
}


export default Finalizar