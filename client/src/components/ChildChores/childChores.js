import React, { useContext } from 'react';
import ChoresContext from '../../utils/ChoresContext'
import MaterialTable from 'material-table';


export default function MaterialTableDemo() {
  // const [state, setState] = React.useState({
  //   columns: [
  //     { title: 'Name', field: 'name' },
  //     { title: 'Surname', field: 'surname' },
  //     {
  //       title: 'Birth Place',
  //       field: 'birthCity',
  //       lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  //     },
  //   ],
  //   data: [
  //     { name: 'Mehmet', surname: 'Baran', birthCity: 63 },
  //     {
  //       name: 'Zerya Betül',
  //       surname: 'Baran',
  //       birthYear: 2017,
  //       birthCity: 34,
  //     },
  //   ],
  // });

  const {addChore, choreName, chorePoints} = useContext(ChoresContext)


  return (
    <>
    <input ref={choreName}></input>
    <input ref={chorePoints}></input>
    <button onClick = {addChore}>HELLLLLOOOOOO</button>
    </>
  )
}