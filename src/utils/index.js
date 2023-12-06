import './index.scss'

const Button = ({text, icon, click, isloading, type, appearence}) => {
  return (
    <button className={`btn ${appearence}`} disabled={isloading} type={type} onClick={click}>
        {isloading ? 'Loading...' : <>{icon}{text}</>}
    </button>
  )
}

export {Button}