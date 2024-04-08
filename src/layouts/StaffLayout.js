import { Container } from 'react-bootstrap';
import HeaderStaff from './HeaderStaff';
function StaffLayout({ children }) {
  return (
    <Container>
      <HeaderStaff />
      {children}
    </Container>
  );
}

export default StaffLayout;
