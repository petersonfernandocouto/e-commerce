import './index.scss'
import Menu from '../../Componentes/HeaderMenu/HeaderMenu'
import Search from '../../Componentes/Search/Search'
import Card from '../../Componentes/Card/Card'

function Home({ data }) {

    

    return (       

        <div>

            <Menu />

            <Search />

            {/*A linha a baixo estamos criando uma logica arrow funtion. onde precisamos mapear o produtos que está em "data" e que ele retornará o Componente 'Card'. assim podemos pegar todos os elemento que o data possui dentro de Card */}

            <div className='Home__Card'>

                {
                    
                 data.map( (resposta) => (

                        <Card key={resposta.id} data={resposta} />

                ))
                
                }


            </div>


        </div>
        
    )
}

export default Home