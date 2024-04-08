import PopoverConfig from '~/components/Popover';
import SlideBarStaff from './SlideBarStaff';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function HeaderStaff() {
  return (
    <header className="d-flex justify-content-around">
      <SlideBarStaff />
      <h2>Quản lý Nhà sách TL</h2>
      <PopoverConfig nameIcon={faUser} headerPoper={'Tên nhân viên'} listButton={['Đổi mật khẩu', 'Đăng xuất']} />
    </header>
  );
}

export default HeaderStaff;
