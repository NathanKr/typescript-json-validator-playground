<h2>Motivation</h2>
Create an validator function from the typescript interface. here typescript-json-validator is used. 

<h2>Installation</h2>

```
npm i
```

<h2>Usage</h2>
<ul>
<li>
Create the interface. notice that we have a nested interface and annotation !!!!

```ts
interface IPet {
  name: string;
  /**
   * @minimum 1
   * @maximum 100
   */
  legs: number;
}

export default interface IPerson {
  name: string;
  age?: number;
  pets: IPet[];
}

```

</li>

<li>
Create a validator : IPerson.validator.ts from interface IPerson in file : IPerson.ts. 


```
npx typescript-json-validator ./src/interfaces/IPerson.ts IPerson
```

Following is the resulting schema

```json
export const IPersonSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  // "defaultProperties": [
  // ],
  "definitions": {
    "IPet": {
      // "defaultProperties": [
      // ],
      "properties": {
        "legs": {
          "maximum": 100,
          "minimum": 1,
          "type": "number"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "legs",
        "name"
      ],
      "type": "object"
    }
  },
  "properties": {
    "age": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "pets": {
      "items": {
        "$ref": "#/definitions/IPet"
      },
      "type": "array"
    }
  },
  "required": [
    "name",
    "pets"
  ],
  "type": "object"
};
```

</li>
<li>
Invoke the ajv validator

```ts
const ajv = new Ajv();
const valid = ajv.validate(IPersonSchema, person)
if(!valid){
    console.log(ajv.errors)
}

```

</li>

<li>
Run and open the browser 

```
npm run dev
```

</li>

</ul>
<h2>Limitation</h2>
The resulting IPerson.validator.ts has many errors. However, the schema is almost perfect just remove defaultProperties


<h2>Open issues</h2>
What is the following  ? typescript ? ajv ?

```
/**
   * @minimum 1
   * @maximum 100
*/
```