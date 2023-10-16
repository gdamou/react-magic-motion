import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { Toggle } from "./toggle";

export function GridArea(): JSX.Element {
  const [adjustGridAreas, setAdjustGridAreas] = useState(false);

  const gridTemplateAreasString = adjustGridAreas
    ? `"h h h" "s m m" "f f f"`
    : `"h s s" "h s s" "f m m"`;

  return (
    <MagicMotion>
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gridTemplateRows: "1fr 8fr 1fr",
            gridTemplateAreas: gridTemplateAreasString,
            color: "black",
            fontWeight: "bold",
            fontSize: "1.2em",
          }}
        >
          <header
            style={{
              backgroundColor: "#ff5454",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "0.5rem",
              gridArea: "h",
            }}
          >
            <span>Header</span>
          </header>
          <aside
            style={{
              backgroundColor: "#61cc9e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
              gridArea: "s",
            }}
          >
            <span>Sidebar</span>
          </aside>
          <main
            style={{
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
              gridArea: "m",
            }}
          >
            <span>Main</span>
          </main>
          <footer
            style={{
              backgroundColor: "#54a3ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gridArea: "f",
            }}
          >
            <span>Footer</span>
          </footer>
        </div>

        <div
          style={{
            display: "flex",
            margin: "0.75rem 0.75rem 0 0",
            gap: "0.85rem",
          }}
        >
          <Toggle isActive={adjustGridAreas} setIsActive={setAdjustGridAreas} />
          <span>Adjust Grid Areas</span>
        </div>
      </div>
    </MagicMotion>
  );
}
