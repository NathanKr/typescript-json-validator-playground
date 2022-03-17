
import IPerson from "./interfaces/IPerson";
import "./style.css";
import Ajv from "ajv";
import { IPersonSchema } from "./interfaces/IPerson.validator";

const ajv = new Ajv();


const app = document.querySelector<HTMLDivElement>("#app")!;

const person: IPerson = {
  name: "Jim",
  pets: [{ name: "dog", legs: 4 }],
};

const valid = ajv.validate(IPersonSchema, person)
if (valid){
  app.innerHTML = `valid`;

} else{
  app.innerHTML = 'not valid , check errors in the console';
  console.log(ajv.errors)
}