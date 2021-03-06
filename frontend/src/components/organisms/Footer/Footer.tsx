import * as React from 'react';
import './Footer.scss';
import bannerER from '../../../assets/banner-er.png';
import bannerOdds from '../../../assets/banner-odds.png';
import { Politics } from '../../molecules/Politics';
import { Social } from '../Social';

export const Footer: React.FC<{}> = () => (
  <div className="Footer">
    <Social/>
    <img src={bannerER} alt="Banner_Entidad_Reconoce"/>
    <img src={bannerOdds} alt="banner_Objetivos_Desarrollo_Sostenibles"/>
    <Politics/>
    <p>Huella Positiva © 2020 Huella Positiva</p>
  </div>
);

Footer.displayName = 'Footer';
