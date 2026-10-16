// Client boundary: LocationHub wraps LocationViewer for pages that need the location shell.
import LocationViewer, { type LocationPage } from "./LocationViewer";
import type { ReactNode } from "react";

export default function LocationHub({
  slug,
  header,
  footer,
  pills,
  footerLinks,
}: {
  slug?: string;
  header?: ReactNode;
  footer?: ReactNode;
  pills?: ReactNode;
  footerLinks?: ReactNode;
}) {
  return <LocationViewer slug={slug} header={header} footer={footer} pills={pills} footerLinks={footerLinks} />;
}

export type { LocationPage };
