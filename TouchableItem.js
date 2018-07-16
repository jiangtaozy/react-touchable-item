/*
 * Created by jemo on 2018-6-24.
 * Touchable Item
 */

import React, { Component } from 'react'
import { css } from 'glamor'

class TouchableItem extends Component {
  constructor() {
    super()
    this.state = {
      showSpan: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      showSpan: true,
    })
    setTimeout(() => this.setState({
      showSpan: false,
    }), 1800)
  }

  render() {
    const { showSpan } = this.state
    //console.log('this.props: ', this.props)
    let effectAnimation = css.keyframes({
      from: {
        transform: 'scale(1)',
        opacity: 0.4,
      },
      to: {
        transform: 'scale(100)',
        opacity: 0,
      },
    })
    let cssStyle = css({
      animation: `${effectAnimation} 2s`,
    })
    return(
      <div
        onClick={this.handleClick}
        style={{
          height: 100,
          width: 300,
          overflow: 'hidden',
          //backgroundColor: 'gray',
          //display: 'block',
        }}>
        {/*
        { this.props.children }
        */}
        { showSpan ? 
        <span
          {...cssStyle}
          style={{
            display: 'block',
            width: 50,
            height: 50,
            borderRadius: '50%',
            //marginLeft: -25,
            //marginTop: -25,
            //position: 'absolute',
            backgroundColor: '#000',
          }}
        /> : null }
      </div>
    )
  }
}

export default TouchableItem
