import { File } from "@interfaces/file";
import { Icon } from "@directives/ms/types/icon";

export interface CategoryPreview {
  url?: string,
  title: string,
  image?: File,
  icon: Icon,
  categories?: CategoryPreview[],
}
