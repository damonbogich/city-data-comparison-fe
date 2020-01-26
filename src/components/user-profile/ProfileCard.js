import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { CityContext } from "../../contexts/CityContext"
import ProfileImage from './icons/profileimage.png'
import './profile.scss'



const ProfileCard = ()=> {

    //state for logged in user

    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        city: '',
        state: '',
        userimage: null
    })

    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const {user, setUser} = useContext(CityContext);
    console.log('Current user state',user)

    // Edit state toggle

    const [nameEdit, setNameEdit] = useState({status:'open'})
    const [emailEdit, setEmailEdit] = useState({status:'open'})
    const [locationEdit, setLocationEdit] = useState({status:'closed'})

    const toggleName = () => {
        if (nameEdit.status === 'closed') {
            setNameEdit({...nameEdit, status:'open'}) 
        } else if (nameEdit.status === 'open') {
            setNameEdit({...nameEdit, status:'closed'})
        }
    }

    const toggleEmail = () => {
        if (emailEdit.status === 'closed') {
            setEmailEdit({...emailEdit, status:'open'}) 
        } else if (emailEdit.status === 'open') {
            setEmailEdit({...emailEdit, status:'closed'})
        }
    }

    const toggleLocation = () => {
        if (locationEdit.status === 'closed') {
            setLocationEdit({...locationEdit, status:'open'}) 
        } else if (locationEdit.status === 'open') {
            setLocationEdit({...locationEdit, status:'closed'})
        }
    }
    

    //User information axios call
    useEffect(() => {
        axios
            .get('')
            .then(res => {
                console.log('Response from user call',res)
                setUser(res.data)
            })
            .catch(err => {
                console.error('Unable to get user information', err);
            });
    }, []);

    const handleSubmit =
    useEffect(() => {
        axios
            .put('',userInfo.first_name, userInfo.last_name, userInfo.email, userInfo.city, userInfo.state)
            .then(res => {
                console.log('Response from user call',res)
                setUser(res.data)
            })
            .catch(err => {
                console.error('Unable to get user information', err);
            });
    }, []);

    // const img = () => {
    //     if(user.userimage === null) {
    //         img.attr('src', `${ProfileImage}`)
    //     } else {
    //         img.attr('src', `${userInfo.userimage}`)
    //     }

    return (
        <div className='profile-container'>
            <h1 className='header'>Profile</h1>
            <div className='profile-contents'>
                <div className='avatar-tab'>
                    <img src={userInfo.userimage === null ? `${ProfileImage}` : `${userInfo.userimage}`} />
                    <button className='edit-avatar-btn'>Edit Picture</button>
                </div>
                <div className='name-tab'>
                    <p>Name</p>
                    <h2 className={`user-name ${nameEdit.status}`}>{userInfo.first_name} {userInfo.last_name}</h2>
                    <form className={`edit-name ${nameEdit.status}`}>
                    <input
                        onChange={handleChange}
                        className='edit-first-name'
                        name='first_name'
                        type='first_name'
                        value={userInfo.first_name}
                        placeholder='First Name'
                    />
                    <input
                        onChange={handleChange}
                        className='edit-last-name'
                        name='last_name'
                        type='last_name'
                        value={userInfo.last_name}
                        placeholder='Last Name'
                    />
                    </form>
                    <button className={`edit-name-btn ${nameEdit.status}`} onClick={toggleName, handleSubmit}>Edit Name</button> 
                    <button className={`save-name-btn ${nameEdit.status}`} onClick={toggleName, handleSubmit}>Save</button>
                </div>
                <div className='email-tab'>
                    <p>Email</p>
                    <h2 className={`user-email ${emailEdit.status}`}>{userInfo.email}</h2>
                    <form className={`edit-email ${emailEdit.status}`}>
                    <input
                        onChange={handleChange}
                        className='edit-email'
                        name='email'
                        type='email'
                        value={userInfo.email} 
                        placeholder='Email'
                    />
                    </form>
                    <button className={`edit-email-btn ${emailEdit.status}`} onClick={toggleEmail, handleSubmit}>Edit Email</button> 
                    <button className={`save-email-btn ${emailEdit.status}`} onClick={toggleEmail, handleSubmit}>Save</button>
                </div>
                <div className='city-tab'>
                    <p>City, State of Residence</p>
                    <h2 className={`user-location ${locationEdit.status}`}>{userInfo.city}, {userInfo.state}</h2>
                    <form className={`edit-location ${locationEdit.status}`}>
                    <input
                        onChange={handleChange}
                        className='edit-city'
                        name='city'
                        type='city'
                        placeholder='City'
                        value={userInfo.city}
                    />
                    <input
                        onChange={handleChange}
                        className='edit-state'
                        name='state'
                        type='state'
                        placeholder='State'
                        value={userInfo.state}
                    />
                    </form>
                    <button className={`edit-location-btn ${locationEdit.status}`} onClick={toggleLocation, handleSubmit}>Edit Location</button> 
                    <button className={`save-location-btn ${locationEdit.status}`} onClick={toggleLocation, handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;