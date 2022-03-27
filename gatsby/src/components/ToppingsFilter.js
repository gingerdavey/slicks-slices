import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

function countPizzasInToppings(pizzas) {
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }

      return acc;
    }, {});

  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );

  return sortedToppings;
}

const ToppingsFilter = ({ activeTopping }) => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query AllToppings {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  console.clear();

  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

  return (
    // get a list of toppings
    // get a list of pizzas
    // count how many pizzas in each topping
    // loop toppings  etc
    <div className="flex flex-wrap gap-[1rem] mb-[4rem]">
      <Link
        to="/pizzas"
        className="text-xl leading-0 grid items-center bg-[#efefef] rounded-[2px] p-[5px] gap-[0_1rem] grid-cols-[auto_1fr]"
      >
        <span className="name">All</span>
        <span className="bg-white p-[2px_5px]">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping) => (
        <Link
          to={`/topping/${topping.name}`}
          key={topping.id}
          className={`text-xl leading-0 grid items-center bg-[#efefef] rounded-[2px] p-[5px] gap-[0_1rem] grid-cols-[auto_1fr] ${
            topping.name === activeTopping ? 'bg-[#ffc600]' : 'bg-[#efefef]'
          }`}
        >
          <span className="name">{topping.name}</span>
          <span className="bg-white p-[2px_5px]">{topping.count}</span>
        </Link>
      ))}
    </div>
  );
};
export default ToppingsFilter;
