import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import {useDataLayerValue} from "./DataLayer";

function Sidebar() {
    const[{playlists},dispatch]=useDataLayerValue()
  return (
    <div className='sidebar'>
     <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='' className='sidebar_logo'/>
     <SidebarOption Icon={HomeOutlinedIcon} tittle="Home"/>
     <SidebarOption Icon={SearchOutlinedIcon} tittle="Search"/>
     <SidebarOption Icon={LibraryMusicOutlinedIcon} tittle="Your Library"/>
    <br/>
    <strong className='sidebar_title'>PLAYLISTS</strong>
    <hr/>
    {playlists?.items?.map(playlist =>(
        <SidebarOption tittle={playlist.name}/>
    ))}

   
    </div>
  )
}

export default Sidebar
