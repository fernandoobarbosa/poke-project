import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import pokemonApi from '../services/pokemonApi'
import MovesTable from './MovesTable'
export default function DashBoard () {
  const [showTable, setShowTable] = useState(false)
  const [moves, setMoves] = useState([])
  // const [generation, setGeneration] = useState(0)

  function sortByKey (array, key) {
    return array.sort(function (a, b) {
      const x = a[key]; const y = b[key]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
  }
  function pokemonRequest (pokemonName) {
    let jsonMoves = []

    pokemonApi.get('/' + pokemonName)
      .then(function (response) {
        localStorage.setItem('pokemon', pokemonName)
        console.log(response)
        // handle success
        function iterate (item, index) {
          console.log(item)
          const obj = {
            id: index + 1,
            name: item.move.name,
            levelLearned: item.version_group_details[0].level_learned_at,
            learnMethod: item.version_group_details[0].move_learn_method.name
            // versionName: item.version_group_details[generation].version_group.name
          }
          jsonMoves.push(obj)
        }
        // console.log(response.data.moves)

        // preenche o json de moves
        response.data.moves.forEach(iterate)

        // ordena o json por learnMethod
        jsonMoves = sortByKey(jsonMoves, 'learnMethod')

        // ordena o json por nivel
        jsonMoves.sort(function (a, b) {
          return a.levelLearned - b.levelLearned
        }
        )

        console.log(jsonMoves)
        setMoves(jsonMoves)
        setShowTable(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  return (
    <div> <NavBar pokemonRequest={pokemonRequest} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <MovesTable moves={moves} showTable={showTable} />
    </div>
  )
}
