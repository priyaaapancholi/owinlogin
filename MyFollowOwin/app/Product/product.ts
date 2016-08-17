enum Platform { Mobile, IOT, Web }
export class Product {
    Id: number;
    ProductName: string;
    Description: string;
    Type: Platform;
    PlaystoreURL: string;
    AppstoreURL: string;
    HomepageURL: string;
    //UserId: string;
    //CreatedDate= new Date().toLocaleDateString();
    //LastModifiedDate= new Date().toLocaleDateString();
    // DOB = new Date().toLocaleDateString();
}