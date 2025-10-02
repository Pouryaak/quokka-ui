// File: src/components/table/Table.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FinalTable, Table } from "./Table";
import type { TableProps } from "./Table";

type Row = {
  id: number;
  name: string;
  role: string;
  location: string;
  salary: number;
};

const makeRows = (n = 8): Row[] =>
  Array.from({ length: n }, (_, i) => ({
    id: i + 1,
    name: ["Ana", "Bao", "Chris", "Diya", "Ezra", "Finn", "Gita", "Hiro"][
      i % 8
    ],
    role: ["Engineer", "Designer", "PM", "QA"][i % 4],
    location: ["Lisbon", "Sydney", "NYC", "Berlin"][i % 4],
    salary: 65000 + (i % 8) * 4500,
  }));

type TableStoryArgs = TableProps & {
  striped?: boolean;
  sticky?: boolean;
  containerHeight?: number;
};

const meta: Meta<TableStoryArgs> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Token-driven table with optional frame, zebra striping, and sticky header. Use controls to toggle visuals.",
      },
    },
  },
  argTypes: {
    frame: {
      control: "inline-radio",
      options: ["plain", "framed"],
      description: "Outer wrapper frame style",
    },
  },
} satisfies Meta<TableStoryArgs>;
export default meta;

type Story = StoryObj<TableStoryArgs>;

export const Default: Story = {
  args: {
    frame: "plain",
    striped: false,
    containerHeight: 320,
    className: undefined,
    containerClassName: undefined,
  },
  render: (args) => {
    const rows = makeRows(24);

    const containerStyle = args.containerHeight
      ? { maxHeight: `${args.containerHeight}px` }
      : undefined;

    return (
      <div style={containerStyle}>
        <FinalTable
          frame={args.frame}
          containerClassName="w-[820px] max-w-full"
        >
          <FinalTable.Header sticky={args.sticky}>
            <FinalTable.Row>
              <FinalTable.Head>ID</FinalTable.Head>
              <FinalTable.Head>Name</FinalTable.Head>
              <FinalTable.Head>Role</FinalTable.Head>
              <FinalTable.Head>Location</FinalTable.Head>
              <FinalTable.Head>Salary</FinalTable.Head>
            </FinalTable.Row>
          </FinalTable.Header>

          <FinalTable.Body striped={args.striped}>
            {rows.map((r) => (
              <FinalTable.Row key={r.id}>
                <FinalTable.Cell>{r.id}</FinalTable.Cell>
                <FinalTable.Cell>{r.name}</FinalTable.Cell>
                <FinalTable.Cell>{r.role}</FinalTable.Cell>
                <FinalTable.Cell>{r.location}</FinalTable.Cell>
                <FinalTable.Cell>${r.salary.toLocaleString()}</FinalTable.Cell>
              </FinalTable.Row>
            ))}
          </FinalTable.Body>
        </FinalTable>
      </div>
    );
  },
};

export const Striped: Story = {
  render: () => {
    const rows = makeRows(10);
    return (
      <FinalTable frame="framed" className="w-[720px] max-w-full">
        <FinalTable.Header>
          <FinalTable.Row>
            <FinalTable.Head>Name</FinalTable.Head>
            <FinalTable.Head>Role</FinalTable.Head>
            <FinalTable.Head>Location</FinalTable.Head>
            <FinalTable.Head>Salary</FinalTable.Head>
          </FinalTable.Row>
        </FinalTable.Header>
        <FinalTable.Body striped>
          {rows.map((r) => (
            <FinalTable.Row key={r.id}>
              <FinalTable.Cell>{r.name}</FinalTable.Cell>
              <FinalTable.Cell>{r.role}</FinalTable.Cell>
              <FinalTable.Cell>{r.location}</FinalTable.Cell>
              <FinalTable.Cell numeric>
                ${r.salary.toLocaleString()}
              </FinalTable.Cell>
            </FinalTable.Row>
          ))}
        </FinalTable.Body>
      </FinalTable>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "`striped` adds zebra background on even rows in the body.",
      },
    },
  },
};

export const StickyHeaderWithScroll: Story = {
  render: () => {
    const rows = makeRows(30);
    return (
      <FinalTable frame="framed" containerClassName="max-h-80 w-[720px]">
        <FinalTable.Header sticky>
          <FinalTable.Row>
            <FinalTable.Head>ID</FinalTable.Head>
            <FinalTable.Head>Name</FinalTable.Head>
            <FinalTable.Head>Role</FinalTable.Head>
            <FinalTable.Head>Location</FinalTable.Head>
            <FinalTable.Head>Salary</FinalTable.Head>
          </FinalTable.Row>
        </FinalTable.Header>
        <FinalTable.Body striped>
          {rows.map((r) => (
            <FinalTable.Row key={r.id}>
              <FinalTable.Cell numeric>{r.id}</FinalTable.Cell>
              <FinalTable.Cell>{r.name}</FinalTable.Cell>
              <FinalTable.Cell>{r.role}</FinalTable.Cell>
              <FinalTable.Cell>{r.location}</FinalTable.Cell>
              <FinalTable.Cell numeric>
                ${r.salary.toLocaleString()}
              </FinalTable.Cell>
            </FinalTable.Row>
          ))}
        </FinalTable.Body>
        <FinalTable.Caption>
          Sticky header inside a max-height container
        </FinalTable.Caption>
      </FinalTable>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Header stays visible while scrolling tall content (inside the `overflow-auto` wrapper).",
      },
    },
  },
};

export const DensityComparison: Story = {
  render: () => {
    const rows = makeRows(5);
    return (
      <div className="flex w-[920px] max-w-full flex-col gap-8">
        {/* Compact */}
        <div>
          <div className="mb-2 text-sm text-text-muted">Compact</div>
          <FinalTable>
            <FinalTable.Header>
              <FinalTable.Row density="compact">
                <FinalTable.Head density="compact">Name</FinalTable.Head>
                <FinalTable.Head density="compact">Role</FinalTable.Head>
                <FinalTable.Head density="compact">Location</FinalTable.Head>
                <FinalTable.Head density="compact">Salary</FinalTable.Head>
              </FinalTable.Row>
            </FinalTable.Header>
            <FinalTable.Body>
              {rows.map((r) => (
                <FinalTable.Row key={r.id} density="compact">
                  <FinalTable.Cell density="compact">{r.name}</FinalTable.Cell>
                  <FinalTable.Cell density="compact">{r.role}</FinalTable.Cell>
                  <FinalTable.Cell density="compact">
                    {r.location}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="compact" numeric>
                    ${r.salary.toLocaleString()}
                  </FinalTable.Cell>
                </FinalTable.Row>
              ))}
            </FinalTable.Body>
          </FinalTable>
        </div>

        {/* Default */}
        <div>
          <div className="mb-2 text-sm text-text-muted">Default</div>
          <FinalTable>
            <FinalTable.Header>
              <FinalTable.Row>
                <FinalTable.Head>Name</FinalTable.Head>
                <FinalTable.Head>Role</FinalTable.Head>
                <FinalTable.Head>Location</FinalTable.Head>
                <FinalTable.Head>Salary</FinalTable.Head>
              </FinalTable.Row>
            </FinalTable.Header>
            <FinalTable.Body>
              {rows.map((r) => (
                <FinalTable.Row key={r.id}>
                  <FinalTable.Cell>{r.name}</FinalTable.Cell>
                  <FinalTable.Cell>{r.role}</FinalTable.Cell>
                  <FinalTable.Cell>{r.location}</FinalTable.Cell>
                  <FinalTable.Cell numeric>
                    ${r.salary.toLocaleString()}
                  </FinalTable.Cell>
                </FinalTable.Row>
              ))}
            </FinalTable.Body>
          </FinalTable>
        </div>

        <div>
          <div className="mb-2 text-sm text-text-muted">Comfortable</div>
          <FinalTable>
            <FinalTable.Header>
              <FinalTable.Row density="comfortable">
                <FinalTable.Head density="comfortable">Name</FinalTable.Head>
                <FinalTable.Head density="comfortable">Role</FinalTable.Head>
                <FinalTable.Head density="comfortable">
                  Location
                </FinalTable.Head>
                <FinalTable.Head density="comfortable">Salary</FinalTable.Head>
              </FinalTable.Row>
            </FinalTable.Header>
            <FinalTable.Body>
              {rows.map((r) => (
                <FinalTable.Row key={r.id} density="comfortable">
                  <FinalTable.Cell density="comfortable">
                    {r.name}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="comfortable">
                    {r.role}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="comfortable">
                    {r.location}
                  </FinalTable.Cell>
                  <FinalTable.Cell density="comfortable" numeric>
                    ${r.salary.toLocaleString()}
                  </FinalTable.Cell>
                </FinalTable.Row>
              ))}
            </FinalTable.Body>
          </FinalTable>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Compare `compact`, `default`, and `comfortable` paddings.",
      },
    },
  },
};

export const NumericAlignment: Story = {
  render: () => (
    <FinalTable className="w-[560px] max-w-full">
      <FinalTable.Header>
        <FinalTable.Row>
          <FinalTable.Head>Metric</FinalTable.Head>
          <FinalTable.Head>Q3</FinalTable.Head>
          <FinalTable.Head>Q4</FinalTable.Head>
          <FinalTable.Head>Δ</FinalTable.Head>
        </FinalTable.Row>
      </FinalTable.Header>
      <FinalTable.Body>
        <FinalTable.Row>
          <FinalTable.Cell>Sessions</FinalTable.Cell>
          <FinalTable.Cell numeric>12,842</FinalTable.Cell>
          <FinalTable.Cell numeric>14,103</FinalTable.Cell>
          <FinalTable.Cell numeric>+1,261</FinalTable.Cell>
        </FinalTable.Row>
        <FinalTable.Row>
          <FinalTable.Cell>Bounce %</FinalTable.Cell>
          <FinalTable.Cell numeric>34.2%</FinalTable.Cell>
          <FinalTable.Cell numeric>31.8%</FinalTable.Cell>
          <FinalTable.Cell numeric>-2.4%</FinalTable.Cell>
        </FinalTable.Row>
        <FinalTable.Row>
          <FinalTable.Cell>Avg. time</FinalTable.Cell>
          <FinalTable.Cell numeric>3:12</FinalTable.Cell>
          <FinalTable.Cell numeric>3:25</FinalTable.Cell>
          <FinalTable.Cell numeric>+0:13</FinalTable.Cell>
        </FinalTable.Row>
      </FinalTable.Body>
      <FinalTable.Caption>
        Numeric columns use `text-right tabular-nums`.
      </FinalTable.Caption>
    </FinalTable>
  ),
};
