export class Activity {
  id: number;
  continent: string;
  country: string;
  name: string;
  price: number;
  description: string;
  photo: string[];

  constructor(
    id: number,
    continent: string,
    country: string,
    name: string,
    price: number,
    description: string,
    photo: string[]
  ) {
    this.description = description;
    this.id = id;
    this.continent = continent;
    this.country = country;
    this.name = name;
    this.price = price;
    this.photo = photo;
  }
}
