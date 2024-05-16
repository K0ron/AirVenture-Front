export class UserDatedActivity {
    
    constructor(
        public id: number,
        public continent: string,
        public name: string,
        public image: string,
        public price: number,
        public location: string,
        public description: string,
        public date : Date
    ) {}
}