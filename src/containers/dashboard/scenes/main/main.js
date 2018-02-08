import React from 'react';
import { Container, Grid, Segment, Card, Visibility } from 'semantic-ui-react';
import { StatisticCard } from './components/StatiscticCard';
import './main.css'

export const Main = (props) => (

  <div >
    <Container>
      <Grid className='container' divided='vertically'>

        <Grid.Row columns={3} textAlign='center'>

          <Grid.Column>
            <StatisticCard
              iconName='arrow up'
              iconColor='green'
              label='ativos'
              value='2440'
            />
          </Grid.Column>

          <Grid.Column>
            <StatisticCard
              iconName='arrow down'
              iconColor='yellow'
              label='alerta'
              value='100'
            />
          </Grid.Column>

          <Grid.Column>
            <StatisticCard
              iconName='close'
              iconColor='red'
              label='inativo'
              value='50'
            />
          </Grid.Column>
          
        </Grid.Row>

        <Grid.Row columns={2}>

          <Grid.Column width={6}>
            <Card  className='Card'>
              <Segment vertical >

              </Segment>
              <Card.Content className='scrollbar' id="style-1">
                <Visibility onBottomVisible={(event, e) => console.log(e)}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                </Visibility>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={10}>
            <Card  className='card'>

            <Segment vertical >

            </Segment>

              <Segment vertical className='scrollbar' id="style-1">
                <Visibility onBottomVisible={(event, e) => console.log(e)}>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                  <p>Lorem ipsum dolor sit amet, co</p>
                </Visibility>
              </Segment>
          

            </Card>
          </Grid.Column>

        </Grid.Row>

      </Grid>
    </Container>
  </div>
);