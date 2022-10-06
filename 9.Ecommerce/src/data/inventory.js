import { v4 as uuidv4 } from "uuid";

 const inventory = [
  {
    title: "Mug Coding Fuel",
    price: 14.99,
    img: "codingfuel",
    id: uuidv4(),
  },
  {
    title: "Mug CSS",
    price: 12.99,
    img: "cssmug",
    id: uuidv4(),
  },
  {
    title: "Mug JS",
    price: 13.99,
    img: "jsmug",
    id: uuidv4(),
  },
  {
    title: "Mug React",
    price: 14.99,
    img: "reactmug",
    id: uuidv4(),
  },
  {
    title: "Mug Love JS",
    price: 13.99,
    img: "lovejs",
    id: uuidv4(),
  },
  {
    title: "Mug Summer JS",
    price: 11.99,
    img: "jssummer",
    id: uuidv4(),
  },
];

export default inventory;