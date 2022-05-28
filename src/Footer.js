import React from 'react'
import "./Footer.css"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import {Slider} from '@mui/material'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid } from '@mui/material';
import {useDataLayerValue} from './DataLayer'
import SpotifyPlayer from 'react-spotify-web-playback'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
          <img className='footer_albumlogo'  src='https://www.khabarnonstop.com/wp-content/uploads/2021/05/Hina-Khan-and-Shaheer-Sheikhs-romantic-song-Rains-Ban-Jaana-beautiful-poster-1.jpg' alt=''/>
          <div className='footer_song'>
              <h4>Yeah</h4>
              <p>Usher</p>
          </div>
      </div>
      <div className='footer_center'>
    <ShuffleOutlinedIcon className='footer_green'/>
    <SkipPreviousOutlinedIcon className='footer_icon'/>
    <PlayCircleOutlinedIcon fontSize='large' className='footer_icon'/>
    <SkipNextOutlinedIcon className='footer_icon'/>
    <RepeatOutlinedIcon className='footer_green'/>
      </div>
      <div className='footer_right'>
      <Grid container spacing={2}>
       <Grid item>
        <PlaylistPlayIcon/>
       </Grid>
       <Grid item>
         <VolumeDownIcon/>
         </Grid>
       <Grid item xs>
          <Slider/>
        </Grid>    
        </Grid>
      </div>
    </div>
  )
}


export default Footer
