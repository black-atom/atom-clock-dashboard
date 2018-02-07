import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuNavbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item as={Link} to="/dashboard/main" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/dashboard/equipamentos" name='equipamentos' active={activeItem === 'equipamentos'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}