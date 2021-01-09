const styles = {
  form_input: {
    width: '80%',
    marginLeft: '15%',
  },
  form_groups: {
    textAlign: 'left',
    width: '80%',
    marginLeft: '10%',
  },
  formRequired: {
    color: 'red',
    marginRight: '10px',
  },
  formButton: {
    marginRight: '10px',
  },
  formButtonRed: {
    marginRight: '10px',
    backgroundColor: 'red',
  },
  component: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  componentItem: {
    flexBasis: '40vh',
    color: 'cadetblue',
  },
  fontStyle: {
    marginTop: '0px',
    fontSize: '4em',
  },
  darkStyle: {
    backgroundColor: 'black',
    width: '80%',
    marginLeft: '10%',
  },
  lightStyle: {
    backgroundColor: 'white',
    width: '80%',
    marginLeft: '10%',
  },
  DraggableFrame: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: '50vh',
    width: '80%',
    marginLeft: '10%',
    backgroundColor: 'cadetblue',
  },
  DraggableItem: {
    position: 'absolute',
    margin: '10px',
    height: '10vh',
    color: 'white',
    padding: '10px',
    borderColor: 'white',
    borderRadius: '2px',
    borderWidth: '2px',
    cursor: 'grab',
  },
  ThemeButton: {
    position: 'fixed',
    height: '5vmin',
    width: '5vmin',
    right: '3vw',
    top: '2vh',
    border: '1px solid',
    color: '#61DBFB',
    zIndex: '1',
    outline: 'none',
  },
};

export default styles;
