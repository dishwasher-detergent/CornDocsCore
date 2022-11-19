declare const Breadcrumb: ({ data }: any) => JSX.Element;

interface HeadingsProps {
    text: string;
    level: number;
}
interface DocProps$1 {
    data: {
        custom: {
            truePath: string;
            path: string;
            headings: HeadingsProps[];
            slug: string;
            data: {
                description: string;
                title: string;
                banner: string;
            };
        };
    };
}
declare const DisplayDoc: ({ data }: DocProps$1) => JSX.Element;

interface DocProps {
    breadcrumb?: boolean;
    data: {
        slug: string;
        content: any;
        children: any[];
        data: {
            title: string;
            date: string;
            content: string;
            description: string;
            slug: string;
            tags: string[];
            banner: string;
        };
    };
}
declare const DisplayChildren: ({ data, breadcrumb }: DocProps) => JSX.Element;

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}
declare function Layout({ children }: LayoutProps): JSX.Element;

declare const Loading: () => JSX.Element;

interface CodeBlockProps {
    className: string;
    children: any;
}
declare const CodeBlock: ({ children }: CodeBlockProps) => JSX.Element;

interface PreviewProps$1 {
    title: string;
    count: number;
    slug: string;
    path: string;
    imageUrl: string;
    displayIcons?: boolean;
}
declare function PreviewFolder(props: PreviewProps$1): JSX.Element;

interface PreviewProps {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    slug: string;
    path: string;
}
declare function Preview(props: PreviewProps): JSX.Element;

export { Breadcrumb, CodeBlock, DisplayChildren, DisplayDoc, Layout, Loading, Preview, PreviewFolder };
