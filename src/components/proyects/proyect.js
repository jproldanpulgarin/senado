import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Slides from './slides';
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
        {/* PESTAÑA 2 */}  
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Info
            </NavLink>
          </NavItem>
        </Nav>


        {/* CONTENIDOS SLIDES */}
        <TabContent activeTab={this.state.activeTab}>
              {/* CONTENIDO INFORMACION */}
              <TabPane tabId="1">
                <Row>
                  <Col sm="6">
                    <Card body>
                        <Slides></Slides>
                    </Card>
                  </Col>
            
                </Row>
              </TabPane>
        </TabContent>
      </div>
    );
  }
}