import { Button } from "@interfaces/button";
import { File } from "@interfaces/file";

export interface ShowcaseSlider {
  title: string;
  content: string;
  button: Button;
  foregroundImage: File;
  backgroundImage: File;
}
