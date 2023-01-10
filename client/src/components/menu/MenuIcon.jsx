import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const MenuIcon = ({ menu, setMenu }) => {
  return (
    <div
      onClick={() => setMenu(!menu)}
      className="relative lg:hidden cursor-pointer z-50"
    >
      <IoMdClose
        className={`
  ${menu ? 'opacity-100' : 'opacity-0'}
 absolute transition-opacity duration-500 text-white text-4xl`}
      />
      <FiMenu
        className={`
  ${menu ? 'opacity-0' : 'opacity-100'}
 transition-opacity duration-500`}
      />
    </div>
  );
};

export default MenuIcon;
