 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AccountSetting = () => {
    return(
        <div className="main-container settings-container" >
            <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
                <Toolbar sx={{ minHeight: 68, px: 2 }}>
                    <Typography sx={{ fontFamily: 'Rubik', fontWeight: 400, fontSize: 20, color: '#1D2226' }}>
                        Account Settings
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="profile">
                <div className="imgandname">
                    <div className="avatar-wrapper">
                        <img src="/img.png" alt="avatar" />
                        <button className='camera-btn'>
                            <img src="/camera.svg" alt="camera" className="camera-icon" />
                        </button>
                    </div>

                    <div className="username">
                        <div className="name-row">
                            <div className="name">Marry Doe</div>
                        </div>
                        <div className="email">Marry@Gmail.com</div>
                    </div>
                </div>

                <div className="bio">
                    <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
            </div>
                    <hr className='dashedline'/>
        </div>
    )
}

export default AccountSetting;