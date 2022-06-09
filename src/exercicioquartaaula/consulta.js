import { Component } from "react";

class Consulta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoas: [],
    };
    this.searchPeople();
  }
  searchPeople = async () => {
    let lista = await fetch("/pessoa").then((resp) => resp.json());
    this.setState({ ["pessoas"]: lista });
  };
  render() {
    const removePerson = (id) => {
      fetch("/pessoa/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        this.searchPeople();
      });
    };
    const editPerson = (id) => {
      window.location = `/edit/${id}`;
    };
    return (
      <div className="col-md-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pessoas.map((pessoa) => (
              <tr key={pessoa.id}>
                <td>{pessoa.nome}</td>
                <td>{pessoa.idade}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removePerson(pessoa.id)}
                  >
                    Deletar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => editPerson(pessoa.id)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Consulta;
