export default function Page() {
  return (
    <main>
      <article>
        <title>Lussare</title>
        <p>
          Lussare is a way to share lunch money among the participants. No
          longer will you have to share the Lunch cost for the dishes you didnt
          eat. This app takes care of who ate what and records it. Then, it uses
          my proprietary &rdquo; advanced machine algorithm &ldquo; to process
          the data, and regurgitates who has to pay how much. you can then
          choose to balance out the finances yourself.
        </p>
        <p>What features are completed?</p>
        <ul>
          {[
            { name: "division", label: "Division", checked: true },
            { name: "balance", label: "Balance calculation", checked: false },
            { name: "suggestion", label: "Name Suggestions", checked: false },
            {
              name: "memory",
              label: "Remember Dishes and Users",
              checked: false,
            },
            { name: "sync", label: "Cloud Sync", checked: false },
            { name: "complete", label: "Is Complete", checked: false },
          ].map(({ name, label, checked }) => {
            return (
              <li key={name}>
                <fieldset className="gap-1">
                  <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    defaultChecked={checked}
                  />
                  <label htmlFor={name}>{label}</label>
                </fieldset>
              </li>
            );
          })}
        </ul>
      </article>
    </main>
  );
}
