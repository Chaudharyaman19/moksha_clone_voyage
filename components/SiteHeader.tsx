import Navbar from "./layout/navbar/Navbar";
import TopInfoBar from "./layout/topbar/Topbar";

/**
 * Thin pass-through — kept as a single import for the 21 pages that use it, but intentionally
 * does NOT add its own fixed positioning or spacer. TopInfoBar (id="topbar") and Navbar already
 * coordinate their own fixed positioning directly (Navbar's scroll listener moves TopInfoBar via
 * getElementById("topbar") and repositions itself to top-11/top-0 to match) — wrapping them in a
 * second fixed layer here would fight that instead of complementing it, which is exactly what
 * caused the spacing to break.
 */
export default function SiteHeader({
  variant = "seva",
}: {
  variant?: "voyage" | "seva";
}) {
  return (
    <>
      <TopInfoBar />
      <Navbar variant={variant} />
    </>
  );
}
