import { Component } from "react";
import "./listCoffee.css";
import Coffee from "../coffee/coffee";
import Special from "../special/special";

class ListCoffee extends Component {
  render() {
    switch (this.props.category) {
      case "capuccino":
        return (
          <>
            <div className="list-coffee">
              <Coffee
                img="capuccino-1"
                name="Capuccino"
                desc="With Oak Milk"
                price="4.20"
              />
              <Coffee
                img="capuccino-2"
                name="Capuccino"
                desc="With Chocolate"
                price="3.50"
              />
            </div>

            <Special
              img="capuccino-1"
              name="5 Coffee beans you must try!"
              desc="The world's finest arabica coffee beans are listed by country in no particular order since the biggest factor is personal preference."
            />

            <div className="list-coffee">
              <Coffee
                img="capuccino-3"
                name="Capuccino"
                desc="With Vanilla"
                price="3.80"
              />
              <Coffee
                img="capuccino-4"
                name="Capuccino"
                desc="No Sugar"
                price="3.50"
              />
            </div>
          </>
        );
      case "espresso":
        return (
          <>
            <div className="list-coffee">
              <Coffee
                img="capuccino-1"
                name="Espresso"
                desc="With Oak Milk"
                price="4.20"
              />
              <Coffee
                img="capuccino-2"
                name="Espresso"
                desc="With Chocolate"
                price="3.50"
              />
            </div>

            <Special
              img="capuccino-1"
              name="5 Coffee beans you must try!"
              desc="The world's finest arabica coffee beans are listed by country in no particular order since the biggest factor is personal preference."
            />

            <div className="list-coffee">
              <Coffee
                img="capuccino-3"
                name="Espresso"
                desc="With Vanilla"
                price="3.80"
              />
              <Coffee
                img="capuccino-4"
                name="Espresso"
                desc="No Sugar"
                price="3.50"
              />
            </div>
          </>
        );
      default:
        return <div></div>;
    }
  }
}

export default ListCoffee;
