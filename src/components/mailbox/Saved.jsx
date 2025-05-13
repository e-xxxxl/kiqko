import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import checkall from '../../assets/images/checkall.png';
import deleteall from '../../assets/images/deleteall.png';

const Saved = () => {
    return (
        <div className="table-all-mailbox">
          <Table responsive="sm">
    <thead>
      <tr>
        <th className="sender-th">Sender</th>
        <th>Message</th>
        <th className="date-th">Date / Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <Form.Group className="check-mail" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Anna" />
     </Form.Group>
        </td>
        <td>You are the one I wanted to find, to tell ...</td>
        <td>Today 04.22 pm</td>
      </tr>
      <tr>
        <td>
        <Form.Group className="check-mail" controlId="nameone">
        <Form.Check type="checkbox" label="Anna" />
     </Form.Group>
        </td>
        <td>You are the one I wanted to find, to tell ...</td>
        <td>Today 04.22 pm</td>
      </tr>
      <tr>
        <td>
        <Form.Group className="check-mail" controlId="nameTwo">
        <Form.Check type="checkbox" label="Anna" />
     </Form.Group>
        </td>
        <td>You are the one I wanted to find, to tell ...</td>
        <td>Today 04.22 pm</td>
      </tr>
      <tr>
        <td>
        <Form.Group className="check-mail" controlId="nameThree">
        <Form.Check type="checkbox" label="Anna" />
     </Form.Group>
        </td>
        <td>You are the one I wanted to find, to tell ...</td>
        <td>Today 04.22 pm</td>
      </tr>
     
    </tbody>
 
  </Table>
  <div className="footer-table">
        <label>Select All<img src={checkall} alt="checkall" /></label>
        <label>Delete<img src={deleteall} alt="deleteall" /></label>
    </div>
        </div>
    );
};

export default Saved;