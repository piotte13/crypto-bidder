import * as React from "react";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
// interface IProps {
// }
// export default class Authenticate extends React.Component {
//   public constructor(props: IProps) {
//     super(props);
//     this.state = {};
//   }
//   public componentDidMount(): void {}
//   public componentWillUnmount(): void {}
//   public render(): JSX.Element {
//     return (
//       <div>
//         Hey
//       </div>
//     );
//   }
// }

const Authenticate = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      <Button>
        Go!
      </Button>
      <Link to="/">
        <Button>
          Back
        </Button>
      </Link>
    </div>
  );
};

export default Authenticate
