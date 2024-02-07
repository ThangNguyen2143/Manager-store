import Button from '~/components/Button';

function Documents() {
  return (
    <div className="wrapper">
      <h1>Đây là trang xem các thành phần mẫu sử dụng</h1>
      <div>
        <Button>CLick me</Button>
        <Button className="primary">primary button</Button>
        <Button className="success">success button</Button>
      </div>
    </div>
  );
}

export default Documents;
