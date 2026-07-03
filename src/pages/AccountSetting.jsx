 
const AccountSetting = () => {
    return(
        <div className="main-container settings-container" >
            <div className="heading">Account Settings</div>
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
                    <hr className='dashedline'/>
                </div>
            </div>
        </div>
    )
}

export default AccountSetting;