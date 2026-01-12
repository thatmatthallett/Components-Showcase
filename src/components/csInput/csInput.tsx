interface Props {
  label?: string
}

const csInput = ({...props}: Props) => {
  return (
    <div className="m-3 grid gap-1 justify-start text-left">
      {props.label && <label>{props.label}</label>}
      <input className="px-4 py-2 rounded border" />
    </div>
  )
}

export default csInput