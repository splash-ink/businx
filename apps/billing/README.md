# Welcome a board 🍻 

## Shared Utils 
The **Billing** application contains alot of reusable components (utils) listed above:

Name | Selector | State | Type | APIs
--- | --- | --- | --- | ---
**Table** | `businx-table` | Stable | Dynamic | WIP
**PageTitle** | `businx-page-title` | Beta | Mixed | WIP
**ResumeCard** | `businx-resume-card` | Stable | Dumb | WIP

Check the Usage Mode section to more information about the [shared utils](#usage-mode).

### Usage Mode:
#### Dynamic Table
```typescript
// Data Model
export interface Table {
    columns: string []; // Display Columns
    dataset: Object []; // Abstracted dataset to fit the shape at the Columns field
    collection: string; // Collection name on DB
    title: string;
}
```

```html
    <!-- Template -->
    <businx-table [table-config]="<bind-your-config-here>"></businx-table>
```

#### Page Title
You can perform your page title the way you want according with the available options in the component API.

Custom Inputs | Optional | Data Type
--- | --- | ---
[title] | No | String
[target] | Yes | String
[controls] | Yes | Boolean

Examples:
Only required options:
```html
    <businx-page-title [title]="'Dashboard'"></businx-page-title>
```

Include optional options:
```html
    <businx-page-title [title]="'Dashboard'" [target]="'#my-modal" [controls]="true"></businx-page-title>
```

#### Resume Card
```typescript
// Data Model
export interface ResumeCard {
    title: string;
    isCurrency: boolean;
    icon: {
        bg: string,
        class: string
    };
    values: {
        previews: number,
        current: number
    };
}
```

```html
    <!-- Template -->
    <businx-resume-card [card-config]="<bind-your-config-here>"></businx-resume-card>
```
