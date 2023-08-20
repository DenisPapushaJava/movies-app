import React, { Component } from 'react';
import { Image, Typography } from 'antd';
import { parseISO, format } from 'date-fns';

import Rating from '../Rating/Rating';

import './MovieCard.css';

const { Title, Paragraph, Text } = Typography;

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  dateConvert = (releaseDate) => {
    try {
      return format(parseISO(releaseDate), 'MMMM dd, yyyy');
    } catch (err) {
      this.state({ isError: true });
      throw new Error(`${err}`);
    }
  };

  render() {
    return (
      <section className="card">
        <div className="cardImg">
          <Image src="https://upload.wikimedia.org/wikipedia/ru/d/d9/The_Covenant_%28film%2C_2023%29.jpg" />
        </div>
        <div className="cardTitleWrap">
          <Title level={2} className="cardTitle" ellipsis={{ onEllipsis: false, expandable: false, rows: 2 }}>
            Card
          </Title>
          <Text type="secondary">{this.dateConvert('2011-02-10')}</Text>
        </div>
        <div className="cardDescription">
          <Paragraph className="descr" ellipsis={{ onEllipsis: false, expandable: false, rows: 5 }}>
            description
          </Paragraph>
        </div>
        <div className="cardRating">
          <Rating />
        </div>
      </section>
    );
  }
}
