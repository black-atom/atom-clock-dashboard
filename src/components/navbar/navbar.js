import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuNavbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixex='top' pointing stackable secondary>
        <Menu.Item as={Link} to="/dashboard/main" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

        <Dropdown pointing item text='Equipamentos'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to='/dashboard/equipamentos/novo'>Novo</Dropdown.Item>
            <Dropdown.Item as={Link} to='/dashboard/equipamentos/gerenciar'>Gerenciar</Dropdown.Item>
            <Dropdown.Item as={Link} to='/dashboard/equipamentos/detalhes'>Detalhes</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>

      </Menu>
    )
  }
}