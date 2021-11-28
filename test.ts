import test from "ava";
import { User } from "./index";
import { Product } from "./index";
/**
 * o import {User, Product} from "./index";
 */

test("Testeo la clase User", (t) => {
  const newUser = new User("Alejandro");
  t.is(newUser.name, "Alejandro");
});

test("Testeo la clase Product y sus métodos", (t) => {
  const newUser = new User("Alejandro");
  const newProduct = new Product("Jabon", 100);
  newUser.addProduct(newProduct);
  t.is(newUser.products[0].name, "Jabon");
  t.is(newUser.products[0].price, 100);
});
