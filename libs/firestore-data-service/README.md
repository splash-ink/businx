# :fire: ngx-fireservice
This lib provides you a global generic service that can simplify your codebase and solve common challenges faced with Angular Firebase development. To get start, checkout the documentation API bellow:

## Overview
### Data types

```typescript
  type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
  type DocPredicate<T> = string | AngularFirestoreDocument<T>;
```

API | Params | Description
--- | --- | ---
`findAll$` | `ref: CollectionPredicate`, `queryFn?: any` | This **fn** returns an array of all documents from your a specific collection.
`findAllWithIds$` | `ref: CollectionPredicate`, `queryFn?: any` | This **fn** returns an array of all documents with their own id's field.
`findByRef$` | `ref: CollectionPredicate` | This **fn** return a document by their reference.

### Upcoming Featrues
[x] - CRUD Operations with Server Timestamps;

[x] - Upsert (Update or Create) Method;

[x] - Get Collections with Document Ids Included;

[x] - Get a document by reference;

[ ] - Query nested collections;

[x] - Inspect Data Easily;

[x] - Handle the Document Reference type;

[x] - Using The Geopoint Datatype;

[ ] - Batch operations;

[ ] - FirestoreDocRaw Pipe:
- Alternatively, create a pipe for use in the HTML.
- The pipe takes the raw firestore document reference and converts it into an Observable.

### Taks

[ ] - Shift lib out to a separated repo to enable commuty maintence;

[ ] - Publish the lib at NPM;

[ ] - Document the lib;

