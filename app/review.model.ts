  export class Review  {
    public customerName: string;
    public info: string;
    public rating: number;
    public restaurantId: number;
    constructor(customerName: string, info: string, rating: number, restaurantId: number){
      this.customerName = customerName;
      this.info = info;
      this.rating = rating;
      this.restaurantId = restaurantId;
    }
  }
