import { Attribute, Beast, Element, Food, Type, Zone } from './interfaces';

export const zones: Zone[] = [
  { id: 1, name: [{ language: 'fr', name: 'Forêt tropicale de Sabada (C1)' }, { language: 'en', name: 'Sabada Rainforest (C1)' }]},
  { id: 2, name: [{ language: 'fr', name: 'Gorge de Chiwawa (C1)' }, { language: 'en', name: 'Chiwawa Gorge (C1)' }]},
  { id: 3, name: [{ language: 'fr', name: 'Désert de Bata (C1)' }, { language: 'en', name: 'Bata Desert (C1)' }]},
  { id: 4, name: [{ language: 'fr', name: 'Côte de Bababo (C1)' }, { language: 'en', name: 'Bababo Coast (C1)' }]},
  { id: 5, name: [{ language: 'fr', name: 'Volcan Jujule (C1)' }, { language: 'en', name: 'Jujule Volcano (C1)' }]},
  { id: 6, name: [{ language: 'fr', name: 'Forêt tropicale de Sinbad (C1)' }, { language: 'en', name: 'Sinbad Rainforest (C1)' }]},
  { id: 7, name: [{ language: 'fr', name: 'Plaines de Toto (C1)' }, { language: 'en', name: 'Toto Plain (C1)' }]},
  { id: 8, name: [{ language: 'fr', name: 'Côte de Cobo (C1)' }, { language: 'en', name: 'Cobo Coast (C1)' }]},
  { id: 9, name: [{ language: 'fr', name: 'Fjord de Hori (C2)' }, { language: 'en', name: 'Horu Fjord (C2)' }]},
  { id: 10, name: [{ language: 'fr', name: 'Grotte de glace de Tintin (C2)' }, { language: 'en', name: 'Tintin Ice Cave (C2)' }]},
  { id: 11, name: [{ language: 'fr', name: 'Terres enneigées de Tovana (C2)' }, { language: 'en', name: 'Tovana Snowland (C2)' }]},
  { id: 12, name: [{ language: 'fr', name: 'Glacier de Puck (C2)' }, { language: 'en', name: 'Puke Glacier (C2)' }]},
  { id: 13, name: [{ language: 'fr', name: 'Bois de Warry (C2)' }, { language: 'en', name: 'Warry Woodland (C2)' }]},
  { id: 14, name: [{ language: 'fr', name: 'Montagne enneigée de Dodori (C2)' }, { language: 'en', name: 'Dodori Snow Mountain (C2)' }]},
  { id: 15, name: [{ language: 'fr', name: 'Bois de Sinvasa (C2)' }, { language: 'en', name: 'Sinvasa Woodland (C2)' }]},
  { id: 16, name: [{ language: 'fr', name: 'Fjord de Horu (C2)' }, { language: 'en', name: 'Hori Fjord (C2)' }]},
  { id: 17, name: [{ language: 'fr', name: 'Glacier de Pucketa (C2)' }, { language: 'en', name: '' }]},
  { id: 18, name: [{ language: 'fr', name: 'Côte de Totori (C3)' }, { language: 'en', name: 'Totori Coast (C3)' }]},
  { id: 19, name: [{ language: 'fr', name: 'Déser de Girka (C3)' }, { language: 'en', name: 'Girka Desert (C3)' }]},
  { id: 20, name: [{ language: 'fr', name: 'Oasis de Paro (C3)' }, { language: 'en', name: 'Paro Oasis (C3)' }]},
  { id: 21, name: [{ language: 'fr', name: 'Lac salé de Karusa (C3)' }, { language: 'en', name: 'Karusa Salt Lake (C3)' }]},
  { id: 22, name: [{ language: 'fr', name: 'Mille-aiguilles (C3)' }, { language: 'en', name: 'Thousand Needles (C3)' }]},
  { id: 23, name: [{ language: 'fr', name: 'Montagne de Gros-caillou (C3)' }, { language: 'en', name: 'Giant Rock Mountain (C3)' }]},
  { id: 24, name: [{ language: 'fr', name: 'Désert de Cora (C3)' }, { language: 'en', name: 'Cora Gobi (C3)' }]},
  { id: 25, name: [{ language: 'fr', name: 'Oasis de Papeto (C3)' }, { language: 'en', name: 'Papeto Oasis (C3)' }]},
  { id: 26, name: [{ language: 'fr', name: 'Lac salé des Gyséens (C3)' }, { language: 'en', name: 'Gysean Salt Lake (C3)' }]},
  { id: 27, name: [{ language: 'fr', name: 'Côte des Chutes géantes (C4)' }, { language: 'en', name: '' }]},
  { id: 28, name: [{ language: 'fr', name: 'Mer de Rabo (C4)' }, { language: 'en', name: '' }]},
  { id: 29, name: [{ language: 'fr', name: 'Anciennes ruines (C4)' }, { language: 'en', name: '' }]},
  { id: 30, name: [{ language: 'fr', name: 'Piedmont d\'Arc (C4)' }, { language: 'en', name: '' }]},
  { id: 31, name: [{ language: 'fr', name: 'Côte nord-est (C4)' }, { language: 'en', name: '' }]},
  { id: 32, name: [{ language: 'fr', name: 'Anciennes ruines de l\'orient (C4)' }, { language: 'en', name: '' }]},
  { id: 33, name: [{ language: 'fr', name: 'Forêt du temple (C4)' }, { language: 'en', name: '' }]},
  { id: 34, name: [{ language: 'fr', name: 'Forêt du Pic géant (C4)' }, { language: 'en', name: '' }]},
  { id: 35, name: [{ language: 'fr', name: 'Sommet des tempêtes (C4)' }, { language: 'en', name: '' }]},
];

export const elements: Element[] = [
  { id: 1, color: 'type-fire', name: [{ language: 'fr', name: 'Feu' }, { language: 'en', name: 'Fire' }]},
  { id: 2, color: 'type-lightning', name: [{ language: 'fr', name: 'Foudre' }, { language: 'en', name: 'Lightning' }]},
  { id: 3, color: 'type-earth', name: [{ language: 'fr', name: 'Terre' }, { language: 'en', name: 'Earth' }]},
  { id: 4, color: 'type-frost', name: [{ language: 'fr', name: 'Givre' }, { language: 'en', name: 'Frost' }]}
];

export const types: Type[] = [];

export const attributes: Attribute[] = [];

export const foods: Food[] = [
  { id: 1, zoneId: 1, name: [
    { language: 'fr', name: 'Brochette' },
    { language: 'en', name: 'Kabobs' }
  ]},
  { id: 2, zoneId: 1, name: [
    { language: 'fr', name: 'Brochette végétarienne' },
    { language: 'en', name: 'Vegetable Skewer' }
  ]},
  { id: 3, zoneId: 1, name: [
    { language: 'fr', name: 'Jus de fruit' },
    { language: 'en', name: 'Fruit Juice' }
  ]},
  { id: 4, zoneId: 1, name: [
    { language: 'fr', name: 'Mélasse' },
    { language: 'en', name: 'Molasses' }
  ]},
  { id: 5, zoneId: 1, name: [
    { language: 'fr', name: 'Généreux plateau grillé' },
    { language: 'en', name: 'Barbecue Platter' }
  ]},
  { id: 6, zoneId: 1, name: [
    { language: 'fr', name: 'Ragoût de viande simple' },
    { language: 'en', name: 'Stew' }
  ]},
  { id: 7, zoneId: 2, name: [
    { language: 'fr', name: 'Ragoût de viande aux legumes sauvages' },
    { language: 'en', name: 'Beef and Vegetables Soup' }
  ]},
  { id: 8, zoneId: 2, name: [
    { language: 'fr', name: 'Cuisse de bête en pot' },
    { language: 'en', name: 'Premium Beast Thigh' }
  ]},
  { id: 9, zoneId: 3, name: [
    { language: 'fr', name: 'Porc aigre-doux' },
    { language: 'en', name: 'Sweet and Sour Pork' }
  ]},
  { id: 10, zoneId: 3, name: [
    { language: 'fr', name: 'Légumes frits au chili' },
    { language: 'en', name: 'Spicy Stir-fry' }
  ]},
  { id: 11, zoneId: 4, name: [
    { language: 'fr', name: 'Brochette de fruits de mer' },
    { language: 'en', name: 'Seafood Skewer' }
  ]},
  { id: 12, zoneId: 4, name: [
    { language: 'fr', name: 'Plateau de sashimi' },
    { language: 'en', name: 'Sashimi Platter' }
  ]},
  { id: 13, zoneId: 5, name: [
    { language: 'fr', name: 'Ragoût de radis' },
    { language: 'en', name: 'Radish Stew' }
  ]},
  { id: 14, zoneId: 5, name: [
    { language: 'fr', name: 'Fromage grillé au miel' },
    { language: 'en', name: 'Grilled Sweet Cheese' }
  ]},
  { id: 15, zoneId: 6, name: [
    { language: 'fr', name: 'Brochette de champignons' },
    { language: 'en', name: 'Mushroom Kabobs' }
  ]},
  { id: 16, zoneId: 6, name: [
    { language: 'fr', name: 'Banquet de chef inégalé' },
    { language: 'en', name: 'Matchless Chieftain Feast' }
  ]},
  { id: 17, zoneId: 7, name: [
    { language: 'fr', name: 'Sauce au citron et au miel' },
    { language: 'en', name: 'Honey-lemon Juice' }
  ]},
  { id: 18, zoneId: 8, name: [
    { language: 'fr', name: 'Oeuf au plat' },
    { language: 'en', name: 'Fried Egg' }
  ]},
  { id: 19, zoneId: 8, name: [
    { language: 'fr', name: 'Poisson cuit dans des feuilles de lotus' },
    { language: 'en', name: 'Lotus Leaf Wrapped Fish' }
  ]},
  { id: 20, zoneId: 9, name: [
    { language: 'fr', name: 'Milkshake mystique' },
    { language: 'en', name: 'Mystic Shake' }
  ]},
  { id: 21, zoneId: 10, name: [
    { language: 'fr', name: 'Pot-au-feu' },
    { language: 'en', name: 'Giant Meat Platter' }
  ]},
  { id: 22, zoneId: 11, name: [
    { language: 'fr', name: 'Sashimi de marlin' },
    { language: 'en', name: 'Marlin Sashimi' }
  ]},
  { id: 23, zoneId: 12, name: [
    { language: 'fr', name: 'Côtes de porc au barbecue' },
    { language: 'en', name: 'Grilled Ribs' }
  ]},
  { id: 24, zoneId: 12, name: [
    { language: 'fr', name: 'Soupe de coquilles Saint-Jacques aux légumes sauvages' },
    { language: 'en', name: 'Scallop and Veggie Soup' }
  ]},
  { id: 25, zoneId: 13, name: [
    { language: 'fr', name: 'Assiette de viandes grillées' },
    { language: 'en', name: 'Sizzle Sizzle Grill' }
  ]},
  { id: 26, zoneId: 14, name: [
    { language: 'fr', name: 'Curry de viande de chef' },
    { language: 'en', name: 'Beef Curry' }
  ]},
  { id: 27, zoneId: 15, name: [
    { language: 'fr', name: 'Doux comme du miel' },
    { language: 'en', name: 'Honey-fruit Juice' }
  ]},
  { id: 28, zoneId: 15, name: [
    { language: 'fr', name: 'Gala de crevettes' },
    { language: 'en', name: 'Prawn Feast' }
  ]},
  { id: 29, zoneId: 16, name: [
    { language: 'fr', name: 'Sashimi du guerrier' },
    { language: 'en', name: 'Blowfish Sashimi' }
  ]},
  { id: 30, zoneId: 16, name: [
    { language: 'fr', name: 'Déclinaison de fruits' },
    { language: 'en', name: 'Fruit Platter' }
  ]},
  { id: 31, zoneId: 17, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Baked Crab' }
  ]},
  { id: 32, zoneId: 17, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Takoyaki' }
  ]},
  { id: 33, zoneId: 18, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Lotus Leaf Wrapped Meat' }
  ]},
  { id: 34, zoneId: 19, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Spicy Pork and Prawn Soup' }
  ]},
  { id: 35, zoneId: 19, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Vegetable Platter' }
  ]},
  { id: 36, zoneId: 20, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Seafood Stew' }
  ]},
  { id: 37, zoneId: 21, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Baked Ribs with Truffle' }
  ]},
  { id: 38, zoneId: 21, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Fruit and Vegetable Platter' }
  ]},
  { id: 39, zoneId: 22, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Roasted Shank' }
  ]},
  { id: 40, zoneId: 23, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Curry Crab' }
  ]},
  { id: 41, zoneId: 24, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Lobster Sashimi' }
  ]},
  { id: 42, zoneId: 25, name: [
    { language: 'fr', name: '' },
    { language: 'en', name: 'Disgusting Feast' }
  ]},
];

export const beasts: Beast[] = [
  {
    number: 1,
    name: [{ language: 'fr', name: 'Mobelin' }, { language: 'en', name: 'Moblin' }],
    picture: 'image_1.png',
    elements: [{ elementId: 1, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 1,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 2,
    name: [{ language: 'fr', name: 'Mobelin bleu' }, { language: 'en', name: 'Blue Moblin' }],
    picture: 'image_2.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 6,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 3,
    name: [{ language: 'fr', name: 'Marmotte' }, { language: 'en', name: 'Marmot' }],
    picture: 'image_3.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 1,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 4,
    name: [{ language: 'fr', name: 'Marmotte de tonnerre' }, { language: 'en', name: 'Thunder Marmot' }],
    picture: 'image_4.png',
    elements: [{ elementId: 2, value: 6 }, { elementId: 1, value: 4 }],
    foodId: 7,
    zoneId: 2,
    typeId: null,
    attributeId: null
  },
  {
    number: 5,
    name: [{ language: 'fr', name: 'Marmotte de feu' }, { language: 'en', name: 'Fire Marmot' }],
    picture: 'image_5.png',
    elements: [{ elementId: 1, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 2,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 6,
    name: [{ language: 'fr', name: 'Marmotte enneigée' }, { language: 'en', name: 'Snowfield Marmot' }],
    picture: 'image_6.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 2,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 7,
    name: [{ language: 'fr', name: 'Smilodon' }, { language: 'en', name: 'Sabre Tiger' }],
    picture: 'image_7.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 5,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 8,
    name: [{ language: 'fr', name: 'Grenouille a ventre rond' }, { language: 'en', name: 'Potbelly Frog' }],
    picture: 'image_8.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 4, value: 4 }],
    foodId: 12,
    zoneId: 4,
    typeId: null,
    attributeId: null
  },
  {
    number: 9,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_9.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 10,
    name: [{ language: 'fr', name: 'Gorille-licorne' }, { language: 'en', name: 'Unicorn Gorilla' }],
    picture: 'image_10.png',
    elements: [{ elementId: 3, value: 5 }, { elementId: 2, value: 5 }],
    foodId: 3,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 11,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_11.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 12,
    name: [{ language: 'fr', name: 'Lainergie' }, { language: 'en', name: 'Sheep' }],
    picture: 'image_12.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 2,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 13,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Curled Horn Sheep' }],
    picture: 'image_13.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 27,
    zoneId: 15,
    typeId: null,
    attributeId: null
  },
  {
    number: 14,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_14.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 15,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_15.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 16,
    name: [{ language: 'fr', name: 'Ornithorynque' }, { language: 'en', name: 'Platypus' }],
    picture: 'image_16.png',
    elements: [{ elementId: 4, value: 5 }, { elementId: 3, value: 5 }],
    foodId: 3,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 17,
    name: [{ language: 'fr', name: 'Raptor' }, { language: 'en', name: 'Rapator' }],
    picture: 'image_17.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 18,
    zoneId: 8,
    typeId: null,
    attributeId: null
  },
  {
    number: 18,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Dandelion' }],
    picture: 'image_18.png',
    elements: [{ elementId: 3, value: 5 }, { elementId: 2, value: 5 }],
    foodId: 38,
    zoneId: 21,
    typeId: null,
    attributeId: null
  },
  {
    number: 19,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_19.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 20,
    name: [{ language: 'fr', name: 'Ratel' }, { language: 'en', name: 'Honey Badger' }],
    picture: 'image_20.png',
    elements: [{ elementId: 3, value: 5 }, { elementId: 2, value: 5 }],
    foodId: 4,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 21,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_21.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 22,
    name: [{ language: 'fr', name: 'Ptérosaure agile' }, { language: 'en', name: 'Swift Pterosauria' }],
    picture: 'image_22.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 1,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 23,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_23.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 24,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Pangolin' }],
    picture: 'image_24.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 37,
    zoneId: 21,
    typeId: null,
    attributeId: null
  },
  {
    number: 25,
    name: [{ language: 'fr', name: 'Mobelin noir' }, { language: 'en', name: 'Black Moblin' }],
    picture: 'image_25.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 7,
    zoneId: 2,
    typeId: null,
    attributeId: null
  },
  {
    number: 26,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_26.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 27,
    name: [{ language: 'fr', name: 'Dragon acaudal' }, { language: 'en', name: 'Tailless Dragon' }],
    picture: 'image_27.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 7,
    zoneId: 2,
    typeId: null,
    attributeId: null
  },
  {
    number: 28,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_28.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 29,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_29.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 30,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_30.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 31,
    name: [{ language: 'fr', name: 'Brontosaure' }, { language: 'en', name: 'Thunder Dragon' }],
    picture: 'image_31.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 9,
    zoneId: 3,
    typeId: null,
    attributeId: null
  },
  {
    number: 32,
    name: [{ language: 'fr', name: 'Tricératops de tonnerre' }, { language: 'en', name: 'Thunder Ceratops' }],
    picture: 'image_32.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 1, value: 3 }],
    foodId: 3,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 33,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_33.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 34,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Rock Corythosaurus' }],
    picture: 'image_34.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 38,
    zoneId: 21,
    typeId: null,
    attributeId: null
  },
  {
    number: 35,
    name: [{ language: 'fr', name: 'Chameau' }, { language: 'en', name: 'Camel' }],
    picture: 'image_35.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 10,
    zoneId: 3,
    typeId: null,
    attributeId: null
  },
  {
    number: 36,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_36.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 37,
    name: [{ language: 'fr', name: 'Morse' }, { language: 'en', name: 'Walrus' }],
    picture: 'image_37.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 12,
    zoneId: 4,
    typeId: null,
    attributeId: null
  },
  {
    number: 38,
    name: [{ language: 'fr', name: 'Poisson-globe' }, { language: 'en', name: 'Pufferfish' }],
    picture: 'image_38.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 4, value: 3 }],
    foodId: 12,
    zoneId: 4,
    typeId: null,
    attributeId: null
  },
  {
    number: 39,
    name: [{ language: 'fr', name: 'Tortue' }, { language: 'en', name: 'Turtle' }],
    picture: 'image_39.png',
    elements: [{ elementId: 4, value: 5 }, { elementId: 3, value: 5 }],
    foodId: 11,
    zoneId: 4,
    typeId: null,
    attributeId: null
  },
  {
    number: 40,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_40.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 41,
    name: [{ language: 'fr', name: 'Rapasdepic poilu' }, { language: 'en', name: 'Hairy Cattle Egret' }],
    picture: 'image_41.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 11,
    zoneId: 4,
    typeId: null,
    attributeId: null
  },
  {
    number: 42,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Alcidae' }],
    picture: 'image_42.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 29,
    zoneId: 16,
    typeId: null,
    attributeId: null
  },
  {
    number: 43,
    name: [{ language: 'fr', name: 'Tigre blanc' }, { language: 'en', name: 'Grey Tiger' }],
    picture: 'image_43.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 9,
    zoneId: 3,
    typeId: null,
    attributeId: null
  },
  {
    number: 44,
    name: [{ language: 'fr', name: 'Grenouille ronde de flammes' }, { language: 'en', name: 'Flame Potbelly Frog' }],
    picture: 'image_44.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 4, value: 3 }],
    foodId: 11,
    zoneId: 4,
    typeId: null,
    attributeId: null
  },
  {
    number: 45,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_45.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 46,
    name: [{ language: 'fr', name: 'Ankylosaure osseux' }, { language: 'en', name: 'Bone Ankylosaur' }],
    picture: 'image_46.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 13,
    zoneId: 5,
    typeId: null,
    attributeId: null
  },
  {
    number: 47,
    name: [{ language: 'fr', name: 'Bête de lave en chef' }, { language: 'en', name: 'Lava Beast Chieftain' }],
    picture: 'image_47.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 6,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 48,
    name: [{ language: 'fr', name: 'Écureuil volant' }, { language: 'en', name: 'Flying Squirrel' }],
    picture: 'image_48.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 14,
    zoneId: 5,
    typeId: null,
    attributeId: null
  },
  {
    number: 49,
    name: [{ language: 'fr', name: 'Marmotte céleste' }, { language: 'en', name: 'Sky Marmot' }],
    picture: 'image_49.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 4, value: 3 }],
    foodId: 15,
    zoneId: 6,
    typeId: null,
    attributeId: null
  },
  {
    number: 50,
    name: [{ language: 'fr', name: 'Marmotte coup-de-foudre' }, { language: 'en', name: 'Thunderbolt Marmot' }],
    picture: 'image_50.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 10,
    zoneId: 3,
    typeId: null,
    attributeId: null
  },
  {
    number: 51,
    name: [{ language: 'fr', name: 'Marmotte volante de feu' }, { language: 'en', name: 'Flying Fire Marmot' }],
    picture: 'image_51.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 15,
    zoneId: 6,
    typeId: null,
    attributeId: null
  },
  {
    number: 52,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Flying Frost Marmot' }],
    picture: 'image_52.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 15,
    zoneId: 6,
    typeId: null,
    attributeId: null
  },
  {
    number: 53,
    name: [{ language: 'fr', name: 'T.Rex' }, { language: 'en', name: 'T. Rex' }],
    picture: 'image_53.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 5,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 54,
    name: [{ language: 'fr', name: 'Smilodon alpha' }, { language: 'en', name: 'Sabre Tiger King' }],
    picture: 'image_54.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 16,
    zoneId: 6,
    typeId: null,
    attributeId: null
  },
  {
    number: 55,
    name: [{ language: 'fr', name: 'Gorille-licorne en chef' }, { language: 'en', name: 'White Unicorn Gorilla Chief' }],
    picture: 'image_55.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 17,
    zoneId: 7,
    typeId: null,
    attributeId: null
  },
  {
    number: 56,
    name: [{ language: 'fr', name: 'Yak blanc' }, { language: 'en', name: 'White Yak' }],
    picture: 'image_56.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 13,
    zoneId: 5,
    typeId: null,
    attributeId: null
  },
  {
    number: 57,
    name: [{ language: 'fr', name: 'Ours brun et roux' }, { language: 'en', name: 'Red Brown Bear' }],
    picture: 'image_57.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 4, value: 3 }],
    foodId: 17,
    zoneId: 7,
    typeId: null,
    attributeId: null
  },
  {
    number: 58,
    name: [{ language: 'fr', name: 'Stégosaure' }, { language: 'en', name: 'Stegosaurus' }],
    picture: 'image_58.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 18,
    zoneId: 8,
    typeId: null,
    attributeId: null
  },
  {
    number: 59,
    name: [{ language: 'fr', name: 'Raptor blanc' }, { language: 'en', name: 'White Rapator' }],
    picture: 'image_59.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 1, value: 3 }],
    foodId: 5,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 60,
    name: [{ language: 'fr', name: 'Ptérosaure alpha' }, { language: 'en', name: 'Pterosaur King' }],
    picture: 'image_60.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 18,
    zoneId: 8,
    typeId: null,
    attributeId: null
  },
  {
    number: 61,
    name: [{ language: 'fr', name: 'Tortue géante' }, { language: 'en', name: 'Giant Shell Turtle' }],
    picture: 'image_61.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 19,
    zoneId: 8,
    typeId: null,
    attributeId: null
  },
  {
    number: 62,
    name: [{ language: 'fr', name: 'Ankylosaure de feu' }, { language: 'en', name: 'Fire Ankylosaur' }],
    picture: 'image_62.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 20,
    zoneId: 9,
    typeId: null,
    attributeId: null
  },
  {
    number: 63,
    name: [{ language: 'fr', name: 'Kingura' }, { language: 'en', name: 'Kinguraa' }],
    picture: 'image_63.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 19,
    zoneId: 8,
    typeId: null,
    attributeId: null
  },
  {
    number: 64,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Rock Crab' }],
    picture: 'image_64.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 4, value: 3 }],
    foodId: 19,
    zoneId: 8,
    typeId: null,
    attributeId: null
  },
  {
    number: 65,
    name: [{ language: 'fr', name: 'Rhinocéros à lame en chef' }, { language: 'en', name: 'Blade Rhino Chieftain' }],
    picture: 'image_65.png',
    elements: [{ elementId: 2, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 20,
    zoneId: 9,
    typeId: null,
    attributeId: null
  },
  {
    number: 66,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Molten Stegosaurus' }],
    picture: 'image_66.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 21,
    zoneId: 10,
    typeId: null,
    attributeId: null
  },
  {
    number: 67,
    name: [{ language: 'fr', name: 'Dragond\'Éole' }, { language: 'en', name: 'Wind Dragon' }],
    picture: 'image_67.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 21,
    zoneId: 10,
    typeId: null,
    attributeId: null
  },
  {
    number: 68,
    name: [{ language: 'fr', name: 'Vélociraptor polaire' }, { language: 'en', name: 'Arctic Velociraptor' }],
    picture: 'image_68.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 21,
    zoneId: 10,
    typeId: null,
    attributeId: null
  },
  {
    number: 69,
    name: [{ language: 'fr', name: 'Corythosaure de glace' }, { language: 'en', name: 'Ice Corythosaurus' }],
    picture: 'image_69.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 13,
    zoneId: 5,
    typeId: null,
    attributeId: null
  },
  {
    number: 70,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Snowfield Dodo Bird' }],
    picture: 'image_70.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 22,
    zoneId: 11,
    typeId: null,
    attributeId: null
  },
  {
    number: 71,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'White Yak King' }],
    picture: 'image_71.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 20,
    zoneId: 9,
    typeId: null,
    attributeId: null
  },
  {
    number: 72,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Polar Bear Chief' }],
    picture: 'image_72.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 22,
    zoneId: 11,
    typeId: null,
    attributeId: null
  },
  {
    number: 73,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Blade Rhino' }],
    picture: 'image_73.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 22,
    zoneId: 11,
    typeId: null,
    attributeId: null
  },
  {
    number: 74,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Arctic Swellfish' }],
    picture: 'image_74.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 24,
    zoneId: 12,
    typeId: null,
    attributeId: null
  },
  {
    number: 75,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Warg King' }],
    picture: 'image_75.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 23,
    zoneId: 12,
    typeId: null,
    attributeId: null
  },
  {
    number: 76,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Icefield Frilled Lizard' }],
    picture: 'image_76.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 8,
    zoneId: 2,
    typeId: null,
    attributeId: null
  },
  {
    number: 77,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Icefield Frilled Lizard Chiefta' }],
    picture: 'image_77.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 8,
    zoneId: 2,
    typeId: null,
    attributeId: null
  },
  {
    number: 78,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Red Moblin Chieftain' }],
    picture: 'image_78.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 26,
    zoneId: 14,
    typeId: null,
    attributeId: null
  },
  {
    number: 79,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'White Wolf King' }],
    picture: 'image_79.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 26,
    zoneId: 14,
    typeId: null,
    attributeId: null
  },
  {
    number: 80,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Snow Fox' }],
    picture: 'image_80.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 26,
    zoneId: 14,
    typeId: null,
    attributeId: null
  },
  {
    number: 81,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Brown Bear' }],
    picture: 'image_81.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 25,
    zoneId: 13,
    typeId: null,
    attributeId: null
  },
  {
    number: 82,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Dodo Bird' }],
    picture: 'image_82.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 28,
    zoneId: 15,
    typeId: null,
    attributeId: null
  },
  {
    number: 83,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Queen Dragon' }],
    picture: 'image_83.png',
    elements: [{ elementId: 4, value: 10 }, { elementId: null, value: null }],
    foodId: 28,
    zoneId: 15,
    typeId: null,
    attributeId: null
  },
  {
    number: 84,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Polar Bear' }],
    picture: 'image_84.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 28,
    zoneId: 15,
    typeId: null,
    attributeId: null
  },
  {
    number: 85,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Timid Spider' }],
    picture: 'image_85.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 1, value: 3 }],
    foodId: 27,
    zoneId: 15,
    typeId: null,
    attributeId: null
  },
  {
    number: 86,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Mammoth' }],
    picture: 'image_86.png',
    elements: [{ elementId: 3, value: 9 }, { elementId: 4, value: 1 }],
    foodId: 30,
    zoneId: 16,
    typeId: null,
    attributeId: null
  },
  {
    number: 87,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Dimetrodon' }],
    picture: 'image_87.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 4, value: 3 }],
    foodId: 30,
    zoneId: 16,
    typeId: null,
    attributeId: null
  },
  {
    number: 88,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Lightning Dimetrodon' }],
    picture: 'image_88.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 30,
    zoneId: 16,
    typeId: null,
    attributeId: null
  },
  {
    number: 89,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_89.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 90,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Silver Thunder Dragon' }],
    picture: 'image_90.png',
    elements: [{ elementId: 2, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 29,
    zoneId: 16,
    typeId: null,
    attributeId: null
  },
  {
    number: 91,
    name: [{ language: 'fr', name: 'Dragon de Rochenoire' }, { language: 'en', name: 'Blackrock Tailless Dragon' }],
    picture: 'image_91.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 9,
    zoneId: 3,
    typeId: null,
    attributeId: null
  },
  {
    number: 92,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Pallid Light Tailless Dragon' }],
    picture: 'image_92.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 29,
    zoneId: 16,
    typeId: null,
    attributeId: null
  },
  {
    number: 93,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Black Bear' }],
    picture: 'image_93.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 27,
    zoneId: 15,
    typeId: null,
    attributeId: null
  },
  {
    number: 94,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Grey Tiger King' }],
    picture: 'image_94.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 25,
    zoneId: 13,
    typeId: null,
    attributeId: null
  },
  {
    number: 95,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Ankylosaur' }],
    picture: 'image_95.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 24,
    zoneId: 12,
    typeId: null,
    attributeId: null
  },
  {
    number: 96,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Rhino' }],
    picture: 'image_96.png',
    elements: [{ elementId: 4, value: 6 }, { elementId: 3, value: 4 }],
    foodId: 24,
    zoneId: 12,
    typeId: null,
    attributeId: null
  },
  {
    number: 97,
    name: [{ language: 'fr', name: 'Renard de foudre' }, { language: 'en', name: 'Lightning Fox' }],
    picture: 'image_97.png',
    elements: [{ elementId: 2, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 4,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 98,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Fire Tuktuk' }],
    picture: 'image_98.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 31,
    zoneId: 17,
    typeId: null,
    attributeId: null
  },
  {
    number: 99,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Aethia Cristatella' }],
    picture: 'image_99.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 32,
    zoneId: 17,
    typeId: null,
    attributeId: null
  },
  {
    number: 100,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Dinornis' }],
    picture: 'image_100.png',
    elements: [{ elementId: 1, value: 9 }, { elementId: 4, value: 1 }],
    foodId: 32,
    zoneId: 17,
    typeId: null,
    attributeId: null
  },
  {
    number: 101,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Icesea Placodermi' }],
    picture: 'image_101.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 32,
    zoneId: 17,
    typeId: null,
    attributeId: null
  },
  {
    number: 102,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Moon Wind Dragon' }],
    picture: 'image_102.png',
    elements: [{ elementId: 4, value: 9 }, { elementId: 1, value: 1 }],
    foodId: 31,
    zoneId: 17,
    typeId: null,
    attributeId: null
  },
  {
    number: 103,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Sand Fox' }],
    picture: 'image_103.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 33,
    zoneId: 18,
    typeId: null,
    attributeId: null
  },
  {
    number: 104,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Sand Frilled Lizard Chieftain' }],
    picture: 'image_104.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 33,
    zoneId: 18,
    typeId: null,
    attributeId: null
  },
  {
    number: 105,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Sun Frilled Lizard' }],
    picture: 'image_105.png',
    elements: [{ elementId: 1, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 33,
    zoneId: 18,
    typeId: null,
    attributeId: null
  },
  {
    number: 106,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Irish Elk' }],
    picture: 'image_106.png',
    elements: [{ elementId: 3, value: 9 }, { elementId: 2, value: 1 }],
    foodId: 34,
    zoneId: 19,
    typeId: null,
    attributeId: null
  },
  {
    number: 107,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'White Camel' }],
    picture: 'image_107.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 35,
    zoneId: 19,
    typeId: null,
    attributeId: null
  },
  {
    number: 108,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Pelican' }],
    picture: 'image_108.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 31,
    zoneId: 17,
    typeId: null,
    attributeId: null
  },
  {
    number: 109,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Hermit Crab' }],
    picture: 'image_109.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 4, value: 2 }],
    foodId: 34,
    zoneId: 19,
    typeId: null,
    attributeId: null
  },
  {
    number: 110,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Thunder Stegosaurus' }],
    picture: 'image_110.png',
    elements: [{ elementId: 2, value: 9 }, { elementId: 1, value: 1 }],
    foodId: 35,
    zoneId: 19,
    typeId: null,
    attributeId: null
  },
  {
    number: 111,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Yak King' }],
    picture: 'image_111.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 35,
    zoneId: 19,
    typeId: null,
    attributeId: null
  },
  {
    number: 112,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Water Jerboa' }],
    picture: 'image_112.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 34,
    zoneId: 19,
    typeId: null,
    attributeId: null
  },
  {
    number: 113,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Rock Placodermi' }],
    picture: 'image_113.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 4, value: 2 }],
    foodId: 36,
    zoneId: 20,
    typeId: null,
    attributeId: null
  },
  {
    number: 114,
    name: [{ language: 'fr', name: 'Roi à crinière noire' }, { language: 'en', name: 'Moblin Chieftain' }],
    picture: 'image_114.png',
    elements: [{ elementId: 2, value: 2 }, { elementId: 3, value: null }],
    foodId: 6,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 115,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Golden Thunder Dragon' }],
    picture: 'image_115.png',
    elements: [{ elementId: 2, value: 9 }, { elementId: 1, value: 1 }],
    foodId: 36,
    zoneId: 20,
    typeId: null,
    attributeId: null
  },
  {
    number: 116,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_116.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 117,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Triceratops' }],
    picture: 'image_117.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 36,
    zoneId: 20,
    typeId: null,
    attributeId: null
  },
  {
    number: 118,
    name: [{ language: 'fr', name: 'T.Rex de Rochenoire' }, { language: 'en', name: 'Black Rock T. Rex' }],
    picture: 'image_118.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 4, value: 2 }],
    foodId: 8,
    zoneId: 2,
    typeId: null,
    attributeId: null
  },
  {
    number: 119,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Mountain Dragon' }],
    picture: 'image_119.png',
    elements: [{ elementId: 3, value: 6 }, { elementId: 2, value: 4 }],
    foodId: 23,
    zoneId: 12,
    typeId: null,
    attributeId: null
  },
  {
    number: 120,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Giant Mountain Dragon' }],
    picture: 'image_120.png',
    elements: [{ elementId: 3, value: 9 }, { elementId: 2, value: 1 }],
    foodId: 23,
    zoneId: 12,
    typeId: null,
    attributeId: null
  },
  {
    number: 121,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Radobaan' }],
    picture: 'image_121.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 4, value: 2 }],
    foodId: 39,
    zoneId: 22,
    typeId: null,
    attributeId: null
  },
  {
    number: 122,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Typhoon Dragon' }],
    picture: 'image_122.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 40,
    zoneId: 23,
    typeId: null,
    attributeId: null
  },
  {
    number: 123,
    name: [{ language: 'fr', name: 'Dragon-tyran' }, { language: 'en', name: 'Tyrant Dragon' }],
    picture: 'image_123.png',
    elements: [{ elementId: 1, value: 10 }, { elementId: null, value: null }],
    foodId: 16,
    zoneId: 6,
    typeId: null,
    attributeId: null
  },
  {
    number: 124,
    name: [{ language: 'fr', name: 'Panda roux' }, { language: 'en', name: 'Fire Fox' }],
    picture: 'image_124.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 10,
    zoneId: 3,
    typeId: null,
    attributeId: null
  },
  {
    number: 125,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Pangolin Chieftain' }],
    picture: 'image_125.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 16,
    zoneId: 6,
    typeId: null,
    attributeId: null
  },
  {
    number: 126,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Black Rapator' }],
    picture: 'image_126.png',
    elements: [{ elementId: 3, value: 7 }, { elementId: 2, value: 3 }],
    foodId: 40,
    zoneId: 23,
    typeId: null,
    attributeId: null
  },
  {
    number: 127,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Silver Hummingbird' }],
    picture: 'image_127.png',
    elements: [{ elementId: 4, value: 7 }, { elementId: 3, value: 3 }],
    foodId: 38,
    zoneId: 21,
    typeId: null,
    attributeId: null
  },
  {
    number: 128,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'White Warg' }],
    picture: 'image_128.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 1, value: 2 }],
    foodId: 41,
    zoneId: 24,
    typeId: null,
    attributeId: null
  },
  {
    number: 129,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Proto-Dragon' }],
    picture: 'image_129.png',
    elements: [{ elementId: 3, value: 10 }, { elementId: null, value: null }],
    foodId: 40,
    zoneId: 23,
    typeId: null,
    attributeId: null
  },
  {
    number: 130,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Ice Liondragon' }],
    picture: 'image_130.png',
    elements: [{ elementId: 4, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 42,
    zoneId: 25,
    typeId: null,
    attributeId: null
  },
  {
    number: 131,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Toot Bird' }],
    picture: 'image_131.png',
    elements: [{ elementId: 3, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 37,
    zoneId: 21,
    typeId: null,
    attributeId: null
  },
  {
    number: 132,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Furious Platypus' }],
    picture: 'image_132.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 2, value: 2 }],
    foodId: 42,
    zoneId: 25,
    typeId: null,
    attributeId: null
  },
  {
    number: 133,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Syngnathus' }],
    picture: 'image_133.png',
    elements: [{ elementId: 4, value: 9 }, { elementId: 3, value: 1 }],
    foodId: 41,
    zoneId: 24,
    typeId: null,
    attributeId: null
  },
  {
    number: 134,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Lightning T. Rex' }],
    picture: 'image_134.png',
    elements: [{ elementId: 2, value: 8 }, { elementId: 3, value: 2 }],
    foodId: 25,
    zoneId: 13,
    typeId: null,
    attributeId: null
  },
  {
    number: 135,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_135.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 136,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_136.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 137,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_137.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 138,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_138.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 139,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_139.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 140,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_140.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 141,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_141.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 142,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_142.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 143,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_143.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 144,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_144.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 145,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Lightning Flying Squirrel' }],
    picture: 'image_145.png',
    elements: [{ elementId: 2, value: 7 }, { elementId: 1, value: 3 }],
    foodId: 41,
    zoneId: 24,
    typeId: null,
    attributeId: null
  },
  {
    number: 146,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_146.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 147,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_147.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 148,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_148.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 149,
    name: [{ language: 'fr', name: 'Ours brun et roux en chef' }, { language: 'en', name: 'Red Brown Bear Chief' }],
    picture: 'image_149.png',
    elements: [{ elementId: 1, value: 8 }, { elementId: 4, value: 2 }],
    foodId: 4,
    zoneId: 1,
    typeId: null,
    attributeId: null
  },
  {
    number: 150,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_150.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 151,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_151.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 152,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_152.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 153,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_153.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 154,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: 'Crimson Wolf King' }],
    picture: 'image_154.png',
    elements: [{ elementId: 1, value: 9 }, { elementId: 2, value: 1 }],
    foodId: 37,
    zoneId: 21,
    typeId: null,
    attributeId: null
  },
  {
    number: 155,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_155.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 156,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_156.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 157,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_157.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 158,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_158.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 159,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_159.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 160,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_160.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 161,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_161.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 162,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_162.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 163,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_163.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 164,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_164.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 165,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_165.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 166,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_166.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 167,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_167.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 168,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_168.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 169,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_169.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 170,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_170.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 171,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_171.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 172,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_172.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 173,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_173.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 174,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_174.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 175,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_175.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 176,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_176.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 177,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_177.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 178,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_178.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 179,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_179.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 180,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_180.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 181,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_181.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 182,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_182.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 183,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_183.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 184,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_184.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
  {
    number: 185,
    name: [{ language: 'fr', name: '' }, { language: 'en', name: '' }],
    picture: 'image_185.png',
    elements: [{ elementId: null, value: null }, { elementId: null, value: null }],
    foodId: null,
    zoneId: null,
    typeId: null,
    attributeId: null
  },
];
