export interface PricingPlan {
  id: string;
  name: string;
  description: string;

  price: number;
  currency: string;
  billing: string;

  duration: string;

  popular: boolean;

  features: string[];

  buttonText: string;
}