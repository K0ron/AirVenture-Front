export class Destination {
  id: number;
  type: string;
  name: string;
  country: string;
  image: string;
  price: number;
  location: string;
  description: string;

  constructor(
    id: number,
    type: string,
    name: string,
    country: string,
    image: string,
    price: number,
    location: string,
    description: string
  ) {
    this.description = description;
    this.id = id;
    this.type = type;
    this.name = name;
    this.country = country;
    this.image = image;
    this.price = price;
    this.location = location;
  }
}
