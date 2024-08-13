import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contacts from './Contacts';
import Logo from './Logo';
import Search from './Search';
import { Stack } from 'react-bootstrap';
import Cart from './Cart';

export default function Header() {
  return (
    
    <Stack style={{margin:"0px"}}>
      <Contacts></Contacts>
      <Stack style = {{gap:"70px", margin:"0px"}}direction='horizontal' className='align-items-end'>
        <Logo/>
        <Search/>
        <Cart/>        
      </Stack>
    </Stack>
  );
}