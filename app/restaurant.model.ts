export interface IRestaurant {
      name: string;
      specialty: string;
      price: string;
      address: string;
      id: number;
}

    export class Restaurant implements IRestaurant {
      constructor(public name: string, public specialty: string, public address: string, public price: string, public id: number){}
    }
