import { useEffect } from "react";

interface UseDocumentMetaOptions {
  title: string;
  description: string;
}

export function useDocumentMeta({ title, description }: UseDocumentMetaOptions) {
  useEffect(() => {
    document.title = title;

    const tags: { selector: string; attr: string; value: string }[] = [
      { selector: 'meta[name="description"]', attr: "content", value: description },
      { selector: 'meta[property="og:title"]', attr: "content", value: title },
      { selector: 'meta[property="og:description"]', attr: "content", value: description },
      { selector: 'meta[name="twitter:title"]', attr: "content", value: title },
      { selector: 'meta[name="twitter:description"]', attr: "content", value: description },
    ];

    for (const { selector, attr, value } of tags) {
      const existing = document.head.querySelector<HTMLMetaElement>(selector);
      if (existing) {
        existing.setAttribute(attr, value);
      } else {
        const meta = document.createElement("meta");
        if (selector.includes("property")) {
          const prop = selector.match(/"([^"]+)"/)?.[1] ?? "";
          meta.setAttribute("property", prop);
        } else {
          meta.name = selector.match(/"([^"]+)"/)?.[1] ?? "";
        }
        meta.content = value;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);
}
