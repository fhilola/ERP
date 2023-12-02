import './index.scss'

const Button = ({text, icon, click, isloading, type, appearence}) => {
  return (
    <button className='btn' disabled={isloading} type={type} data-appearence={appearence} onClick={click}>
        {isloading ? 'Loading...' : <>{icon}{text}</>}
    </button>
  )
}

export {Button}