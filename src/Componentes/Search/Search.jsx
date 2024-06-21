import './index.scss';
import { LiaSearchSolid } from 'react-icons/lia';
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";


function Search() {

  return (

    <div className='InputPesquisa'>

      <LiaSearchSolid className='iconePesquisa' />

      <input 
      type='text' 
      placeholder='O que você está procurando?' 
      className='estiloInput' />


      <div className='userAndHeart'>

        <LuUser2 />

        <FaRegHeart className='Heart' />
       
      </div>


    </div>
  );
}

export default Search;
