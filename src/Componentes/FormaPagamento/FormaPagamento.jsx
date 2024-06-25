import { Link } from 'react-router-dom'
import './index.scss'


function FormaPagamento( {data} ) {


        const Compra = () => {
          alert(`Produto: ${data.Titulo} 
                 Valor: ${data.Preco}
                 Compra Finalizada com sucesso!.`);
        };

    

    return (

        <div className='InformacoesPagamento'>

            <div className='InformacoesPessoais'>
                    
                    <h2>Nome:</h2>
                    <input className='Informacao' type='text' required placeholder='Nome Completo'></input>


                    <h2>Endereço de entrega:</h2>
                    <input className='Informacao' type='email' required placeholder='Endereço de entrega'></input>


                    <form className='Formulario'>

                            <h2>Forma de Pagamento</h2>


                            <input type="radio" id="Pix" name="Pagamento" value="Pix" />
                            <label htmlFor="Pix">Pix</label>
<br />

                            <input type="radio" id="Boleto" name="Pagamento" value="Boleto" />
                            <label htmlFor="Boleto">Boleto</label>
<br />

                            <input type="radio" id="Crédito" name="Pagamento" value="Crédito" />
                            <label htmlFor="Crédito">Cartão de Crédito</label>

                    </form>

                    <Link to={'/Home'}>
                    
                    <button onClick={Compra}>Enviar Pedido</button>
                    
                    </Link>
            </div>


            <div className='Total'>

                <div className='TotalEstilos'>

                    <h2>Resumo do Pedido</h2>

                        <div className='Valor'>
                            <h3>Produtos (1): </h3>
                            <p>{data.Preco}</p>
                        </div>

                        <hr />

                        <div className='Valor'>
                            <h3>Total: </h3>
                            <p>{data.Preco}</p>
                        </div>


                </div>

            </div>

        </div>
    )
}


export default FormaPagamento