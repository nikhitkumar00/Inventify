var inputStyle = {
  input: {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
  },
  button: {
    borderRadius: "10px",
    width: "100px",
    height: "30px",
    marginTop: "15px",
    color: "white",
    backgroundColor: "#745A8E",
  },
};

export const Add = () => {
  return (
    <div
      className="AddMainContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "20vw",
        minWidth: "200px",
        maxWidth: "367px",
        height: "250px",
        backgroundColor: "var(--pista)",
        borderRadius: "10px",
        fontSize: "20px",
      }}
    >
      <label
        style={{
          paddingTop: "10px",
        }}
      >
        Serial No.
      </label>
      <input type="text" style={inputStyle.input}></input>
      <label
        style={{
          paddingTop: "10px",
        }}
      >
        Quanity
      </label>
      <input type="text" style={inputStyle.input}></input>
      <button style={inputStyle.button}>Add</button>
    </div>
  );
};

export default Add;
