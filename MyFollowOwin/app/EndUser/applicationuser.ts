﻿export class ApplicationUser {
    public Id:string;
    public UserName: string;
    public Owner: Owner;
}
export class Owner {
    CompanyName: string;
    FoundedYear: number;
    Description: string;
    WebsiteUrl: string;
}