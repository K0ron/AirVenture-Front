export class Activity {
  id?: string;
  name?: string;
  description?: string;
  duration?: string;
  location?: string;
  country?: string;
  categoryId?: string;
  price!: number;
  photo: string[] = [];
}
