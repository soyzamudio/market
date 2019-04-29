import * as React from 'react';
import { Component } from 'react';

import { Hero } from '@posh/hero';
import { SectionHeader } from '@posh/section-header';
import { SectionSubheader } from '@posh/section-subheader';
import { Pill, IPill } from '@posh/pill';
import { PopularBrand, IPopularBrand } from '@posh/popular-brand';
import { TrendingBrand, ITrendingBrand } from '@posh/trending-brand';
import { PopularStyle, IPopularStyle } from '@posh/popular-style';


import './home-page.scss';
import apiService from './api-service';

interface HomePageState {
  popularPills?: Array<IPill>;
  howToPills?: Array<IPill>;
  popularBrands?: Array<IPopularBrand>;
  trendingBrands?: Array<ITrendingBrand>;
  popularStyles?: Array<IPopularStyle>;
}

interface HomePageProps {}

export class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps)  {
    super(props);

    this.state = {
      popularPills: [
        { title: 'Todo', active: true },
        { title: 'Mujeres', active: false },
        { title: 'Hombres', active: false },
      ],
      howToPills: [
        { title: 'Vendo', active: true },
        { title: 'Compro', active: false },
      ],
      popularBrands: [],
      trendingBrands: [],
      popularStyles: [],
    }

    this.popularPillClickHandler = this.popularPillClickHandler.bind(this);
    this.howToPillClickHandler = this.howToPillClickHandler.bind(this);
  }

  componentDidMount() {
    this.getPopularData();
  }

  async getPopularData() {
    try {
      const [ popularBrands, popularStyles, trendingBrands ] = await Promise.all([
        apiService.getPopularBrands(), 
        apiService.getPopularStyles(),
        apiService.getTrendingBrands(),
      ]);
      console.log({popularBrands, trendingBrands});
      this.setState({popularBrands, trendingBrands, popularStyles});
    } catch(e) {
      console.error(e.message);
    }
  }

  popularPillClickHandler(clickedPill: IPill) {
    const popularPills = this.state.popularPills.map(pill => {
      pill.active = pill.title === clickedPill.title;
      return pill;
    })

    this.setState({popularPills});
  }

  howToPillClickHandler(clickedPill: IPill) {
    const howToPills = this.state.howToPills.map(pill => {
      pill.active = pill.title === clickedPill.title;
      return pill;
    })

    this.setState({ howToPills });
  }

  render() {
    return (
      <div className="home-page">
        <Hero />
        <div className="home-page__content">
          <SectionHeader title="Las marcas de moda" />
          {/* <div className="home-page__pills">
            {this.state.popularPills.map((pill,index) => {
              return (
                <span key={index} onClick={this.popularPillClickHandler.bind(this, pill)}>
                  <Pill title={pill.title} active={pill.active}/>
                </span>
              );
            })}
          </div> */}
          <SectionSubheader title="Las mas vendidas esta semana" />
          <div className="home-page__popular-brands">
            {this.state.popularBrands.map((brand, index) => {
              return <PopularBrand key={index} brand={brand} />
            })}
          </div>
          <SectionSubheader title="Tendencias de esta semana" />
          <div className="home-page__trending-brands">
            {this.state.trendingBrands.map((brand, index) => {
              return <TrendingBrand key={index} brand={brand} ranking={index + 1} />
            })}
          </div>
          <SectionSubheader title="Estilos populares" />
          <div className="home-page__popular-styles">
            {this.state.popularStyles.map((style, index) => {
              return <PopularStyle key={index} style={style} />
            })}
          </div>
          {/* <SectionHeader title="¿Como funciona?" /> */}
          {/* <div className="home-page__pills">
            {this.state.howToPills.map((pill,index) => {
              return (
                <span key={index} onClick={this.howToPillClickHandler.bind(this, pill)}>
                  <Pill title={pill.title} active={pill.active}/>
                </span>
              );
            })}
          </div> */}
        </div>
      </div>
    );
  }
}
