import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import React, {Component} from 'react';
import './main.css'


class DutyTable extends Component {
  state = { status: ['checked', '', ''], 'id': [0, 1, 2],time: '15:30', detail: 'Change chiller setpoint to -13/-14', duration: '', support: '', data: [['15:30', 'Change chiller setpoint to -13/-14', '', ''], ['15:30', 'Chiller setpoint', '4', ''], ['', 'Change', '', 'Dan']] } 
  
  handleClick = event => {
    let x = event.currentTarget.id
    this.handleCheck(x)
    return x
  };


  handleCheck = (x) => {
    console.log(x)
    let new_stat = this.state.status

    if (this.state.status[x] === 'checked')
      {new_stat[x] = ''
      this.setState({status: new_stat})
     
    }
    else {
    new_stat[x] = 'checked'
    this.setState({status: new_stat})
    }
  }


  renderSelected = (dt) => {
    return <> 

      {dt.map(row => <td><p className="text-decoration-line-through"> {row} </p></td>)} 
      </>
  }


  renderRow = (dt) =>  {
    return (<>  {dt.map(row => <td>{row} </td>)}</>)
  }

  renderTable = (i) => {
    if (this.state.status[i] === 'checked') 
      return     <>
      <th id={i} onChange={this.handleClick} scope="row"><Form.Check style={{width:30, height:30}} type="checkbox" class="custom-control-input" id="customCheck1" defaultChecked/></th>
      {this.renderSelected(this.state.data[i])}
  </>
    return   <>
    <th id={i} onChange={this.handleClick} scope="row"> <Form.Check style={{width:30, height:30}} type="checkbox" class="custom-control-input" id="customCheck1" /></th>
    {this.renderRow(this.state.data[i])}
    </>
  }

  render() { 
    
    return (
      <Container>
    <Row>
    <h3 className="text-center">Duty Manager Check List</h3>
    <h4 className="text-center">Nov 03, 2022</h4>
    </Row>
    <Row >
    <Table >
      <thead>
        <tr>
          <th scope="col"> </th>
          <th scope="col">Time</th>
          <th scope="col">Activity</th>
          <th scope="col">Estimated Time</th>
          <th scope="col">Support</th>
        </tr>
      </thead>

      <tbody>
        {this.state.id.map(i => <tr id={i} > {this.renderTable(i)}</tr>)}
      </tbody>
    </Table>


      </Row>

    </Container>);
  }
}
 
export default DutyTable;

