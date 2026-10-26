import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Content text with [anchor text](/path) links, so the content files can carry
 * internal links without JSX. Only site-relative paths become links.
 */
const RichText = ({ text }: { text: string }) => {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    if (start > last) parts.push(<Fragment key={`t${last}`}>{text.slice(last, start)}</Fragment>);
    parts.push(
      href.startsWith("/") ? (
        <Link key={`l${start}`} to={href} className="text-primary underline underline-offset-2 hover:no-underline">
          {label}
        </Link>
      ) : (
        <Fragment key={`l${start}`}>{label}</Fragment>
      )
    );
    last = start + whole.length;
  }
  if (last < text.length) parts.push(<Fragment key={`t${last}`}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
};

export default RichText;
