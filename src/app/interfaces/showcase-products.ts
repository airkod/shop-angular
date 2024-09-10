import { Button } from "@interfaces/button";
import { File } from "@interfaces/file";
import { ProductPreview } from "@interfaces/product-preview";

export interface ShowcaseProducts {
  title: string;
  banner: {
    content: string;
    button: Button;
    image: File;
  };
  products: ProductPreview[];
}
