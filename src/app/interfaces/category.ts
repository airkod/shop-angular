import { File } from "@interfaces/file";
import { Icon } from "@directives/ms/types/icon";
import { CategoryPreview } from "@interfaces/category-preview";
import { Meta } from "@interfaces/meta";
import { Filter } from "@interfaces/filter";

export interface Category {
  url?: string,
  title: string,
  image?: File,
  icon: Icon,
  meta?: Meta,
  categories?: CategoryPreview[],
  parent?: CategoryPreview,
  filters?: Filter[]
}
