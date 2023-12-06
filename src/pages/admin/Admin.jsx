import { useOutletContext } from "react-router-dom"
import { Button } from "../../utils";
import { connect } from 'react-redux'
import { auth_logout } from '../../redux/actions/auth-action'
const Admin = (props) => {
  const [profiledata, isloading, error] = useOutletContext()
  const handleLogOut = () => {
    const isuserAgreeToLogout = window.confirm("Are you sure to log out")
    if (isuserAgreeToLogout) {
      props.auth_logout('You logged out')
      console.log('yes');
    }
  }
  return (
    <div>
      {
        profiledata ?
          <p>{profiledata.name}</p>
          :
          <>
            {
              isloading ? <p>Loading...</p> : <p>Something went wrong</p>
            }
          </>
      }
      <Button text={'Log out'} type={'button'} click={handleLogOut} isloading={false} appearence={'danger'} />
    </div>
  )
}

export default connect(null, { auth_logout })(Admin)