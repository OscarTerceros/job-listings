import Image from '../../atoms/Image/Image';
import logo from '../../../assets/images/bg-header-desktop.svg';
import './styles.css';

const Header = () => {
  return (
    <>
      <header className='header'>
        <Image logo = { logo } description = 'Image background' />
      </header>
    </>
  )
}

export default Header