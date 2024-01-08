export default function Square() {
  const alertNumber = (event) => {
    console.log(event.target)
  }


  const tiles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
  ]

  const buttons = tiles.map(tile => {
    return (
      <button className="square" key={tile.id} onClick={alertNumber}>{tile.id}</button>
    )
  })

  return (
    <>
      <div class="squares-wrapper">
        {buttons}
      </div>
    </>
  )
}
