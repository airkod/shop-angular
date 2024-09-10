import { Brand } from "@interfaces/brand";
import { Country } from "@interfaces/country";
import { File } from "@interfaces/file";
import { CategoryPreview } from "@interfaces/category-preview";

export interface ProductPreview {
  url: string;
  title: string;
  price: number;
  vendorCode: string;
  barcode: string;
  availability: number;
  brand: Brand;
  country: Country;
  category: CategoryPreview,
  image: File;
  images: File[];
}
