

enum Platform { Mobile, IOT, Web }
export class Product {
    Id: string;
    ProductName: string;
    Description: string;
    Type: Platform;
    PlaystoreURL: string;
    AppstoreURL: string;
    HomepageURL: string;
    UserId: string;
    CreatedDate: Date;
    LastModifiedDate: Date;
    // DOB = new Date().toLocaleDateString();
}