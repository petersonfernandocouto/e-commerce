import './index.scss'
import Logo from '../../Logo/image.png'
import { BsCart3 } from "react-icons/bs";

function Menu() {

    return (
        <div className='HeaderMenu'>
            
            <img src={Logo} alt='erro' className='LogoHeader' />

            <ul className='Listas'>

                <li>Home</li>

                <li>Novidades</li>

                <li>Feminino</li>

                <li>Masculino</li>

                <li>Atendimento</li>

            </ul>


            <div className='Cart'>

                

                <BsCart3 className='icone' />

            </div>
            



        </div>
    )
}

export default Menu