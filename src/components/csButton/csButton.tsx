interface Props {
  onClick?: () => void
}

const CsButton = ({...props}: Props) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" onClick={props.onClick}>Increment</button>
  )
}

export default CsButton