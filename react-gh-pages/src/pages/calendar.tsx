import React from "react";

const calendar = () => {
  return (
    <div>
      <div>
        <div className="App">
          <div>
            <iframe
              title="calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=Y29ucmFkbHBhcmtlckBnbWFpbC5jb20&amp;src=czdjYm5zbXNiZGc3M24zaTg0YzFhbWQ5YjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJlbGhsZmo2NTk3b2RqdmNnY2s5bGY2bmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dmtnZjRrdGtsbHJiczN1dmw2anJwcThyb2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;color=%230B8043&amp;color=%23B39DDB&amp;color=%23D50000&amp;mode=WEEK"
              width="800"
              height="600"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default calendar;
