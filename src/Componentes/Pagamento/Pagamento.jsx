import './index.scss'
import { Link } from 'react-router-dom'

function Pagamento( {data} ) {

    
    return (

        

        <div className='Pai'>

            <div className='ProdutoSelecionado'>

                <div className='ProSelect'>

                    <img src={data.IMGCaminhoDetalhe} alt='erro' className='IMGSelecionada' />
                    <h3>{data.Titulo}</h3>

                </div>


                <div className='Descricao'>
                    <h3>Descrição</h3>
                    <h4>{data.Titulo}</h4>
                    <hr />
                    <br />
                </div>


            </div>


            <div className='InformacoesProdutos'>


                <h1>Informações Sobre o Produto</h1>
                
                <hr />

                <div>


                    <h2>{data.Preco}</h2>

                    <h3>Cor: {data.PortCor.join(', ')}</h3> {/*o join verifica os objetos do array e separa eles como uma virgula ", " */}

                    
                    <div className='Cor'>
                        {data.Cores.map((color, index) => (

                            <div className='ColorRoupa'
                                key={index}
                                style={{
                                    background:color,                       
                                }}
                            ></div>

                        ))}

                    </div>

                    <h2>Tamanho:</h2>

                    <div className='tamanhos'>
                        {data.Tamanho.map( (Taman, index) => (

                                <h3 key={index}> {Taman} </h3>

                        ))}
                          
                        

                    </div>    
                </div>


                <Link to={`/Finalizar/${data.id}`}>

                    <button className='Comprar'>Finalizar Compra</button>

                </Link>

            </div>       

        </div>
    )
}

export default Pagamento
