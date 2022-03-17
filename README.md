<h2>Motivation</h2>
Create an validator function from the typescript interface. here typescript-json-validator is used. 

<h2>Installation</h2>

```
npm i
```

<h2>Usage</h2>
<ul>
<li>
Create the interface. notice that we have a nested interface

```
interface IPerson {
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

</li>
<li>
Invoke the ajv validator

```
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