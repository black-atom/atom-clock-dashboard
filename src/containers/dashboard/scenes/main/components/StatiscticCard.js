import React, { Component } from 'react';
import { Card, Statistic, Icon } from 'semantic-ui-react';

export const StatisticCard = (props) => (
  <div>
    <Card>
      <Statistic size='small'>
        <Statistic.Label>
          <Icon
            name={props.iconName}
            size='small'
            color={props.iconColor}/>
          {props.label}   
        </Statistic.Label>
        <Statistic.Value>
          {props.value}
        </Statistic.Value>
      </Statistic>
    </Card>
  </div>
);