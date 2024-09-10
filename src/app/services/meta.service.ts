import { Meta } from "@interfaces/meta";

export class MetaService {
  public static set(meta: Meta) {
    this.setTitle(meta.title);

    this.setMetaName("description", meta.description);
    this.setMetaName("keywords", meta.keywords);

    this.setMetaProperty("og:title", meta.ogTitle);
    this.setMetaProperty("og:description", meta.ogDescription);

    this.setMetaProperty("twitter:title", meta.ogTitle);
    this.setMetaProperty("twitter:description", meta.ogDescription);

    if (meta.ogImage) {
      this.setMetaProperty("og:image", meta.ogImage.src);
      this.setMetaProperty("twitter:image", meta.ogImage.src);
    }

    this.setMetaProperty("og:type", "website");
    this.setMetaProperty("og:locale", "en_GB");
    this.setMetaProperty("og:url", location.protocol + "//" + location.host + location.pathname);

    this.updateCanonical();
  }

  public static setTitle(title: string) {
    let titleNode = document.querySelector("title");
    if (!titleNode) {
      titleNode = document.createElement("title");
      document.querySelector("head").appendChild(titleNode);
    }
    titleNode.innerText = title;
  }

  public static setMetaName(name: string, content: string) {
    let metaNode = document.querySelector("meta[name=\"" + name + "\"]");
    if (!metaNode) {
      metaNode = document.createElement("meta");
      document.querySelector("head").appendChild(metaNode);
      metaNode.setAttribute("name", name);
    }
    metaNode.setAttribute("content", content);
  }

  public static setMetaProperty(property: string, content: string) {
    let metaNode = document.querySelector("meta[property=\"" + property + "\"]");
    if (!metaNode) {
      metaNode = document.createElement("meta");
      document.querySelector("head").appendChild(metaNode);
      metaNode.setAttribute("property", property);
    }
    metaNode.setAttribute("content", content);
  }

  public static updateCanonical(): void {
    let canonical = document.querySelector("link[rel=\"canonical\"]");
    if (!canonical) {
      canonical = document.createElement("link");
      document.querySelector("head").appendChild(canonical);
      canonical.setAttribute("rel", "canonical");
    }
    canonical.setAttribute("href", location.protocol + "//" + location.host + location.pathname);
  }
}
