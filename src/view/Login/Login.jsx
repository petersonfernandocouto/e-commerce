import './Login.scss'
import Header from '../../Componentes/Header/Header.jsx'
import { Link } from 'react-router-dom'

function Login() {
  

  return (
    <div>
      
      <Header />


      <form className='conteudoLogin'>  

          <h1>Acesse com seu login ou cadastre-se!</h1>

          <h2> Você pode entrar com seu CPF:</h2>


        <div className='LoginPessoal'>

            <label htmlFor='nomeInput'>Digite seu nome:</label>

                <input 
                type='text'  
                name='nomeInput'
                id='nomeInput'
                placeholder='Nome Completo...'
                />
<br />
            <label htmlFor="password">Senha:</label>
  
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder='*******'/>


        </div> 


        <Link to={'/Home'} className='botao'>         
          
          Entrar 

        </Link>
        
        
      </form>

    </div>
  )
}

export default Login