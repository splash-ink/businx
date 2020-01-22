# Welcome a board 🍻 

## Shared Utils 
The **Billing** application contains alot of reusable components (utils) listed above:

Name | Selector | State | Type 
--- | --- | --- | --- | ---
**Table** | `businx-table` | Stable | Dynamic
**PageTitle** | `businx-page-title` | Beta | Mixed
**ResumeCard** | `businx-resume-card` | Stable | Dumb
**ContactCard** | `businx-contact-card` | Beta | Dumb

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

APIs | Optional | Data Type
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

#### Contact Card
This component expect's an *contact object* by default. You can check the `contacts` shape below or search for `contacts.model.ts` file that contains all the iformation you need to use this component.

```typescript
// Data Model
export interface Contacts {
    id: string | number;
    greet?: string; // required when using <cart-ops>
    name: string;
    company?: string;
    email?: string;
    phone: string | number;
    nif?: string; // required when using <cart-ops>
    coin?: string; // required when using <cart-ops>
}
```

APIs | Optional | Data Type
--- | --- | ---
[data] | No | `Contacts`
[controls] | Yes | Boolean
[expose-cart-ops] | Yes | Boolean
[custom-function] | Yes | Function

Basic usage:
```html
    <!-- Template -->
    <businx-contact-card [data]="<bind-your-data-here>">
    </businx-contact-card>
```
