import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./MDXComponents";

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-cosma max-w-3xl">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
