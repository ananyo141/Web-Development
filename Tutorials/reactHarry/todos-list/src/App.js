import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
  }

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market",
    },
    {
      sno: 2,
      title: "Do laundry",
      desc: "You need to do the laundry",
    },
    {
      sno: 3,
      title: "Eat the fruits",
      desc: "You need to finish the fruits on the table",
    },
  ];
  return (
    <>
    <Header title="TodosList" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </>
  );
}

export default App;
