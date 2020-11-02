import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { GithubPicker } from 'react-color';


class ToolsPanel extends Component {
  render() {
    // Continents to filter by
    const continents = ['All', 'Africa', 'Asia', 'South America', 'North America', 'Europe', 'Oceania'];
    const options = continents.map(c => (
      <option key={c} value={c}>
        {c}
      </option>
    ));
    const { name, lineWidth, continent, info, onChangelineWidth, onChangeColor, onChangeColorStroke, onChangeContinent, onChangeView } = this.props;
    return <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" >
          {name}     
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Button type="button" onClick={onChangeView}>Change View</Button>
              <Form.Group controlId="formSelect">
                <Form.Label>Continent: </Form.Label>
                <Form.Control as="select" onChange={onChangeContinent} value={continent}>
                  {options}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicRange">
                <Form.Label>Stroke Size</Form.Label>
                <Form.Control type="range" min="0" max="4" value={lineWidth} onChange={onChangelineWidth} />
              </Form.Group>
              <Form.Group controlId="formGithubPicker1">
                <Form.Label>Stroke Color: </Form.Label>
                <GithubPicker onChangeComplete={onChangeColorStroke} />
              </Form.Group>
              <Form.Group controlId="formGithubPicker2">
                <Form.Label>Polygon Color: </Form.Label>
                <GithubPicker onChangeComplete={onChangeColor} />
              </Form.Group>
         
              <Table striped bordered size="sm" >
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td align="right">{info !== null ? info.properties.name : "NO DATA"}</td>
                  </tr>
                  <tr>
                    <td>Population</td>
                    <td align="right">{info !== null ? Intl.NumberFormat().format(info.properties.pop_est) : "NO DATA"}</td>
                  </tr>                  
                </tbody>
              </Table>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  }

}

export default ToolsPanel;