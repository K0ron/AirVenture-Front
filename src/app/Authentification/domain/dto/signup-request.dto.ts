export class SignupRequestDto {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public roles: any,
    )
    {}
}
