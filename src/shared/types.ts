export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OusClasees = "ourclasees",
    ContactUs = "contactus"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string,
    description?: string,
    image: string
}