import React, { Component } from 'react'
import { Col, Grid, Row, Button } from 'react-bootstrap'

import ChannelList from './ChannelList'

class App extends Component {
  constructor(){
    super() 

    this.state = {
      channels:[
       { name: '#foo' },
       { name: '#flux' },
       { name: '#react' },
                ]
    }
  }



  createChannel = () => {

    const channelName = prompt("What's the channel")

    const channels = this.state.channels

    channels.push({ name: channelName })

    this.setState({ channels })
  }


  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col lg={4}>
              <ChannelList channels={this.state.channels} />

              <Button bsStyle ="success" 
              onClick={this.createChannel}>
              + Create Channel
              </Button>
            </Col>
            <Col lg={8}>
              {this.props.children || 'Join a channel'}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App