export type Language = 'fr'|'en';
export interface Translate {
  language: Language;
  name: string;
}
export interface Element {
  id: number;
  name: Translate[];
  color: string;
}
export interface Type {
  id: number;
  name: Translate[];
}
export interface Attribute {
  id: number;
  name: Translate[];
}
export interface Food {
  id: number;
  name: Translate[];
  zoneId: number;
}
export interface Zone {
  id: number;
  name: Translate[];
}
export interface BeastElement {
  elementId: number;
  value: number;
}
export interface Beast {
  number: number;
  name: Translate[];
  picture: string;
  elements: BeastElement[];
  foodId: number;
  zoneId: number;
  typeId: number;
  attributeId: number;
  active?: boolean;
  got?: boolean;
}
