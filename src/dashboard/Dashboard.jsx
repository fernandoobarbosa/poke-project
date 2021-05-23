import React, { useState } from 'react'
import NavBar from '../common/NavBar'
import Copyright from '../common/Copyright'
import pokemonApi from '../services/pokemonApi'
import MovesTable from './MovesTable'
import Album from '../album/Album'
import pokemonImages from '../services/pokemonImages'
export default function DashBoard () {
  const [showContent, setShowContent] = useState(false)
  const [moves, setMoves] = useState([])
  const [images, setImages] = useState({})
  // const [generation, setGeneration] = useState(0)

  function sortByKey (array, key) {
    return array.sort(function (a, b) {
      const x = a[key]; const y = b[key]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
  }

  function pokemonMovesRequest (pokemonName) {
    let jsonMoves = []

    pokemonApi.get('/' + pokemonName)
      .then(function (response) {
        // localStorage.setItem('pokemon', pokemonName)
        // console.log(response)
        // handle success
        function iterate (item, index) {
          // console.log(item)
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
        // console.log(jsonMoves)
        setMoves(jsonMoves)
        setShowContent(true)
      })
      .catch(function (error) {
        errorHandler()
        // handle error
        console.log(error)
      })
  }
  function pokemonAlbumRequest (pokemonName) {
    pokemonImages.get('/' + pokemonName)
      .then(function (response) {
        console.log(response.data.sprites)
        setImages(response.data.sprites)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function pokemonRequest (pokemonName) {
    pokemonAlbumRequest(pokemonName)
    pokemonMovesRequest(pokemonName)
  }

  function errorHandler () {
    setShowContent(false)
  }

  return (
    <div> <NavBar pokemonRequest={pokemonRequest} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <Album images={images} showAlbum={showContent} />
      <MovesTable moves={moves} showTable={showContent} />
      <Copyright />
    </div>
  )
}
