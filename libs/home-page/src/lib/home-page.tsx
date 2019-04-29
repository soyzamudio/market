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

interface HomePageState {
  popularPills?: Array<IPill>;
  howToPills?: Array<IPill>;
  popularBrands?: Array<IPopularBrand>;
  trendingBrands?: Array<ITrendingBrand>;
  popularStyles?: Array<IPopularStyle>;
}

export class HomePage extends Component<any, HomePageState> {
  constructor(props: any)  {
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
      popularBrands: [
        { image: '/assets/images/zara.jpg', title: 'Zara', url: '/m/zara' },
        { image: '/assets/images/hm.jpg', title: 'H&M', url: '/m/hm' },
        { image: '/assets/images/pullbear.jpg', title: 'Pull & Bear', url: '/m/pull-and-bear' },
        { image: '/assets/images/innova.jpg', title: 'Innovasport', url: '/m/innovasport' },
        { image: '/assets/images/hollister.jpg', title: 'Hollister', url: '/m/hollister' },
        { image: '/assets/images/pink.jpg', title: 'Pink', url: '/m/pink' },
      ],
      trendingBrands: [
        { title: 'IVY Park', url: '/m/ivy-park' },
        { title: 'LipSense', url: '/m/lipsense' },
        { title: 'Pura Vida', url: '/m/pura-vida' },
        { title: 'Spell and The Gipsy', url: '/m/spell-and-the-gipsy' },
        { title: 'Crown and Ivy', url: '/m/crown-and-ivy' },
        { title: 'Infinite Rain', url: '/m/infinite-rain' },
        { title: 'Kasper', url: '/m/kasper' },
        { title: 'Bisou Bisou', url: '/m/bisou-bisou' },
        { title: 'Marc Fisher', url: '/m/marc-fisher' },
        { title: 'Ashley Stewart', url: '/m/ahsley-stewart' },
        { title: 'Lucy', url: '/m/lucy' },
        { title: 'Club Monaco', url: '/m/club-monaco' },
        { title: 'Premier Designs', url: '/m/premier-designs' },
        { title: 'VENUS', url: '/m/venus' },
        { title: 'Bauble Bar', url: '/m/bauble-bar' },
      ],
      popularStyles: [
        { title: 'Vestido de Noche', image: '/assets/images/cocktail.jpg', url: '/l/women/dresses' },
        { title: 'Vestido de Playa', image: '/assets/images/beach.jpg', url: '/l/women/dresses' },
        { title: 'Flats', image: '/assets/images/flats.jpg', url: '/l/women/shoes' },
      ]
    }

    this.popularPillClickHandler = this.popularPillClickHandler.bind(this);
    this.howToPillClickHandler = this.howToPillClickHandler.bind(this);
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
