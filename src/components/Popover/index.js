import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

function PopoverConfig({ nameIcon, headerPoper, listButton }) {
  return (
    <OverlayTrigger
      trigger="click"
      placement={'bottom'}
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Header as="h3">{headerPoper}</Popover.Header>
          <Popover.Body className="d-flex flex-column">
            {listButton.map((name) => {
              return (
                <Button variant="outline-secondary" key={name} className="my-2">
                  {name}
                </Button>
              );
            })}
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="primary">
        <FontAwesomeIcon icon={nameIcon} />
      </Button>
    </OverlayTrigger>
  );
}

export default PopoverConfig;
