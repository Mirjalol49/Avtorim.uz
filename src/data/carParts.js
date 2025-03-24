


const carParts = [
  {
    id: 1,
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/8v4sh9kda34o3-UZ/image;s=1000x700',
    name: {
      en: 'Brake Pads',
      ru: 'Тормозные колодки',
      uz: 'Jetaur T2 old kapot'
    },
    price: 1000,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },

  {
    id: 2,
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/strg9ctvrnjp3-UZ/image;s=1000x700',
    name: {
      en: 'X70 plus Bakavina right left celiac',
      ru: 'X70 плюс Бакавина правый левый целий',
      uz: 'X70 plus Bakavina o’ng chap seliy'
    },
    price: 1000,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },
  
  {
    id: 3,
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/qnttqy9nlf2r2-UZ/image;s=1000x700',
    name: {
      en: 'To all Jetour Pen models',
      ru: 'Jetour Ручка для всех моделей',
      uz: 'Jetour Ruchka barcha madelariga'
    },
    price: 50,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },

  {
    id: 4,
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/pw4tw0khlhgp2-UZ/image;s=1000x700',
    name: {
      en: 'JETOUR X70 Restanlin Rolled River',
      ru: 'JETOUR X70 Рестанлин Роликовая река',
      uz: 'JETOUR X70 restanlin Rolavoy reka'
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
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/jt1dhkvn09jt-UZ/image;s=1000x700',
    name: {
      en: 'JETOUR DASHING BUFFER is white',
      ru: 'JETOUR DASHING BUMPHER белый',
      uz: 'JETOUR DASHING BAMFER oq rangda'
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
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/z6yyd237slkg1-UZ/image;s=1000x700',
    name: {
      en: 'Bumfer Dashing Jetour Front Black',
      ru: 'Бамфер Дашинг Джетур перед черным',
      uz: 'Bamfer Dashing Jetour oldi qora'
    },
    price: 300,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'
     
    }
  },

  {
    id: 7,
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/pgw16u2jt9ht3-UZ/image;s=1000x700',
    name: {
      en: 'Jetour oldi amartizator',
      ru: 'Jetour oldi amartizator',
      uz: 'Jetour oldi amartizator'
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
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/z5l86rqwgy1a3-UZ/image;s=1000x700',
    name: {
      en: 'JETOUR X90 plus ARKA ong chap bori',
      ru: 'JETOUR X90 plus ARKA ong chap bori',
      uz: 'JETOUR X90 plus ARKA ong chap bori'
    },
    price: 34,
    brand: {
      en: 'Jetour',
      ru: 'Jetour',
      uz: 'Jetour'

    }
  },


  {
    id: 9,
    image: 'https://frankfurt.apollo.olxcdn.com/v1/files/ixr9a4roql3v1-UZ/image;s=1000x700',
    name: {
      en: 'Jetour x70 restanlin Bakavoy oq',
      ru: 'Jetour x70 restanlin Bakavoy oq',
      uz: 'Jetour x70 restanlin Bakavoy oq'
    },
    price: 250,
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