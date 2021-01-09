const Answares = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(props.data[0]).map((item) => <td>{item}</td>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) =>
          <tr>
            {Object.keys(item).map((elem) => <td>{item[elem]}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Answares;
