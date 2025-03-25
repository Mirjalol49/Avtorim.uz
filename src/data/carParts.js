import product1 from '../assets/Images/product1.jpg'
import product2 from '../assets/Images/product2.jpg'
import product3 from '../assets/Images/product3.jpg'
import product4 from '../assets/Images/product4.jpg'
import product5 from '../assets/Images/product5.jpg'
import product6 from '../assets/Images/product6.jpg'
import product7 from '../assets/Images/product7.jpg'
import product8 from '../assets/Images/product8.jpg'
import product9 from '../assets/Images/product9.jpg'
import product10 from '../assets/Images/product10.jpg'
import product11 from '../assets/Images/product11.jpg'
import product12 from '../assets/Images/product12.jpg'

const carParts = [
  {
    id: 1, 
    image: product1,
    name: {
      en: 'Jetour T2 steering wheel',
      ru: 'Jetour T2 рул',
      uz: 'Jetaur T2 rul'
    },
    price: 89,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },

  {
    id: 2,
    image: product2,
    name: {
      en: 'Jetour exterior door handle',
      ru: 'Jetour наружная дверная ручка',
      uz: 'Jetour eshik tutqich'
    },
    price: 45,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },
  
  {
    id: 3,
    image: product3,
    name: {
      en: 'Jetour front bumper with a grille ',
      ru: 'Jetour аблисофка',
      uz: 'Jetour ablisofka'
    },
    price: 170,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },

  {
    id: 4,
    image: product4,
    name: {
      en: 'Jetour front bumper with a grille ',
      ru: 'Jetour аблисофка',
      uz: 'Jetour ablisofka'
    },
    price: 300,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },


  {
    id: 5,
    image: product5,
    name: {
      en: 'Jetour back light',
      ru: 'Jetour задняя фара',
      uz: 'Jetour orqa fara'
    },
    price: 300,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },
  
  {
    id: 6,
    image: product6,
    name: {
      en: 'Lixiang front light',
      ru: 'Lixiang передняя фара',
      uz: 'Lixiang oldi fara'
    },
    price: 100,
    brand: {
      en: 'Li',
      ru: 'Li',
      uz: 'Li'
     
    }
  },

  {
    id: 7,
    image: product7,
    name: {
      en: 'Jetour back bumper',
      ru: 'Jetour задний бампер',
      uz: 'Jetour orqa bamfer'
    },
    price: 110,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },

  {
    id: 8,
    image: product8,
    name: {
      en: 'BYD Shock Absorber',
      ru: 'BYD Амортизатор',
      uz: 'BYD amartizator'
    },
    price: 200,
    brand: {
      en: 'BYD',
      ru: 'BYD',
      uz: 'BYD'

    }
  },


  {
    id: 9,
    image: product9,
    name: {
      en: 'Jetour Dashing Front Bumper',
      ru: 'Jetour Dashing Передний бампер',
      uz: 'Jetour Dashing oldi banferi'
    },
    price: 300,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'

    }
  },

  {
    id: 10,
    image: product10,
    name: {
      en: 'Jetour Dashing Front Bumper',
      ru: 'Jetour Dashing Передний бампер',
      uz: 'Jetour Dashing oldi banferi'
    },
    price: 250,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'

    }
  },

  {
    id: 11,
    image: product11,
    name: {
      en: 'Fengon 508S Side Mirror ',
      ru: 'Fengon 508S Боковое зеркало',
      uz: `Fengon 508S yon ko'zgu`
    },
    price: 350,
    brand: {
      en: 'Fengon',
      ru: 'Fengon',
      uz: 'Fengon'

    }
  },

  {
    id: 12,
    image: product12,
    name: {
      en: 'Jetour Fuel Pump',
      ru: 'Jetour Топливный насос',
      uz: 'Jetour Benzin nasos'
    },
    price: 100,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'

    }
  },

];

// Export brand options for filtering
export const brandOptions = {
  jetour: {
    en: 'Jetour',
    ru: 'Jetour',
    uz: 'Jetour'
  },
  byd: {
    en: 'BYD',
    ru: 'BYD',
    uz: 'BYD'
  },
  zeekr: {
    en: 'Zeekr',
    ru: 'Zeekr',
    uz: 'Zeekr'
  },
  li: {
    en: 'Li',
    ru: 'Li',
    uz: 'Li'
  },
  chevrolet: {
    en: 'Chevrolet',
    ru: 'Chevrolet',
    uz: 'Chevrolet'
  }
};

export default carParts; 