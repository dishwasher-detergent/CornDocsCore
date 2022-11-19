// src/components/breadcrumb/breadcrumb.tsx
import Link from "next/link";
import { Home } from "lucide-react";
import React from "react";
var Breadcrumb = ({ data }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `not-prose top-[4.5rem] z-10 order-first mb-6 inline-flex h-4 flex-row items-center space-x-2 rounded-xl bg-white/90 p-4 pl-2 text-sm font-semibold text-slate-500 backdrop-blur-md dark:bg-slate-900/60 dark:text-white md:sticky`
  }, /* @__PURE__ */ React.createElement(Link, {
    href: "/Docs"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "flex flex-row gap-1 hover:text-slate-600 hover:dark:text-slate-200"
  }, /* @__PURE__ */ React.createElement(Home, {
    className: "h-4 w-4"
  }), "Home")), data && data.map((item, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      className: `flex flex-row gap-2 ${index == data.length - 1 && "font-black text-primary-500"}`,
      key: index
    }, /* @__PURE__ */ React.createElement("div", null, "/"), /* @__PURE__ */ React.createElement(Link, {
      href: `/Docs/${data.slice(0, index + 1).join("/")}`
    }, /* @__PURE__ */ React.createElement("a", null, item)));
  }));
};
var breadcrumb_default = Breadcrumb;

// src/components/display/Doc.tsx
import { MDXProvider } from "@mdx-js/react";

// src/components/markdown/code-block/index.tsx
import React4, { useState as useState3, useEffect as useEffect3, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Prism from "prismjs";

// src/components/markdown/code-block/resize.tsx
import React2 from "react";
import { useRef, useState } from "react";
var Responsive = ({ children, size, dark }) => {
  const iframe = useRef(null);
  const [height, setHeight] = useState(150);
  const calcHeight = () => {
    if (iframe.current) {
      let the_height = iframe.current.contentWindow.document.body.scrollHeight;
      if (height - 2 == the_height)
        return;
      setHeight(the_height + 10);
    }
  };
  return /* @__PURE__ */ React2.createElement("div", {
    style: { height },
    className: "dotty mb-2 flex max-h-[48rem] items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-slate-100 transition-all dark:border-slate-700 dark:bg-slate-900"
  }, /* @__PURE__ */ React2.createElement("div", {
    style: { maxWidth: size + "px" },
    className: "h-full w-full overflow-y-auto overflow-x-hidden bg-white transition-all dark:border-slate-700 dark:bg-slate-900"
  }, /* @__PURE__ */ React2.createElement("iframe", {
    onLoad: () => calcHeight(),
    ref: iframe,
    "aria-label": "component preview",
    title: "component preview",
    srcDoc: `<html class="flex w-full h-full ${dark && "dark"}">
                <head>
                    <meta charset="utf-8">
                    <title>Component Preview</title>
                    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"><\/script>
                    <script>
                        tailwind.config = {
                          darkMode: "class"
                        }

                        function removeLink() {
                            var links = document.querySelectorAll("a");
                            for (var index = 0; index < links.length; index++) {
                                links[index].removeAttribute("href");
                            }
                        }
                    <\/script>
                    <style>
                        * {
                          font-family: 'Nunito', sans-serif;
                        }

                        a {
                          cursor: pointer;
                        }
                    </style>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link
                      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap"
                      rel="stylesheet"
                    />                
                  </head>
                <body
                    onLoad="removeLink();"
                    style="height: min-content;"
                    class="w-full min-h-full dark:bg-slate-900 bg-white"
                >
                    <main class="flex flex-row flex-wrap gap-2 p-4 items-center justify-center">
                        ${children}
                    </main>
                </body>
            </html>`,
    className: "h-full w-full border-0"
  })));
};
var resize_default = Responsive;

// src/components/markdown/code-block/index.tsx
import {
  TerminalSquare,
  Laptop,
  Smartphone,
  Sun,
  Moon,
  Clipboard,
  ClipboardCheck,
  Image,
  Tablet
} from "lucide-react";

// src/context/DarkModeContext.tsx
import React3, { createContext, useEffect as useEffect2, useState as useState2 } from "react";
var DarkmodeContext = createContext();

// src/components/markdown/code-block/index.tsx
var desktop = 1500;
var tablet = 768;
var mobile = 425;
var CodeBlock = ({ children }) => {
  const { darkmode } = useContext(DarkmodeContext);
  const [isCopied, setIsCopied] = useState3(false);
  const [code, setCode] = useState3(true);
  const [dark, setDark] = useState3(darkmode);
  const [size, setSize] = useState3(1500);
  const [language, setLanguage] = useState3(children.props.className);
  const [preview, setPreview] = useState3(false);
  useEffect3(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [language]);
  useEffect3(() => {
    if (children.props.className.includes("preview")) {
      setPreview(true);
      setCode(false);
      setLanguage(children.props.className.replace("-preview", ""));
    }
  }, []);
  useEffect3(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1e3);
    }
  }, [isCopied]);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, preview && /* @__PURE__ */ React4.createElement("nav", {
    className: "relative flex h-12 w-full flex-row items-center gap-2"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "flex h-full w-full flex-row items-center gap-2"
  }, /* @__PURE__ */ React4.createElement("button", {
    onClick: () => setSize(mobile),
    className: `rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800 ${size == mobile && "bg-slate-200 dark:bg-slate-800"}`
  }, /* @__PURE__ */ React4.createElement(Smartphone, {
    size: 20
  })), /* @__PURE__ */ React4.createElement("button", {
    onClick: () => setSize(tablet),
    className: `${size == tablet && "bg-slate-200 dark:bg-slate-800"} rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`
  }, /* @__PURE__ */ React4.createElement(Tablet, {
    size: 20
  })), /* @__PURE__ */ React4.createElement("button", {
    onClick: () => setSize(desktop),
    className: `${size == desktop && "bg-slate-200 dark:bg-slate-800"} rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`
  }, /* @__PURE__ */ React4.createElement(Laptop, {
    size: 20
  }))), /* @__PURE__ */ React4.createElement("button", {
    type: "button",
    className: `rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`,
    onClick: () => setDark(!dark)
  }, /* @__PURE__ */ React4.createElement("span", {
    className: "sr-only"
  }, "Navigation"), dark ? /* @__PURE__ */ React4.createElement(Sun, {
    size: 20
  }) : /* @__PURE__ */ React4.createElement(Moon, {
    size: 20
  })), /* @__PURE__ */ React4.createElement("button", {
    className: `rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`,
    onClick: () => setCode(!code)
  }, !code ? /* @__PURE__ */ React4.createElement(TerminalSquare, {
    size: 20
  }) : /* @__PURE__ */ React4.createElement(Image, {
    size: 20
  }))), /* @__PURE__ */ React4.createElement("div", {
    style: { display: code ? "" : "none" }
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "not-prose relative"
  }, /* @__PURE__ */ React4.createElement("pre", {
    className: `${language} h-full max-h-[48rem] w-full overflow-auto rounded-xl`
  }, /* @__PURE__ */ React4.createElement("code", {
    className: `${language}`
  }, children)), /* @__PURE__ */ React4.createElement(CopyToClipboard, {
    text: children.props.children,
    onCopy: () => setIsCopied(true)
  }, /* @__PURE__ */ React4.createElement("button", {
    className: "absolute top-2 right-2 rounded-xl bg-slate-600/50 p-1.5 text-slate-50 hover:bg-slate-600"
  }, isCopied ? /* @__PURE__ */ React4.createElement(ClipboardCheck, {
    size: 20,
    className: "text-emerald-300"
  }) : /* @__PURE__ */ React4.createElement(Clipboard, {
    size: 20
  }), " ")))), preview && /* @__PURE__ */ React4.createElement("div", {
    className: "not-prose",
    style: { display: code ? "none" : "" }
  }, /* @__PURE__ */ React4.createElement(resize_default, {
    size,
    dark
  }, children.props.children)));
};
var code_block_default = CodeBlock;

// src/components/markdown/heading/index.tsx
import React5 from "react";
var H2 = ({ children }) => {
  return /* @__PURE__ */ React5.createElement("h2", {
    className: `group relative flex items-center`
  }, /* @__PURE__ */ React5.createElement("a", {
    href: `#${children == null ? void 0 : children.toString().replace(/\s+/g, "-").toLowerCase()}`,
    id: `${children == null ? void 0 : children.toString().replace(/\s+/g, "-").toLowerCase()}`,
    className: `absolute -left-8 grid place-content-center rounded-xl border border-slate-300 px-1.5 py-0 text-base font-bold no-underline opacity-0 transition-all group-hover:opacity-100 dark:border-slate-700`
  }, "#"), children);
};
var H3 = ({ children }) => {
  return /* @__PURE__ */ React5.createElement("h3", {
    className: `group relative flex items-center`
  }, /* @__PURE__ */ React5.createElement("a", {
    href: `#${children == null ? void 0 : children.toString().replace(/\s+/g, "-").toLowerCase()}`,
    id: `${children == null ? void 0 : children.toString().replace(/\s+/g, "-").toLowerCase()}`,
    className: `absolute -left-8 grid place-content-center rounded-xl border border-slate-300 px-1.5 py-0 text-base font-bold no-underline opacity-0 transition-all group-hover:opacity-100 dark:border-slate-700`
  }, "#"), children);
};
var H4 = ({ children }) => {
  return /* @__PURE__ */ React5.createElement("h4", {
    className: `group relative flex items-center`
  }, /* @__PURE__ */ React5.createElement("a", {
    href: `#${children == null ? void 0 : children.toString().replace(/\s+/g, "-").toLowerCase()}`,
    id: `${children == null ? void 0 : children.toString().replace(/\s+/g, "-").toLowerCase()}`,
    className: `absolute -left-8 grid place-content-center rounded-xl border border-slate-300 px-1.5 py-0 text-base font-bold no-underline opacity-0 transition-all group-hover:opacity-100 dark:border-slate-700`
  }, "#"), children);
};

// src/components/display/Doc.tsx
import { useRouter } from "next/router";

// src/components/layout/docs/article/navigation.tsx
var ArticleNavigation = ({ data }) => {
  return null;
};
var navigation_default = ArticleNavigation;

// src/components/layout/docs/article/sidebar.tsx
import { Disclosure } from "@headlessui/react";
import { ChevronRight } from "lucide-react";
import React6 from "react";

// src/hooks/useWindowDimensions.tsx
import { useState as useState4, useEffect as useEffect4 } from "react";
function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : 0;
    const height = hasWindow ? window.innerHeight : 0;
    return {
      width,
      height
    };
  }
  const [windowDimensions, setWindowDimensions] = useState4(
    getWindowDimensions()
  );
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }
  useEffect4(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);
  return windowDimensions;
}

// src/components/layout/docs/article/sidebar.tsx
var ArticleSidebar = ({ data, children }) => {
  const { height, width } = useWindowDimensions();
  return width > 1280 ? /* @__PURE__ */ React6.createElement("aside", {
    className: "col-span-12 space-y-8 lg:col-span-3 xl:col-start-10"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "space-y-8 lg:sticky lg:top-[4.5rem] lg:mb-16"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "hidden lg:block"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "space-y-8 py-8 lg:py-0"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "px-8"
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "w-full rounded-xl pb-2 font-bold text-primary-500"
  }, "On this page"), /* @__PURE__ */ React6.createElement("nav", {
    className: "dark:text-white lg:text-sm lg:leading-6"
  }, /* @__PURE__ */ React6.createElement("ul", {
    className: "space-y-1"
  }, data.map((item, index) => {
    var _a;
    if (item.level > 3)
      return;
    return /* @__PURE__ */ React6.createElement("li", {
      key: index
    }, /* @__PURE__ */ React6.createElement("a", {
      href: `#${(_a = item.text) == null ? void 0 : _a.toString().trim().replace(/\s+/g, "-").toLowerCase()}`,
      className: `jusify-between flex w-full flex-none flex-row items-center gap-2 hover:text-primary-500 ${item.level == 2 ? "font-semibold" : `pl-4`}`
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "w-full truncate"
    }, item.text)));
  }))), children))))) : /* @__PURE__ */ React6.createElement(Disclosure, {
    as: "div",
    className: "mb-4 overflow-hidden rounded-xl border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
  }, ({ open }) => /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Disclosure.Button, {
    className: `flex w-full flex-row items-center border-slate-300 px-4 py-2 text-left text-sm font-bold dark:border-slate-700 ${open && "border-b"}`
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "flex-1"
  }, "On This Page"), /* @__PURE__ */ React6.createElement(ChevronRight, {
    size: 16,
    className: `flex-shrink-0 ${open ? "rotate-90 transform transition-all" : ""}`
  })), /* @__PURE__ */ React6.createElement(Disclosure.Panel, {
    as: "nav",
    className: "relative bg-white px-4 pt-2 pb-4 text-base dark:bg-slate-900"
  }, /* @__PURE__ */ React6.createElement("ul", {
    className: "relative z-10 space-y-2 pb-2"
  }, data.map((item, index) => {
    var _a;
    if (item.level > 3)
      return;
    return /* @__PURE__ */ React6.createElement("li", {
      key: index
    }, /* @__PURE__ */ React6.createElement("a", {
      href: `#${(_a = item.text) == null ? void 0 : _a.toString().trim().replace(/\s+/g, "-").toLowerCase()}`,
      className: `jusify-between flex w-full flex-none flex-row items-center gap-2 hover:text-primary-500 ${item.level == 2 ? "pt-1.5 font-bold" : `pl-4`}`
    }, /* @__PURE__ */ React6.createElement("span", {
      className: "w-full truncate"
    }, item.text)));
  })), children)));
};
var sidebar_default = ArticleSidebar;

// src/components/layout/docs/article/footer.tsx
import React7 from "react";
var ArticleFooter = ({ children }) => {
  return /* @__PURE__ */ React7.createElement("footer", {
    className: "\r\n      grid grid-cols-12 items-center gap-4 border-t bg-white p-6\r\n      dark:border-slate-800 dark:bg-slate-900 dark:text-white\r\n      "
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "col-span-12"
  }, children));
};
var footer_default = ArticleFooter;

// src/context/ConfigContext.tsx
import React8, { createContext as createContext2, useState as useState5 } from "react";
var ConfigContext = createContext2();

// src/components/display/Doc.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import React9, { useContext as useContext2 } from "react";
var components = {
  h2: H2,
  h3: H3,
  h4: H4,
  pre: code_block_default
};
var variants = {
  hidden: { opacity: 1 },
  enter: { opacity: 1 },
  exit: { opacity: 1 }
};
var DisplayDoc = ({ data }) => {
  const { custom } = data;
  const { corndocsConfig } = useContext2(ConfigContext);
  const router = useRouter();
  return /* @__PURE__ */ React9.createElement(AnimatePresence, null, /* @__PURE__ */ React9.createElement(motion.div, {
    variants,
    initial: "hidden",
    animate: "enter",
    exit: "exit",
    transition: { duration: 0.75, type: "spring" },
    className: "pl-2"
  }, /* @__PURE__ */ React9.createElement("main", null, /* @__PURE__ */ React9.createElement("div", {
    className: "container mx-auto py-6"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "grid grid-cols-12 gap-4"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "col-span-12"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "flex grid-cols-12 flex-col-reverse xl:grid xl:gap-8"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "col-span-12 xl:col-span-9"
  }, /* @__PURE__ */ React9.createElement(breadcrumb_default, {
    data: router.query.slug
  }), /* @__PURE__ */ React9.createElement("article", {
    className: "prose prose-slate w-full max-w-none dark:prose-invert"
  }, /* @__PURE__ */ React9.createElement(MDXProvider, {
    components
  })), /* @__PURE__ */ React9.createElement(navigation_default, null)), custom.headings.length > 0 && /* @__PURE__ */ React9.createElement(sidebar_default, {
    data: custom.headings
  }, corndocsConfig.project.github ? /* @__PURE__ */ React9.createElement("div", {
    className: "mt-4 border-t border-slate-300 pt-4 dark:border-slate-700 dark:text-white"
  }, /* @__PURE__ */ React9.createElement("a", {
    className: "flex items-center gap-2 text-xs font-bold",
    target: "_blank",
    rel: "noreferrer",
    href: `${corndocsConfig.project.github.repo}/edit/${corndocsConfig.project.github.usesMain ? "main" : "master"}/_posts/${custom.path}.mdx`
  }, /* @__PURE__ */ React9.createElement(Github, {
    size: 12
  }), /* @__PURE__ */ React9.createElement("span", null, "Edit on GitHub"))) : null))))), /* @__PURE__ */ React9.createElement(footer_default, null, corndocsConfig.project.github ? /* @__PURE__ */ React9.createElement("a", {
    className: "flex items-center gap-2 text-sm font-bold",
    target: "_blank",
    rel: "noreferrer",
    href: `${corndocsConfig.project.github.repo}/edit/${corndocsConfig.project.github.usesMain ? "main" : "master"}/_posts/${custom.path}.mdx`
  }, /* @__PURE__ */ React9.createElement(Github, {
    size: 16
  }), /* @__PURE__ */ React9.createElement("span", null, "Edit on GitHub")) : null))));
};
var Doc_default = DisplayDoc;

// src/components/preview/Preview.tsx
import Image2 from "next/image";
import React11, { useState as useState6 } from "react";

// src/components/preview/Layout.tsx
import { motion as motion2 } from "framer-motion";
import Link2 from "next/link";
import React10 from "react";
var mainImage = {
  initial: { height: "75%" },
  hover: {
    height: "100%"
  }
};
var mainTextContainer = {
  initial: {
    y: 0,
    x: 0
  },
  hover: {
    y: -16,
    x: 8
  }
};
var mainText = {
  initial: {
    fontSize: "1rem",
    lineHeight: "1.5rem"
  },
  hover: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem"
  }
};
var subText = {
  initial: {
    fontSize: ".75rem",
    lineHeight: "1rem"
  },
  hover: {
    fontSize: ".85rem",
    lineHeight: "1.25rem"
  }
};
var Layout = ({ children, path, title, description }) => {
  return /* @__PURE__ */ React10.createElement(Link2, {
    href: `/Docs/${path}`,
    passHref: true
  }, /* @__PURE__ */ React10.createElement(motion2.div, {
    initial: "initial",
    whileHover: "hover",
    animate: "initial",
    className: "relative h-60 w-full cursor-pointer overflow-hidden rounded-xl p-2 transition-all hover:bg-primary-200/20 hover:ring hover:ring-primary-300 dark:hover:bg-primary-500/10 hover:dark:ring-primary-500/30"
  }, /* @__PURE__ */ React10.createElement(motion2.div, {
    variants: mainImage,
    className: "relative h-1/2 w-full overflow-hidden rounded-xl border border-slate-300 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
  }, children), /* @__PURE__ */ React10.createElement(motion2.div, {
    variants: mainTextContainer,
    className: "absolute bottom-0 rounded-xl bg-white/90 px-4 py-2 backdrop-blur-md dark:bg-slate-900/90"
  }, /* @__PURE__ */ React10.createElement(motion2.h3, {
    variants: mainText,
    className: "truncate text-base font-bold text-slate-900 dark:text-white"
  }, title), /* @__PURE__ */ React10.createElement(motion2.p, {
    variants: subText,
    className: "text-xs text-slate-700 line-clamp-3 dark:text-slate-50"
  }, description))));
};
var Layout_default = Layout;

// src/components/preview/Preview.tsx
var customLoader = ({ src }) => {
  return src;
};
function Preview(props) {
  const { title, description, imageUrl, path } = props;
  const [fallbackImage, setFallbackImage] = useState6(false);
  return /* @__PURE__ */ React11.createElement(Layout_default, {
    title,
    description,
    path
  }, imageUrl ? /* @__PURE__ */ React11.createElement(Image2, {
    loader: customLoader,
    objectFit: "cover",
    objectPosition: "center",
    layout: "fill",
    src: `${imageUrl}`,
    alt: "This is the preview image of the component",
    onError: () => {
      setFallbackImage(true);
    }
  }) : /* @__PURE__ */ React11.createElement("div", {
    className: "flex h-full w-full flex-col justify-center p-6"
  }, /* @__PURE__ */ React11.createElement("p", {
    className: "whitespace-nowrap text-4xl font-black text-slate-400 dark:text-slate-500"
  }, title), /* @__PURE__ */ React11.createElement("p", {
    className: "whitespace-nowrap text-2xl font-bold text-slate-400 dark:text-slate-500"
  }, description)));
}
var Preview_default = Preview;

// src/components/preview/PreviewFolder.tsx
import Image3 from "next/image";
import React12, { useState as useState7 } from "react";
var customLoader2 = ({ src }) => {
  return src;
};
function PreviewFolder(props) {
  const { title, slug, count, path, imageUrl, displayIcons = true } = props;
  const [fallbackImage, setFallbackImage] = useState7(false);
  return /* @__PURE__ */ React12.createElement(Layout_default, {
    title,
    description: `${count} Sub-Item${count > 1 ? "s" : ""}`,
    path
  }, /* @__PURE__ */ React12.createElement(React12.Fragment, null, imageUrl && /* @__PURE__ */ React12.createElement(Image3, {
    loader: customLoader2,
    objectFit: "cover",
    objectPosition: "center",
    layout: "fill",
    src: `${imageUrl}`,
    alt: `This is a folder of ${count} components`,
    onError: () => {
      setFallbackImage(true);
    }
  }), displayIcons && /* @__PURE__ */ React12.createElement("div", {
    className: "absolute grid w-full grid-cols-4 gap-1 overflow-hidden p-2"
  }, [...Array(count)].map((item, index) => /* @__PURE__ */ React12.createElement("div", {
    key: index,
    className: "h-16 w-full rounded-xl bg-slate-300/80 backdrop-blur-md dark:bg-slate-600/80 md:h-10"
  })))));
}
var PreviewFolder_default = PreviewFolder;

// src/components/display/Children.tsx
import { useRouter as useRouter2 } from "next/router";
import { motion as motion3, AnimatePresence as AnimatePresence2 } from "framer-motion";
import React13 from "react";
var variants2 = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};
var DisplayChildren = ({ data, breadcrumb = true }) => {
  const router = useRouter2();
  return /* @__PURE__ */ React13.createElement(AnimatePresence2, null, /* @__PURE__ */ React13.createElement(motion3.div, {
    variants: variants2,
    initial: "hidden",
    animate: "enter",
    exit: "exit",
    transition: { duration: 0.75, type: "spring" },
    className: "h-full w-full py-6"
  }, breadcrumb && /* @__PURE__ */ React13.createElement(breadcrumb_default, {
    data: router.query.slug
  }), /* @__PURE__ */ React13.createElement("section", {
    className: "grid h-full w-full grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3"
  }, data.children.sort(
    (a, b) => a.custom.data.position - b.custom.data.position
  ).map(
    (item) => item.type != "directory" ? /* @__PURE__ */ React13.createElement(Preview_default, {
      path: item.custom.path,
      key: item.custom.slug,
      slug: item.custom.slug,
      title: item.custom.data.title,
      description: item.custom.data.description,
      imageUrl: item.custom.data.banner,
      date: item.custom.data.date
    }) : /* @__PURE__ */ React13.createElement(PreviewFolder_default, {
      key: item.name,
      slug: item.name,
      path: item.custom.path,
      title: item.custom.data.title,
      imageUrl: item.custom.data.banner,
      count: item.children.length
    })
  ))));
};
var Children_default = DisplayChildren;

// src/components/layout/Layout.tsx
import React26, { useContext as useContext11 } from "react";

// src/context/SidebarContext.tsx
import React14, { createContext as createContext3, useState as useState8 } from "react";
var SidebarContext = createContext3();

// src/components/layout/nav/index.tsx
import React18, { useContext as useContext6 } from "react";

// src/components/layout/nav/Logo.tsx
import Link3 from "next/link";
import Image4 from "next/image";
import React15, { useContext as useContext3 } from "react";
var customLoader3 = ({ src }) => {
  return src;
};
var Logo = () => {
  var _a, _b;
  const { corndocsConfig } = useContext3(ConfigContext);
  const { logo } = corndocsConfig.project;
  return /* @__PURE__ */ React15.createElement(Link3, {
    href: "/"
  }, /* @__PURE__ */ React15.createElement("a", {
    className: "flex h-full cursor-pointer items-center justify-start gap-2 text-xl font-black"
  }, logo && /* @__PURE__ */ React15.createElement("span", {
    className: "logo relative h-10 overflow-hidden"
  }, /* @__PURE__ */ React15.createElement(Image4, {
    loader: customLoader3,
    objectFit: "contain",
    objectPosition: "center",
    src: logo.src,
    alt: logo.alt,
    width: ((_a = logo == null ? void 0 : logo.size) == null ? void 0 : _a[0]) ? logo.size[0] : 80,
    height: ((_b = logo == null ? void 0 : logo.size) == null ? void 0 : _b[1]) ? logo.size[1] : 40
  })), /* @__PURE__ */ React15.createElement("span", {
    className: "hidden md:inline-block"
  }, corndocsConfig.project.name)));
};
var Logo_default = Logo;

// src/components/layout/nav/DarkToggle.tsx
import { Sun as Sun2, Moon as Moon2 } from "lucide-react";
import React16 from "react";
import { useContext as useContext4 } from "react";
var DarkToggle = () => {
  const { darkmode, toggleDarkmode } = useContext4(DarkmodeContext);
  const { corndocsConfig } = useContext4(ConfigContext);
  if (!corndocsConfig.darkMode)
    return null;
  return /* @__PURE__ */ React16.createElement("button", {
    className: `rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`,
    onClick: () => toggleDarkmode()
  }, /* @__PURE__ */ React16.createElement("span", {
    className: "sr-only"
  }, "Navigation"), darkmode ? /* @__PURE__ */ React16.createElement(Sun2, {
    size: 20
  }) : /* @__PURE__ */ React16.createElement(Moon2, {
    size: 20
  }));
};
var DarkToggle_default = DarkToggle;

// src/components/layout/nav/SidebarToggle.tsx
import { X, Menu } from "lucide-react";
import React17 from "react";
import { useContext as useContext5 } from "react";
var SidebarToggle = () => {
  const { sidebar, toggleSidebar } = useContext5(SidebarContext);
  return /* @__PURE__ */ React17.createElement("button", {
    type: "button",
    className: "flex items-center justify-center rounded-xl p-2 hover:bg-primary-200/20 dark:hover:bg-primary-500/10",
    onClick: () => toggleSidebar()
  }, /* @__PURE__ */ React17.createElement("span", {
    className: "sr-only"
  }, "Navigation"), sidebar ? /* @__PURE__ */ React17.createElement(X, {
    className: "h-5 w-5"
  }) : /* @__PURE__ */ React17.createElement(Menu, {
    className: "h-5 w-5"
  }));
};
var SidebarToggle_default = SidebarToggle;

// src/components/layout/nav/index.tsx
import Link4 from "next/link";
import { Github as Github2 } from "lucide-react";
function Nav() {
  const { corndocsConfig } = useContext6(ConfigContext);
  return /* @__PURE__ */ React18.createElement("header", {
    className: "sticky top-0 z-40 h-16 w-full flex-none border-b border-slate-300 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-white lg:z-50"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "mx-auto h-full w-full max-w-[90rem]"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "mx-4 h-full lg:mx-0 lg:border-0 lg:px-8"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "relative flex h-full items-center"
  }, /* @__PURE__ */ React18.createElement("span", {
    className: "mr-3 w-24 flex-none overflow-hidden md:w-auto"
  }, /* @__PURE__ */ React18.createElement("span", {
    className: "sr-only"
  }, corndocsConfig.project.name), /* @__PURE__ */ React18.createElement(Logo_default, null)), /* @__PURE__ */ React18.createElement("div", {
    className: "relative ml-auto hidden items-center lg:flex"
  }, /* @__PURE__ */ React18.createElement("nav", {
    className: "text-sm font-semibold leading-6"
  }, /* @__PURE__ */ React18.createElement("ul", {
    className: "flex h-full items-center space-x-4"
  }, /* @__PURE__ */ React18.createElement("li", null, /* @__PURE__ */ React18.createElement(Link4, {
    href: "/Docs/"
  }, /* @__PURE__ */ React18.createElement("a", {
    className: "block rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800"
  }, "Docs"))))), /* @__PURE__ */ React18.createElement("div", {
    className: "ml-4 flex items-center space-x-2 border-l border-slate-300 pl-4 dark:border-slate-800"
  }, corndocsConfig.project.github && /* @__PURE__ */ React18.createElement("a", {
    className: `block rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`,
    href: corndocsConfig.project.github.repo,
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React18.createElement(Github2, {
    size: 20
  })), /* @__PURE__ */ React18.createElement(DarkToggle_default, null))), /* @__PURE__ */ React18.createElement("div", {
    className: "flex w-full justify-end lg:hidden"
  }, corndocsConfig.project.github && /* @__PURE__ */ React18.createElement("a", {
    className: `block rounded-xl p-2 hover:bg-slate-200 hover:dark:bg-slate-800`,
    href: corndocsConfig.project.github.repo,
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React18.createElement(Github2, {
    size: 20
  })), /* @__PURE__ */ React18.createElement(DarkToggle_default, null), /* @__PURE__ */ React18.createElement(SidebarToggle_default, null))))));
}
var nav_default = Nav;

// src/components/layout/sidebar/index.tsx
import React25, { useEffect as useEffect6, useState as useState11, useContext as useContext10 } from "react";

// src/components/layout/sidebar/Button.tsx
import { Disclosure as Disclosure2 } from "@headlessui/react";
import { ChevronRight as ChevronRight2 } from "lucide-react";
import { useContext as useContext7 } from "react";
import { useRouter as useRouter3 } from "next/router";
import React19 from "react";
var Button = ({ data, children }) => {
  const { sidebar, toggleSidebar } = useContext7(SidebarContext);
  const { height, width } = useWindowDimensions();
  const router = useRouter3();
  const Route = (data2) => {
    if (data2) {
      if (width < 1024)
        toggleSidebar(false);
      router.push(`/Docs/${data2}`);
    }
  };
  return !data.children ? /* @__PURE__ */ React19.createElement("li", null, /* @__PURE__ */ React19.createElement("a", {
    onClick: () => Route(data.custom.path),
    className: "flex cursor-pointer flex-row flex-nowrap items-center gap-2 truncate rounded-xl px-3 py-1.5 font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
  }, children)) : /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(Disclosure2, null, ({ open }) => /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(Disclosure2.Button, {
    as: "li",
    className: `flex cursor-pointer flex-row flex-nowrap items-center gap-2 truncate rounded-xl px-3 py-1.5 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 ${open && "bg-slate-100 dark:bg-slate-800"}`
  }, /* @__PURE__ */ React19.createElement("span", {
    className: "flex w-full flex-row items-center gap-2 truncate"
  }, children), /* @__PURE__ */ React19.createElement(ChevronRight2, {
    className: `h-4 w-4 transition-all ${open && "rotate-90"}`
  })), /* @__PURE__ */ React19.createElement(Disclosure2.Panel, {
    as: "ul",
    className: "ml-4 mt-1 flex flex-col gap-1"
  }, data.children.sort(
    (a, b) => a.custom.data.position - b.custom.data.position
  ).map((item, index) => {
    return !item.children ? /* @__PURE__ */ React19.createElement("li", {
      key: index
    }, /* @__PURE__ */ React19.createElement("a", {
      onClick: () => Route(item.custom.path),
      className: "flex cursor-pointer flex-row flex-nowrap items-center justify-start gap-2 truncate rounded-xl px-3 py-1.5 font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
    }, /* @__PURE__ */ React19.createElement("span", null, item.custom.data.title))) : /* @__PURE__ */ React19.createElement(Button, {
      data: item,
      key: index
    }, /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement("span", null, item.name)));
  })))));
};
var Button_default = Button;

// src/components/loading/index.tsx
import React20 from "react";
var Loading = () => {
  return /* @__PURE__ */ React20.createElement("div", {
    className: "flex h-full w-full items-center justify-center"
  }, /* @__PURE__ */ React20.createElement("svg", {
    "aria-hidden": "true",
    className: "h-8 w-8 animate-spin fill-primary-500 text-gray-200 dark:text-gray-600",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React20.createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React20.createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentFill"
  })));
};
var loading_default = Loading;

// src/components/layout/sidebar/index.tsx
import { motion as motion4, AnimatePresence as AnimatePresence3 } from "framer-motion";

// src/components/layout/sidebar/Search/index.tsx
import { Search as Search2 } from "lucide-react";
import React24, { useContext as useContext9 } from "react";
import { Combobox as Combobox3, Dialog } from "@headlessui/react";
import { InstantSearch } from "react-instantsearch-dom";

// src/components/layout/sidebar/Search/Search.tsx
import { Combobox } from "@headlessui/react";
import { Search } from "lucide-react";
import { connectSearchBox } from "react-instantsearch-dom";

// src/context/CommandContext.tsx
import React21, { createContext as createContext4, useEffect as useEffect5, useState as useState9 } from "react";
var CommandContext = createContext4();

// src/components/layout/sidebar/Search/Search.tsx
import { useContext as useContext8 } from "react";
import React22 from "react";
var SearchBox = ({ refine }) => {
  const { command, toggleCommand } = useContext8(CommandContext);
  return /* @__PURE__ */ React22.createElement("div", {
    className: "relative",
    role: "search"
  }, /* @__PURE__ */ React22.createElement(Combobox.Input, {
    className: "peer flex h-12 w-full flex-row items-center gap-2 truncate border-b border-slate-300 pl-10 pr-16 text-left text-base text-slate-900 outline-none placeholder:text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-200",
    id: "algolia_search",
    type: "search",
    placeholder: "Search Docs",
    onChange: (e) => refine(e.currentTarget.value),
    autoComplete: "off"
  }), /* @__PURE__ */ React22.createElement(Search, {
    className: "absolute top-1/2 left-4 -translate-y-1/2 text-slate-500 peer-focus:text-slate-900 dark:text-slate-200 dark:peer-focus:text-slate-50",
    size: 16
  }), /* @__PURE__ */ React22.createElement("button", {
    onClick: () => toggleCommand(),
    className: "absolute top-1/2 right-4 -translate-y-1/2 rounded-xl border border-slate-300 bg-slate-50 px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
  }, /* @__PURE__ */ React22.createElement("kbd", null, "Esc")));
};
var Search_default = connectSearchBox(SearchBox);

// src/components/layout/sidebar/Search/Hits.tsx
import { Combobox as Combobox2 } from "@headlessui/react";
import React23 from "react";
import { connectStateResults, Highlight } from "react-instantsearch-dom";
var Hits = ({ searchState, searchResults }) => {
  if (!searchState.query || searchState.query.length == 0)
    return null;
  return /* @__PURE__ */ React23.createElement(React23.Fragment, null, searchResults.hits.length === 0 && /* @__PURE__ */ React23.createElement("p", {
    className: "flex flex-row items-center justify-between gap-4 rounded-xl px-4 py-2 text-sm text-slate-700 "
  }, "Shoot! We don't seem to have what you're looking for."), searchResults.hits.length > 0 && /* @__PURE__ */ React23.createElement("div", {
    className: "max-h-56 overflow-y-auto md:max-h-[20rem]"
  }, /* @__PURE__ */ React23.createElement(Combobox2.Options, {
    className: "w-full p-4"
  }, searchResults.hits.map((hit) => /* @__PURE__ */ React23.createElement(Combobox2.Option, {
    key: hit.objectID,
    value: `/Docs/${hit.path}`
  }, ({ active, selected }) => /* @__PURE__ */ React23.createElement("div", {
    className: `flex flex-row items-center justify-between gap-4 rounded-xl px-4 py-2 text-sm text-slate-700 ${active && "border-2 border-primary-300"}`
  }, /* @__PURE__ */ React23.createElement("p", {
    className: "flex flex-1 flex-col truncate dark:text-white"
  }, /* @__PURE__ */ React23.createElement("span", {
    className: "truncate break-all font-bold"
  }, /* @__PURE__ */ React23.createElement(Highlight, {
    attribute: "title",
    hit
  })), /* @__PURE__ */ React23.createElement("span", {
    className: "truncate"
  }, /* @__PURE__ */ React23.createElement(Highlight, {
    attribute: "description",
    hit
  }))), active && /* @__PURE__ */ React23.createElement("p", {
    className: "hidden flex-shrink-0 md:inline-block"
  }, /* @__PURE__ */ React23.createElement("kbd", {
    className: "rounded-xl border border-slate-300 bg-slate-50 px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
  }, "Enter"))))))), /* @__PURE__ */ React23.createElement("div", {
    className: "hidden h-10 items-center gap-2 border-t border-slate-300 px-2 dark:border-slate-700 md:flex"
  }, /* @__PURE__ */ React23.createElement("p", {
    className: "text-xs font-semibold text-slate-600 dark:text-white"
  }, "Navigation:"), /* @__PURE__ */ React23.createElement("div", {
    className: "space-x-1"
  }, /* @__PURE__ */ React23.createElement("kbd", {
    className: "rounded-xl border border-slate-300 bg-slate-50 px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
  }, "\u2191"), /* @__PURE__ */ React23.createElement("kbd", {
    className: "rounded-xl border border-slate-300 bg-slate-50 px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
  }, "\u2193"))));
};
var Hits_default = connectStateResults(Hits);

// src/components/layout/sidebar/Search/index.tsx
import { useRouter as useRouter4 } from "next/router";
var searchClient = {};
var SearchButton = () => {
  const router = useRouter4();
  const { darkmode } = useContext9(DarkmodeContext);
  const { command, toggleCommand } = useContext9(CommandContext);
  const { sidebar, toggleSidebar } = useContext9(SidebarContext);
  const { corndocsConfig } = useContext9(ConfigContext);
  const handleChange = (e) => {
    router.push(e);
    toggleCommand();
    toggleSidebar(false);
  };
  if (!corndocsConfig.search)
    return null;
  return /* @__PURE__ */ React24.createElement(React24.Fragment, null, /* @__PURE__ */ React24.createElement("button", {
    onClick: () => toggleCommand(),
    className: "flex h-10 w-full flex-row items-center gap-2 truncate rounded-xl border border-slate-300 pl-4 pr-2 text-left text-sm text-slate-500 outline-none hover:ring-2 hover:ring-primary-300 hover:ring-offset-2 hover:ring-offset-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:ring-offset-slate-800"
  }, /* @__PURE__ */ React24.createElement(Search2, {
    size: 16,
    className: "flex-none"
  }), /* @__PURE__ */ React24.createElement("span", {
    className: "flex-1"
  }, "Search Docs..."), /* @__PURE__ */ React24.createElement("kbd", {
    className: "rounded-xl border border-slate-300 bg-slate-50 px-2 py-1 text-xs dark:border-slate-700 dark:bg-slate-800"
  }, "CTRL + K")), /* @__PURE__ */ React24.createElement(Dialog, {
    open: command,
    onClose: () => toggleCommand(),
    className: `fixed inset-0 z-[9999] p-4 md:pt-40 ${darkmode && "dark"}`
  }, /* @__PURE__ */ React24.createElement(Dialog.Overlay, {
    className: "fixed inset-0 bg-white/90 backdrop-blur-md dark:bg-slate-900/90"
  }), /* @__PURE__ */ React24.createElement(Dialog.Panel, {
    className: "relative mx-auto max-w-xl overflow-hidden rounded-xl border border-slate-300 bg-white ring-2 ring-primary-300 ring-offset-2 ring-offset-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:ring-offset-slate-800"
  }, /* @__PURE__ */ React24.createElement(Combobox3, {
    onChange: (e) => handleChange(e)
  }, /* @__PURE__ */ React24.createElement(InstantSearch, {
    searchClient,
    indexName: corndocsConfig.search.algolia_index
  }, /* @__PURE__ */ React24.createElement(Search_default, null), /* @__PURE__ */ React24.createElement(Hits_default, null))))));
};
var Search_default2 = SearchButton;

// src/components/layout/sidebar/index.tsx
import { useRouter as useRouter5 } from "next/router";
function Sidebar() {
  const router = useRouter5();
  const [data, setData] = useState11([]);
  const [isLoading, setLoading] = useState11(true);
  const { sidebar, toggleSidebar } = useContext10(SidebarContext);
  const { corndocsConfig } = useContext10(ConfigContext);
  const { height, width } = useWindowDimensions();
  useEffect6(() => {
    setLoading(true);
    fetch("/api/posts").then((res) => res.json()).then((data2) => {
      setData(data2);
      setLoading(false);
    });
  }, []);
  useEffect6(() => {
    if (width > 1024) {
      if (router.pathname.includes("Docs")) {
        toggleSidebar(true);
        return;
      }
      toggleSidebar(false);
    }
  }, [width, router.pathname]);
  return /* @__PURE__ */ React25.createElement(AnimatePresence3, null, sidebar && /* @__PURE__ */ React25.createElement(motion4.aside, {
    initial: { left: "-100%" },
    animate: { left: "max(0px,calc(50% - 45rem))" },
    exit: { left: "-100%" },
    transition: { duration: 0.5, type: "spring" },
    className: `fixed inset-0 top-16 right-auto z-20 flex w-full flex-col overflow-y-auto bg-white/90 px-8 pb-10 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-white md:w-[19.5rem]`
  }, /* @__PURE__ */ React25.createElement("nav", {
    id: "nav",
    className: "relative flex-1 space-y-4 py-6 lg:text-sm lg:leading-6"
  }, corndocsConfig.search && corndocsConfig.search.algolia_search_api_key && /* @__PURE__ */ React25.createElement(Search_default2, null), /* @__PURE__ */ React25.createElement("ul", null, !isLoading ? data.sort(
    (a, b) => a.custom.data.position - b.custom.data.position
  ).map((item, index) => /* @__PURE__ */ React25.createElement(Button_default, {
    data: item,
    key: index
  }, item.custom.data.title)) : /* @__PURE__ */ React25.createElement("div", {
    className: "w-full py-6"
  }, /* @__PURE__ */ React25.createElement(loading_default, null)))), /* @__PURE__ */ React25.createElement("div", {
    className: "w-full flex-none text-center text-sm font-bold dark:text-white"
  }, /* @__PURE__ */ React25.createElement("p", null, "Built with \u2764\uFE0F and", " ", /* @__PURE__ */ React25.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://github.com/dishwasher-detergent/CornDocs"
  }, "CornDocs")))));
}
var sidebar_default2 = Sidebar;

// src/components/layout/Layout.tsx
function Layout2({ children }) {
  const { darkmode } = useContext11(DarkmodeContext);
  const { sidebar } = useContext11(SidebarContext);
  return /* @__PURE__ */ React26.createElement("div", {
    className: `${darkmode && "dark"}`
  }, /* @__PURE__ */ React26.createElement("div", {
    className: "relative flex min-h-screen w-full flex-col items-center dark:bg-slate-900"
  }, /* @__PURE__ */ React26.createElement(nav_default, null), /* @__PURE__ */ React26.createElement("div", {
    className: "z-10 w-full max-w-[90rem] flex-1 px-4 sm:px-6 md:px-8"
  }, /* @__PURE__ */ React26.createElement(sidebar_default2, null), /* @__PURE__ */ React26.createElement("main", {
    className: `${sidebar && "lg:pl-[19.5rem]"}`
  }, children)), /* @__PURE__ */ React26.createElement("div", {
    className: "griddy fixed top-16 h-48 w-full opacity-50"
  }, /* @__PURE__ */ React26.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900"
  }))));
}
var Layout_default2 = Layout2;
export {
  breadcrumb_default as Breadcrumb,
  code_block_default as CodeBlock,
  Children_default as DisplayChildren,
  Doc_default as DisplayDoc,
  Layout_default2 as Layout,
  loading_default as Loading,
  Preview_default as Preview,
  PreviewFolder_default as PreviewFolder
};
