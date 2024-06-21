import './index.scss'
import Menu from '../../Componentes/HeaderMenu/HeaderMenu'
import Search from '../../Componentes/Search/Search'
import { useParams } from 'react-router-dom'
import Pagamento from '../../Componentes/Pagamento/Pagamento'

function Pay({ data }) {

    const { PayId } = useParams() //o PayId se encontra no main.jsx, ele é como se fosse um parametro

    // a const PayId tem a intenção de pegar o id do produto que nós clicamos.

    //lembrando que data é igual ao nosso arquivo "Mock", declaramos isso em main.jsx

    const selecaoProdutos = data.find( (produto) => produto.id == PayId)

    // o selecaoProdutos está verificando se o (produto) é igual o numero de ID do PayId

    //ou seja, o numero do PayId existe dentro do nosso arquivo "Mock"?, se caso ele exista irá pegar todas as informações e armazenar dentro de "selecaoProdutos"

    

    return (


        <div>

                <Menu />

                <Search />

                <Pagamento data={selecaoProdutos} />



        </div>
    )
}

export default Pay