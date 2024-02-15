export class Destination {
  type: string;
  name: string;
  country: string;
  image: string;
  price: number;
  location: string;

  constructor(
    type: string,
    name: string,
    country: string,
    image: string,
    price: number,
    location: string
  ) {
    this.type = type;
    this.name = name;
    this.country = country;
    this.image = image;
    this.price = price;
    this.location = location;
  }
}
