const [values, setValues] = useState();
const [list, setList] = useState();

const HandleChangeValues = (value) => {
  setValues((prevValue) => ({
    ...prevValue,
    [value.target.name]: value.target.value,
  }));
};

useEffect(() => {
  Axios.get('http://localhost:3001/getCardsCar').then((response) => {
    setList(response.data);
  });
}, []);

const HandleClickButton = () => {
  Axios.post('http://localhost:3001/registerCar', {
    nome: values.name,
    sobrenome: values.sobrenome,
    cidade: values.cidade,
  }).then((response) => {
    console.log(response);
  });
};
